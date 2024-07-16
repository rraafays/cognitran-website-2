"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/Card";
import { gql, useQuery } from "@apollo/client";
import Markdown from "react-markdown";

export function ProductCard() {
    const PRODUCTS = gql`
        query getProducts {
            products {
                data {
                    attributes {
                        name
                        features
                        logo {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    interface Product {
        id: number;
        attributes: {
            name: string;
            features: string;
            logo: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
        };
    }

    interface Data {
        products: {
            data: Product[];
        };
    }

    const { loading, error, data } = useQuery<Data>(PRODUCTS);

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
            id="products"
        >
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-400 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left z-10 text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-gray-700">
                        {data ? data.products.data[0].attributes.name : ""}
                    </h2>
                </div>
                <div className="flex">
                    <Markdown className="mt-4 z-10 text-left  text-base/6 text-gray-700 font-semibold">
                        {data ? data.products.data[0].attributes.features : ""}
                    </Markdown>
                    {data && (
                        <Image
                            src={`http://localhost:1337${data.products.data[0].attributes.logo.data.attributes.url}`}
                            width={300}
                            height={300}
                            alt="linear demo image"
                            className="z-0 absolute filter opacity-50 object-contain rounded-2xl"
                        />
                    )}
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-white-100">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-blue-600">
                    Growth through Digitalisation
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-xs font-semibold text-blue-600">
                    At Cognitran, we connect innovation champions, forward
                    thinkers and world-class partners in the Automotive,
                    Engineering and IT industries to create next generation
                    digital solutions. Promoting digital excellence and
                    innovation, together in collaboration with OEMs we support
                    global initiatives and power tomorrow’s strategic vision,
                    today.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-600 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-xs">
                    <h2 className="text-left z-10 text-balance text-base md:text-xl lg:text-3xl font-bold tracking-[-0.015em] text-gray-700">
                        {data ? data.products.data[1].attributes.name : ""}
                    </h2>
                </div>
                <div className="flex">
                    <Markdown className="mt-4 z-10 text-left  text-base/6 text-gray-700 font-semibold">
                        {data ? data.products.data[1].attributes.features : ""}
                    </Markdown>
                    {data && (
                        <Image
                            src={`http://localhost:1337${data.products.data[1].attributes.logo.data.attributes.url}`}
                            width={300}
                            height={300}
                            alt="linear demo image"
                            className="z-0 absolute filter opacity-50 object-contain rounded-2xl"
                        />
                    )}
                </div>
            </WobbleCard>
        </div>
    );
}
