// User API functions

const BASE_URL = "http://localhost:5000/user";

// 1. Register a user
export async function registerUser(user) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

// 2. Get a user by ID
export async function getUserById(userData) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
}

// 3. Delete a user by ID
export async function deleteUser(userId) {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: "DELETE",
  });
  return res.json();
}

// 4. Get all users
export async function getAllUsers() {
  const res = await fetch(BASE_URL);
  return res.json();
}

// 5. Update a user by ID
export async function updateUser(userId, updatedUser) {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser),
  });
  return res.json();
}
