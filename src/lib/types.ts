
export type possibleViews = "list-of-items" | "list-of-animals";

function itemsPerSecond(seconds,count):[number,number] {
    return [seconds,count]
}

export interface ItemStructure {
    [key:string]: {
        value: number
        title: string,
        icon?: string,
        hideIcon?: boolean,
        type: "animal" | "material",
        produce?: {
            [key:string]: [number,number]
        },
        cost?: {
            [key:string]: number
        }
    }
}

export interface backpackStructure {
    [key:string]: number
}

export const itemsInfo: ItemStructure = {
    "steak": {
        title: "steak",
        value: 0,
        icon: "🥩",
        type: "material",
        cost: {
            "cow": 1,
            "coin": 10,
            "fire": 2
        }
    },
    "pickaxe": {
        title: "krumpáč",
        value: 0,
        hideIcon: true,
        icon: "🔨",
        type: "material",
        cost: {
            "wood": 10,
            "stone": 3,
            "coin": 10
        }  
    },
    "stone_pickaxe": {
        hideIcon: true,
        title: "kamenný krumpáč",
        value: 0,
        icon: "🔨",
        type: "material",
        cost: {
            "pickaxe": 1,
            "stone": 10
        }  
    },
    "iron": {
        title: "železo",
        value: 0,
        icon: "🪨",
        type: "material",
        cost: {
            "stone_pickaxe": 1,
            "dirt": 2,
            "stone": 10
        }  
    },
    "gold": {
        title: "zlato",
        value: 0,
        icon: "🪨",
        type: "material",
        cost: {
            "iron": 10,
            "stone_pickaxe": 2,
        }
    },
    "seed": {
        title: "semínko",
        value: 0,
        icon: "🌱",
        hideIcon: true,
        type: "material",
        cost: {
            "coin": 5
        }
    },
    "tree": {
        title: "strom",
        value: 0,
        icon: "🌲",
        type: "material",
        cost: {
            "coin": 10,
            "poop": 25,
            "seed": 20
        }
    },
    "poop": {
        title: "hnůj",
        value: 0,
        icon: "💩",
        type: "material"
    },
    "wood": {
        title: "dřevo",
        value: 0,
        icon: "🪵",
        type: "material",
        cost: {
            "coin": 10,
            "tree": 0.5,
        }
    },
    "grass": {
        title: "tráva",
        value: 0,
        icon: "🌻",
        type: "material",
        cost: {
            "dirt": 1,
            "seed": 1,
        }
    },
    "fire": {
        title: "oheň",
        value: 0,
        icon: "🔥",
        type: "material",
        cost: {
            "wood": 2,
            "coin": 10,
            "iron": 1
        }
    },
    "dirt": {
        title:"hlína",
        value:0,
        cost: {
            "coin": 9
        },
        type: "material"
    },
    "animal_seed": {
        title: "zvířecí semínko",
        value: 0,
        icon: "🌱",
        hideIcon: true,
        type: "material",
        cost: {
            "seed": 15,
            "coin": 100,
            "dirt": 10
        }
    },
    "chicken": {
        title: "slepice",
        value: 0,
        icon: "🐔",
        type: "animal",
        produce: {
            "egg": itemsPerSecond(5,1),
            "seed": itemsPerSecond(10,1)
        },
        cost: {
            "animal_seed": 1,
            "seed": 5,
            "coin": 100
        }
    },
    "pig": {
        title: "prase",
        value: 0,
        icon: "🐷",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(1,10)
        },
        cost: {
            "coin": 150,
            "animal_seed": 3
        }
    },
    "golden_pig": {
        title: "zlaté prase",
        value: 0,
        icon: "🪙",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(10,1)
        },
        cost: {
            "iron": 1,
            "animal_seed": 3,
            "gold": 5,
            "pig": 2,
            "coin": 100
        }
    },
    "iron_chicken": {
        title: "železná slepice",
        value: 0,
        icon: "🐔",
        type: "animal",
        produce: {
            "iron": itemsPerSecond(5,1)
        },
        cost: {
            "iron": 1,
            "animal_seed": 3,
            "gold": 5,
            "chicken": 2,
            "coin": 100
        }
    },
    "cow": {
        title: "kráva",
        value: 0,
        icon: "🐮",
        type: "animal",
        produce: {
            "poop": itemsPerSecond(2,1)
        },
        cost: {
            "grass": 5,
            "animal_seed": 1,
            "coin": 100
        }
    }
}