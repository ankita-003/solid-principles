"use client";
import React, { useState, useEffect } from "react";

const EmployeeProfile = () => {
  const userId = 9;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-5">
      <b>Employee Details :</b>
      <h1 className="mt-2">{user.name}</h1>
      <div className="mt-1">
        <p>Id: {user?.id}</p>
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phone}</p>
        <p>Company: {user?.company?.name}</p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
