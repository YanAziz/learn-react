import PropTypes from "prop-types";
import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="flex flex-col justify-between w-full max-w-sm mx-2 bg-gray-800 border border-gray-700 rounded-lg shadow">{children}</div>;
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
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
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
  name: PropTypes.string,
};

Footer.propTypes = {
  price: PropTypes.string,
};

export default CardProduct;
