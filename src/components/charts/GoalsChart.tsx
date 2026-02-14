import React from 'react';
import { Typography, Box, LinearProgress, Card, CardContent, Grid } from "@mui/material";
import { useDashboard } from '../../context/DashboardContext';
import { useSpendingGoals } from '../../hooks/useApi';
 

interface GoalsChartProps {
  currency?: string;
}

const GoalsChart: React.FC<GoalsChartProps> = ({ currency = 'ZAR' }) => {
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
          <Grid size={{ xs: 12, md: 6 }} key={goal.id}>
            <Card sx={{
                    borderRadius: 3,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                    transition: "0.2s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                    },
                  }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {goal.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currency} {goal.currentSpent.toLocaleString()} / {currency} {goal.monthlyBudget.toLocaleString()}
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
