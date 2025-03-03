import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "@remix-run/react";

export default function EditBlog() {
    const { blogId } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            if (blogId) {
                const docRef = doc(db, "blogPosts", blogId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setTitle(data.title);
                    setContent(data.content);
                    setThumbnail(data.thumbnail);
                }
            }
        };

        fetchPost();
    }, [blogId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (blogId) {
            const docRef = doc(db, "blogPosts", blogId);
            await updateDoc(docRef, {
                title,
                content,
                thumbnail,
            });
        }
    };

    return (
        <div>
            <h1>Edit Blog</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Thumbnail URL"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}