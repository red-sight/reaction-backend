module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.gmail.com"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: "reactiongame.noreply@gmail.com",
        pass: "i5cXenBoV9bLW69oLVY9Lz9Sweq"
      }
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: "reactiongame.noreply@gmail.com",
      defaultReplyTo: "reactiongame.noreply@gmail.com"
    }
  }
});
