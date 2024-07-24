import { Product } from "@core/domain/entities";
import "./category-preview.styles.css";
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
    <div className="category-preview-container">
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h2
          className={cn("title", {
            "text-center": center,
          })}
        >
          {title.toUpperCase()}
        </h2>
      </Link>
      <div className="preview">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
