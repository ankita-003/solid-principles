"use client";
import React, { useState, useEffect } from "react";
import { formatPhoneNumber } from "../../screens/isp/utilities/formatPhoneNumber";
import useFetchUsers from "../../hooks/useFetchUsers";

const EmployeeList = () => {
  const { employee, loading, error } = useFetchUsers();
  return (
    <div className="mt-5">
      <h2>Employee List</h2>
      <ul>
        {employee?.map((emp) => (
          <li key={emp?.id} className="mt-1">
            {emp?.name} <div>Phone: {formatPhoneNumber(emp?.phone)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
