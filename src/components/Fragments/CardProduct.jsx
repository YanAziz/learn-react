import PropTypes from "prop-types";
import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm mx-2 bg-gray-800 border border-gray-700 rounded-lg shadow">{children}</div>;
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};
const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center px-5 pb-5">
      <span className="text-xl font-bold text-white mr-12">{price}</span>
      <Button className="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

CardProduct.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  image: PropTypes.string,
};

Body.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Footer.propTypes = {
  price: PropTypes.string,
};

export default CardProduct;
