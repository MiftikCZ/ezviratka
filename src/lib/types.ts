
export type possibleViews = "list-of-items" | "list-of-animals";

function itemsPerSecond(seconds,count):number {
    return count / seconds
}

export interface ItemStructure {
    [key:string]: {
        value: number
        title: string,
        icon?: string,
        hideIcon?: boolean,
        type: "animal" | "material",
        produce?: {
            [key:string]: number
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
            "fire": 50
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
    "wood": {
        title: "dřevo",
        value: 0,
        type: "material",
        cost: {
            "coin": 10,
            "tree": 0.5,
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
            "coin": 50
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
            "seed": 50,
            "coin": 50,
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
            "seeds": itemsPerSecond(10,1)
        },
        cost: {
            "animal_seed": 4,
            "coin": 100
        }
    },
    "pig": {
        title: "prase",
        value: 0,
        icon: "🐷",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(600,1)
        },
        cost: {
            "coin": 150,
            "animal_seed": 6
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
            "animal_seed": 8,
            "gold": 5,
            "pig": 2,
            "coin": 100
        }
    }
}