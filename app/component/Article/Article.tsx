import { ReactNode } from "react";
import * as styles from "./styles.css";

interface ArticleProps {
    title: string;
    description: string;
    thumbnailUrl?: string;
    date?: string;
    url?: string;
}

export const Article = ({ title, description, thumbnailUrl, date, url }: ArticleProps): ReactNode => {
    return (
        <div className={styles.article}>
            <div className={styles.thumbnail} style={thumbnailUrl ? { backgroundImage: `url(${thumbnailUrl})` } : undefined}></div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {date && <div className={styles.date}>{date}</div>}
                <p className={styles.description}>{description}</p>
                {url && (
                    <a href={url} className={styles.readMore}>
                        続きを読む
                    </a>
                )}
            </div>
        </div>
    );
}