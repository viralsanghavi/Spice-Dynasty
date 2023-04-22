import {ALL_PRODUCTS} from "@/utils/constants";

const AllProducts = () => {
  return (
    <div>
      {ALL_PRODUCTS.map((product) => {
        return <p key={product}>{product}</p>;
      })}
    </div>
  );
};

export default AllProducts;
