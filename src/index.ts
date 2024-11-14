import * as staratlasCurrencies from "./staratlas_currencies";
import * as fs from "node:fs";
import * as staratlasTokens from "./staratlas_tokens";

const outDir = "./lists";

const run = async () => {
  const config = [
    {
      fileName: "staratlasCurrencies.json",
      data: staratlasCurrencies.getList(),
    },
    {
      fileName: "staratlasTokens.json",
      data: await staratlasTokens.getList(),
    },
  ];

  config.forEach((c) => {
    fs.writeFileSync(
      outDir + "/" + c.fileName,
      JSON.stringify(c.data, null, 2),
    );

    console.log(`[${c.fileName.split(".")[0]}] generated!`);
  });
};

run()
  .then(() => {
    console.log("\n=> Done generating token lists!");
  })
  .catch((err) => {
    console.log(err);
  });
