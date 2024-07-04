import React from "react";

const EmployeeProfile = ({ employee }) => {
  if (!employee) return null;
  return (
    <div className="mt-5">
      <b>Employee Details :</b>
      <h1 className="mt-2">{employee.name}</h1>
      <div className="mt-1">
        <p>Id: {employee?.id}</p>
        <p>Email: {employee?.email}</p>
        <p>Phone: {employee?.phone}</p>
        <p>Company: {employee?.company?.name}</p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
