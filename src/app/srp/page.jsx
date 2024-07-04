"use client";
import React from "react";
import useFetchUserById from "@/hooks/useFetchUserById";
import EmployeeProfile from "../../screens/srp/component/employeeProfile";

function SRPExample() {
  const userId = 2;
  const { employee, loading, error } = useFetchUserById(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="fixed-width-center">
      <EmployeeProfile employee={employee} />
    </div>
  );
}

export default SRPExample;
