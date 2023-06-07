import { itemsPerSecond, type ItemStructure, sellItems } from "../types";
import basicItems from "./basic";

const level = "ledova";
const m = 7900

const _export: ItemStructure = {
  "animal_seed": basicItems.animal_seed,
  "icecream": {
    title: "zmrzlina",
    icon: "🍦",
    type: "material",
    cost: {
      "ice": 50,
      "coin": m*10,
    },
  },
  "ice": {
    title: "led",
    icon: "🧊",
    sell: sellItems(m/25, 5),
    type: "material",
  },
  "ice_egg": {
    title: "zmrzlé vajíčko",
    icon: "🥚",
    sell: sellItems(400,3),
    type: "material",
  },
  "bird_lednacek": {
    title: "ledňáček",
    icon: "🐦",
    type: "animal",
    cost: {
      "animal_seed": 1,
      "water": 3,
      "coin": m*8.5,
    },
    produce: {
      "coin": itemsPerSecond(1, m/30),
      "ice": itemsPerSecond(25, 1),
    },
  },
  "ice_chicken": {
    title: "ledová slepice",
    icon: "🐔",
    type: "animal",
    cost: {
      "animal_seed": 1,
      "chicken": 1,
      "egg": 200,
      "coin": m*8,
    },
    produce: {
      "coin": itemsPerSecond(1, m/30),
      "ice_egg": itemsPerSecond(5, 1)
    },
  },
  "penguin": {
    title: "tučňák",
    icon: "🐧",
    type: "animal",
    produce: {
      "coin": itemsPerSecond(1,m/40),
    },
    cost: {
      "ice": 50,
      "water": 1,
      "animal_seed": 1,
      "coin": m*9,
    },
  },
  "tulen": {
    title: "tuleň",
    icon: "",
    type: "animal",
    cost: {
      "animal_seed": 1,
      "penguin": 2,
      "coin": m*15,
    },
    produce: {
      "coin": itemsPerSecond(1, m/24),
      "ice": itemsPerSecond(8, 1),
    },
  },
  "eskymak": {
    title: "eskymák",
    icon: "🥶",
    type:"material",
    cost: {
      "human_seed":1,
      "ice": 15,
      "water": 10,
      "fire": 1,
      "coin": m*13
    }
  },
  "polar_bear": {
    title: "polární medvěd",
    icon: "🐻",
    type: "animal",
    cost: {
      "animal_seed": 1,
      "bear": 1,
      "coin": m*25,
    },
    produce: {
      "coin": itemsPerSecond(1, m/20)
    },
  },
};

export default _export;
