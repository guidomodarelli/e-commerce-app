import { Category } from "@core/category/Domain";
import styles from "./CategoryItem.module.css";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const { title, img } = category;
  return (
    <Link to={`/shop/${title}`} className={styles["category-container"]}>
      <div
        className={styles["background-image"]}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className={styles["category-body-container"]}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </Link>
  );
}

export default CategoryItem;
