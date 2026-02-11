import React from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { DashboardProvider } from '../context/DashboardContext';
import Profile from './Profile';
import Summary from './Summary';
import CategoryChart from './CategoryChart';
import TrendsChart from './TrendsChart';
import Transactions from './Transactions';
import GoalsChart from './GoalsChart';

const Dashboard: React.FC = () => {
  return (
    <DashboardProvider>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Profile Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Profile />
            </Paper>
          </Grid>

          {/* Summary Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Summary />
            </Paper>
          </Grid>

          {/* Category Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <CategoryChart />
            </Paper>
          </Grid>

          {/* Trends Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <TrendsChart />
            </Paper>
          </Grid>

          {/* Transactions */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Transactions />
            </Paper>
          </Grid>

          {/* Goals Chart */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <GoalsChart />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DashboardProvider>
  );
};

export default Dashboard;
