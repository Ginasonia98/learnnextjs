import { useRouter } from "next/router";

const Products = ({ products }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ul key={item.id}>
          <li>
            {item.name} - {item.price}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
};
