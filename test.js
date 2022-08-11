const obj = {
    name: "CodeGorgeous",
    song() {
        console.log("Hello World!");
    }
};
obj.__proto__.a = 1;
const obj2 = Object.entries(obj);
console.dir(obj2);