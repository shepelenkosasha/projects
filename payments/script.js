const tarifs = Object.freeze({
    taxes: 0.2,
    water: 0.3,
    internet: 0.4,
    security: 0.5,
    exchange: 0.6,
});

const payment = {};
const payments = [];
let balance = 100;
const leftCompany = document.querySelectorAll('.left__company');
const meters = document.getElementById('meters');
const previous = document.getElementById('previous');
const current = document.getElementById('current');
const btnSave = document.querySelector('.button-wrapper .btn');
const btnReset = document.querySelector('.btn-outline');
const btnPay = document.querySelector('.right__payments-footer .btn');
const formSummaryList = document.querySelector('.form__summary-list');
const rightPaymentsField = document.querySelectorAll('.right__payments-field');
const centerTitle = document.querySelector('.center__title');
const centerDescr = document.querySelector('.center__desc');
const transactionsList = document.querySelector('.transactions__list');
const removeLi = document.querySelectorAll('.list__item');

// select company
leftCompany.forEach(company => company.addEventListener('click', event => {
    if (event.target.tagName === 'DIV') {
        payment.id = event.target.dataset.id;
        const activeCompany = document.querySelector('.left__company.selected');
        const companyDescr = event.target.querySelector('.left__company-desc');
        const title = companyDescr.textContent;
        centerTitle.textContent = title;
        centerDescr.textContent = 'Оплата услуги ' + title.toLowerCase();
        if (activeCompany !== null) activeCompany.classList.remove('selected');
        event.target.classList.add('selected');
    };
}));
// Select meter
meters.addEventListener('change', event => {
    payment.meterId = event.target[event.target.options.selectedIndex].textContent;
});
// Previous value meter
previous.addEventListener('change', event => {
    if (typeof (+event.target.value) === 'number' && event.target.value > 0 && !Number.isNaN(+event.target.value)) {
        event.target.style = 'border:  1px solid #dee1e5;';
        payment.previous = +event.target.value;
    }else event.target.style = 'border: 1px solid red;';
});
// Current value meter
current.addEventListener('change', event => {
    if (typeof (+event.target.value) === 'number' && event.target.value > 0 && +event.target.value > +payment.previous && !Number.isNaN(+event.target.value)) {
        event.target.style = 'border: solid 1px #dee1e5;';
        payment.current = +event.target.value;
    }else event.target.style = 'border: 1px solid red;';
});
// Payments
const renderPayments = (meter, price) => {
    return `
    <li class="list__item">
        <p><span class="list__item-label">${meter}</span>
        <span class="price">$ <b>${price}</b></span>
        </p>
    </li>`;
};
// Total price
const renderTotalPrice = totalPrice => {
    return `
    <li class="list__item list__total">
        <p><span class="list__item-label">Всего</span>
            <span class="price">$ <b>${totalPrice}</b></span>
        </p>
    </li>`;
};
// Remove
const remove = nameClass => {
    const removeHtml = document.querySelectorAll(nameClass);
    removeHtml.forEach(elem => elem.remove());
    formSummaryList.insertAdjacentHTML('beforeend', renderTotalPrice(0));
};
// Transaction
const addTransaction = nameTransaction => {
    return `<li class="list__item">${nameTransaction}: успешно оплачено</li>`;
};
// Error transaction
const errorTransaction = nameTransaction => {
    return `<li class="list__item list__item-error">${nameTransaction}: ошибка транзакции</li>`;
};
// Render function
const renderHtml = (array) => {
    removeLi.forEach(elem => elem.remove());
    const res = array.map(arr => renderPayments(arr.meterId, arr.amount)).join('');
    formSummaryList.insertAdjacentHTML('beforeend', res);
    const total = array.map(elem => elem.amount).reduce((acc, elem) => (elem + acc),0);
    formSummaryList.insertAdjacentHTML('beforeend', renderTotalPrice(total));
};
// selected
const selectedLoadElem = (id) => {
    const title = document.querySelector(`[data-id=${id}]`).textContent.trim();
    const elemChecked = [...rightPaymentsField].find((el) => el.textContent.trim() === title);
    elemChecked.querySelector('input').setAttribute('checked', true);
};
// Pay load 
const payLoad = (text,element) => {
    const elemChecked = [...rightPaymentsField].find((el) => el.textContent.trim() === text);
    elemChecked.querySelector('input').checked = false;
    if (balance > 0 && (balance - element.amount) >= 0) {
        transactionsList.insertAdjacentHTML('beforeend', addTransaction(text));
        balance -= element.amount;
        console.log(`${element.id} оплачено`);
    }else if ((balance - element.amount) < 0) {
        transactionsList.insertAdjacentHTML('beforeend', errorTransaction(text));
        console.log(`${element.id} ошибка оплаты`);
    };
};
// Save
btnSave.addEventListener('click', event => {
    event.preventDefault();
    if (typeof payment.meterId !== 'undefined' && typeof payment.previous !== 'undefined' && typeof payment.current !== 'undefined') {
        const tarif = tarifs[payment.id];
        rightPaymentsField.forEach(i => {
            if (i.textContent.trim() === centerTitle.textContent) i.querySelectorAll('input').forEach(e => e.checked = true);
        });
        payment.amount = Math.floor((payment.current - payment.previous) * tarif);
        const obj = Object.assign({},payment);
        payments.push(obj);
        const removeHtml = document.querySelectorAll('.form__summary-list > .list__item');
        removeHtml.forEach(elem => elem.remove());
        renderHtml(payments);
        localStorage.setItem('payments', JSON.stringify(payments));
        previous.value = '';
        current.value = '';
        for (let key in payment) delete payment[key];
    };   
});
// Reset
btnReset.addEventListener('click', event => {
    event.preventDefault();
    for (let key in payments) {
        delete payments[key];
        payments.length = 0;
    };
    rightPaymentsField.forEach(i => i.querySelectorAll('center input').forEach(e => e.checked = false));
    remove('.list__item');
});
// Pay
btnPay.addEventListener('click', event => {
    event.preventDefault();
    const arr = JSON.parse(localStorage.getItem('payments'));
    if (arr !== null) {
        arr.forEach(e => {
            const elemId = e.id;
            if (elemId === 'taxes') payLoad('Налоги', e);
            if (elemId === 'water') payLoad('Холодная вода', e);
            if (elemId === 'internet') payLoad('Интернет', e);
            if (elemId === 'security') payLoad('Охрана', e);
            if (elemId === 'exchange') payLoad('Обмен валют', e);
            remove('.form__summary-list > .list__item');
        });
        localStorage.removeItem('payments');
    } else {
        payments.forEach(idElem => {
            const title = document.querySelector(`[data-id=${idElem.id}]`).textContent.trim();
            payLoad(title, idElem);
            remove('.form__summary-list > .list__item');
        });
        payments.length = 0;
    };
});
// Load save content
document.addEventListener('DOMContentLoaded', () => {
    const arr = JSON.parse(localStorage.getItem('payments'));
    centerTitle.textContent = `Оплата услуг`;
    if (arr !== null) {
        renderHtml(arr);
        arr.forEach(e => {
            const elemId = e.id;
            if (elemId === 'taxes') selectedLoadElem(elemId);
            if (elemId === 'water') selectedLoadElem(elemId);
            if (elemId === 'internet') selectedLoadElem(elemId);
            if (elemId === 'security') selectedLoadElem(elemId);
            if (elemId === 'exchange') selectedLoadElem(elemId);
        });
        centerDescr.textContent = `Оплата сохранённых платежей`;
    } else {
        remove('.list__item');
        centerDescr.textContent = `Оплата коммунальных услуг`;
    };
    
});

console.log(tarifs);