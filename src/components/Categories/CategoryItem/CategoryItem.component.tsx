import { Category } from "@core/domain/entities/Category";
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
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
