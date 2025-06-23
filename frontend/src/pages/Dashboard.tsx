import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  Stack,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
} from '@mui/material';
import {
  CalendarMonth as TourIcon,
  EventNote as EventIcon,
  LocationOn as VenueIcon,
  MusicNote as BandIcon,
  ArrowForward as ArrowForwardIcon,
  Event as UpcomingIcon,
  EventBusy as PastIcon,
} from '@mui/icons-material';

// Mock data for demonstration
const upcomingTours = [
  { id: '1', name: 'Summer Festival Tour', startDate: '2025-07-15', endDate: '2025-08-15', status: 'CONFIRMED', eventCount: 12 },
  { id: '2', name: 'West Coast Club Run', startDate: '2025-09-01', endDate: '2025-09-15', status: 'PLANNING', eventCount: 8 },
];

const upcomingEvents = [
  { id: '1', name: 'The Fillmore', city: 'San Francisco', date: '2025-07-15', time: '20:00', status: 'CONFIRMED' },
  { id: '2', name: 'House of Blues', city: 'Los Angeles', date: '2025-07-17', time: '19:30', status: 'CONFIRMED' },
  { id: '3', name: 'The Troubadour', city: 'West Hollywood', date: '2025-07-19', time: '21:00', status: 'UNCONFIRMED' },
];

const recentVenues = [
  { id: '1', name: 'The Fillmore', city: 'San Francisco', capacity: 1200 },
  { id: '2', name: 'House of Blues', city: 'Los Angeles', capacity: 1000 },
  { id: '3', name: 'The Troubadour', city: 'West Hollywood', capacity: 400 },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Stats for the dashboard
  const stats = [
    { title: 'Active Tours', value: 2, icon: <TourIcon sx={{ fontSize: 40 }} color="primary" />, path: '/tours' },
    { title: 'Upcoming Events', value: 8, icon: <EventIcon sx={{ fontSize: 40 }} color="secondary" />, path: '/events' },
    { title: 'Venues', value: 24, icon: <VenueIcon sx={{ fontSize: 40 }} color="success" />, path: '/venues' },
    { title: 'Bands', value: 3, icon: <BandIcon sx={{ fontSize: 40 }} color="warning" />, path: '/bands' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's your tour planning overview.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card>
              <CardActionArea onClick={() => navigate(stat.path)}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography variant="h5" component="div">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Upcoming Tours */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6">Upcoming Tours</Typography>
              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/tours')}
                size="small"
              >
                View All
              </Button>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            {upcomingTours.map((tour) => (
              <Card key={tour.id} sx={{ mb: 2 }}>
                <CardActionArea onClick={() => navigate(`/tours/${tour.id}`)}>
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">{tour.name}</Typography>
                      <Chip 
                        label={tour.status} 
                        color={tour.status === 'CONFIRMED' ? 'success' : 'warning'} 
                        size="small" 
                      />
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {formatDate(tour.startDate)} - {formatDate(tour.endDate)}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {tour.eventCount} events
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
            {upcomingTours.length === 0 && (
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                No upcoming tours. Create one now!
              </Typography>
            )}
          </Paper>
        </Grid>

        {/* Upcoming Events */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6">Upcoming Events</Typography>
              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/events')}
                size="small"
              >
                View All
              </Button>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <List sx={{ p: 0 }}>
              {upcomingEvents.map((event) => (
                <React.Fragment key={event.id}>
                  <ListItem
                    button
                    onClick={() => navigate(`/events/${event.id}`)}
                    alignItems="flex-start"
                    sx={{ px: 1 }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: event.status === 'CONFIRMED' ? 'success.light' : 'warning.light' }}>
                        {event.status === 'CONFIRMED' ? <UpcomingIcon /> : <PastIcon />}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={event.name}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {event.city}
                          </Typography>
                          {` — ${formatDate(event.date)} at ${event.time}`}
                        </React.Fragment>
                      }
                    />
                    <Chip 
                      label={event.status} 
                      color={event.status === 'CONFIRMED' ? 'success' : 'warning'} 
                      size="small" 
                      sx={{ ml: 1, alignSelf: 'center' }}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
            {upcomingEvents.length === 0 && (
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                No upcoming events. Create one now!
              </Typography>
            )}
          </Paper>
        </Grid>

        {/* Recent Venues */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6">Recent Venues</Typography>
              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/venues')}
                size="small"
              >
                View All
              </Button>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              {recentVenues.map((venue) => (
                <Grid item xs={12} sm={6} md={4} key={venue.id}>
                  <Card>
                    <CardActionArea onClick={() => navigate(`/venues/${venue.id}`)}>
                      <CardContent>
                        <Typography variant="h6">{venue.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {venue.city}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          Capacity: {venue.capacity}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;