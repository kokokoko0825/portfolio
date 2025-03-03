import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const frame = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});

export const titleFrame = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    gap: "10px",
    borderBottom: "4px solid #541BFF",
});

export const title = style({
    color: vars.color.lightText,
    fontFamily: vars.typography.fontFamily.jap,
    fontSize: "70px",
    fontStyle: "normal",
    fontWeight: "400",
});

export const thumbnail = style({
    width: "50%",
});

export const text = style({
    color: vars.color.lightText,
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.jap,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
});

