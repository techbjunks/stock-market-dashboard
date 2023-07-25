import { BASE_URL_ENDPOINT, API_KEY, API_FUNCTIONS } from "../../constant";

export const getStockResults = (searchQuery: unknown): string => {
  return `${BASE_URL_ENDPOINT}query?function=${API_FUNCTIONS.SYMBOL_SEARCH}&keywords=${searchQuery}&apikey=${API_KEY}`;
};

export const getStockDetail = (searchQuery: string): string => {
  return `${BASE_URL_ENDPOINT}query?function=${API_FUNCTIONS.OVERVIEW}&symbol=${searchQuery}&apikey=${API_KEY}`;
};
