import { gql, useQuery } from "@apollo/client";
import React from "react";
import Markdown from "react-markdown";

const LINKS = gql`
    query getLinks {
        links {
            data {
                id
                attributes {
                    category
                    links
                }
            }
        }
    }
`;

interface Link {
    id: number;
    attributes: {
        category: string;
        links: string;
    };
}

interface Data {
    links: {
        data: Link[];
    };
}

const Footer = () => {
    const { loading, error, data } = useQuery<Data>(LINKS);
    console.log(data);
    return (
        <footer
            id="footer"
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
                    data.links.data.map((item) => {
                        return (
                            <div>
                                <b
                                    className="
                                    text-base
                                    text-gray-400
                                    "
                                >
                                    {item.attributes.category}
                                </b>
                                <Markdown
                                    className="
                                    text-base
                                    text-gray-400
                                    "
                                >
                                    {item.attributes.links}
                                </Markdown>
                            </div>
                        );
                    })}
            </div>
        </footer>
    );
};

export default Footer;
