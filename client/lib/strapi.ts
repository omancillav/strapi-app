const BASE_URL = "http://localhost:1337";

export async function fetchStrapiData(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    throw error;
  }
}
