import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout components
import MainLayout from './layouts/MainLayout';

// Page components
import Dashboard from './pages/Dashboard';
import TourList from './pages/tours/TourList';
import TourDetails from './pages/tours/TourDetails';
import CreateTour from './pages/tours/CreateTour';
import EventList from './pages/events/EventList';
import EventDetails from './pages/events/EventDetails';
import CreateEvent from './pages/events/CreateEvent';
import VenueList from './pages/venues/VenueList';
import VenueDetails from './pages/venues/VenueDetails';
import CreateVenue from './pages/venues/CreateVenue';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/auth/Profile';
import NotFound from './pages/NotFound';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Main application routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            
            {/* Tour routes */}
            <Route path="tours">
              <Route index element={<TourList />} />
              <Route path="new" element={<CreateTour />} />
              <Route path=":tourId" element={<TourDetails />} />
            </Route>
            
            {/* Event routes */}
            <Route path="events">
              <Route index element={<EventList />} />
              <Route path="new" element={<CreateEvent />} />
              <Route path=":eventId" element={<EventDetails />} />
            </Route>
            
            {/* Venue routes */}
            <Route path="venues">
              <Route index element={<VenueList />} />
              <Route path="new" element={<CreateVenue />} />
              <Route path=":venueId" element={<VenueDetails />} />
            </Route>
            
            {/* User profile */}
            <Route path="profile" element={<Profile />} />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;