import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Load environment variables
dotenv.config();

// Initialize Prisma client
const prisma = new PrismaClient();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tour Planning Assistant API',
      version: '1.0.0',
      description: 'API documentation for the Tour Planning Assistant application',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.get('/', (req, res) => {
  res.send('Tour Planning Assistant API is running');
});

// API routes will be imported and used here
// app.use('/api/users', userRoutes);
// app.use('/api/bands', bandRoutes);
// app.use('/api/tours', tourRoutes);
// app.use('/api/venues', venueRoutes);
// app.use('/api/events', eventRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

// Start server
const startServer = async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Connected to database successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();

// Handle server shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Database connection closed');
  process.exit(0);
});

export default app;