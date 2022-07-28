export const getRandomCart = async () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  try {
    const response = await fetch(
      `https://fakestoreapi.com/carts/${randomNumber}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
