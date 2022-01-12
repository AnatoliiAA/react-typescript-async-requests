export const getRandomCart = async () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  const response = await fetch(
    `https://fakestoreapi.com/carts/${randomNumber}`
  );
  const result = await response.json();
  return result;
};
export const getProductById = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();
  return result;
};
