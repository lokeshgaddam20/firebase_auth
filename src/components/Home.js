// Home.js
import React from "react";
import { auth } from "../config/firebase";

export default function Home() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to the login page or do any other necessary actions
    } catch (error) {
      // Handle logout error
    }
  };

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <div className="bg-secondary rounded-lg shadow-md p-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-text">Welcome to the Home Page</h1>
        <button
          onClick={handleLogout}
          className="bg-accent hover:bg-yellow-400 text-black text-lg font-semibold py-2 px-4 rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
