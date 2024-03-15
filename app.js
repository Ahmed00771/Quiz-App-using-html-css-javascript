
const question = [{
    'que': "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    'correct': "d",
},
{
    'que': "What does CSS stands for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b",
},
{
    'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a",
}

];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;


const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll("#option1")
const loadQuestion = () => {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = question[index]
    quesBox.innerText = ` ${index + 1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer();
   
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion()

}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;


            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementsByClassName(".box").innerHTML = `<h3> Thank you for playing quiz</h3>
    <h2>${right}/${total} are correct</h2>`
}
// initial call
loadQuestion();


