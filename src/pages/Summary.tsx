import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import Grid from "@mui/material/Grid";
import { useDashboard } from '../context/DashboardContext';
import { useSpendingSummary } from '../hooks/useApi';

interface SummaryProps {
  currency?: string;
}

const Summary: React.FC<SummaryProps> = ({ currency = 'ZAR' }) => {
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

    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
            transition: "0.2s ease",
            "&:hover": {
              transform: "translateY(-3px)",
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" color="primary">
              {currency} {summary.totalSpent.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Spent
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
            transition: "0.2s ease",
            "&:hover": {
              transform: "translateY(-3px)",
            },
          }}
        >
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

      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
            transition: "0.2s ease",
            "&:hover": {
              transform: "translateY(-3px)",
            },
          }}
        >
          <CardContent>
            <Typography variant="h5">
              {currency} {summary.averageTransaction.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average Transaction
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
            transition: "0.2s ease",
            "&:hover": {
              transform: "translateY(-3px)",
            },
          }}
        >
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
        Compared to previous period: Spent{" "}
        {summary.comparedToPrevious.spentChange > 0 ? "+" : ""}
        {summary.comparedToPrevious.spentChange}%,
        Transactions{" "}
        {summary.comparedToPrevious.transactionChange > 0 ? "+" : ""}
        {summary.comparedToPrevious.transactionChange}%
      </Typography>
    </Box>
  </Box>
);
};

export default Summary;
