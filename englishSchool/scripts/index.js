// Слайдер на главной странице
const slider = document.getElementById('slider');
const slides = Array.from(slider.querySelectorAll('.box-content'));
const prevButtons = slider.querySelectorAll('.box-content .button-prev');
const nextButtons = slider.querySelectorAll('.box-content .button-next');

let activeSlide = 0;
let timerId = 0;
const timeout = 4000;

slides[0].style.display = 'flex';
slides[0].querySelector('figure').classList.add('animate__fadeIn');
slides[0].querySelector('.slider-wrapper').classList.add('animate__fadeIn');

const hideSlides = () => {
    slides.forEach((item) => {
        item.style.display = 'none';
        item.querySelector('figure').classList.remove('animate__fadeIn');
        item.querySelector('.slider-wrapper').classList.remove('animate__fadeIn');
    });
};

const showSlide = (slideIdx) => {
    slides.forEach((item, index) => {
        if (index === slideIdx) {
            item.style.display = 'flex';
            item.querySelector('figure').classList.add('animate__fadeIn');
            item.querySelector('.slider-wrapper').classList.add('animate__fadeIn');
        }
    });
};

prevButtons.forEach((item) => {
    item.onclick = () => {
        const slide = activeSlide === 0 ? slides.length : activeSlide;

        clearInterval(timerId);
        hideSlides();

        activeSlide = slide - 1;

        showSlide(activeSlide);
        runSlider(timeout);
    };
});

nextButtons.forEach((item) => {
    item.onclick = () => {
        const slide = activeSlide === slides.length - 1 ? -1 : activeSlide;

        clearInterval(timerId);
        hideSlides();

        activeSlide = slide + 1;

        showSlide(activeSlide);
        runSlider(timeout);
    };
});

const runSlider = (timeout) => {
    timerId = setInterval(() => {
        hideSlides();
    
        if (activeSlide === slides.length - 1) {
            activeSlide = 0;
        } else {
            activeSlide += 1;
        }
    
        showSlide(activeSlide);
    }, timeout);
};

runSlider(timeout);

// Форма логина
const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email1');
const password = document.getElementById('password1');
const loginForm = document.getElementById('loginForm');

const saveToStorage = (obj) => {
    localStorage.setItem('login', JSON.stringify(obj));
};

loginBtn.onclick = () => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const teacher = JSON.parse(localStorage.getItem('teacher')) || {};

    const { 
        password: teacherPassword, 
        email: teacherEmail 
    } = teacher;

    if (teacherPassword !== password.value || teacherEmail !== email.value) {
        const student = students.find((item) => {
            return item.password === password.value && item.email === email.value;
        });

        if(!student) {
            loginForm.reset();
        } else {
            saveToStorage(student);
            window.location.href = 'student.html';
        }
    } else {
        saveToStorage(teacher);

        window.location.href = 'teacher.html';
    }
};

// Форма регистрации
const regBtn = document.getElementById('regBtn');
const step1Block = document.getElementById('step1Block');
const toStep2Btn = document.getElementById('toStep2Btn');
const loginBlock = document.getElementById('loginBlock');
const toLoginSvg = document.getElementById('toLoginSvg');
const regBlock = document.getElementById('regBlock');
const from3to2Svg = document.getElementById('from3to2Svg');
const from1to2 = document.getElementById('from1to2');
const from2to1 = document.getElementById('from2to1');

const user_student = document.getElementById('user_student');
const user_teacher = document.getElementById('user_teacher');

const createAccount = document.getElementById('createAccount');

const person = {};
// student registration
user_student.addEventListener('click',() => {
    const inputChecked = document.querySelector('input:checked');
    if(inputChecked) person.type = 'student';
});
// teacher registration
user_teacher.addEventListener('click',() => {
    const inputChecked = document.querySelector('input:checked');
    if(inputChecked) person.type = 'teacher';
});
// create Account
createAccount.addEventListener('click', () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password_next = document.getElementById('password_next');

    const nameValidation = string => {
        if (string.includes(' ')){
            const slpitStr = string.split(' ');
            if (slpitStr[0].length >= 3 && slpitStr[1].length >= 3) return slpitStr.join(' ');
        };
    };

    if (password.value === '') password.setAttribute('class', 'input-box error');
    if (password_next.value === '') password_next.setAttribute('class', 'input-box error');
    if (name.value === '') name.setAttribute('class', 'input-box error');
    if (nameValidation(name.value)) name.setAttribute('class', 'input-box error');
    if (email.value === '') email.setAttribute('class', 'input-box error');
    if (password.value !== password_next.value) {
        password.setAttribute('class', 'input-box error');
        password_next.setAttribute('class', 'input-box error');
    };

    if (password.value === password_next.value 
        && password.value !== '' 
        && password_next.value !== ''
        && email.value !== ''
        && nameValidation(name.value)) {
        person.name = name.value;
        person.email = email.value;
        person.password = password.value;
        if (person.type === 'teacher') {
            if (JSON.parse(localStorage.getItem('teacher'))) localStorage.removeItem('teacher');
            localStorage.setItem('teacher',JSON.stringify(person));
            saveToStorage(person);
            window.location.href = 'teacher.html';
        };
        if (person.type === 'student') {
            if (JSON.parse(localStorage.getItem('students'))) {
                const studentsArr = JSON.parse(localStorage.getItem('students'));
                localStorage.setItem('students',JSON.stringify([person, ...studentsArr]));
                saveToStorage(person);
            } else localStorage.setItem('students',JSON.stringify([person]));
            saveToStorage(person);
            window.location.href = 'student.html';
        };
    }; 
});
// registration , step one form
regBtn.addEventListener('click', () =>{
    loginBlock.style = "display: none;";
    step1Block.style = "display: flex;";
});
// back to login 
toLoginSvg.addEventListener('click', () =>{
    loginBlock.style = "display: flex;";
    step1Block.style = "display: none;";
});
// next , step two form
toStep2Btn.addEventListener('click', () =>{
    regBlock.style = "display: flex;";
    step1Block.style = "display: none;";
});
// back to 'Who are you?' 
from3to2Svg.addEventListener('click', () =>{
    regBlock.style = "display: none;";
    step1Block.style = "display: flex;";
});
// next 
from1to2.addEventListener('click', () =>{
    regBlock.style = "display: flex;";
    step1Block.style = "display: none;";
});
// back
from2to1.addEventListener('click', () =>{
    regBlock.style = "display: none;";
    step1Block.style = "display: flex;";
});