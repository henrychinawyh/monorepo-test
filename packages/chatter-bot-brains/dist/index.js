'use strict';

async function thinking() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(1), 1000);
    });
}

exports.thinking = thinking;
