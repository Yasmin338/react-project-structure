const API_URL = "https://dummyjson.com";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
  brand?: string;
  stock: number;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

async function fetchApi<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export function getProducts(
  search: string,
  limit: number,
  skip: number,
): Promise<ProductsResponse> {
  const endpoint = search.trim()
    ? `${API_URL}/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`
    : `${API_URL}/products?limit=${limit}&skip=${skip}`;

  return fetchApi<ProductsResponse>(endpoint);
}

export function getProduct(id: string): Promise<Product> {
  return fetchApi<Product>(`${API_URL}/products/${id}`);
}
