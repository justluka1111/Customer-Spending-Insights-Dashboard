import React from "react";
import Profile from "./Profile";
import Summary from "./Summary";
import CategoryChart from "../components/charts/CategoryChart";
import TrendsChart from "../components/charts/TrendsChart";
import Transactions from "../components/transactions/Transactions";
import GoalsChart from "../components/charts/GoalsChart";
import { CustomerProfile } from "../types";



interface DashboardProps {
  profile: CustomerProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ profile }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Profile profile={profile} />
        </div>
        <div className="lg:col-span-2">
          <Summary />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <CategoryChart />
        <TrendsChart />
      </div>

      <div className="mt-6">
        <GoalsChart currency={profile.currency} />
      </div>

      <div className="mt-6">
        <Transactions />
      </div>
    </>
  );
};

export default Dashboard;