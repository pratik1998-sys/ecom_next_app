// Product API functions

const BASE_URL = "http://localhost:5000/product";

// 1. Add new product
export async function addProduct(product) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
}

// 2. Get a product by ID
export async function getProductById(productId) {
  const res = await fetch(`${BASE_URL}/${productId}`);
  return res.json();
}

// 3. Delete a product by ID
export async function deleteProduct(productId) {
  const res = await fetch(`${BASE_URL}/${productId}`, {
    method: "DELETE",
  });
  return res.json();
}

// 4. Get all products
export async function getAllProducts() {
  const res = await fetch(BASE_URL);
  return res.json();
}

// 5. Update a product by ID
export async function updateProduct(productId, updatedProduct) {
  const res = await fetch(`${BASE_URL}/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });
  return res.json();
}
