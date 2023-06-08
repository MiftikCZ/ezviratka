import { sellItems, type ItemStructure, itemsPerSecond } from "../types"
import {sharedItems} from "./basic"
import basicItems from "./basic"


const level = "kamena"

const _export:ItemStructure = {
    "seed": basicItems.seed,
    "dirt": basicItems.dirt,
    "animal_seed": basicItems.animal_seed,
    "human_seed": {
        title: "lidské semínko",
        icon: "👨",
        type: "material",
        cost: {
            animal_seed: 1,
            water: 5,
            seed: 20,
            coin: 150
        }
    },
    "grass": basicItems.grass,
    "wood": basicItems.wood,
    "tree": basicItems.tree,
    "stone": {
        title: "kámen",
        sell: sellItems(180,1),
        type: "material",
        icon: "🪨",
        cost: {
            "grass": 5,
            "coin": 400
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
            "coin": 5000
        }  
    },
    "stone_pickaxe": {
        sell: sellItems(500,1),
        title: "kamenný krumpáč",
        icon: "🔨",
        type: "material",
        cost: {
            "pickaxe": 1,
            "stone": 50
        }  
    },
    "socha": {
        title: "Socha",
        icon: "🗿",
        type: "material",
        cost: {
            stone: 10,
            pickaxe: 1,
            coin: 2500
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
            "stone": 50,
            "coin": 500
        }  
    },
    "gold": {
        sell: sellItems(25000,1),
        title: "zlato",
        icon: "🪨",
        type: "material",
        cost: {
            "iron": 10,
            "stone_pickaxe": 2,
        }
    },
    "fire": {
        title: "oheň",
        icon: "🔥",
        type: "material",
        cost: {
            "wood": 2,
            "coin": 20000,
            "iron": 1
        }
    },
    "zlaty_hornik": {
        title:"zlatý horník",
        icon: "👷",
        type:"animal",
        cost: {
            "animal_seed": 1,
            "water": 5,
            "seed": 10,
            "coin": 45000
        },
        produce: {
            "coin": itemsPerSecond(1,35)
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
            "coin": 45000
        },
        produce: {
            "gold": itemsPerSecond(60*60,1)
        }
    },
    "cage": {
        title: "klec",
        icon: "📦",
        type: "material",
        cost: {
            "iron": 3,
            "coin": 10000,
        }  
    },
    "golden_pig": {
        title: "zlaté prase",
        icon: "🪙",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(1,250)
        },
        cost: {
            "iron": 1,
            "animal_seed": 3,
            "gold": 5,
            "pig": 2,
            "coin": 50000
        }
    },
    "bat": {
        title: "netopýr",
        icon: "🦇",
        type: "animal",
        sell: sellItems(8000,1),
        produce: {
            "coin": itemsPerSecond(1,20)
        },
        cost: {
            "stone": 10,
            "animal_seed": 1,
            "coin": 10000
        }
    },
    "iron_chicken": {
        title: "železná slepice",
        icon: "🐔",
        type: "animal",
        produce: {
            "iron": itemsPerSecond(60*60,1)
        },
        cost: {
            "iron": 1,
            "animal_seed": 3,
            "gold": 5,
            "chicken": 2,
            "coin": 30000
        }
    },
    "socha_svobody": {
        title: "socha svobody",
        icon: "🗽",
        type: "material",
        cost: {
            "iron": 1,
            "socha": 1,
            "coin": 20000
        }
    },
    "socha_zlateho_prasete": {
        title: "socha zlatého prasete",
        icon: "🗿",
        type: "material",
        cost: {
            "iron": 1,
            "golden_pig": 1,
            "socha": 1,
            "coin": 50000
        }
    },
}


export default _export
