import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "@remix-run/react";

export default function EditPage() {
    const { productId } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            if (productId) {
                const docRef = doc(db, "productPosts", productId);
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
    }, [productId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (productId) {
            const docRef = doc(db, "productPosts", productId);
            await updateDoc(docRef, {
                title,
                content,
                thumbnail,
            });
        }
    };

    return (
        <div>
            <h1>Edit Page</h1>
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