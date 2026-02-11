import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Customer Spending Insights Dashboard
        </Typography>
        <Dashboard />
      </Box>
    </Container>
  );
}

export default App;
