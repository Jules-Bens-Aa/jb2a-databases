const unwantedSequencerMetadata = new Set([
    "_template",
    "_templates",
    "_markers",
    "_timeRange",
    "_timestamps",
    "_flipbook",
    "_metadata",
]);
export function getObjectPaths(obj, path = [], recursionDepth = 0) {
    if (recursionDepth > 100)
        throw new Error("Maximum depth exceeded");
    const paths = new Set();
    if (typeof obj === "string") {
        addPath(paths, path.join("."));
    }
    else if (Array.isArray(obj)) {
        /** Un-comment the below if padding is ever required */
        // const maxDigits = Math.max(2, obj.length.toString().length);
        for (let i = 0; i < obj.length; i++) {
            // const iPadded = String(i).padStart(maxDigits, "0");
            // addPath(paths, [...path, iPadded].join("."));
            addPath(paths, [...path, i].join("."));
        }
    }
    else if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
            if (key === "file") {
                addPath(paths, [...path, key].join("."));
            }
            else if (!unwantedSequencerMetadata.has(key)) {
                getObjectPaths(obj[key], [...path, key], recursionDepth + 1).forEach((newPath) => addPath(paths, newPath));
            }
        }
    }
    else {
        throw new Error(`Unhandled type at ${path.join(".")}`);
    }
    return paths;
}
function addPath(paths, newPath) {
    if (paths.has(newPath))
        throw new Error(`Duplicate Sequencer path found at ${newPath}`);
    return paths.add(newPath);
}
