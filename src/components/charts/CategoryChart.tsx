import React from 'react';
import { Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useDashboard } from '../../context/DashboardContext';
import { useCategoryData } from '../../hooks/useApi';

const CategoryChart: React.FC = () => {
  const { customerId, period } = useDashboard();
  const { data: categoryData, loading, error } = useCategoryData(customerId, period);

  if (loading) return <Typography>Loading category data...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!categoryData) return <Typography>No category data</Typography>;

  const chartData = categoryData.categories.map(cat => ({
    name: cat.name,
    value: cat.amount,
    percentage: cat.percentage,
    color: cat.color
  }));

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Spending by Category ({period})
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Total: ZAR {categoryData.totalAmount.toLocaleString()}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) =>
                percent !== undefined ? `${(percent * 100).toFixed(0)}%` : ""
                      }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
                  formatter={(value: number | undefined) =>
                    value !== undefined ? [`ZAR ${value.toLocaleString()}`, 'Amount'] : ['ZAR 0', 'Amount']
                  }
                />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CategoryChart;
