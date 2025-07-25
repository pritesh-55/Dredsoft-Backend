const Product = require("../models/product.model");
const ApiError = require("../utils/apiError");

exports.getAllProducts = async (req, res, next) => {
  try {
    const { sort = "desc", title, category } = req.query;
    const price = +req.query.price || 0;

    const filter = {};
    // Title search (case-insensitive, partial match)
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    // Category search (case-insensitive, partial match)
    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }
    // Filter by cooking time
    if (price) {
      filter.price = { $lte: Number(price) };
    }

    const options = {
      page: +req.query.page || 1,
      limit: +req.query.limit || 10,
      sort: { createdAt: sort === "asc" ? 1 : -1 },
    };
    const products = await Product.paginate(filter, options);
    res.json({ products });
  } catch (e) {
    next(e);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new ApiError(404, "Product not found");
    res.json({ product });
  } catch (e) {
    next(e);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    if (!newProduct) throw new ApiError(500, "Failed to create Product");
    res.status(201).json({ newProduct });
  } catch (e) {
    next(e);
  }
};
