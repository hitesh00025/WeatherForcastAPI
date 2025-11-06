import swaggerJsdoc from 'swagger-jsdoc';

export const openapiSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Weather Forecast API',
      version: '1.0.0',
      description: 'Forecast from National Weather Service (NWS)',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  // files to parse for JSDoc @swagger blocks:
  apis: ['src/routes/*.ts', 'src/types/*.ts'],
});