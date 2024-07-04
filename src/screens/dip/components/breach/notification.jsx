// High-level component
import EmailService from "../../../../services/emailService";
const Notification = () => {
  const emailService = new EmailService(); // Direct dependency on a low-level module

  const sendNotifications = () => {
    emailService.sendEmail(
      "user@example.com",
      "Hello, this is a notification!"
    );
  };

  return (
    <div className="mt-5">
      <button onClick={sendNotifications}>Send Notification</button>
      <div className="mt-1">check console</div>
    </div>
  );
};
export default Notification;
