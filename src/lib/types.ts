
import coin_image from "../assets/coin.png"

export type possibleViews = "list-of-items" | "list-of-animals";

function itemsPerSecond(seconds:number,count:number):[number,number] {
    return [seconds,count]
}

export interface ItemStructure {
    [key:string]: {
        title: string,
        icon?: string,
        type: "animal" | "material",
        sell?: number,
        produce?: {
            [key:string]: [number,number]
        },
        cost?: {
            [key:keyof ItemStructure]: number
        }
    }
}

export const coin = `<!-- https://www.flaticon.com/free-icons/coin --><img height="32px" class="coin" href="${coin_image}" >` 

export function round(num:number):string {
    return Math.floor(num).toLocaleString()
}

function sellItems(sellFor: number, howMuchForThat: number):number {
    return sellFor / howMuchForThat
}

export interface backpackStructure {
    [key:string]: number
}

export const itemsInfo: ItemStructure = {
    "seed": {
        sell: sellItems(2,1),
        title: "semínko",
        icon: "🌱",
        type: "material",
        cost: {
            "coin": 5
        }
    },
    "water": {
        sell: sellItems(2,1),
        title: "voda",
        icon: "💧",
        type: "material",
        cost: {
            "coin": 5
        }
    },
    "animal_seed": {
        title: "zvířecí semínko",
        icon: "🌱",
        type: "material",
        cost: {
            "seed": 15,
            "coin": 100,
            "dirt": 10
        }
    },
    "pet_license": {
        title: "domácí zvíře license",
        icon: "🪪",
        type: "material",
        cost: {
            "coin": 150        
        }
    },
    "dirt": {
        title:"hlína",
        cost: {
            "coin": 9
        },
        type: "material"
    },
    "grass": {
        title: "tráva",
        type: "material",
        cost: {
            "dirt": 1,
            "seed": 1,
        }
    },
    "wood": {
        title: "dřevo",
        icon: "🪵",
        type: "material",
        cost: {
            "coin": 10,
            "tree": 0.5,
        }
    },
    "tree": {
        sell: sellItems(170,1),
        title: "strom",
        icon: "🌲",
        type: "material",
        cost: {
            "coin": 10,
            "poop": 25,
            "seed": 20
        }
    },
    "fire": {
        title: "oheň",
        icon: "🔥",
        type: "material",
        cost: {
            "wood": 2,
            "coin": 10,
            "iron": 1
        }
    },
    "steak": {
        title: "steak",
        icon: "🥩",
        sell: sellItems(150,1),
        type: "material",
        cost: {
            "cow": 1,
            "coin": 10,
            "fire": 2
        }
    },
    "stone": {
        title: "kámen",
        sell: sellItems(18,1),
        type: "material",
        icon: "🪨",
        cost: {
            "grass": 5,
            "coin": 25
        }
    },
    "pickaxe": {
        sell: sellItems(50,1),
        title: "krumpáč",
        icon: "🔨",
        type: "material",
        cost: {
            "wood": 10,
            "stone": 3,
            "coin": 10
        }  
    },
    "stone_pickaxe": {
        sell: sellItems(110,1),
        title: "kamenný krumpáč",
        icon: "🔨",
        type: "material",
        cost: {
            "pickaxe": 1,
            "stone": 10
        }  
    },
    "iron": {
        sell: sellItems(200,1),
        title: "železo",
        icon: "🪨",
        type: "material",
        cost: {
            "stone_pickaxe": 1,
            "dirt": 2,
            "stone": 10
        }  
    },
    "gold": {
        sell: sellItems(800,1),
        title: "zlato",
        icon: "🪨",
        type: "material",
        cost: {
            "iron": 10,
            "stone_pickaxe": 2,
        }
    },
    "cat": {
        title: "kočka",
        icon: "🐱",
        type: "animal",
        cost: {
            "animal_seed": 1,
            "pet_license": 1,
            "coin": 250
        },
        produce: {
            "mouse": itemsPerSecond(120,1)
        }
    },
    "mouse": {
        sell: sellItems(200,30),
        title: "myš",
        icon: "🐭",
        type: "animal",
        produce: {
            "worm": itemsPerSecond(60,1)
        }
    },
    "worm": {
        sell: sellItems(160,300),
        title: "červík",
        icon: "🐛",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(180,1),
            "dirt": itemsPerSecond(60,1)
        }
    },
    "poop": {
        sell: sellItems(3,2),
        title: "hnůj",
        icon: "💩",
        type: "material"
    },
    "fish": {
        title:"ryba",
        icon: "🐟",
        type:"animal",
        cost: {
            "animal_seed": 1,
            "water": 50,
            "coin": 75
        },
        produce: {
            "water": itemsPerSecond(60,1),
        }
    },
    "big_fish": {
        title:"huge ryba",
        icon: "🐟",
        type:"animal",
        cost: {
            "animal_seed": 1,
            "water": 100,
            "coin": 100,
            "fish": 5
        },
        produce: {
            "coin": itemsPerSecond(1,1),
        }
    },
    "egg": {
        title: "vajco",
        icon: "🥚",
        sell: sellItems(2,3),
        type: "material"
    },
    "ice": {
        title: "led",
        icon: "🧊",
        sell: sellItems(5,4),
        type: "material"
    },
    "bird_kosak": {
        title:"kosák",
        icon: "🐦",
        type:"animal",
        cost: {
            "animal_seed": 1,
            "water": 3
        },
        produce: {
            "coin": itemsPerSecond(60,1),
        }
    },
    "bird_lednacek": {
        title:"ledňáček",
        icon: "🐦",
        type:"animal",
        cost: {
            "animal_seed": 1,
            "water": 3,
            "coin": 400
        },
        produce: {
            "coin": itemsPerSecond(10,1),
            "ice": itemsPerSecond(8,1)
        }
    },
    "bird_vrabec": {
        title:"vrabčák",
        icon: "🐦",
        type:"animal",
        cost: {
            "animal_seed": 2,
            "water": 5,
            "seed": 10,
            "coin": 500
        },
        produce: {
            "coin": itemsPerSecond(10,1),
            "gold": itemsPerSecond(60*10,1)
        }
    },
    "chicken": {
        title: "slepice",
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
        icon: "🐷",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(20,1)
        },
        cost: {
            "coin": 170,
            "grass": 5,
            "fire": 1,
            "animal_seed": 3
        }
    },
    "cow": {
        title: "kráva",
        icon: "🐮",
        type: "animal",
        produce: {
            "poop": itemsPerSecond(10,1)
        },
        cost: {
            "grass": 10,
            "animal_seed": 1,
            "coin": 150,
            "water": 10
        }
    },
    "golden_pig": {
        title: "zlaté prase",
        icon: "🪙",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(9,1)
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
        icon: "🐔",
        type: "animal",
        produce: {
            "iron": itemsPerSecond(10,1)
        },
        cost: {
            "iron": 1,
            "animal_seed": 3,
            "gold": 5,
            "chicken": 2,
            "coin": 100
        }
    },
    "icecream": {
        title: "zmrzlina",
        icon: "🍦",
        type: "material",
        cost: {
            "ice": 50,
            "coin": 2000,
        }  
    },
}