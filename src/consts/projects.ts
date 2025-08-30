interface project {
    title: string;
    desc: string;
    projectLink?: string;
    websiteLink?: string;
    photo?: string;
    highlight?: boolean;
}

export const PROJECTS: project[] = [
    {
        title: "Gremlins Brew",
        desc: "Gremlins Brew is a two-player couch co-op experience, where you and a friend play as two gremlins, "
                + "working together to create fantastical potions for adventurers, inside the worlds first vending machine. "
                + "The game was built in Unity, and presented at PAX 2019",
        projectLink: "https://nebulous-dingo.itch.io/gremlins-brew",
        highlight: true,
    },
    {
        title: "Battle Snakes (Steam)",
        desc: "A co-op multiplayer game built in Unity, released on Steam.",
        projectLink: "https://store.steampowered.com/app/1610310/Battle_Snakes/",
        highlight: true,
    },
    {
        title: "Breadfast Tea - Android Mobile Games",
        desc: "7+ mobile games developed and published on Google Play.",
        projectLink: "https://play.google.com/store/apps/dev?id=5817392692590133649",
        websiteLink: "https://breadfasttea.myportfolio.com/",
    },
    {
        title: "React Native Church App",
        desc: "In-progress app built with React Native for community engagement.",
    },
    {
        title: "Portfolio Website",
        desc: "This portfolio hosted via GitHub Pages.",
    },
]