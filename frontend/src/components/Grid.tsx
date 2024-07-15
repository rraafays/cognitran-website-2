"use client";

import { gql, useQuery } from "@apollo/client";

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

type Articles = Data["articles"]["data"];

const style =
    "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center";

const Grid = () => {
    const { loading, error, data } = useQuery<Data>(ARTICLES);
    data && console.log(data);
    return (
        data && (
            <div
                className="
                grid 
                grid-cols-3 
                relative
                auto-rows-[300px]
                gap-4
                my-10
                "
            >
                {data.articles.data.map((item, i) => (
                    <section
                        id="products"
                        key={i}
                        className={`${style} ${i === 1 && "md:col-span-2"} ${i === 2 && "md:row-span-2"}`}
                    >
                        <h2 className="text-xl font-bold">
                            {item.attributes.title}
                        </h2>
                        <p className="text-gray-400">
                            {item.attributes.summary}
                        </p>
                    </section>
                ))}
            </div>
        )
    );
};

export default Grid;
