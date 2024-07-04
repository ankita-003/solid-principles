"use client";
import React from "react";
import { useState, useEffect } from "react";
const IspEmployeeList = () => {
  const [employee, setEmployeeList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setEmployeeList(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const formatPhoneNumber = (phoneNumber) => {
    let cleanedPhoneNumber = phoneNumber.replace(/[\s-]/g, "");
    return cleanedPhoneNumber;
  };

  return (
    <div className="mt-5">
      <h2>Employee List</h2>
      <ul>
        {employee?.map((emp) => (
          <li key={emp?.id} className="mt-1">
            {emp.name}
            <div>Phone: {formatPhoneNumber(emp?.phone)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IspEmployeeList;
