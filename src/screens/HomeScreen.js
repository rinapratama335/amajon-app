import data from "../assests/dummy/data";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div className="row center">
      {data.products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default HomeScreen;
