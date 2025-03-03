import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "@remix-run/react";
import * as styles from "./styles.css";

type BlogPost = {
    id: string;
    title: string;
    createdAt: string;
    thumbnail: string;
};

export default function BlogIndex() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "blogPosts"));
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as BlogPost[];
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <div className={styles.title}>Blog List</div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <div className={styles.thumbnail}>
                            <img src={post.thumbnail} alt={post.title} />
                        </div>
                        <div className={styles.title}>{post.title}</div>
                        <p className="color: var(--color-white)">{post.createdAt}</p>
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
