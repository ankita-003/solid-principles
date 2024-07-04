// PushNotification.js
import { Notification } from "./notification";

export class PushNotification extends Notification {
  send(user, message) {
    console.log(`Sending push notification to ${user.deviceId}: ${message}`);
  }
}
