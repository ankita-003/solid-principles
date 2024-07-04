import { Notification } from "./notification";

export class EmailNotification extends Notification {
  send(user, message) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}
