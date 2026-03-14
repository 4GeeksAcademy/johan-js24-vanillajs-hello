window.onload = function () {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed on", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
        "before the class",
        "when I was sleeping",
        "while I was exercising",
        "during my lunch",
        "while I was praying"
    ];

    function getRandomElement(array) {
        let randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    let excuse =
        getRandomElement(who) +
        " " +
        getRandomElement(action) +
        " " +
        getRandomElement(what) +
        " " +
        getRandomElement(when);

    document.querySelector("#excuse").innerHTML = excuse;
};