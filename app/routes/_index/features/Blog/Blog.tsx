import { ReactNode } from "react";
import * as styles from "./styles.css";

import { ArticleList, ArticleData } from "../../../../component/Article";

// 記事データの例
const sampleArticles: ArticleData[] = [
    {
        id: "1",
        title: "卒業ライブイベントページ",
        description: "2025卒業ライブBorderLessのイベントページです。",
        thumbnailUrl: "/images/account_icon_v2.jpg",
        date: "2023年8月15日",
        url: "/blog/remix-portfolio"
    },
    {
        id: "2",
        title: "電子チケット作成サイト",
        description: "ライブの電子チケットを作成するサイトです。",
        thumbnailUrl: "/images/account_icon_v2.jpg",
        date: "2023年8月10日",
        url: "/blog/typescript-basics"
    }
];

export const Blog = (): ReactNode => {
    return (
        <div className={styles.blog}>
            <div className={styles.subtitleFrame}>
                <div className={styles.subTitle}>Blog</div>
            </div>
            <div className={styles.blogList}>
                <div>
                    <ArticleList articles={sampleArticles} />
                </div>
            </div>
        </div>
    )
}