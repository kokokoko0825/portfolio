import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { Header } from "~/component/Header/Header";

export function Hero(): ReactNode {
    return (
        <div className={styles.hero}>
            <Header />
            <div className={styles.title}>Koshi Quest(仮)</div>
        </div>
    );
}