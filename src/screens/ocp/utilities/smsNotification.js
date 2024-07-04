// SMSNotification.js
import { Notification } from "./notification";

export class SMSNotification extends Notification {
  send(user, message) {
    console.log(`Sending SMS to ${user.phone}: ${message}`);
  }
}
