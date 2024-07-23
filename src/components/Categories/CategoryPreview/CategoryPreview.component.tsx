import { Product } from "@core/domain/entities";
import "./category-preview.styles.css";
import ProductCard from "@/components/product-card/ProductCard.component";

interface CategoryPreviewProps {
  title: string;
  products: Product[];
}

function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <div className="category-preview-container">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
