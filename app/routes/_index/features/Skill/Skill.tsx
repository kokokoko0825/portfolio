import { ReactNode } from "react";
import { SkillSheet } from "~/component/SkillSheet";
import * as styles from "./styles.css";

const skills = [
    {
        name: "TypeScript",
        icon: "/images/account_icon_v2.jpg",
        level: 4
    },
    {
        name: "React",
        icon: "/images/account_icon_v2.jpg",
        level: 5
    },
    {
        name: "Python",
        icon: "/images/account_icon_v2.jpg",
        level: 3
    },
    {
        name: "Python",
        icon: "/images/account_icon_v2.jpg",
        level: 3
    },
    {
        name: "Python",
        icon: "/images/account_icon_v2.jpg",
        level: 3
    }
    // 他のスキルを追加
];

export const Skill = (): ReactNode => {
    return (
        <div className={styles.skill}>
            <div className={styles.subtitleFrame}>
                <div className={styles.subTitle}>Skill</div>
            </div>
            <SkillSheet skills={skills} />;
        </div>
    );
};
