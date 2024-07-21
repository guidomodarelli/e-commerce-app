import { Category } from "@core/domain/entities/Category";
import { ulid } from "ulid";

function useCategories() {
  const categories: Category[] = [
    {
      id: ulid(),
      title: "Hats",
      img: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: ulid(),
      title: "Jackets",
      img: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: ulid(),
      title: "Sneakers",
      img: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: ulid(),
      title: "Women",
      img: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: ulid(),
      title: "Men",
      img: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return { categories };
}

export default useCategories;
