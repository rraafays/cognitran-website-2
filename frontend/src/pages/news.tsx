import { Key } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

type NewsSummary = {
  data: NewsData[];
};

type NewsData = {
  id: Key;
  attributes: News;
};

type News = {
  title: string;
  body: string;
  summary: string;
  publishedAt: string;
};

export default function News() {
  const { loading, data, error } = useFetch<NewsSummary>("http://localhost:1337/api/blogs");

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
            <p>{newsItem.attributes.summary}</p>
            <Link to={`/news/${newsItem.id}`}>Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
