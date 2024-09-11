import fs from "node:fs";
import { getObjectPaths } from "./getObjectPaths.js";
// @ts-expect-error
import { jb2aFreeDatabase, freeDatabase } from "../JB2A_DnD5e/scripts/jb2a_sequencer.js";
// @ts-expect-error
import { jb2aPatreonDatabase, patreonDatabase } from "../jb2a_patreon/scripts/jb2a_sequencer.js";
console.log("Exporting free database...");
await jb2aFreeDatabase("modules").then(() => {
    const sequencerDBPaths = Array.from(getObjectPaths(freeDatabase, ["jb2a"]));
    console.log("\tExporting animation object...");
    fs.writeFile("./JB2A_DnD5e/json/animations-object.json", JSON.stringify(freeDatabase, null, "\t"), (err) => err && console.error(err));
    console.log("\tExporting flat database...");
    fs.writeFile("./JB2A_DnD5e/json/database-paths.json", JSON.stringify(sequencerDBPaths, null, "\t"), (err) => err && console.error(err));
});
console.log();
console.log("Exporting Patreon database...");
await jb2aPatreonDatabase("modules").then(() => {
    const sequencerDBPaths = Array.from(getObjectPaths(patreonDatabase, ["jb2a"]));
    console.log("\tExporting animation object...");
    fs.writeFile("./jb2a_patreon/json/animations-object.json", JSON.stringify(patreonDatabase, null, "\t"), (err) => err && console.error(err));
    console.log("\tExporting flat database...");
    fs.writeFile("./jb2a_patreon/json/database-paths.json", JSON.stringify(sequencerDBPaths, null, "\t"), (err) => err && console.error(err));
});
console.log("\nDone.");
