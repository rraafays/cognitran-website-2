import { Key } from "react";
import { useFetch } from "../hooks/useFetch";

type NewsData = {
  data: NewsAttribute[];
};

type NewsAttribute = {
  attributes: NewsItem;
};

type NewsItem = {
  id: Key;
  title: string;
  body: string;
  publishedAt: string;
};

export default function News() {
  const { loading, data, error } = useFetch<NewsData>("http://localhost:1337/api/blogs");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      {data?.data.map((newsItem) => (
        <div>
          <div>
            <p>{new Date(newsItem.attributes.publishedAt).toISOString().split("T")[0]}</p>
            <h2>{newsItem.attributes.title}</h2>
          </div>
          <div>
            <p>{newsItem.attributes.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
