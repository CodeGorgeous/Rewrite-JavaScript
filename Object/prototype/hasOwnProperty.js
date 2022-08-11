/**
 * 判定一个属性是否为自身所有的属性而不是原型链上的
 * @param {*} key 属性键
 */
export default function hasOwnProperty(key) {
    for (const protoKey in this.__proto__) {
        if (key === protoKey) return false;
    };
    return true;
}