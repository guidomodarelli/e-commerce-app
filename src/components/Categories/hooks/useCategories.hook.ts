import { uniqId } from "../../../utils/id";
import { Category } from "../category.types";

function useCategories() {
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

  return { categories };
}

export default useCategories;
