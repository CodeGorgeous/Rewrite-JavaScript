/**
 * 将目标自身所有的值抽离为一个数组
 * @param {*} target 
 */
export default function values(target) {
    if (typeof target === "undefined" || target === null) {
        throw new TypeError("Cannot convert undefined or null to object");
    };
    const result = [];
    for (const key in target) {
        if (Object.hasOwnProperty(key)) {
            result.push(target[key]);
        }
    };
    return result;
}