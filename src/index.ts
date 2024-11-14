import {getBase} from "./base";
import * as fs from "node:fs";
import {getStarAtlas} from "./staratlas";


const outDir = "./lists"



const run = async () => {
    const config = [
        {
            fileName: 'base.json',
            data: getBase()
        },
        {
            fileName: 'staratlas.json',
            data: await getStarAtlas(),
        }
    ]

    config.forEach(c =>  {
        fs.writeFileSync(
            outDir + "/" + c.fileName,
            JSON.stringify(c.data, null, 2),
        );
    })

}

run().then(() => {console.log("Done")}).catch((err) => {console.log(err)});