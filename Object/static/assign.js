/**
 * 将目标资源对象覆盖至target对象中, 只合并资源对象中自身所有的数据(原型链上不要)
 * @param {*} target 
 * @param  {...any} sources 
 * @returns 
 */
const assign = (target, ...sources) => {
    const type = typeof target;
    if (type === "object" && target !== null) { // 对象才可以进行返回
        const len = sources.length;
        for (let i = 0; i < len; i++) {
            const current = sources[i];
            for (const key in current) {
                if (current.hasOwnProperty(key)) {
                    target[key] = current[key];
                }
            }
        };
    };
    if (target === null || type === "undefined") { // 无法识别null和undefined
        throw new TypeError(`Cannot convert undefined or null to object`);
    };
    // 如果为Number/Boolean/String则直接返回
    return target;
};

export default assign;