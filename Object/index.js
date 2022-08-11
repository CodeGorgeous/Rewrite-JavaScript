export default function MyObject (val) {
    // 需要根据判断value的类型返回对应的包装对象
    // 例如: 1 => Number(1)
    //      '1' => String('1')
    //      true => Boolean(true)
    //      null => {}
    //      undefined => {}
    //      NaN => Number(NaN)
};

window.MyObject = MyObject;