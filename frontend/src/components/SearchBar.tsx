"use client";

import { gql, useQuery } from "@apollo/client";
import { PlaceholdersAndVanishInput } from "./ui/VanishingInput";
import { useEffect, useState } from "react";

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

export function SearchBar() {
    const { loading, error, data } = useQuery<Data>(ARTICLES);
    const [titles, setTitles] = useState<string[]>([]);

    useEffect(() => {
        if (data) {
            const titlesArray = data.articles.data.map(
                (article) => article.attributes.title
            );
            setTitles(titlesArray);
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[10rem] flex flex-col justify-center  items-center px-4">
            <PlaceholdersAndVanishInput
                placeholders={titles}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
