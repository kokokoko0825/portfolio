import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function NewBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addDoc(collection(db, "blogPosts"), {
            title,
            content,
            thumbnail,
            createdAt: new Date().toISOString(),
        });
        setTitle("");
        setContent("");
        setThumbnail("");
    };

    return (
        <div>
            <h1>Create New Blog</h1>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}