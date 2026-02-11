import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextType {
  customerId: string;
  setCustomerId: (id: string) => void;
  period: string;
  setPeriod: (period: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [customerId, setCustomerId] = useState<string>('12345'); // Default customer
  const [period, setPeriod] = useState<string>('30d'); // Default period

  return (
    <DashboardContext.Provider value={{ customerId, setCustomerId, period, setPeriod }}>
      {children}
    </DashboardContext.Provider>
  );
};
