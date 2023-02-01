const user = JSON.parse(localStorage.getItem('login')) || {
    email: 'ppmudryi@lectrum.io',
    name: 'Пётр Премудрый (default)'
};

const headerTitle = document.getElementById('headerTitle');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

headerTitle.innerHTML = user.name;
userName.innerHTML = user.name;
userEmail.innerHTML = user.email;

const reviews = document.getElementById('reviews');

const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [
    {
        name: 'Анна Перминова (default)',
        review: 'Ой я в полном восторге. Мне казалось что я никогда не разберусь с этими артиклями. Теперь я шарю!))))',
        rating: 5,
        created: '2020-11-08T16:46:02.988Z'
    }
];

const getReviewLike = (review) => {
    const { name, review: reviewText, rating, created } = review;
    const relatedDate = new Date(created);

    return `
        <div class="card-box">
            <div class="card-illustration _pink">
                <span class="svg-search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                        d="M21.8 20.6l-3.4-3.4-.1-.1c-.3-.3-.8-.3-1.1 0-2.9 2.7-7.4 2.8-10.5.3C3.5 15 2.8 10.6 4.9 7.3 7 4 11.3 2.7 15 4.3c3.6 1.6 5.5 5.6 4.3 9.4-.1.3 0 .6.2.8.2.2.5.3.8.2.3-.1.5-.3.6-.5 1.4-4.5-.7-9.3-5-11.2-4.3-2-9.4-.7-12.1 3.1C1 9.9 1.6 15.1 5 18.3c3.5 3.2 8.8 3.4 12.5.5l3 3c.3.3.8.3 1.1 0 .5-.3.5-.8.2-1.2 0 .1 0 .1 0 0z"/></svg>
                </span>
            </div>
            <div class="info">
                <p class="sub-title">${relatedDate}</p>
                <p class="info-title">${name}</p>
                <p class="info-desc">${reviewText}</p>
                <div class="card-like _like-${rating}">
                    <div class="like-box">
                        <span class="svg-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.7"><path d="M12.7 24c-2.3-1.5-4.5-3.2-6.5-5.1-1.5-1.5-2.6-3.3-3.2-5.2-.7-2.1-.6-4.5.4-6.5.8-1.7 2.3-2.9 4-3.5 2-.6 4.2-.3 6 .8 1.8-1.2 4-1.4 6-.8 1.8.6 3.2 1.8 4 3.5 1 2 1.1 4.4.4 6.5-.7 2-1.8 3.7-3.2 5.2-.9 1-2 1.9-3 2.7h-.1c-.4.2-.8.2-1.1-.2-.1-.2-.2-.4-.1-.6 0-.2.2-.4.3-.5 1-.8 2-1.6 2.9-2.6 1.3-1.3 2.3-2.9 2.9-4.6.6-1.7.5-3.6-.3-5.3-.6-1.3-1.7-2.2-3.1-2.7-1.7-.5-3.6-.2-5 .9-.3.2-.7.2-1 0-1.4-1.1-3.3-1.5-5-.9-1.5.6-2.6 1.5-3.3 2.8-.7 1.7-.8 3.5-.3 5.3.6 1.7 1.6 3.2 2.9 4.5 1.9 1.9 4 3.5 6.2 4.9.3.2.4.6.3.9-.1.3-.4.6-.8.6-.1.1-.2 0-.3-.1zm5.8-12.8c0-.9-.6-1.7-1.5-2-.3-.2-.5-.6-.3-1 .1-.4.5-.6.8-.6 1.5.6 2.5 1.9 2.6 3.4 0 .2 0 .4-.2.6-.1.2-.3.3-.5.3h-.1c-.4 0-.7-.3-.8-.7z"/></svg></span>
                    </div>
                    <div class="like-box">
                        <span class="svg-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.7"><path d="M12.7 24c-2.3-1.5-4.5-3.2-6.5-5.1-1.5-1.5-2.6-3.3-3.2-5.2-.7-2.1-.6-4.5.4-6.5.8-1.7 2.3-2.9 4-3.5 2-.6 4.2-.3 6 .8 1.8-1.2 4-1.4 6-.8 1.8.6 3.2 1.8 4 3.5 1 2 1.1 4.4.4 6.5-.7 2-1.8 3.7-3.2 5.2-.9 1-2 1.9-3 2.7h-.1c-.4.2-.8.2-1.1-.2-.1-.2-.2-.4-.1-.6 0-.2.2-.4.3-.5 1-.8 2-1.6 2.9-2.6 1.3-1.3 2.3-2.9 2.9-4.6.6-1.7.5-3.6-.3-5.3-.6-1.3-1.7-2.2-3.1-2.7-1.7-.5-3.6-.2-5 .9-.3.2-.7.2-1 0-1.4-1.1-3.3-1.5-5-.9-1.5.6-2.6 1.5-3.3 2.8-.7 1.7-.8 3.5-.3 5.3.6 1.7 1.6 3.2 2.9 4.5 1.9 1.9 4 3.5 6.2 4.9.3.2.4.6.3.9-.1.3-.4.6-.8.6-.1.1-.2 0-.3-.1zm5.8-12.8c0-.9-.6-1.7-1.5-2-.3-.2-.5-.6-.3-1 .1-.4.5-.6.8-.6 1.5.6 2.5 1.9 2.6 3.4 0 .2 0 .4-.2.6-.1.2-.3.3-.5.3h-.1c-.4 0-.7-.3-.8-.7z"/></svg></span>
                    </div>
                    <div class="like-box">
                        <span class="svg-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.7"><path d="M12.7 24c-2.3-1.5-4.5-3.2-6.5-5.1-1.5-1.5-2.6-3.3-3.2-5.2-.7-2.1-.6-4.5.4-6.5.8-1.7 2.3-2.9 4-3.5 2-.6 4.2-.3 6 .8 1.8-1.2 4-1.4 6-.8 1.8.6 3.2 1.8 4 3.5 1 2 1.1 4.4.4 6.5-.7 2-1.8 3.7-3.2 5.2-.9 1-2 1.9-3 2.7h-.1c-.4.2-.8.2-1.1-.2-.1-.2-.2-.4-.1-.6 0-.2.2-.4.3-.5 1-.8 2-1.6 2.9-2.6 1.3-1.3 2.3-2.9 2.9-4.6.6-1.7.5-3.6-.3-5.3-.6-1.3-1.7-2.2-3.1-2.7-1.7-.5-3.6-.2-5 .9-.3.2-.7.2-1 0-1.4-1.1-3.3-1.5-5-.9-1.5.6-2.6 1.5-3.3 2.8-.7 1.7-.8 3.5-.3 5.3.6 1.7 1.6 3.2 2.9 4.5 1.9 1.9 4 3.5 6.2 4.9.3.2.4.6.3.9-.1.3-.4.6-.8.6-.1.1-.2 0-.3-.1zm5.8-12.8c0-.9-.6-1.7-1.5-2-.3-.2-.5-.6-.3-1 .1-.4.5-.6.8-.6 1.5.6 2.5 1.9 2.6 3.4 0 .2 0 .4-.2.6-.1.2-.3.3-.5.3h-.1c-.4 0-.7-.3-.8-.7z"/></svg></span>
                    </div>
                    <div class="like-box">
                        <span class="svg-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.7"><path d="M12.7 24c-2.3-1.5-4.5-3.2-6.5-5.1-1.5-1.5-2.6-3.3-3.2-5.2-.7-2.1-.6-4.5.4-6.5.8-1.7 2.3-2.9 4-3.5 2-.6 4.2-.3 6 .8 1.8-1.2 4-1.4 6-.8 1.8.6 3.2 1.8 4 3.5 1 2 1.1 4.4.4 6.5-.7 2-1.8 3.7-3.2 5.2-.9 1-2 1.9-3 2.7h-.1c-.4.2-.8.2-1.1-.2-.1-.2-.2-.4-.1-.6 0-.2.2-.4.3-.5 1-.8 2-1.6 2.9-2.6 1.3-1.3 2.3-2.9 2.9-4.6.6-1.7.5-3.6-.3-5.3-.6-1.3-1.7-2.2-3.1-2.7-1.7-.5-3.6-.2-5 .9-.3.2-.7.2-1 0-1.4-1.1-3.3-1.5-5-.9-1.5.6-2.6 1.5-3.3 2.8-.7 1.7-.8 3.5-.3 5.3.6 1.7 1.6 3.2 2.9 4.5 1.9 1.9 4 3.5 6.2 4.9.3.2.4.6.3.9-.1.3-.4.6-.8.6-.1.1-.2 0-.3-.1zm5.8-12.8c0-.9-.6-1.7-1.5-2-.3-.2-.5-.6-.3-1 .1-.4.5-.6.8-.6 1.5.6 2.5 1.9 2.6 3.4 0 .2 0 .4-.2.6-.1.2-.3.3-.5.3h-.1c-.4 0-.7-.3-.8-.7z"/></svg></span>
                    </div>
                    <div class="like-box">
                        <span class="svg-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.7"><path d="M12.7 24c-2.3-1.5-4.5-3.2-6.5-5.1-1.5-1.5-2.6-3.3-3.2-5.2-.7-2.1-.6-4.5.4-6.5.8-1.7 2.3-2.9 4-3.5 2-.6 4.2-.3 6 .8 1.8-1.2 4-1.4 6-.8 1.8.6 3.2 1.8 4 3.5 1 2 1.1 4.4.4 6.5-.7 2-1.8 3.7-3.2 5.2-.9 1-2 1.9-3 2.7h-.1c-.4.2-.8.2-1.1-.2-.1-.2-.2-.4-.1-.6 0-.2.2-.4.3-.5 1-.8 2-1.6 2.9-2.6 1.3-1.3 2.3-2.9 2.9-4.6.6-1.7.5-3.6-.3-5.3-.6-1.3-1.7-2.2-3.1-2.7-1.7-.5-3.6-.2-5 .9-.3.2-.7.2-1 0-1.4-1.1-3.3-1.5-5-.9-1.5.6-2.6 1.5-3.3 2.8-.7 1.7-.8 3.5-.3 5.3.6 1.7 1.6 3.2 2.9 4.5 1.9 1.9 4 3.5 6.2 4.9.3.2.4.6.3.9-.1.3-.4.6-.8.6-.1.1-.2 0-.3-.1zm5.8-12.8c0-.9-.6-1.7-1.5-2-.3-.2-.5-.6-.3-1 .1-.4.5-.6.8-.6 1.5.6 2.5 1.9 2.6 3.4 0 .2 0 .4-.2.6-.1.2-.3.3-.5.3h-.1c-.4 0-.7-.3-.8-.7z"/></svg></span>
                    </div>
                </div>
            </div>
        </div>`;
};

const generateHTMLLike = () => {
    const reviewsHTML = savedReviews.map((review) => {
        return getReviewLike(review);
    }).join('');
    
    reviews.insertAdjacentHTML('afterend', reviewsHTML);
};

// генерируем разметку при первом заходе на страничку teacher.html
generateHTMLLike();

// для динамического изменения времени в отзывах
// перерисовывает отзывы каждые 15 секунд
setInterval(() => {
    document
        .querySelectorAll('.block__lesson-step div.card-box')
        .forEach((el) => el.remove());
        
    generateHTMLLike();
}, 15 * 1000);

const arrayLessons = JSON.parse(localStorage.getItem('lessons')) || [{ name: 'Student 1', title: 'test1', tomorrow: 'Завтра', time: '12:00', duration: '60' }];

const blockScheduledLessons = document.querySelector('.block__scheduled-lessons');

const getReview = (arr) => {
    const { name, title, tomorrow, time, duration } = arr;
    const data = tomorrow ? 'Завтра': 'Сегодня';
    let timeLesson;

    if (time === 12 && duration === 60) timeLesson = '12:00 — 13:00';
    if (time === 12 && duration === 90) timeLesson = '12:00 — 13:30';
    if (time === 12 && duration === 120) timeLesson = '12:00 — 14:00';
    if (time === 14 && duration === 60) timeLesson = '14:00 — 15:00';
    if (time === 14 && duration === 90) timeLesson = '14:00 — 15:30';
    if (time === 14 && duration === 120) timeLesson = '14:00 — 16:00';
    if (time === 16 && duration === 60) timeLesson = '16:00 — 17:00';
    if (time === 16 && duration === 90) timeLesson = '16:00 — 17:30';
    if (time === 16 && duration === 120) timeLesson = '16:00 — 18:00';

    return `
        <div class="card-box">
            <div class="card-illustration">
                <img src="./images/user_02.png" alt="">
            </div>
            <div class="info">
                <p class="sub-title">${data}, ${timeLesson}</p>
                <p class="info-title">${name}</p>
                <p class="info-desc">${title}</p>
            </div>
        </div>
        `;
};

const generateHTML = () => {
    const removeCardBox = document.querySelectorAll('.card-box');
    removeCardBox.forEach(i => i.remove());
    const reviewsHTML = arrayLessons.map((array) => {
        return getReview(array);
    }).join('');
    
    blockScheduledLessons.insertAdjacentHTML('beforeend', reviewsHTML);
};

generateHTML();

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.onclick = () => {
    localStorage.removeItem('login');
    window.location.href = 'index.html';
};
