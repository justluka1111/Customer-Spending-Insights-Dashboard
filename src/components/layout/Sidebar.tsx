import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartPie, FaUser, FaMoneyBillWave } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Dashboard</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <FaHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <FaUser /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/summary">
              <FaChartPie /> Summary
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions">
              <FaMoneyBillWave /> Transactions
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;