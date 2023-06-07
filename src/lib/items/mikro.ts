import { itemsPerSecond, type ItemStructure, sellItems } from "../types";
import basicItems from "./basic";

const m = 50000

const _export: ItemStructure = {
    "animal_seed": basicItems.animal_seed,
    "mini_animal_seed": {
        title: "malé zvířecí semínko",
        type: "material",
        icon: "🌱",
        cost: {
            "animal_seed": 1,
            "seed": 2,
            "water": 2,
            "coin": m / 8
        }
    },
    "water": basicItems.water,
    "earthworm": {
        title: "žížalák",
        type: "animal",
        icon: "🪱",
        sell: sellItems(10, 1),
        produce: {
            "coin": itemsPerSecond(10, m / 70)
        },
        cost: {
            "mini_animal_seed": 1,
            "dirt": 1,
            "water": 2,
            "coin": m / 1.8
        }
    },
    "fly": {
        title: "moucha",
        type: "animal",
        icon: "🪰",
        produce: {
            "muska": itemsPerSecond(120,1)
        },
        cost: {
            "animal_seed": 1,
            "mini_animal_seed": 1,
            "poop": 10,
            "coin": m / 2
        }
    },
    "muska": {
        title: "muška",
        type: "animal",
        icon: "🪰",
        produce: {
            "poop": itemsPerSecond(10,1)
        }
    },
    "snail": {
        title: "šnek",
        type: "animal",
        icon: "🐌",
        sell: sellItems(12, 1),
        produce: {
            "coin": itemsPerSecond(10, m / 60)
        },
        cost: {
            "animal_seed": 1,
            "dirt": 1,
            "water": 20,
            "grass": 2,
            "coin": m / 1.1
        }
    },
    "bacteria_seed": {
        title: "semínko bakterie",
        type: "material",
        icon: "🦠",
        cost: {
            "animal_seed": 1,
            "mini_animal_seed": 1,
            "coin": m / 8
        }
    },
    "virus_seed": {
        title: "semínko viru",
        type: "material",
        icon: "🦠",
        cost: {
            "bacteria_seed": 1,
            "mini_animal_seed": 1,
            "coin": m / 8
        }
    },
    "corona_virus": {
        title: "covid-19",
        type: "animal",
        icon: "🦠",
        produce: {
            "coin": itemsPerSecond(9, m / 60),
            "bat": itemsPerSecond(120,1)
        },
        cost: {
            "virus_seed": 1,
            "bat": 2,
            "water": 10,
            "coin": m * 1.2
        }
    }
};

export default _export;
