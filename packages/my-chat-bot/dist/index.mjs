async function ask(question) {
    const tone = new RegExp("[!?！？]");
    return question.replace(tone, "").replace("吗", "");
}

export { ask };
