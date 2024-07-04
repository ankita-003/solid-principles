import EmailService from "../../services/implementations/emailService";
import Notification from "../../screens/dip/notificationScreen";
const DipNotificationExample = () => {
  return (
    <div className="fixed-width-center">
      <Notification messageService={EmailService} />
    </div>
  );
};

export default DipNotificationExample;
