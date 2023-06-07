import { sellItems, type ItemStructure, itemsPerSecond } from "../types";
import basicItems from "./basic";

const level = "kacheni"

const _export:ItemStructure = {
    "seed": basicItems.seed,
    "dirt": basicItems.dirt,
    "animal_seed": basicItems.animal_seed,
    "duck": {
        title:"kachna",
        icon: "🦆",
        type:"animal",
        cost: {
            "animal_seed": 1,
            "water": 100,
            "coin": 250
        },
        produce: {
            "duckling": itemsPerSecond(360,1),
        }
    },
    "duckling": {
        title:"kachňátko",
        icon: "🦆",
        sell: sellItems(5,1),
        type:"animal",
        produce: {
            "grass": itemsPerSecond(180,1),
        }
    },
}

export default _export