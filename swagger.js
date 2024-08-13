
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0', // OpenAPI version
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'A simple API',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
      paths: {
        '/restaurants': {
          get: {
            summary: 'Get a list of restaurants',
            description: 'Retrieves a list of all restaurants from the system.',
            responses: {
              '200': {
                description: 'A list of restaurants',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'integer',
                            example: 1,
                          },
                          name: {
                            type: 'string',
                            example: 'The Fancy Place',
                          },
                         
                        },
                      },
                    },
                  },
                },
              },
              '500': {
                description: 'Internal server error',
              },
            },
          },
        },
      },
    },
    apis: ['./index.js'], // Path to the API docs (JSDoc comments)
  };

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;