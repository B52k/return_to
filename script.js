

function determineResult() {
    const result = document.getElementById("result");
    text = result.textContent;
    answer = result.textContent;
    while (text == answer) {
        array = ["long commutes", "hugs", "handshakes", "the office", "going out to eat", "happy hour", "crowded rooms", "in-person meetings", "travel"];
        integer = Math.floor(Math.random() * 9);
        answer = array[integer];
    }
    return answer;
}

function addAnswer() {
    text = determineResult();
    const result = document.getElementById("result");
    result.textContent = text;
    
}