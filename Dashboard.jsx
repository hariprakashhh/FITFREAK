import React from 'react';
import { Grid, Paper, Typography, Box, CircularProgress } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../Assets/css/Dashboard.css'; // Import the CSS file
import Sidebar from './Sidebar';

const data = [
  { name: 'Jan', Running: 30, Cycling: 20, Yoga: 50 },
  { name: 'Feb', Running: 50, Cycling: 40, Yoga: 60 },
  { name: 'Mar', Running: 40, Cycling: 50, Yoga: 80 },
  // Add more data points as needed
];

export default function Dashboard() {
  return (
    <Box className="dashboard-container">
      <Sidebar />
      <Typography className="dashboard-title"><h1>Admin Dashboard</h1></Typography><br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} className="grid-item">
          <Paper elevation={3} className="paper-card">
            <Typography variant="h6">Ready Progress</Typography>
            <Typography variant="h4">42%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid-item">
          <Paper elevation={3} className="paper-card">
            <Typography variant="h6">Calories Burn</Typography>
            <Typography variant="h4">67 cal</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid-item">
          <Paper elevation={3} className="paper-card">
            <Typography variant="h6">Days Left</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid-item">
          <Paper elevation={3} className="paper-card">
            <Typography variant="h6">Sleeping Hours</Typography>
            <Typography variant="h4">8 Hours</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} className="paper-card chart-container">
            <Typography variant="h6" className="chart-title" gutterBottom>
              Workout Statistics
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Running" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Cycling" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Yoga" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className="grid-item">
          <Paper elevation={3} className="paper-card circular-progress-container">
            <Typography variant="h6" gutterBottom>
              Workout Progress
            </Typography>
            <CircularProgress
              variant="determinate"
              value={81}
              size={120}
              className="circular-progress"
            />
            <Typography variant="h4" className="circular-progress-text">81%</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
