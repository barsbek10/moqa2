// similar products
const similarItems = (currentItem: any, allItems: any[]) => {
  let categories: string[] = [];

  // set categories
  if (currentItem.data.categories && currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // If no categories are available, return empty array
  if (categories.length === 0) {
    return [];
  }

  // filter by categories
  const filterByCategories = allItems.filter(
    (item: any) =>
      item.data.categories &&
      categories.find((category) => item.data.categories.includes(category)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories])];

  // filter by slug
  const filterBySlug = mergedItems.filter((post) => post.id !== currentItem.id);

  return filterBySlug;
};

export default similarItems;
