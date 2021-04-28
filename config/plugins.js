module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.gmail.com"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: env("GMAIL_LOGIN"),
        pass: env("GMAIL_PASSWORD")
      }
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: env("GMAIL_LOGIN"),
      defaultReplyTo: env("GMAIL_LOGIN")
    }
  }
});
