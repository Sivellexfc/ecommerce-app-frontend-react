import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

class AuthServices {
  constructor() {
    this.baseUrl = "http://localhost:8889/auth";
  }

  async loginSeller(loginData) {
    try {
      const response = await axios.post(`${this.baseUrl}/token`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const token = response.data;
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.roles;

        localStorage.setItem("userRole", userRole);
        Cookies.set("authToken", token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
        this.getStoreId(decodedToken.accountId);
        return token;
      }
    } catch (error) {
      console.error("Login hatası:", error);
      throw error;
    }
  }

  async loginCustomer(loginData) {
    try {
      const response = await axios.post(`${this.baseUrl}/token`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const token = response.data;
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.roles;
        console.log("userole" + userRole)
        localStorage.setItem("userRole", userRole);
        Cookies.set("authToken", token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });
        return token;
      }
    } catch (error) {
      console.error("Login hatası:", error);
      throw error;
    }
  }

  async getStoreId(userId) {
    try {
      console.log("getStore gövdesi");
      const user = userId;
      const response = await axios.get(`${this.baseUrl}/getStoreId`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          userId: user,
        },
      });

      Cookies.set("storeId", response.data, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async validateToken(token) {
    try {
      const response = await axios.get(`${this.baseUrl}/validate`, {
        params: { token },
      });
      return response;
    } catch (error) {
      console.error("Token doğrulama hatası:", error);
      throw error;
    }
  }

  async registerSeller(registerData) {
    console.log(registerData);
    try {
      const response = await axios.post(
        `${this.baseUrl}/register-seller`,
        registerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        try {
          const response = await axios.post(
            `${this.baseUrl}/token`,
            registerData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            const token = response.data;
            Cookies.set("authToken", token, {
              expires: 1,
              secure: true,
              sameSite: "Strict",
            });
            const decodedToken = jwtDecode(token);
            const userRole = decodedToken.roles;
    
            localStorage.setItem("userRole", userRole);
            return token;
          }
        } catch (error) {
          console.error("Login hatası:", error);
          throw error;
        }
      }
    } catch (error) {
      console.error("Register hatası:", error);
      throw error;
    }
  }

  async registerCustomer(registerData) {
    console.log(registerData);
    try {
      const response = await axios.post(
        `${this.baseUrl}/register-customer`,
        registerData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        try {
          const response = await axios.post(
            `${this.baseUrl}/token`,
            registerData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            const token = response.data;
            Cookies.set("authToken", token, {
              expires: 1,
              secure: true,
              sameSite: "Strict",
            });
            const decodedToken = jwtDecode(token);
            const userRole = decodedToken.roles;
            console.log("userROle"+userRole)
            localStorage.setItem("userRole", userRole);
            return token;
          }
        } catch (error) {
          console.error("Login hatası:", error);
          throw error;
        }
      }
    } catch (error) {
      console.error("Register hatası:", error);
      throw error;
    }
  }

}

export default new AuthServices();
