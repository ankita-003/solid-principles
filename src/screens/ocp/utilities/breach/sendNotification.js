export function sendNotification(user, message, type) {
  if (type === "email") {
    return `Sending email to ${user.email}:   ${message}`;
  } else if (type === "sms") {
    return `Sending SMS to ${user.phone}:   ${message}`;
  } else if (type === "push") {
    return `Sending push notification to ${user.deviceId}:   ${message}`;
  }
}
