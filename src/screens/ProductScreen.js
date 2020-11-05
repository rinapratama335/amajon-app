import { Link } from "react-router-dom";
import data from "../assests/dummy/data";
import Rating from "../components/Rating";

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="row top">
      <Link to="/">Back to Result</Link>
      <div className="col-2">
        <img className="large" src={product.image} alt={product.name} />
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </li>
          <li>Price: Rp. {product.price}</li>
          <li>
            <p>{product.descripition}</p>
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="proce">Rp. {product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="error">Unavailabe</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button className="primary block">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
