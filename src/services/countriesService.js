/**
 * Get all countries
 * @returns {Array} countries array
 */
export const getAllCounties = async () => {
  try {
    const data = await fetch('https://restcountries.com/v3.1/all');
    return await data.json();
  } catch (error) {
    console.error(error);
  }
};
