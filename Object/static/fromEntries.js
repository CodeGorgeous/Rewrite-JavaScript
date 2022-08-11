/**
 * 将一个目标二维数组转换为一个对象。
 * @param {*} target 
 */
export default function fromEntries(target) {
    if (typeof target === "undefined" || target === null) {
        throw new TypeError("Cannot convert undefined or null to object");
    };
    const result = {};
    for (const [key, value] of target) {
        result[key] = value;
    };
    return result;
}