"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { NavigationBar } from "@/components/ui/NavigationBar";
import { FaHome } from "react-icons/fa";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Footer from "@/components/Footer";
import { AiFillProduct } from "react-icons/ai";
import { RiArtboardFill, RiArticleFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
});

export default function Home() {
    return (
        <main
            className="
            relative 
            bg-black-100 
            flex justify-center 
            items-center 
            flex-col 
            overflow-hidden 
            mx-auto 
            sm:px-10 
            px-5
            "
        >
            <ApolloProvider client={client}>
                <div className=" max-w-4xl w-full">
                    <NavigationBar
                        navItems={[
                            { name: "Home", link: "/", icon: <FaHome /> },
                            {
                                name: "Products",
                                link: "#products",
                                icon: <AiFillProduct />,
                            },
                            {
                                name: "Articles",
                                link: "#articles",
                                icon: <RiArticleFill />,
                            },
                            {
                                name: "Careers",
                                link: "#careers",
                                icon: <MdWork />,
                            },
                        ]}
                    />
                    <Hero />
                    <Grid />
                    <Footer />
                </div>
            </ApolloProvider>
        </main>
    );
}
