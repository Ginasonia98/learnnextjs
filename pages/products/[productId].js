const ProductDetail = ({ product }) => {
  return (
    <div>
      {product.name} - {product.price}
    </div>
  );
};

export default ProductDetail;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:5000/products/${params.productId}`
  );

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
};
