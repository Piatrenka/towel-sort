const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let aa = [[], [], []];
let bb = [];
aa.forEach(el => {
    bb = bb.concat(el);
});

// console.log(aa.length);
// console.log(bb.length);

// console.log(...a);
// let [b, ...c] = a;
// console.log(b, c);
// let b
// [b] = a
let b = [];
let i = 0;
a.forEach(el => {
    b = b.concat(i % 2 === 0 ? el : el.reverse());
    i++;
});
console.log(b);
