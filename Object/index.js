import hasOwnProperty from "./prototype/hasOwnProperty.js";
import assign from "./static/assign.js";
import keys from "./static/keys.js";

Object.prototype.hasOwnProperty = hasOwnProperty;
Object.assign = assign;
Object.keys = keys;