import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';
import { useSpendingSummary } from '../hooks/useApi';

const Summary: React.FC = () => {
  const { customerId, period } = useDashboard();
  const { data: summary, loading, error } = useSpendingSummary(customerId, period);

  if (loading) return <Typography>Loading summary...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!summary) return <Typography>No summary data</Typography>;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Spending Summary ({summary.period})
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                ZAR {summary.totalSpent.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Spent
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="secondary">
                {summary.transactionCount}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transactions
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                ZAR {summary.averageTransaction.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Transaction
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                {summary.topCategory}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Top Category
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          Compared to previous period: Spent {summary.comparedToPrevious.spentChange > 0 ? '+' : ''}{summary.comparedToPrevious.spentChange}%,
          Transactions {summary.comparedToPrevious.transactionChange > 0 ? '+' : ''}{summary.comparedToPrevious.transactionChange}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Summary;
