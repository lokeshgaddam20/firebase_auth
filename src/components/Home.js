// Home.js
import React from "react";
import { auth } from "../config/firebase";

function Home() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to the login page or do any other necessary actions
    } catch (error) {
      // Handle logout error
    }
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <button
        onClick={handleLogout}
        className="bg-accent hover:bg-yellow-400 text-black text-lg font-semibold py-2 px-4 rounded-full"
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
