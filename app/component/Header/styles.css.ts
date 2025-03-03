import { vars } from "~/styles/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

const menuSlideIn = keyframes({
    from: {
        opacity: 0,
        transform: "translateX(100%)",
    },
    to: {
        opacity: 1,
        transform: "translateX(0)",
    },
});

export const header = style({
    display: "flex",
    padding: "14px 20px",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
});

export const menuButton = style({
    width: "60px",
    height: "60px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0.5rem",
    boxSizing: "border-box",
    zIndex: 1000,
    '@media': {
        'screen and (max-width: 720px)': {
            width: "40px",
            height: "40px",
        }
    }
});

export const menuButtonLine = style({
    width: "100%",
    height: "0.25rem",
    backgroundColor: vars.color.lightText,
});

export const menu = style({
    width: "auto",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: vars.color.background,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    animation: `${menuSlideIn} 0.3s ease-out forwards`,
    zIndex: 999,
});

export const menuItem = style({
    padding: "1rem",
    borderBottom: `1px solid ${vars.color.lightText}`,
    color: vars.color.lightText,
    textAlign: "center",
    cursor: "pointer",
    ":hover": {
        backgroundColor: vars.color.lightText,
        color: vars.color.background,
    },
    '@media': {
        'screen and (max-width: 720px)': {
            fontSize: "0.625rem",
        }
    }
});