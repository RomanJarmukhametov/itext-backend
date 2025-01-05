interface UserFile {
  id: string | number;
  documentId?: string;
  name?: string;
  url?: string;
  [key: string]: any;
}

interface Order {
  id: string | number;
  documentId?: string;
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  userMessage?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  publishedAt?: string | Date;
  locale?: string;
  userFiles?: UserFile[]; // Add the userFiles field
  [key: string]: any; // Allow additional fields
}

export default {
  async afterCreate(event: any) {
    const { result } = event;

    // Populate the userFiles field
    const populatedOrder: Order = await strapi.entityService.findOne(
      "api::order.order", // Specify the correct API identifier
      result.id,
      {
        populate: ["userFiles"], // Ensure userFiles are populated
      }
    );

    // Destructure populatedOrder
    const {
      id,
      documentId,
      userName,
      userEmail,
      userPhone,
      sourceLanguage,
      targetLanguage,
      userMessage,
      createdAt,
      userFiles,
    } = populatedOrder;

    // Format the creation date to a readable format
    const formattedDate = new Date(createdAt).toLocaleString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Build file details content
    const userFilesContent =
      Array.isArray(userFiles) && userFiles.length > 0
        ? userFiles
            .map(
              (file) =>
                `<div style="margin-bottom: 10px;">
                    <p><strong>ID файла:</strong> ${file.id}</p>
                    <p><strong>Document ID:</strong> ${file.documentId || "N/A"}</p>
                    <p><strong>URL:</strong> <a href="${strapi.config.server.url}${file.url}" target="_blank" style="color: #007bff; text-decoration: none;">${file.url}</a></p>
                  </div>`
            )
            .join("")
        : "<p>Нет загруженных файлов.</p>";

    // Email content
    const emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #007bff;">Новый заказ с сайта</h2>
          <p><strong>ID заказа:</strong> ${id}</p>
          <p><strong>Document ID:</strong> ${documentId}</p>
          <p><strong>Имя пользователя:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Телефон:</strong> ${userPhone}</p>
          <p><strong>Исходный язык:</strong> ${sourceLanguage}</p>
          <p><strong>Целевой язык:</strong> ${targetLanguage}</p>
          <p><strong>Сообщение пользователя:</strong> ${userMessage || "Нет сообщения"}</p>
          <p><strong>Дата создания:</strong> ${formattedDate}</p>
          <h3>Загруженные файлы:</h3>
          ${userFilesContent}
        </div>
      `;

    try {
      // Send the email
      await strapi.plugins["email"].services.email.send({
        to: "itext@itext.kz", // Admin email
        from: "itext.agency@gmail.com", // Sender email
        subject: "Новый заказ с сайта", // Email subject
        html: emailContent, // HTML content
      });

      strapi.log.info("Email sent successfully for order ID:", id);
    } catch (error) {
      strapi.log.error("Failed to send notification email:", error);
    }
  },
};
