import { Category } from "../category.types";
import "./CategoryItem.styles.css";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const { title, img } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="category-body-container">
        {/* img */}
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
