import axios from 'axios';

const CATEGORY_URL = 'https://m.aboutyou.de/api/products/v3/20250?appId=428&limit=48&page=1&sort=';
const PRODUCTS_URL = 'https://m.aboutyou.de/api/products/v2/getProducts?productId=';

export const fetchCategory = () => {
  // Uncomment to reproduce error scenarios
  // if(Math.random() > 0.5) {
  //   return axiosGetRequest('https://randomurl');
  // }
  return axiosGetRequest(CATEGORY_URL);
};

export const fetchProducts = (productIds) => {
  // Uncomment to reproduce error scenarios
  // if(Math.random() > 0.5) {
  //   return axiosGetRequest('https://randomurl');
  // }
  const GENERATED_URL = `${PRODUCTS_URL}${productIds.join(',')}`
  return axiosGetRequest(GENERATED_URL);
};

const axiosGetRequest = (URL) => {
  return axios.get(URL)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}