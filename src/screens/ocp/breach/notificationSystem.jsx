"use client";
import { sendNotification } from "../utilities/breach/sendNotification";

const NotificationSystem = () => {
  const user = {
    email: "ankita@mettasocial.com",
    phone: "9898989898",
    deviceId: "device003",
  };
  const message = "Hello, you have a new notification!";

  return (
    <>
      <div className="mt-5"> Notifications sent!</div>
      <div className="mt-2">
        <div>{sendNotification(user, message, "email")}</div>
      </div>
      <div className="mt-2">
        <div>{sendNotification(user, message, "sms")}</div>
      </div>
      <div className="mt-2">
        <div>{sendNotification(user, message, "push")}</div>
      </div>
    </>
  );
};

export default NotificationSystem;
