import hasOwnProperty from "./prototype/hasOwnProperty.js";
import assign from "./static/assign.js";
import keys from "./static/keys.js";
import values from "./static/values.js";
import entries from "./static/entries.js";
import fromEntries from "./static/fromEntries.js";

Object.prototype.hasOwnProperty = hasOwnProperty;
Object.assign = assign;
Object.keys = keys;
Object.values = values;
const prototypeAttributes= [
    hasOwnProperty
];
const staticAttributes= [
    assign,
    keys,
    values,
    entries,
    fromEntries
];
prototypeAttributes.forEach(attribute => {
    Object.prototype[attribute.name] = attribute;
});
staticAttributes.forEach(attribute => {
    Object[attribute.name] = attribute;
});