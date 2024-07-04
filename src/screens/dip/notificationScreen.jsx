"use client";
// High-level component
import React from "react";
const Notification = ({ messageService }) => {
  const emailService = new messageService();
  const sendNotification = () => {
    emailService.send("recipient@example.com", "Hello from React!");
  };
  return (
    <div className="mt-4">
      <button onClick={sendNotification}>Send Notification</button>
      <div className="mt-2">check console</div>
    </div>
  );
};
export default Notification;
