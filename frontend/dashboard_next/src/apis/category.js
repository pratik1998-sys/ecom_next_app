const BASE_URL = "http://localhost:5000/category";

export const addCategory = async (categoryData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoryData),
  });
  return await response.json();
};

export const getCategoryById = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/${categoryId}`);
  return await response.json();
};

export const deleteCategory = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/${categoryId}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const getAllCategories = async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
};

export const updateCategory = async (categoryId, updatedData) => {
  const response = await fetch(`${BASE_URL}/${categoryId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return await response.json();
};
