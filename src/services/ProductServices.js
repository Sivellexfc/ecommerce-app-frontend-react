
import axios from "axios";
import Cookies from "js-cookie";

class ProductService {
  static async getProductsByStore(storeId) {
    try {
      const token = Cookies.get("authToken");
      const response = await axios.get(
        `http://localhost:8889/api/product/get/seller/${storeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; 
    } catch (error) {
      console.error("Ürünler alınamadı:", error);
      throw error; 
    }
  }
}

export default ProductService;
