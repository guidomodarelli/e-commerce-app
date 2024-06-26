import { Category } from "../category.types";
import styles from "./CategoryItem.module.css";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const { title, img } = category;
  return (
    <div className={styles["category-container"]}>
      <div
        className={styles["background-image"]}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className={styles["category-body-container"]}>
        {/* img */}
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
