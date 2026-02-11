import React from 'react';
import { Typography, Box, Card, CardContent, Avatar } from '@mui/material';
import { useDashboard } from '../context/DashboardContext';
import { useCustomerProfile } from '../hooks/useApi';

const Profile: React.FC = () => {
  const { customerId } = useDashboard();
  const { data: profile, loading, error } = useCustomerProfile(customerId);

  if (loading) return <Typography>Loading profile...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!profile) return <Typography>No profile data</Typography>;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Customer Profile
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
              {profile.name.split(' ').map(n => n[0]).join('')}
            </Avatar>
            <Box>
              <Typography variant="h6">{profile.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.email}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              <strong>Customer ID:</strong> {profile.customerId}
            </Typography>
            <Typography variant="body2">
              <strong>Account Type:</strong> {profile.accountType}
            </Typography>
            <Typography variant="body2">
              <strong>Join Date:</strong> {new Date(profile.joinDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2">
              <strong>Total Spent:</strong> {profile.currency} {profile.totalSpent.toLocaleString()}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
