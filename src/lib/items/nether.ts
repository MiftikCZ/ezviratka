import { itemsPerSecond, type ItemStructure, sellItems } from "../types";
import basicItems from "./basic";

const m = 15000

const _export: ItemStructure = {
    "animal_seed": basicItems.animal_seed,

    // "mini_animal_seed": {
    //     title: "malé zvířecí semínko",
    //     type: "material",
    //     icon: "🌱",
    //     cost: {
    //         "animal_seed": 1,
    //         "seed": 2,
    //         "water": 2,
    //         "coin": m * 1
    //     }
    // },
    // "earthworm": {
    //     title: "žížalák",
    //     type: "animal",
    //     icon: "🪱",
    //     sell: sellItems(10, 1),
    //     produce: {
    //         "coin": itemsPerSecond(1, m / 30)
    //     },
    //     cost: {
    //         "mini_animal_seed": 1,
    //         "dirt": 1,
    //         "water": 2,
    //         "coin": m / 1.1
    //     }
    // },
    // "snail": {
    //     title: "šnek",
    //     type: "animal",
    //     icon: "🐌",
    //     sell: sellItems(12, 1),
    //     produce: {
    //         "coin": itemsPerSecond(1, m / 28.5)
    //     },
    //     cost: {
    //         "animal_seed": 1,
    //         "dirt": 1,
    //         "water": 20,
    //         "grass": 2,
    //         "coin": m * 1.2
    //     }
    // }
};

export default _export;
