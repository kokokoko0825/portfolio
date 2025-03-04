import { ReactNode, useEffect } from "react";
import { Hero } from "./features/Hero/Hero";
import { About } from "./features/About/About";
import { Profile } from "./features/Profile/Profile";
import { Products } from "./features/Products/Products";
import { Skill } from "./features/Skill/Skill";
import { Blog } from "./features/Blog/Blog";
import { Layout } from "./features/Layout/Layout";
import { Link } from "@remix-run/react";
import { Header } from "~/component/Header/Header";

export default function Page(): ReactNode {
    useEffect(() => {
        console.log("クライアントサイドコードが実行されています");
        const heroSection = document.getElementById("hero");
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: "instant" });
        }
    }, []);

    return (
        <Layout>
            <Header />
            <Hero />
            <About />
            <Profile />
            <Products />
            <Skill />
            <Blog />
        </Layout>
    );
}