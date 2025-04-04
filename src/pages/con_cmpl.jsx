import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,

  Button,
  Grid,
  Typography,
  Box
} from '@mui/material';

const ConsignerDashboard = () => {
  const navigationCards = [
    {
      title: 'Order Management',
      description: 'Create and manage consignment orders',
      stats: {
        activeOrders: 5,
        pendingApproval: 2,
        draft: 1,
      },
      actions: [
        { label: 'Create New Order', route: '/create-order' },
        { label: 'View Pre-defined Orders', route: '/predefined-orders' },
      ],
      icon: '📦',
    },
    {
      title: 'Deal Management',
      description: 'Handle active deals and process shipments',
      stats: {
        activePacking: 3,
        pendingShipment: 2,
        awaitingPayment: 4,
      },
      actions: [
        { label: 'Process Active Deals', route: '/active-deals' },
        { label: 'View Completed Deals', route: '/completed-deals' },
      ],
      icon: '🤝',
    },
    {
      title: 'Business Analytics',
      description: 'Monitor performance across all consignees',
      stats: {
        activeConsignees: 8,
        totalSales: '$45,000',
        pendingPayments: '$12,000',
      },
      actions: [
        { label: 'View Analytics', route: '/analytics' },
        { label: 'Download Reports', route: '/reports' },
      ],
      icon: '📊',
    },
  ];

  const quickActions = [
    { label: 'Create Order', icon: '✨', route: '/create-order', highlight: true },
    { label: 'Process Returns', icon: '↩️', route: '/returns' },
    { label: 'Track Shipments', icon: '🚚', route: '/shipments' },
    { label: 'View Payments', icon: '💰', route: '/payments' },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Header Section */}
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h4" gutterBottom>
          Consigner Dashboard
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Welcome back, manage your consignment business
        </Typography>
      </div>

      {/* Quick Actions */}
      <Grid container spacing={4}>
        {quickActions.map((action, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              style={{
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
                border: action.highlight ? '2px solid #1976d2' : 'none',
              }}
              elevation={3}
            >
              <CardContent style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{action.icon}</div>
                <Typography variant="body1">{action.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Navigation Cards */}
      <Grid container spacing={6} style={{ marginTop: '24px' }}>
        {navigationCards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardHeader
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginRight: '8px' }}>{card.icon}</div>
                    <Typography variant="h6">{card.title}</Typography>
                  </div>
                }
                subheader={<Typography variant="body2">{card.description}</Typography>}
              />
              <CardContent>
                <Grid container spacing={2} style={{ fontSize: '0.875rem' }}>
                  {Object.entries(card.stats).map(([key, value]) => (
                    <Grid item xs={6} key={key}>
                      <div style={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '8px' }}>
                        <Typography variant="body2" color="textSecondary">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                          {value}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box style={{ padding: '16px', textAlign: 'center' }}>
                {card.actions.map((action, actionIndex) => (
                  <Button
                    key={actionIndex}
                    variant={actionIndex === 0 ? 'contained' : 'outlined'}
                    color="primary"
                    fullWidth
                    style={{ margin: '4px 0' }}
                  >
                    {action.label}
                  </Button>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Card style={{ marginTop: '24px' }}>
        <CardHeader
          title="Recent Activity"
          subheader="Latest updates from your consignment business"
        />
        <CardContent>
          {[
            { type: 'order', message: 'New order #1234 created for Basic Handicrafts', time: '2 hours ago' },
            { type: 'shipment', message: 'Shipment #5678 delivered to ArtCraft Global', time: '5 hours ago' },
            { type: 'payment', message: 'Payment received from Market Hub - $5,000', time: '1 day ago' },
            { type: 'return', message: 'Return request #9012 processed', time: '2 days ago' },
          ].map((activity, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '16px' }}>
                  {{
                    order: '📦',
                    shipment: '🚚',
                    payment: '💰',
                    return: '↩️',
                  }[activity.type]}
                </div>
                <div>
                  <Typography variant="body2">{activity.message}</Typography>
                  <Typography variant="caption" color="textSecondary">{activity.time}</Typography>
                </div>
              </div>
              <Button variant="text" size="small">
                View
              </Button>
            </div>
          ))}
        </CardContent>
        <Box style={{ textAlign: 'center', padding: '8px' }}>
          <Button variant="outlined">View All Activity</Button>
        </Box>
      </Card>
    </div>
  );
};

export default ConsignerDashboard;
