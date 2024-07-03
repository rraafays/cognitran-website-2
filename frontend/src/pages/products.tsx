import { Key } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Markdown from "react-markdown";

type Products = {
  data: ProductsData[];
};

type ProductsData = {
  id: Key;
  attributes: Product;
};

type Product = {
  name: string;
  logo: ImageData;
  features: string;
  infoPack: File;
};

export default function Products() {
  const { loading, data, error } = useFetch<Products>("http://localhost:1337/api/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data?.data.map((product) => (
        <div>
          <div>
            <h2>{product.attributes.name}</h2>
          </div>
          <div>
            <Markdown>{product.attributes.features}</Markdown>
          </div>
        </div>
      ))}
    </div>
  );
}
