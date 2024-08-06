import CategoryItem from "./CategoryItem/CategoryItem.component";
import styles from "./Categories.module.css";
import Layout from "@/layouts/Layout";
import useCategories from "@/hooks/useCategories.hook";
import Spinner from "@components/spinner/Spinner.component";

interface CategoriesProps {}

function Categories({}: CategoriesProps) {
  const { categories, isLoading } = useCategories();

  let categoriesContainer = <Spinner />;
  if (!isLoading) {
    categoriesContainer = (
      <div className={styles["categories-container"]}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  }

  return <Layout>{categoriesContainer}</Layout>;
}

export default Categories;
