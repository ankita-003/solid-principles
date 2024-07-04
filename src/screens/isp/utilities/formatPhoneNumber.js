export const formatPhoneNumber = (phoneNumber) => {
  let cleanedPhoneNumber = phoneNumber.replace(/[\s-]/g, "");
  return cleanedPhoneNumber;
};
