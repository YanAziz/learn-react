import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Adudis",
    price: "$100.00",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi corrupti suscipit, perferendis, commodi id reprehenderit dolorum eligendi ratione provident similique quae, blanditiis consequatur officia unde voluptatum
    saepe nam! Nihil.`,
  },
  {
    id: 2,
    name: "Niku",
    price: "$55.99",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Adadong",
    price: "$73.00",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
