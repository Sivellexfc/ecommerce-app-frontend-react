import axios from "axios";
import Cookies from "js-cookie";

class OrderServices {
  async fetchAllOrderByUserId(id) {
    try {
      const token = Cookies.get("authToken");
      const response = await axios.get(
        `http://localhost:8889/api/order/get/all/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new OrderServices();
