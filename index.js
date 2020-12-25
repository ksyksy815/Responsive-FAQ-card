
let answers = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
]
let questions = document.getElementsByClassName('questions'),
    buttons = document.getElementsByTagName('button');
    

/*---Insert answers to each questions ---*/
for (i = 0; i < questions.length; i++) {
    questions[i].childNodes[3].innerHTML = answers[i];
}

/*---Put arrow icons into buttons--- */
for (i = 0; i < buttons.length; i++){
    let arrowImg = document.createElement('img');
    arrowImg.setAttribute('src', '/images/icon-arrow-down.svg');
    buttons[i].appendChild(arrowImg);
}

/*---Add an event listener to show and hide answers--- */
for (i = 0 ; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        this.childNodes[3].classList.toggle('show');
    })           
}  


/*---Make the questions' font weight BOLD when clicked--- */
for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        if (this.childNodes[1].childNodes[1].style.fontWeight === '') {
            this.childNodes[1].childNodes[1].style.fontWeight += 'bold';
        } else {
            this.childNodes[1].childNodes[1].style.fontWeight = '';
        }
    })
}

/*---Add 'transform: rotate(180deg)' to the arrow buttons--- */
for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        if (this.childNodes[1].childNodes[3].style.transform === '') {
            this.childNodes[1].childNodes[3].style.transform = 'rotate(180deg';
        } else {
            this.childNodes[1].childNodes[3].style.transform = '';
        }
    })
}
