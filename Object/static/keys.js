/**
 * 将目标的自身所拥有的键抽离为一个数组
 * @param {*} target 
 */
export default function (target) {
    if (typeof target === "undefined" || target === null) {
        throw new TypeError("Cannot convert undefined or null to object");
    };
    const result = [];
    for (const key in target) {
        if (target.hasOwnProperty(key)) {
            result.push(key);
        }
    };
    return result;
}