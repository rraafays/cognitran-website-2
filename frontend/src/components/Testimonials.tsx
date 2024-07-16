"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/MovingCards";
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

export interface Article {
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

export function Testimonials() {
    const { loading, error, data } = useQuery<Data>(ARTICLES);
    return (
        data && (
            <div>
                <div className="h-[20rem] rounded-md flex mt-0 pt-0 flex-col antialiased bg-black-100 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        articles={data.articles.data}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        )
    );
}
