
export const buttonHoverEffects = {
    whileHover : {scale : 1.05},
    whileTap : {scale : 0.95}
};

export const scrollUpEffects = {
    initial : { y : 30, opacity : 0},
    whileInView : { y : 0, opacity : 1},
    transition : { duration : 0.5}
}
export const scrollRightEffects = {
    initial : { x : 30, opacity : 0},
    whileInView : { x : 0, opacity : 1},
    transition : { duration : 0.5, delay : 0.5}
}
export const scrollLeftEffects = {
    initial : { x : -30, opacity : 0},
    whileInView : { x : 0, opacity : 1},
    transition : { duration : 0.5, delay : 0.5}
}
export const scrollUpDelayEffects = {
    initial : { y : 20, opacity : 0},
    whileInView : { y : 0, opacity : 1},
    transition : { duration : 0.5, delay : 0.5}
}
export const scrollDownEffects = {
    initial : { y : -30, opacity : 0},
    whileInView : { y : 0, opacity : 1},
    transition : { duration : 0.5}
}

export const fadeInEffects = {
    initial : {opacity : 0},
    whileInView : {opacity : 1},
    transition : {duration : 0.5, delay : 1},
}
export const secFadeInEffects = {
    initial : {opacity : 0},
    whileInView : {opacity : 1},
    transition : {duration : 0.5},
}
export const scaleInEffects = {
    initial : {scale : 0},
    whileInView : {scale : 1},
    transition : {duration : 0.5, delay : 1}
}
export const ParagraphscaleInEffects = {
    initial : {scale : 0},
    whileInView : {scale : 1},
    transition : {duration : 0.5}
}

export const staggerContainer = {
    hidden : {},
    show : {
        transition : {staggerChildren : 0.3},
    }
};

export const staggerEffects = {
    hidden : {y : 30, opacity : 0},
    show : {y : 0, opacity : 1},
    transition : { duration : 0.5, ease : "easeOut"}
}