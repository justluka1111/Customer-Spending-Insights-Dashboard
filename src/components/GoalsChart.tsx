import React from 'react';
import { Typography, Box, LinearProgress, Grid, Card, CardContent } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';
import { useSpendingGoals } from '../hooks/useApi';

const GoalsChart: React.FC = () => {
  const { customerId } = useDashboard();
  const { data: goals, loading, error } = useSpendingGoals(customerId);

  if (loading) return <Typography>Loading goals...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!goals || goals.length === 0) return <Typography>No goals data</Typography>;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_track': return 'success';
      case 'warning': return 'warning';
      case 'exceeded': return 'error';
      default: return 'primary';
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Spending Goals
      </Typography>
      <Grid container spacing={2}>
        {goals.map((goal) => (
          <Grid item xs={12} md={6} key={goal.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {goal.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ZAR {goal.currentSpent.toLocaleString()} / ZAR {goal.monthlyBudget.toLocaleString()}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(goal.percentageUsed, 100)}
                    color={getStatusColor(goal.status)}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {goal.percentageUsed.toFixed(1)}% used • {goal.daysRemaining} days remaining
                </Typography>
                <Typography variant="body2" color={goal.status === 'warning' ? 'warning.main' : 'text.secondary'}>
                  Status: {goal.status.replace('_', ' ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GoalsChart;
