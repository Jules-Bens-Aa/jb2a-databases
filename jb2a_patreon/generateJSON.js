/**
 * node ./jb2a_patreon/generateJSON.js
*/

import fs from 'fs';
import { jb2aPatreonDatabase, patreonDatabase } from "./scripts/jb2a_sequencer.js";
import { flattenObject } from '../helpers/utils.js'

jb2aPatreonDatabase("modules").then(() => {
    const metadata = ["_template", "_markers", "_timeRange", "_timestamps", "_flipbook", "file", "_metadata"]
    const sequencerDBPaths = Object.keys(flattenObject(patreonDatabase))
        .map(x => metadata.some(m => x.includes(m)) ? undefined : `jb2a.${x}`)
        .filter(Boolean)

    fs.writeFile('./jb2a_patreon/json/animations-object.json', JSON.stringify(patreonDatabase, null, "\t"), (err) => err && console.error(err));
    fs.writeFile('./jb2a_patreon/json/database-paths.json', JSON.stringify(sequencerDBPaths, null, "\t"), (err) => err && console.error(err));
})