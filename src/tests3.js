function take(n) {
    return function(xc) {
        return xc.slice(0, n);
    };
}

const a = [1, 2, 3, 4];
b = take(2)(a);
console.log(b);

function comp(f) {
    return function(g) {
        return function(x) {
            return f(g(x));
        };
    };
}
