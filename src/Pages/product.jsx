import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi corrupti suscipit, perferendis, commodi id reprehenderit dolorum eligendi ratione provident similique quae, blanditiis consequatur officia unde voluptatum
          saepe nam! Nihil.
        </CardProduct.Body>
        <CardProduct.Footer price="$100.00" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi corrupti suscipit, perferendis, commodi id reprehenderit dolorum eligendi ratione provident similique quae, blanditiis consequatur officia unde voluptatum
          saepe nam! Nihil.
        </CardProduct.Body>
        <CardProduct.Footer price="$99.99" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
