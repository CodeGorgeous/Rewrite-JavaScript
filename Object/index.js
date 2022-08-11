import hasOwnProperty from "./prototype/hasOwnProperty.js";
import assign from "./static/assign.js";
import keys from "./static/keys.js";
import values from "./static/values.js";

Object.prototype.hasOwnProperty = hasOwnProperty;
Object.assign = assign;
Object.keys = keys;
Object.values = values;