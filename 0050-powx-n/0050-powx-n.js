function myPow(x, n) {
    let abn = Math.abs(n);
    let output = 1;

    while (abn > 0) {
        if (abn % 2 === 1) {   // if power is odd, multiply once extra
            output = output * x;
        }
        x = x * x;             // square x
        abn = Math.floor(abn / 2);  // cut power in half
    }

    return n < 0 ? 1 / output : output;
}