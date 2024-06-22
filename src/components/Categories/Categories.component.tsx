import CategoryItem from "./CategoryItem/CategoryItem.component";
import "./Categories.styles.css";
import useCategories from "./hooks/useCategories.hook";

interface CategoriesProps {}

function Categories({}: CategoriesProps) {
  const { categories } = useCategories();

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
