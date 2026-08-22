export const addToCart = async (item, quantity = 1) => {
    try {
      const token = localStorage.getItem("token");
  
      // Login check
      if (!token) {
        alert("Please login first");
        return null;
      }
  
      // Product ID check
      if (!item?._id) {
        alert("Product ID not found");
        return null;
      }
  
      const response = await fetch(
        "https://demoshopapp-tn4i.vercel.app/api/cart/add",
        {
          method: "POST",
  
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
  
          body: JSON.stringify({
            productId: item._id,
            quantity: quantity,
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add product to cart"
        );
      }
  
      console.log("Cart updated:", data);
  
      alert(`${item.name} added to cart 🛒`);
  
      return data;
  
    } catch (error) {
      console.error("Add to cart error:", error);
  
      alert(error.message || "Something went wrong");
  
      return null;
    }
  };