import { sellItems, type ItemStructure, itemsPerSecond } from "../types"

const _export:ItemStructure = {
    "seed": {
        sell: sellItems(2,1),
        title: "semínko",
        icon: "🌱",
        type: "material",
        showAlways:true,
        cost: {
            "coin": 5
        }
    },
    "water": {
        showAlways:true,
        sell: sellItems(2,1),
        title: "voda",
        icon: "💧",
        type: "material",
        cost: {
            "coin": 5
        }
    },
    "animal_seed": {
        showAlways:true,
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
        showAlways:true,
        title: "domácí zvíře license",
        icon: "🪪",
        type: "material",
        cost: {
            "coin": 150        
        }
    },
    "dirt": {
        sell: sellItems(1,10),
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
            "worm": itemsPerSecond(75,1)
        }
    },
    "worm": {
        
        sell: sellItems(160,300),
        title: "červík",
        icon: "🐛",
        type: "animal",
        produce: {
            "coin": itemsPerSecond(360,1),
            "dirt": itemsPerSecond(70,1)
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
            "coin": itemsPerSecond(8,1),
        }
    },
    "egg": {
        
        title: "vajco",
        icon: "🥚",
        sell: sellItems(2,3),
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

    // "tree_nut": {
    //     title: "oříškovník",
    //     icon: "🌲",
    //     type: "animal",
    //     produce: {
    //         "nut": itemsPerSecond(60,1)
    //     },
    //     cost: {
    //         "tree": 1,
    //         "nut": 10,
    //         "coin": 100
    //     }
    // },

    // "bird_parrot": {
    //     title:"papoušek",
    //     icon: "🐦",
    //     type:"animal",
    //     cost: {
    //         "animal_seed": 1,
    //         "pet_license": 1,
    //         "cage": 1,
    //         "nut": 5,
    //         "coin": 1000
    //     },
    //     produce: {
    //         "feather": itemsPerSecond(15,1)
    //     }
    // },
    // "nut": {
    //     title: "oříšek",
    //     icon: "🌰",
    //     type: "material",
    //     cost: {
    //         "seed": 10,
    //         "grass": 1,
    //         "tree": 0.5,
    //         "coin": 500,
    //     }  
    // },
    // "feather": {
    //     sell: sellItems(20,10),
    //     title: "pírko",
    //     icon: "🪶",
    //     type: "material"
    // },
    // "bed": {
    //     title: "postel",
    //     icon: "🛏️",
    //     type: "material",
    //     cost: {
    //         "feather": 100,
    //         "coin": 150   
    //     }
    // },
}

export const sharedItems = {
    seed: _export.seed,
    water: _export.water,
    animal_seed: _export.animal_seed,
    pet_license: _export.pet_license,
}

export default _export
