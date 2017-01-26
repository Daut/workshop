'use strict';

const hanoi = (n, source, aux, target) => {
    if (n > 0) {
        hanoi(n - 1, source, target, aux);

        target.push(source.splice(source.length - 1, 1)[0]);

        hanoi(n - 1, aux, source, target);
    }
};

module.exports = hanoi;
