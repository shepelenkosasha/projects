const timeSlots = {
    time_01: 12,
    time_02: 14,
    time_03: 16,
    time_04: 12,
    time_05: 14,
    time_06: 16,
};

const lessons = {
    type_01: {
        title: 'Новый урок',
        duration: 120
    },    
    type_02: {
        title: 'Аудирование',
        duration: 90
    },    
    type_03: {
        title: 'Рефреш знаний',
        duration: 60
    },    
    type_04: {
        title: 'Тестирование',
        duration: 60
    },
};

const user = JSON.parse(localStorage.getItem('login')) || {
    email: 'ppmudryi@lectrum.io',
    name: 'Пётр Премудрый (default)'
};

const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const greeting = document.getElementById('greeting');

greeting.innerHTML = user.name;
profileName.innerHTML = user.name;
profileEmail.innerHTML = user.email;

const formComment = document.getElementById('formComment');

formComment.onsubmit = (event) => {
    event.preventDefault();

    const radioBtn = formComment.querySelector('input[type="radio"]:checked');
    const textarea = formComment.querySelector('textarea');

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([{
        name: user.name,
        rating: radioBtn.value,
        review: textarea.value,
        created: new Date()
    }, ...reviews]));

    formComment.reset();
};

const type_01 = document.getElementById('type_01');
const type_02 = document.getElementById('type_02');
const type_03 = document.getElementById('type_03');
const type_04 = document.getElementById('type_04');

const time_01 = document.getElementById('time_01');
const time_02 = document.getElementById('time_02');
const time_03 = document.getElementById('time_03');
const time_04 = document.getElementById('time_04');
const time_05 = document.getElementById('time_05');
const time_06 = document.getElementById('time_06');

const formLessons = document.getElementById('formLessons');

const obj = {};

// add lessons
formLessons.addEventListener('submit', e => {
    e.preventDefault();

    const login = JSON.parse(localStorage.getItem('login'));
    
    const typeRadioBtn = formLessons.querySelector('input[name="type"]:checked');
    const timeRadioBtn = formLessons.querySelector('input[name="time"]:checked');
    // type lesson
    const typeBtn = type => {
        if (typeRadioBtn.id === type.id) {
            if (type === type_01) {
                obj.title = lessons.type_01.title;
                obj.duration = lessons.type_01.duration;
            };
            if (type === type_02) {
                obj.title = lessons.type_02.title;
                obj.duration = lessons.type_02.duration;
            };
            if (type === type_03) {
                obj.title = lessons.type_03.title;
                obj.duration = lessons.type_03.duration;
            };
            if (type === type_04) {
                obj.title = lessons.type_04.title;
                obj.duration = lessons.type_04.duration;
            };
        };
    };
    //time lesson
    const timeBtn = time => {
        if (timeRadioBtn.id === time.id) {
            if (time === time_01) obj.time = timeSlots.time_01;
            if (time === time_02) obj.time = timeSlots.time_02;
            if (time === time_03) obj.time = timeSlots.time_03;
            if (time === time_04) obj.time = timeSlots.time_04;
            if (time === time_05) obj.time = timeSlots.time_05;
            if (time === time_06) obj.time = timeSlots.time_06;
            if (time === time_01 || time === time_02 || time === time_03) obj.tomorrow = false;
            if (time === time_04 || time === time_05 || time === time_06) obj.tomorrow = true;
        };
    };
    
    obj.name = login.name;

    typeBtn(type_01);
    typeBtn(type_02);
    typeBtn(type_03);
    typeBtn(type_04);

    timeBtn(time_01);
    timeBtn(time_02);
    timeBtn(time_03);
    timeBtn(time_04);
    timeBtn(time_05);
    timeBtn(time_06);
    
    if (JSON.parse(localStorage.getItem('lessons'))) {
        const lesson = JSON.parse(localStorage.getItem('lessons'));
        localStorage.setItem('lessons',JSON.stringify([obj, ...lesson]));
    } else localStorage.setItem('lessons',JSON.stringify([obj]));
});
console.log(localStorage.getItem('lessons'));
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.onclick = () => {
    localStorage.removeItem('login');
    window.location.href = 'index.html';
};