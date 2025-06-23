# Tour Planning Assistant

A comprehensive web application for musicians and bands to schedule tour dates, coordinate travel logistics, and manage itineraries. This platform streamlines the complex process of planning and executing music tours by providing centralized management of venues, dates, crew members, travel arrangements, and documentation.

## Features

### Tour Management
- Create, view, edit, and delete tours
- Set tour date ranges, regions, and goals
- Track tour status (planning, confirmed, in progress, completed)

### Event/Show Management
- Add, edit, and remove individual shows within a tour
- Link venues to shows with capacity and technical requirements
- Schedule load-in, soundcheck, performance, and load-out times

### Venue Database
- Store venue details (address, capacity, contact info)
- Add notes and ratings for venues based on past experiences
- Search venues by location, capacity, or availability

### Travel Logistics
- Plan transportation between venues (driving routes, flights)
- Book and track accommodations
- Calculate distance, travel time, and estimated costs

### Crew and Personnel Management
- Assign crew members to specific tours and shows
- Define roles and responsibilities
- Track availability and conflicts

### Itinerary Generation
- Create detailed day sheets for each show
- Share itineraries with band and crew members
- Export itineraries to PDF or mobile-friendly formats

### Calendar Integration
- Sync with Google Calendar and other calendar services
- View tour schedule in calendar format
- Get notifications for upcoming events

### Document Management
- Store and share contracts, tech riders, and other documents
- Track document status (draft, sent, signed)
- Organize documents by tour, venue, or date

## Technology Stack

### Frontend
- **Framework**: React.js with TypeScript
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI
- **Maps/Routing**: Google Maps API
- **Calendar**: FullCalendar integration
- **PDF Generation**: React-PDF

### Backend
- **API Framework**: Node.js with Express
- **API Documentation**: Swagger/OpenAPI
- **Authentication**: JWT with OAuth2 options
- **Email Notifications**: Nodemailer with templates

### Database
- **Primary Database**: PostgreSQL
- **ORM**: Prisma
- **Caching**: Redis for performance optimization

### Infrastructure
- **Hosting**: AWS or Vercel/Netlify for frontend
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry for error tracking
- **Analytics**: Google Analytics

## System Architecture

The Tour Planning Assistant uses a microservices architecture consisting of the following components:

1. **Client Application**
   - React SPA served via CDN
   - Communicates with API Gateway
   - Implements offline capabilities for viewing tour information

2. **API Gateway**
   - Handles authentication and authorization
   - Routes requests to appropriate services
   - Manages rate limiting and request validation

3. **Core Services**
   - Tour Service: Manages tour CRUD operations
   - Event Service: Handles show scheduling and venue booking
   - User Service: Manages user accounts, roles, and permissions
   - Notification Service: Sends alerts and reminders

4. **Integration Services**
   - Calendar Sync Service: Integrates with external calendar providers
   - Mapping Service: Handles route planning and distance calculations
   - Document Service: Manages file storage and retrieval

5. **Data Layer**
   - PostgreSQL database for relational data
   - Redis for caching and performance
   - S3 or equivalent for document storage

6. **Background Workers**
   - Handles email sending
   - Processes scheduled tasks (reminders, report generation)
   - Manages data synchronization with external systems

## Installation and Setup

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- Redis
- AWS account (for production deployment)

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/dxaginfo/tour-planner-2025-06.git
cd tour-planner-2025-06
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables:
```bash
# Backend .env
cp backend/.env.example backend/.env
# Edit the .env file with your local configuration

# Frontend .env
cp frontend/.env.example frontend/.env
# Edit the .env file with your local configuration
```

4. Set up the database:
```bash
cd backend
npm run db:migrate
npm run db:seed
```

5. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server (in a separate terminal)
cd frontend
npm run dev
```

6. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/api-docs

## Deployment

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository to Vercel or Netlify
2. Configure build settings:
   - Build command: `cd frontend && npm run build`
   - Output directory: `frontend/build`
   - Environment variables: Set up API endpoint and other config

### Backend Deployment (AWS)
1. Set up an EC2 instance or use Elastic Beanstalk
2. Configure environment variables in AWS
3. Set up a CI/CD pipeline using GitHub Actions:
   - See `.github/workflows/deploy.yml` for configuration

### Database Setup
1. Use AWS RDS for PostgreSQL in production
2. Configure security groups to allow access from backend services
3. Set up backup and monitoring

## Contributing

We welcome contributions to the Tour Planning Assistant project! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

Please ensure your code follows our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue on the GitHub repository or contact the maintainers directly.