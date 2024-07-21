import CategoryItem from "./CategoryItem/CategoryItem.component";
import styles from "./Categories.module.css";
import Layout from "@/layouts/Layout";
import useCategories from "@/hooks/useCategories.hook";

interface CategoriesProps {}

function Categories({}: CategoriesProps) {
  const { categories } = useCategories();

  return (
    <Layout>
      <div className={styles["categories-container"]}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </Layout>
  );
}

export default Categories;
