import { ReactNode, useEffect } from "react";
import { Hero } from "./features/Hero/Hero";
import { About } from "./features/About/About";
import { Profile } from "./features/Profile/Profile";
import { Products } from "./features/Products/Products";
import { Skill } from "./features/Skill/Skill";
import { Blog } from "./features/Blog/Blog";
import { Layout } from "./features/Layout/Layout";
import { Link } from "@remix-run/react";

export default function Page(): ReactNode {
    useEffect(() => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: "instant" });
        }
    }, []);

    return (
        <Layout>
            <Hero />
            <About />
            <Profile />
            <Products />
            <Skill />
            <Blog />
            <Link to="/blog">Blog</Link>
            <Link to="/blog/new">NewBlog</Link>
            <Link to="/blog/edit">EditBlog</Link>
        </Layout>
    );
}