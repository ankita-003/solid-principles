"use client";
import React, { useEffect } from "react";
import { EmailNotification } from "@/screens/ocp/utilities/emailNotification";
import { SMSNotification } from "@/screens/ocp/utilities/smsNotification";
import { PushNotification } from "@/screens/ocp/utilities/pushNotification";
import { ExtendedPushNotification } from "@/screens/ocp/utilities/extendedPushNotification";

const NotificationSystem = () => {
  const user = {
    email: "user@example.com",
    phone: "123-456-7890",
    deviceId: "device123",
  };
  const message = "Hello, you have a new notification!";

  const notifications = [
    new EmailNotification(),
    new SMSNotification(),
    // new PushNotification(),
    new ExtendedPushNotification("red"),
    // Add new notification types here as needed
  ];

  useEffect(() => {
    notifications.forEach((notification) => {
      notification.send(user, message);
    });
  }, []);

  return (
    <>
      <div className="mt-5">Notifications sent!</div>
      <div className="mt-1">Check Console</div>

      <div className="mt-2">
        {notifications.map((notification, index) => (
          <div key={index}>{notification.constructor.name} sent!</div>
        ))}
      </div>
    </>
  );
};

export default NotificationSystem;
