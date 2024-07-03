import React, { Key } from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

type NewsItem = {
  data: NewsData;
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

export default function NewsItem() {
  const { id } = useParams();
  const { loading, error, data } = useFetch<NewsItem>("http://localhost:1337/api/blogs/" + id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);

  return (
    <div>
      {data?.data && (
        <div>
          <p>{new Date(data.data.attributes.publishedAt).toISOString().split("T")[0]}</p>
          <h2>{data.data.attributes.title}</h2>
          <Markdown>{data.data.attributes.body}</Markdown>
        </div>
      )}
    </div>
  );
}
