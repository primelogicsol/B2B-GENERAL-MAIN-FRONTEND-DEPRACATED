/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Alert,
  AlertTitle,
  Chip,
  Grid,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme
} from '@mui/material';

import {
  CheckCircle,
  Error,
  Pending,
  AccessTime,
  Refresh,
  Notifications,
  ArrowForward,
  Assignment,
  Info,
  Warning,
  HourglassEmpty,
  Schedule,
  AssignmentTurnedIn,
  Block
} from '@mui/icons-material';
import heroImage from '../../assets/images/sm.png'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab';
import Breadcrumb from '../../components/Shared-Components/Breadcrumb';
const VendorStatusTracker = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [notificationsAnchor, setNotificationsAnchor] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [statusHistory, setStatusHistory] = useState([]);

  // Application Status Data
  const [applicationData, setApplicationData] = useState({
    applicationId: 'VND-2024-001',
    currentStatus: 'under_review',
    submissionDate: '2024-01-21',
    lastUpdated: new Date().toISOString(),
    stages: {
      document_submission: {
        status: 'completed',
        updatedAt: '2024-01-21T10:00:00Z',
        comments: 'All required documents received'
      },
      initial_review: {
        status: 'in_progress',
        updatedAt: '2024-01-21T11:00:00Z',
        comments: 'Document verification in progress'
      },
      final_approval: {
        status: 'pending',
        updatedAt: null,
        comments: null
      }
    },
    requiredActions: [
      {
        id: 1,
        type: 'document',
        description: 'Submit updated tax certificate',
        deadline: '2024-01-24',
        priority: 'high'
      },
      {
        id: 2,
        type: 'verification',
        description: 'Complete bank details verification',
        deadline: '2024-01-23',
        priority: 'medium'
      }
    ],
    notifications: [
      {
        id: 1,
        type: 'warning',
        message: 'Document update required',
        timestamp: '2024-01-21T09:00:00Z',
        read: false
      },
      {
        id: 2,
        type: 'info',
        message: 'Application received successfully',
        timestamp: '2024-01-21T08:00:00Z',
        read: true
      }
    ],
    completionPercentage: 65
  });

  // Status Configurations
  const statusConfig = {
    pending: {
      icon: <HourglassEmpty />,
      color: 'warning',
      label: 'Pending'
    },
    in_progress: {
      icon: <Schedule />,
      color: 'info',
      label: 'In Progress'
    },
    completed: {
      icon: <AssignmentTurnedIn />,
      color: 'success',
      label: 'Completed'
    },
    rejected: {
      icon: <Block />,
      color: 'error',
      label: 'Rejected'
    },
    under_review: {
      icon: <Assignment />,
      color: 'info',
      label: 'Under Review'
    }
  };

  // Application Stages
  const stages = [
    {
      label: 'Document Submission',
      description: 'Upload and verify required documents',
      key: 'document_submission'
    },
    {
      label: 'Initial Review',
      description: 'Document and business verification',
      key: 'initial_review'
    },
    {
      label: 'Final Approval',
      description: 'Final verification and approval',
      key: 'final_approval'
    }
  ];

  // Handlers
  const handleRefresh = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Update last refreshed timestamp
      setApplicationData(prev => ({
        ...prev,
        lastUpdated: new Date().toISOString()
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationClick = (event) => {
    setNotificationsAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationsAnchor(null);
  };

  const handleNotificationSelect = (notification) => {
    setSelectedNotification(notification);
    handleNotificationClose();
  };

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <Chip
        icon={config.icon}
        label={config.label}
        color={config.color}
        variant="outlined"
        size="medium"
      />
    );
  };

  // Timeline Progress Component
  const TimelineProgress = () => (
    <Box sx={{ width: '100%', mb: 4 }}>
      <LinearProgress 
        variant="determinate" 
        value={applicationData.completionPercentage} 
        sx={{ height: 10, borderRadius: 5 }}
      />
      <Typography variant="body2" color="text.secondary" align="right" sx={{ mt: 1 }}>
        {applicationData.completionPercentage}% Complete
      </Typography>
    </Box>
  );

  return (
    <>
    <Breadcrumb title="Buyer Partnership Registration Portal"  />
    <div className="project-area style-three mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <h5 className="section-sub-title">
                Begin your journey with De Koshur Crafts
              </h5>
              <h1 className="section-main-title">Application Status</h1>
              <h4 className="">
                {/* Choose Application Status  <br />{" "} */}
                <span>
                  <b style={{ color: "#ff3b00;" }}>
                   Track real time status of your application
                  </b>
                </span>{" "}
              </h4>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-des " style={{ color: "black" }}>
                <b> Buyer Partnership Registration Process </b>
                <h1 className="section-main-title" style={{ fontSize: "40px" }}>
                  Process 6
                </h1>
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Notification Button */}
      <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <Badge 
          badgeContent={applicationData.notifications.filter(n => !n.read).length} 
          color="error"
        >
          <IconButton 
            onClick={handleNotificationClick}
            sx={{ bgcolor: 'background.paper', boxShadow: 2 }}
          >
            <Notifications />
          </IconButton>
        </Badge>
      </Box>

      {/* Main Content */}
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Partnership Application Status
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Application ID: {applicationData.applicationId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Updated: {new Date(applicationData.lastUpdated).toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <StatusBadge status={applicationData.currentStatus} />
            <IconButton onClick={handleRefresh} disabled={loading} sx={{ ml: 1 }}>
              <Refresh />
            </IconButton>
          </Box>
        </Box>

        <TimelineProgress />

        {/* Status Timeline */}
        <Stepper activeStep={1} alternativeLabel sx={{ mb: 4 }}>
          {stages.map((stage, index) => {
            const stageData = applicationData.stages[stage.key];
            return (
              <Step key={stage.key} completed={stageData.status === 'completed'}>
                <StepLabel
                  StepIconComponent={() => statusConfig[stageData.status].icon}
                  optional={
                    <Typography variant="caption" color="text.secondary">
                      {stage.description}
                    </Typography>
                  }
                >
                  <Typography variant="subtitle2">{stage.label}</Typography>
                  {stageData.status !== 'pending' && (
                    <Chip
                      label={statusConfig[stageData.status].label}
                      size="small"
                      color={statusConfig[stageData.status].color}
                      sx={{ mt: 1 }}
                    />
                  )}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {/* Required Actions */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Required Actions
            </Typography>
            <List>
              {applicationData.requiredActions.map((action) => (
                <ListItem key={action.id}>
                  <ListItemIcon>
                    <ArrowForward color={action.priority === 'high' ? 'error' : 'action'} />
                  </ListItemIcon>
                  <ListItemText
                    primary={action.description}
                    secondary={`Deadline: ${new Date(action.deadline).toLocaleDateString()}`}
                  />
                  <Chip
                    size="small"
                    label={action.priority.toUpperCase()}
                    color={action.priority === 'high' ? 'error' : 'warning'}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Status History */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Application History
            </Typography>
            <Timeline>
              {Object.entries(applicationData.stages)
                .filter(([_, data]) => data.status !== 'pending')
                .map(([stage, data]) => (
                  <TimelineItem key={stage}>
                    <TimelineSeparator>
                      {statusConfig[data.status].icon}
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="subtitle2">
                        {stages.find(s => s.key === stage)?.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.comments}
                      </Typography>
                      {data.updatedAt && (
                        <Typography variant="caption" color="text.secondary">
                          {new Date(data.updatedAt).toLocaleString()}
                        </Typography>
                      )}
                    </TimelineContent>
                  </TimelineItem>
                ))}
            </Timeline>
          </CardContent>
        </Card>
      </Paper>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationsAnchor}
        open={Boolean(notificationsAnchor)}
        onClose={handleNotificationClose}
      >
        {applicationData.notifications.map((notification) => (
          <MenuItem 
            key={notification.id}
            onClick={() => handleNotificationSelect(notification)}
            sx={{ 
              bgcolor: notification.read ? 'inherit' : 'action.hover',
              borderLeft: 3,
              borderColor: notification.type === 'warning' ? 'warning.main' : 'info.main'
            }}
          >
            <ListItemIcon>
              {notification.type === 'warning' ? <Warning color="warning" /> : <Info color="info" />}
            </ListItemIcon>
            <ListItemText 
              primary={notification.message}
              secondary={new Date(notification.timestamp).toLocaleString()}
            />
          </MenuItem>
        ))}
      </Menu>

      {/* Notification Detail Dialog */}
      <Dialog
        open={Boolean(selectedNotification)}
        onClose={() => setSelectedNotification(null)}
      >
        <DialogTitle>
          Notification Details
        </DialogTitle>
        <DialogContent>
          {selectedNotification && (
            <Alert severity={selectedNotification.type}>
              <AlertTitle>{selectedNotification.message}</AlertTitle>
              <Typography variant="body2">
                {new Date(selectedNotification.timestamp).toLocaleString()}
              </Typography>
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedNotification(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
};

export default VendorStatusTracker;