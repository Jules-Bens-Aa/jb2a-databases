type JSONValue = boolean | number | string | {
    [key: string]: JSONValue;
} | Array<JSONValue> | undefined | null;
export declare function getObjectPaths(obj: JSONValue, path?: string[], recursionDepth?: number): Set<string>;
export {};
