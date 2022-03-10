let [computer_score, user_score] = [0, 0]; // Define computer score and user
let result_ref = document.getElementById('result'); // Define results

// Define object conditions
let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },

    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    },

    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    }
}

// Create checker function to check input
function checker(input) {
    var choices = ['rock', 'paper', 'scissor'];
    var num = Math.floor(Math.random() * 3);

    document.getElementById('comp_choice').innerHTML = `Computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById('user_choice').innerHTML = `You choose <span>${choices[num].toUpperCase()}</span>`;

    let computer_choice = choices[num];

    // Define event on certain conditions
    switch (choices_object[input][computer_choice]) {
        case 'win':
            result_ref.style.cssText = 'background-color: #cefdce; color: #689f38';
            result_ref.innerHTML = "You WIN!"
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = 'background-color: #ffdde0; color: #d32f2f';
            result_ref.innerHTML = "You LOSE!"
            computer_score++;
            break;
        default:
            result_ref.style.cssText = 'background-color: #e5e5e5; color: #808080';
            result_ref.innerHTML = "DRAW";
            break;
    }
    // Set up score
    document.getElementById('computer_score').innerHTML = computer_score;
    document.getElementById('player_score').innerHTML = user_score;
}