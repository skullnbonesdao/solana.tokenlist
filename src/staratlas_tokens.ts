import { ITokenList } from "./types/ITokenList";
import axios from "axios";
import { fetchData } from "./fetch";

const url = "https://galaxy.staratlas.com/nfts";

let list: ITokenList = {
  name: "StarAtlas Tokens",
  logoURI: "",
  keywords: ["solana", "spl", "sa"],
  tags: {
    "lp-token": {
      name: "lp-token",
      description: "",
    },
  },
  timestamp: new Date().toUTCString(),
  tokens: [],
};

export async function getList(): Promise<ITokenList> {
  await fetchData(url).then((json: any) => {
    json
      .filter((element: any) => element.attributes.itemType != "currency")
      .filter(
        (element: any) =>
          element.mint != "GLDTKDYdSkdCzSC6fqRWqHZ5fUQGsm1CM4nMZnsCZNcX",
      )
      .forEach((element: any) => {
        list.tokens.push({
          chainId: 101,
          name: element.name,
          symbol: element.symbol,
          address: element.mint,
          decimals: 0,
          logoURI: "tokens/webp/" + element.mint + ".webp",
          tags: [],
          verified: true,
          holders: null,
          tree: [
            "StarAtlas",
            element.attributes.itemType,
            element.attributes.rarity,
          ],
        });
      });
  });
  return list;
}
