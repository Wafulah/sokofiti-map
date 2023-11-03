import  { getCategory } from "../../pages/api";

// Assuming you have an API function called `getCategory` that fetches the categories
export async function getCategoryByIdByType(type) {
    try {
      const categories = await getCategory(); // Replace with your API call
      const selectedCategory = categories.find((category) => category.name === type);
  
      if (selectedCategory) {
        return selectedCategory.id;
      } else {
        return null; // Return null when no matching category is found
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      return null; // Return null on error
    }
  }
  