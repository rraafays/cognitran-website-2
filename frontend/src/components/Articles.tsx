"use client";

import { gql, useQuery } from "@apollo/client";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "./SearchBar";

const ARTICLES = gql`
    query getArticles {
        articles {
            data {
                id
                attributes {
                    title
                    summary
                    body
                }
            }
        }
    }
`;

interface Article {
    id: number;
    attributes: {
        title: string;
        summary: string;
        body: string;
    };
}

interface Data {
    articles: {
        data: Article[];
    };
}

const style =
    "bg-black-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center";

const Grid = () => {
    const { loading, error, data } = useQuery<Data>(ARTICLES);
    data && console.log(data);
    return (
        <div>
            <SearchBar />
            {data && (
                <section
                    id="articles"
                    className="
                grid 
                md:grid-cols-4 
                relative
                auto-rows-auto
                gap-4
                "
                >
                    {data.articles.data.map((item, i) => (
                        <div key={i} className={`${style}`}>
                            {/* className={`${style} ${i === 1 && "md:col-span-2"} ${i === 2 && "md:row-span-2"}`} */}
                            <h2 className="text-lg font-bold py-5">
                                {item.attributes.title}
                            </h2>
                            <p className="text-gray-400 text-sm">
                                {item.attributes.summary}
                            </p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};

export default Grid;
