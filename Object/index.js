import hasOwnProperty from "./prototype/hasOwnProperty.js";
import assign from "./static/assign.js";

Object.prototype.hasOwnProperty = hasOwnProperty;
Object.assign = assign;