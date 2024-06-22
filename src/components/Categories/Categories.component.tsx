import { uniqId } from "../../utils/id";
import CategoryItem from "./CategoryItem/CategoryItem.component";
import { Category } from "./category.types";
import "./Categories.styles.css";

interface CategoriesProps {}

function Categories({}: CategoriesProps) {
  const categories: Category[] = [
    {
      id: uniqId(),
      title: "Hats",
      img: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: uniqId(),
      title: "Jackets",
      img: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: uniqId(),
      title: "Sneakers",
      img: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: uniqId(),
      title: "Women",
      img: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: uniqId(),
      title: "Men",
      img: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
