import { Product } from "@core/domain/entities";
import styles from "./category-preview.module.css";
import ProductCard from "@/components/product-card/ProductCard.component";
import { Link } from "react-router-dom";
import { cn } from "@utils/cn";

interface CategoryPreviewProps {
  title: string;
  products: Product[];
  center?: boolean;
}

function CategoryPreview({ title, products, center }: CategoryPreviewProps) {
  return (
    <div className={styles["category-preview-container"]}>
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h2
          className={cn(styles.title, {
            "text-center": center,
          })}
        >
          {title.toUpperCase()}
        </h2>
      </Link>
      <div className={styles.preview}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
