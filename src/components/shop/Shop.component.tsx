import useProducts from "./useProducts.hook";

interface ShopProps {}

function Shop({}: ShopProps) {
  const { data } = useProducts();
  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default Shop;
