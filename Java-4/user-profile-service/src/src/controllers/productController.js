const supabase = require("../utils/supabaseClient");

// GET /products
exports.getAllProducts = async (req, res) => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// GET /products/:id
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single();
  if (error) return res.status(404).json({ message: "Product not found" });
  res.json(data);
};

// POST /products
exports.createProduct = async (req, res) => {
  const { name, price } = req.body;
  const { data, error } = await supabase.from("products").insert([{ name, price }]).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

// PUT /products/:id
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const { data, error } = await supabase
    .from("products")
    .update({ name, price })
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(404).json({ message: "Product not found" });
  res.json(data);
};

// DELETE /products/:id
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) return res.status(404).json({ message: "Product not found" });
  res.status(204).send();
};
