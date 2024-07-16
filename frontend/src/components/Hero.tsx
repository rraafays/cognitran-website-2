import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";

const BRAND = gql`
    query getArticles {
        brand {
            data {
                attributes {
                    icon {
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

const Hero = () => {
    const { loading, error, data } = useQuery(BRAND);
    return (
        <div
            className="
            pb-20 
            pt-36
            "
        >
            <Spotlight
                className="
                -top-40 
                -left-10 
                md:-left-32
                md:-top-20
                h-screen
                "
                fill="white"
            />
            <Spotlight
                className="
                top-10 
                left-full 
                h-[80vh]
                w-[50vw]
                "
                fill="purple"
            />
            <Spotlight
                className="
                top-28 
                left-80 
                h-[80vh]
                w-[50vw]
                "
                fill="blue"
            />
            <div
                className="
                h-screen 
                w-full 
                dark:bg-black-100
                bg-white
                dark:bg-grid-white/[0.1] 
                bg-grid-black/[0.2] 
                flex 
                items-center 
                justify-center 
                absolute 
                top-0 
                right-2
                "
            >
                <div
                    className="
                    absolute 
                    pointer-events-none 
                    inset-0 
                    flex 
                    items-center 
                    justify-center 
                    dark:bg-black-100 
                    bg-white 
                    [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
                    "
                />
            </div>
            <div className="z-0 relative justify-center items-center opacity-100 flex">
                <Image
                    width={200}
                    height={200}
                    src={
                        data &&
                        `http://localhost:1337${data.brand.data.attributes.icon.data.attributes.url}`
                    }
                    alt={""}
                />
            </div>
            <div
                className="
                flex 
                justify-center 
                relative 
                my-20 
                z-10
                "
            >
                <div
                    className="
                    max-w-[89vw] 
                    md:max-w-2xl 
                    lg:max-w-[60vw] 
                    flex 
                    flex-col 
                    items-center 
                    justify-center
                    "
                >
                    <h2
                        className="
                        uppercase 
                        tracking-widest 
                        text-xs 
                        text-center 
                        text-blue-100 
                        max-w-80
                        z-10
                        "
                    >
                        Innovative Technology
                    </h2>
                    <TextGenerateEffect
                        className="
                        text-center
                        text-[40px]
                        md:text-5xl
                        lg:text-6xl
                        z-10
                        "
                        words="We are a global OEM IT Partner - experts in Aftersales, 
                        Diagnostics, Service Analytics, Content Management 
                        & Multilingual Publications."
                    />
                    <p
                        className="
                        text-center
                        md:tracking-wider
                        mb-4
                        text-sm
                        md:text-sm
                        lg:text-sm
                        z-10
                        "
                    >
                        (a Snap-On Inc. Company)
                    </p>
                    <a href="#products">
                        <MagicButton
                            text="Browse Products"
                            icon={<FaLocationArrow />}
                            position={"left"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
