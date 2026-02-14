import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchCustomerProfile } from "./services/api";
import { CustomerProfile } from "./types";
import { DashboardProvider } from "./context/DashboardContext";

import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Summary from "./pages/Summary";
import Transactions from "./components/transactions/Transactions";

const App: React.FC = () => {
  const [profile, setProfile] = useState<CustomerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const result = await fetchCustomerProfile("12345");
        setProfile(result);
        setError(null);
      } catch (err) {
        setError("Failed to load customer profile. Please try again.");
        console.error("Error loading profile:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.5rem",
        color: "#666"
      }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.2rem",
        color: "#d32f2f",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <span>{error}</span>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <DashboardProvider>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard profile={profile} />} />
          <Route path="/dashboard" element={<Dashboard profile={profile} />} />
          <Route path="/profile" element={<Profile profile={profile} />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </DashboardLayout>
    </DashboardProvider>
  );
};

export default App;
