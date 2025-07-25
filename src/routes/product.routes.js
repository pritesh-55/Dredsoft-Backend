const router = require("express").Router();
const schemaValidator = require("../middlewares/schemaValidator");

const { addProductSchema } = require("./schema/productSchema");

const { getAllProducts, getProductById, createProduct } = require('../controllers/product.controller');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Returns a list of all products.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter products by category
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/', getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single product
 *       404:
 *         description: Product not found
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               image:
 *                 type: string
 *               rating:
 *                 type: object
 *                 properties:
 *                   rate:
 *                     type: number
 *                   count:
 *                     type: number
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', schemaValidator({ body: addProductSchema }), createProduct);

module.exports = router;
