"use client";

import IMessageService from "../../interfaces/IMessageService";

class EmailService extends IMessageService {
  send(to, message) {
    console.log(`Sending email to ${to}: ${message}`);
  }
}
// const emailService = {
//   send: (to, message) => {
//     console.log(`Sending email to ${to}: ${message}`);
//   },
// };

export default EmailService;
