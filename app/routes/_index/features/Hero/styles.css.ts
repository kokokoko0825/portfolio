import { vars } from "app/styles/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

//const cubicBezier = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

const fadeInSlide = keyframes({
    from: {
        opacity: 0,
        //transform: "translateX(-100%)",
    },
    to: {
        opacity: 1,
        //transform: "translateX(0)",
    },
});

export const hero = style({
    display: "flex",
    width: "100%",
    height: "1024px",
    flexDirection: "column",
    alignItems: "center",
    background: "url(/images/poster2.jpg)",
    backgroundColor: vars.color.background,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
    //marginLeft: "calc(-50vw + 50%)",
    '@media': {
        'screen and (max-width: 767px)': {
            //height: "844px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
        }
    },

});

export const yearConatainer = style({
    display: "flex",
    padding: "4.22rem 0.625rem 0 6.25rem",
    alignItems: "flex-end",
    gap: "0.625rem",
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "13.37rem 0.625rem 0.625rem 0.625rem",
            alignItems: "center",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            padding: "5.625rem 0.625rem 0 3.125rem"
        }
    }
});

export const yearText = style({
    color: vars.color.lightText,
    fontSize: "2.25rem",
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "12px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "32px",
        }
    }
});

export const titleContainer = style({
    display: "flex",
    width: "100%",
    padding: "0 0.625rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
    boxSizing: "border-box",
});

export const title = style({
    content: "url(/images/title.svg)",
    opacity: 0,
    animation: `${fadeInSlide} 3s ease-in forwards`,
    padding: "33px",
    '@media': {
        'screen and (max-width: 767px )': {
            width: "auto",
            height: "40px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            height: "96px",
        }
    }
});

export const placeContainer = style({
    display: "flex",
    padding: "0 3.125rem",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.625rem",
    flexShrink: 0,
    alignSelf: "stretch",
    '@media': {
        'screen and (max-width: 767px)': {
            padding: "0.625rem",
        }
    }
});

export const placeText = style({
    color: vars.color.lightText,
    fontSize: "3rem",
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontWeight: 400,
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: "12px",
        },
        'screen and (max-width: 1020px) and (min-width: 768px)': {
            fontSize: "36px",
        }
    }
});

export const event = style({
    display: "flex",
    padding: "4.375rem 1.8125rem",
    width: "0%",
    '@media': {
        'screen and (max-width: 767px)': {
            width: "auto",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.625rem",
            alignSelf: "stretch",
        },
    }
});

export const eventText = style({
    color: vars.color.lightText,
    textAlign: "center",
    fontFamily: vars.typography.fontFamily.roboto,
    fontSize: "1rem",
});

export const eventDateContainer = style({
    display: "flex",
    padding: "0.625rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
});