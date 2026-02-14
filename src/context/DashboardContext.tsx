import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CustomerProfile } from '../types';

// 1️⃣ Define the context type
interface DashboardContextType {
  customerId: string;
  setCustomerId: (id: string) => void;
  period: string;
  setPeriod: (period: string) => void;
  profile: CustomerProfile | null;
  setProfile: (profile: CustomerProfile | null) => void;
}

// 2️⃣ Create context
export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// 3️⃣ Custom hook to use context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

// 4️⃣ Provider component
interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [customerId, setCustomerId] = useState<string>('12345'); // default
  const [period, setPeriod] = useState<string>('30d'); // default
  const [profile, setProfile] = useState<CustomerProfile | null>(null);

  return (
    <DashboardContext.Provider
      value={{ customerId, setCustomerId, period, setPeriod, profile, setProfile }}
    >
      {children}
    </DashboardContext.Provider>
  );
};