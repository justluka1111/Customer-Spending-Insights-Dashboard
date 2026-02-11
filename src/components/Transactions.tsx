import React, { useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import { useDashboard } from '../context/DashboardContext';
import { useTransactions, useFilters } from '../hooks/useApi';

const Transactions: React.FC = () => {
  const { customerId } = useDashboard();
  const [category, setCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date_desc');

  const { data: transactionData, loading, error } = useTransactions(customerId, {
    limit: 20,
    offset: 0,
    category: category || undefined,
    sortBy
  });

  const { data: filters } = useFilters(customerId);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  if (loading) return <Typography>Loading transactions...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!transactionData) return <Typography>No transaction data</Typography>;

  const { transactions } = transactionData;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>

      <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {filters?.map((filter) => (
              <MenuItem key={filter.name} value={filter.name}>
                {filter.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            onChange={handleSortChange}
          >
            <MenuItem value="date_desc">Date (Newest)</MenuItem>
            <MenuItem value="date_asc">Date (Oldest)</MenuItem>
            <MenuItem value="amount_desc">Amount (High to Low)</MenuItem>
            <MenuItem value="amount_asc">Amount (Low to High)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Merchant</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  {new Date(transaction.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{transaction.merchant}</TableCell>
                <TableCell>
                  <Chip
                    label={transaction.category}
                    size="small"
                    sx={{ backgroundColor: transaction.categoryColor }}
                  />
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>ZAR {transaction.amount.toLocaleString()}</TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transactions;
