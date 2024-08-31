/**
 * node ./JB2A_DnD5e/generateJSON.js
*/

import fs from 'fs';
import { jb2aFreeDatabase, freeDatabase } from "./scripts/jb2a_sequencer.js";
import { flattenObject } from '../helpers/utils.js'

jb2aFreeDatabase("modules").then(() => {
    const metadata = ["_template", "_markers", "_timeRange", "_timestamps", "_flipbook", "file", "_metadata"]
    const sequencerDBPaths = Object.keys(flattenObject(freeDatabase))
        .map(x => metadata.some(m => x.includes(m)) ? undefined : `jb2a.${x}`)
        .filter(Boolean)

    fs.writeFile('./JB2A_DnD5e/json/animations-object.json', JSON.stringify(freeDatabase, null, "\t"), (err) => err && console.error(err));
    fs.writeFile('./JB2A_DnD5e/json/database-paths.json', JSON.stringify(sequencerDBPaths, null, "\t"), (err) => err && console.error(err));
})