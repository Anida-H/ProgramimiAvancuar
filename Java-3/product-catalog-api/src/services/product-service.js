const productData = require("../data/products");

class ProductService {
  constructor() {
    this.products = [...productData]; // Kopjojmë të dhënat për të shmangur ndryshimin e tyre direkt
  }

  // Get all products with optional filtering
  getAllProducts(filters = {}) {
    let result = [...this.products];

    // Apply category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    // Apply price filters
    if (filters.minPrice) {
      result = result.filter(product => product.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    // Apply in-stock filter
    if (filters.inStock === 'true') {
      result = result.filter(product => product.inStock === true);
    }

    // Apply pagination
    const limit = filters.limit ? parseInt(filters.limit) : 20;
    const offset = filters.offset ? parseInt(filters.offset) : 0;

    return {
      total: result.length,
      limit,
      offset,
      products: result.slice(offset, offset + limit)
    };
  }

  // Get product by ID
  getProductById(id) {
    const product = this.products.find(p => p.id.toString() === id.toString());
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  // Create a new product
  createProduct(productData) {
    if (!productData.name || !productData.price || !productData.category) {
      throw new Error("Product must have name, price, and category");
    }

    // Kontrollo nëse ka produkte, përndryshe fillo me ID = 1
    const newId = this.products.length > 0
      ? (Math.max(...this.products.map(p => parseInt(p.id))) + 1).toString()
      : "1";

    const newProduct = {
      id: newId,
      ...productData,
      inStock: productData.inStock !== undefined ? productData.inStock : true,
      stockCount: productData.stockCount !== undefined ? productData.stockCount : 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.products.push(newProduct);
    return newProduct;
  }

  // Update an existing product
  updateProduct(id, updates) {
    const index = this.products.findIndex(p => p.id.toString() === id.toString());
    if (index === -1) {
      throw new Error("Product not found");
    }

    const updatedProduct = {
      ...this.products[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  // Delete a product
  deleteProduct(id) {
    const index = this.products.findIndex(p => p.id.toString() === id.toString());
    if (index === -1) {
      throw new Error("Product not found");
    }

    this.products.splice(index, 1);
    return {
      success: true,
      message: "Product deleted successfully"
    };
  }

  // Get all categories
  getAllCategories() {
    const categories = [...new Set(this.products.map(p => p.category))];
    return { categories };
  }
}

module.exports = new ProductService();
