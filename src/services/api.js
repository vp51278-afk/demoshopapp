const API_URL = process.env.REACT_APP_API_URL + "/api";

// Get all products
export const getProducts = async () => {
  try {
    const response = await fetch(
      `${API_URL}/products`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Error fetching products:",
      error
    );

    return [];
  }
};

// Get products by category
export const getProductsByCategory = async (
  category
) => {
  try {
    const response = await fetch(
      `${API_URL}/products/category/${encodeURIComponent(
        category
      )}`
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch category products"
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Error fetching category products:",
      error
    );

    return [];
  }
};

// Get single product
export const getProductById = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/products/${id}`
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch product"
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Error fetching product:",
      error
    );

    return null;
  }
};