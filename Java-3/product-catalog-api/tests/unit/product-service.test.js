const ProductService = require("../../src/services/product-service");

describe("ProductService Unit Tests", () => {
  
  beforeEach(() => {
    // Reset gjendjen e produkteve për çdo test
    ProductService.products = [
      { id: "1", name: "Laptop", price: 1000, category: "electronics", inStock: true, stockCount: 5 },
      { id: "2", name: "Phone", price: 500, category: "electronics", inStock: true, stockCount: 10 }
    ];
  });

  // ✅ Teston marrjen e produkteve me filtra
  test("should get all products", () => {
    const result = ProductService.getAllProducts();
    expect(result.total).toBe(2);
    expect(result.products.length).toBe(2);
  });

  test("should filter products by category", () => {
    const result = ProductService.getAllProducts({ category: "electronics" });
    expect(result.total).toBe(2);
  });

  // ✅ Teston marrjen e një produkti me ID
  test("should get product by ID", () => {
    const product = ProductService.getProductById("1");
    expect(product).toHaveProperty("name", "Laptop");
  });

  test("should throw error for non-existing product ID", () => {
    expect(() => ProductService.getProductById("99")).toThrow("Product not found");
  });

  // ✅ Teston krijimin e një produkti të ri
  test("should create a new product", () => {
    const newProduct = { name: "Tablet", price: 300, category: "electronics" };
    const createdProduct = ProductService.createProduct(newProduct);

    expect(createdProduct).toHaveProperty("id");
    expect(createdProduct.name).toBe("Tablet");
    expect(ProductService.products.length).toBe(3);
  });

  test("should throw error when creating product without required fields", () => {
    expect(() => ProductService.createProduct({})).toThrow("Product must have name, price, and category");
  });

  // ✅ Teston përditësimin e një produkti
  test("should update an existing product", () => {
    const updatedProduct = ProductService.updateProduct("1", { price: 1200 });

    expect(updatedProduct.price).toBe(1200);
    expect(updatedProduct.updatedAt).toBeDefined();
  });

  test("should throw error when updating a non-existing product", () => {
    expect(() => ProductService.updateProduct("99", { price: 1500 })).toThrow("Product not found");
  });

  // ✅ Teston fshirjen e një produkti
  test("should delete an existing product", () => {
    const result = ProductService.deleteProduct("1");

    expect(result.success).toBe(true);
    expect(ProductService.products.length).toBe(1);
  });

  test("should throw error when deleting a non-existing product", () => {
    expect(() => ProductService.deleteProduct("99")).toThrow("Product not found");
  });

  // ✅ Teston marrjen e kategorive unike
  test("should return all categories", () => {
    const categories = ProductService.getAllCategories();
    expect(categories.categories).toContain("electronics");
    expect(categories.categories.length).toBe(1);
  });

});
