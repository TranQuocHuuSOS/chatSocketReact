export const funEmois=[
    "🤷‍♀️",
    "👋",
    "👌",
    "😍",
    "❤️",
    "🤣",
    "😒",
    "💕",
    "🤷",
    "😎",
    "🤦‍♂️",
    "🤔"

]

export const getRandomEmoji= ()=>{
    return funEmois[(Math.random() * funEmois.length)];
}