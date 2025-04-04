import React, { useState } from 'react';
import { 
  ShoppingBag, TrendingUp, DollarSign, Truck, Box,
  BarChart2, Tag, AlertCircle, Package
} from 'lucide-react';
import {
  Card, CardContent, CardHeader, Typography, Button, Grid, Paper, Alert, ToggleButton, ToggleButtonGroup
} from '@mui/material';

const UnifiedDashboard = () => {
  const [userRole, setUserRole] = useState('consignor');
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const quickActions = {
    consignor: [
      { icon: <Box />, label: 'Add Inventory' },
      { icon: <Truck />, label: 'Schedule Dispatch' },
      { icon: <Tag />, label: 'Update Pricing' },
      { icon: <BarChart2 />, label: 'Analytics' }
    ],
    consignee: [
      { icon: <ShoppingBag />, label: 'New Order' },
      { icon: <Package />, label: 'Receive Stock' },
      { icon: <DollarSign />, label: 'Payments' },
      { icon: <BarChart2 />, label: 'Analytics' }
    ]
  };

  const renderActionButtons = () => (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      {quickActions[userRole].map((action, idx) => (
        <Grid item xs={6} sm={3} key={idx}>
          <Button variant="contained" fullWidth startIcon={action.icon}>
            {action.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Paper sx={{ p: 4, minHeight: '100vh' }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4">DKC Unified Consignment Partnership Dashboard</Typography>
        <ToggleButtonGroup
          value={userRole}
          exclusive
          onChange={(e, newRole) => newRole && setUserRole(newRole)}
        >
          <ToggleButton value="consignor">Consignor</ToggleButton>
          <ToggleButton value="consignee">Consignee</ToggleButton>
        </ToggleButtonGroup>
      </Grid>

      <Alert severity="info" sx={{ mb: 3 }}>
        <AlertCircle size={16} style={{ marginRight: 8 }} />
        All transactions and communications are securely managed through DKC.
      </Alert>

      {renderActionButtons()}
    </Paper>
  );
};

export default UnifiedDashboard;
