export const API_BASE="http://localhost:5000/api"

export const API={
    AUTH_LOGIN:`${API_BASE}/auth/login`,
    AUTH_REGISTER:`${API_BASE}/auth/register`,
    USERS:`${API_BASE}/users`,
    PRODUCTS:`${API_BASE}/products`,
    PRODUCT_DETAILS:(id:string)=>`${API_BASE}/products/${id}`,
    CATEGORIES: `${API_BASE}/categories`,
    CATEGORY_DETAILS: (id: string) => `${API_BASE}/categories/${id}`,
    STOCK_ADJUST: `${API_BASE}/stock/adjust`,
    RECEIPTS: `${API_BASE}/receipts`,
    RECEIPT_DETAILS: (id: string) => `${API_BASE}/receipts/${id}`,
    DASHBOARD: `${API_BASE}/dashboard`,
}