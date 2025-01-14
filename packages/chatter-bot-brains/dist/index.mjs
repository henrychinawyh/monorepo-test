async function thinking() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(1), 1000);
    });
}

export { thinking };
