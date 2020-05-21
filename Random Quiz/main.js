// EVENT LISTENER
document.getElementById('btn').addEventListener("click", Check1);

// Global Values
let finalScore = 0;

// FUNCTION
function Check1() {

    // 
    let Question1 = document.getElementById('Answer1').value;
    Question1 = Question1.toLowerCase();
    let Question2 = document.getElementById('Answer2').value;
    Question2 = Question2.toLowerCase();
    let Question3 = Number(document.getElementById('Answer3').value);
    let Question4 = document.getElementById('Answer4').value;
    Question4 = Question4.toLowerCase();

    // if statement
    if ((Question1 == 'michael phelps' || Question1 == 'phelps') && Question2 == 'denmark' && Question3 == '3' && (Question4 == 'donald' || Question4 == 'trump' || Question4 == 'donald trump')) {
        document.getElementById('body').style.backgroundColor = 'lightgreen';
    } else {
        document.getElementById('body').style.backgroundColor = 'red';
    }

    // Scoring + Coloring process
    if (Question1 == 'michael phelps' || Question1 == 'phelps') {
        finalScore += 1
        document.getElementById('score').innerHTML = (finalScore / 4) * 100;
    } else {
        document.getElementById('Q1').innerHTML = 'Question 1 incorrect';
        document.getElementById('Q1').classList.add('p');
    }

    if (Question2 == 'denmark') {
        finalScore += 1
        document.getElementById('score').innerHTML = (finalScore / 4) * 100;
    } else {
        document.getElementById('Q2').innerHTML = 'Question 2 incorrect'
        document.getElementById('Q2').classList.add('p');
    }

    if (Question3 == '3') {
        finalScore += 1
        document.getElementById('score').innerHTML = (finalScore / 4) * 100;
    } else {
        document.getElementById('Q3').innerHTML = 'Question 3 incorrect';
        document.getElementById('Q3').classList.add('p');
    }

    if (Question4 == 'donald' || Question4 == 'trump' || Question4 == 'donald trump') {
        finalScore += 1
        document.getElementById('score').innerHTML = (finalScore / 4) * 100;
    } else {
        document.getElementById('Q4').innerHTML = 'Question 4 incorrect';
        document.getElementById('Q4').classList.add('p');
    }

    // COMMENTS
    if (finalScore == 4) {
        document.getElementById('comment').innerHTML = 'Great Job!'
    } else if (finalScore >= 3) {
        document.getElementById('comment').innerHTML = 'Good!'
    } else if (finalScore <= 2) {
        document.getElementById('comment').innerHTML = 'Not Bad!'
    } else {
        document.getElementById('comment').innerHTML = 'Try Harder!'
    }
}