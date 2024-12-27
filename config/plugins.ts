export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: parseInt(env("SMTP_PORT", "587"), 10),
        secure: env.bool("SMTP_SECURE", false),
        auth: {
          user: env("GMAIL_USER"), // Correct environment variable for Gmail address
          pass: env("GMAIL_APP_PASSWORD"), // Correct environment variable for Gmail app password
        },
      },
      settings: {
        defaultFrom: env("GMAIL_USER"), // Use the Gmail address as the default sender
        defaultReplyTo: env("GMAIL_USER"), // Use the Gmail address as the default reply-to
      },
    },
  },
});
