import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "@remix-run/react";
import "zenn-markdown-html";
import "zenn-content-css";
import * as styles from "./styles.css";
type BlogPost = {
    title: string;
    content: string;
    createdAt: string;
    thumbnail: string;
};

export default function BlogPost() {
    const { blogId } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (blogId) {
                const docRef = doc(db, "blogPosts", blogId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setPost(docSnap.data() as BlogPost);
                }
            }
        };

        fetchPost();

        // クライアントサイドでのみ実行
        import("zenn-embed-elements").then((module) => {
            // 必要に応じてモジュールを使用
        });
    }, [blogId]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.thumbnail}>
                <img src={post.thumbnail} alt={post.title} />
            </div>
            <p>{post.createdAt}</p>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
