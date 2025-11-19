/**
 * API Configuration
 * Uses VITE_API_URL environment variable for flexible deployment
 * Falls back to localhost for development
 */

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const apiConfig = {
  baseUrl: API_URL,
  endpoints: {
    products: `${API_URL}/products/`,
    orders: `${API_URL}/orders/`,
    ordersUpdateStatus: `${API_URL}/orders/update-status/`,
    statsUsers: `${API_URL}/stats/users/`,
    statsSales: `${API_URL}/stats/sales/`,
    tiendaVegana: `${API_URL}/tienda-vegana`,
  },
};

export default apiConfig;
