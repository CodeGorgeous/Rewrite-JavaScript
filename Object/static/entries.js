/**
 * 将目标自身所有的键值对抽离为一个二维数组
 * @param {*} target 
 */
export default function entries(target) {
    if (typeof target === "undefined" || target === null) {
        throw new TypeError("Cannot convert undefined or null to object");
    };
    const result = [];
    for (const key in target) {
        if (Object.hasOwnProperty(key)) {
            result.push([key, target[key]]);
        }
    };
    return result;
};