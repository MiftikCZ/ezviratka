import coin_image from "../assets/coin.png";

import basicItems from "./items/basic";
import kacheniItems from "./items/kacheni";
import kamenaItems from "./items/kamena";
import ledovaItems from "./items/ledova";
import mikroItems from "./items/mikro";

import kamena_doby_bg from "../assets/doby_bgs/kamena.png"

type ArrayToUnion<T extends string[]> = T[number] extends infer U ? U extends keyof any ? U : never : never;

export type possibleViews = "list-of-items" | "list-of-animals" | "list-of-levels";


export function itemsPerSecond(
  seconds: number,
  count: number,
): [number, number] {
  return [seconds, count];
}

export function E(num:number,zeros:number) {
  return num*(10**zeros)
}

interface levelsStructure {
  [key: string]: {
    cost?: number;
    bghue: number,
    bg?: string,
    title: string,
    items: ItemStructure;
  };
}

export const levelsInfo: levelsStructure = {
  "basic": {
    bghue:111,
    title:"základní",
    bg: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfklEQVRYR8WXTQrCMBCFWzcVFHQneAi3rnShuBEv4jm8kjfwLkp3CgoWFGUCU9J0ZppJ/1xJmuZ982amSeLNcf2LlL/hPCm9kZ1TcpXkMCPH39fMjMdaAEocFuoEgBMHgO/5ZiL6RINCxLPJKLqvxiUX1A5I4r0DYPScAzDuuqBywMd69JhKQWsAduRaAJgPLnh1AeUAJa5JQQ6wP+3MdwBz4pYrZ38TAOY7IAHUFQcBaEOqBjDQHKDUqMKAT+7xdQTgIGoDuFVPcUsuqAG4T67koOSCCkASt0UQJn28zF/pWbxdLtS7oRstJQBzEICCwGfBAJyoDWcDcCnyAvAR4wSqIAoA3OEBFp9enppOLcyVIFRFGArSKIBkA+eSC2A7rXagLoCb5k4BqBorAFA7YtVRzHaESoFtvwjAbceU5RyUBMB1mLgdc/mmAEKih/W9TkQuiBZAupw0AhAavfeZMMQBLL7Gr2YA45OCXgGqWg+CUF1MtCloHYBKQ+jt+A8d+xNtbSee1wAAAABJRU5ErkJggg==)`,
    items: basicItems,
  },
  "kamena": {
    bghue:220,
    title: "doba kamená",
    bg: `url(${kamena_doby_bg})`,
    cost: 75000,
    items: kamenaItems,
  },
  "ledova": {
    bghue: 190,
    title: "doba ledová",
    bg: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfElEQVRYR+2XwW3DMAxF6w0Ke4MC7RAdIffceumpC/SUBbpjC3QDB9kggQzQoCiK/9NtgBySkyNL/E+fNGUPb4ev84P6HedZ/12uT8d2rJnkDDyOUzM6TvXYcAfQDnj2W8sY61FKdcwqBRbgr+ICEsUddh+fVRFq+msBaA0X4L+Ebbq8FDcASNwLknHNrh9e9+9LCp6eX2B9IXEJgDZR5v3+fC/TaQBWnIVIAWTFGQgKIBK27dlruxFIAyCTo0Ayp3c2bFm71kAJzgboFWzZFRtDNrMCoIV61xEA66TECzuhZzl6XCW3rKMhgM01EhdgDYFAugBbxbMQLoCIsztGLVQc8eqsAmAKDYn17vdqYwHwnmtm99KoMr1fAxZHqj6gbyKA7MuLLcymD1jrPAD2TPAcSQNYq7bknnmd76aA7WgIDEGEAKg9I3F0eFUvJDYYEs8cxyV2zwnXgUgcWZpd2wBkA3hpyMQIP0x0cLTzTArpLyOmiKJC7DlxUwAX3ZkAVUNkBUkAAAAASUVORK5CYII=)`,
    cost: 200000,
    items: ledovaItems
  },
  "micro_animals": {
    bghue: 20,
    title: "doba mikro organismů",
    bg: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABgklEQVRYR82XO27CQBCG7QuAoojWRYSQKLgBJV2uk9wiB4iUy9BRpaKwhCIKJCoURQZRJxlLY+2u5+X1GuHOZmbnm38eNvly/vSbDXS9zBZZdb1mH8c9GyG3AMBBcL3ttp1Q0U+CEAHeV891wK/DQc2EI9NUMAFc/mV83aw7ZY/GADAtiow7QwTQnK1EqORnWbb6QQXQmsiFGD9OWkzV96l+xvVRMgAqONIgBKVYUoCH8ciL8VOdm3sOwgPALFzZrCUA3xAAoyMIBUECgCMYUyPE1bI3gNRA7kjVcMR2SwLgSgiyuZJpW40DkOSHZJoShAeEADDL0kLqPQUSQKqFJI6hBmCdBut2RDuyBG7dtNp3DRjaewDhj9wo9g3q+qubkBu7VBD3CzB07VtN6Ep6q+DeIrKs29i6S59lXg8Mlbm0RRuAoYKDaiaAWHktfuYSWA6LsZHUNf0xiX3ThY1NLTUVAINTn1vau54a7RDiZgBc6e4fAMj79oDUuKoCMV3fxecPIPZx8H/Up+oAAAAASUVORK5CYII=)`,
    cost: E(1,6),
    items: mikroItems
  }
  // "kacheni": {
  //   bghue:190,
  //   bg: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPElEQVRYR+2XMRKCMBBFzUW4AZaOnZWFlYWMPSdxvABXoHewsLaz9BjcwkrH6DJk2WQ3EYgFNBQw899+Nn8Xla42z9mY18MUU6MCIPE3ShBAvl2TnpWXq9vLXwFswpRqB4YQ93KAEk+SRGvXdW2tXINYxMUAWByEbaptoN4BOHGAAojy5O4LUROCA1Lx9meJDvCGcUEM7kA0AOlnGMyBXgC445dlmW76qqr0fXc/6Pt5cTTyQdwDXNLhU2AD4Gbb/PYJMCOIfMUpEXDAG6AtjquEQPHJAJ8w0k0YFaAoimYhoaoc3AEAsFkcHYBrKNdzyUBSnAOhAMZIdkzE/wGASkOOG3ZJWn0TRK4Q8gXC65l4H+CSMKQXOHEjihuB7wKZ7+nVWwIiEe7MAtfmKhENfUely5F/zRDpBDA58AJFs9LB1o2PMAAAAABJRU5ErkJggg==)`,
  //   title: "vláda kachen",
  //   cost: 200000,
  //   items: kacheniItems,
  // },
};

const levelsInfoKeys = Object.keys(levelsInfo)
export type possibleLevels = ArrayToUnion<typeof levelsInfoKeys>;

export interface ItemStructure {
  [key: string]: {
    title: string;
    icon?: string;
    type: "animal" | "material";
    showAlways?: boolean,
    sell?: number;
    produce?: {
      [key: string]: [number, number];
    };
    cost?: {
      [key: keyof ItemStructure]: number;
    };
  };
}

export const coin =
  `<!-- https://www.flaticon.com/free-icons/coin --><img height="32px" class="coin" href="${coin_image}" >`;

export function round(num: number): string {
  return Math.floor(num).toLocaleString();
}

export function sellItems(sellFor: number, howMuchForThat: number): number {
  return sellFor / howMuchForThat;
}

export interface backpackStructure {
  [key: string]: number;
}

export const itemsInfo: ItemStructure = {
  ...levelsInfo.basic.items,
  ...levelsInfo.kamena.items,
  ...levelsInfo.ledova.items,
};