import { itemsPerSecond, type ItemStructure, sellItems } from "../types";
import basicItems from "./basic";

const m = 50000

const _export: ItemStructure = {
    "animal_seed": basicItems.animal_seed,
    "water": basicItems.water,
    "fish": basicItems.fish,

    "sumec": {
        title: "sumec",
        type: "animal",
        icon: "🐟",
        produce: {
            coin: itemsPerSecond(10,m/120)
        },
        cost: {
            "animal_seed": 1,
            "fish": 1,
            "water": 20,
            "coin": m / 1.2
        }
    },
    "rakosi": {
        title: "rákosí",
        sell: sellItems(m,50),
        type: "material",
        icon: "",
        cost: {
            "seed": 10,
            "water": 20,
            "coin": m * 1
        }
    },
    "kapr": {
        title: "kapr",
        type: "animal",
        icon: "🐟",
        produce: {
            coin: itemsPerSecond(10,m/115)
        },
        cost: {
            "animal_seed": 1,
            "fish": 1,
            "water": 20,
            "coin": m * 1.2
        }
    },
    "frog": {
        title: "žába",
        type: "animal",
        icon: "🐸",
        produce: {
            fish: itemsPerSecond(60*60,1)
        },
        cost: {
            "animal_seed": 1,
            "rakosi": 1,
            "water": 20,
            "coin": m * 1.1
        }
    },
};

export default _export;
