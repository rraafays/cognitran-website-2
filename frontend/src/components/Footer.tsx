import { gql, useQuery } from "@apollo/client";
import React from "react";

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

const Footer = () => {
    const { loading, error, data } = useQuery<Data>(ARTICLES);

    return (
        <footer
            className="
            flex 
            flex-col
            mt-5
            border-t
            border-gray-700
            "
        >
            <div
                className="
                flex 
                max-md:flex-col 
                flex-wrap
                justify-between
                gap-5
                sm:px16
                px-6
                py-10
                "
            >
                <div
                    className="
                    flex
                    flex-col
                    justify-start
                    items-start
                    gap-6
                    "
                >
                    <p
                        className="
                        text-base
                        text-gray-400
                        "
                    >
                        <b>Cognitran</b> Limited
                        <br />
                        All rights reserved &copy;
                    </p>
                </div>
                {data &&
                    data.articles.data.map((item) => {
                        return <div>{item.attributes.title}</div>;
                    })}
            </div>
        </footer>
    );
};

export default Footer;
