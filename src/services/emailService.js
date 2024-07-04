// Low-level module
class EmailService {
  sendEmail(to, message) {
    console.log(`Sending email to ${to}: ${message}`);
  }
}

export default EmailService;
