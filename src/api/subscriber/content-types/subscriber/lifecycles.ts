export default {
  async afterCreate(event: any) {
    const { result } = event;

    // Destructure subscriber details
    const { userEmail } = result;

    try {
      // Send an email notification using Strapi's email plugin
      await strapi.plugins["email"].services.email.send({
        to: "itext@itext.kz", // Admin or recipient email
        from: "itext.agency@gmail.com", // Same as your defaultFrom in plugins.ts
        subject: "Новый подписчик на сайте", // Email subject
        html: `<p>Добавлен новый подписчик:</p><p><strong>Email:</strong> ${userEmail}</p>`,
      });
    } catch (error) {
      strapi.log.error("Failed to send notification email:", error);
    }
  },
};
