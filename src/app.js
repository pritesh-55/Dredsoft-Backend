require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger');

const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', require('./routes/product.routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Product API is running');
});

app.use(errorHandler);

module.exports = app;
