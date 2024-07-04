import { PushNotification } from "@/screens/ocp/utilities/pushNotification";

export class ExtendedPushNotification extends PushNotification {
  constructor(color) {
    super();
    this.color = color;
  }

  send(user, message) {
    console.log(
      `Sending push notification to ${user.deviceId}: ${message} - Color: ${this.color}`
    );
  }
}
