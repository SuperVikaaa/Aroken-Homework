(function () {
  // Модалка
  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.hero__big-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--open-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--open-modal')
    }
  }

  // Маска для телефона
  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')

  im.mask(telInputs)

})()

// Страница спасибо
function myFunction() {
  window.location.href = 'thank-you.html';
}

function backMain() {
  window.location.href = 'index.html';
}

// Кнопка "Показать еще"
const showMore = document.querySelector('.btn-center');
const itemLength = document.querySelectorAll('.benefit__item').length;
let items = 6;

showMore.addEventListener('click', () => {
  items += 3;
  const array = Array.from(document.querySelector('.benefit__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === itemLength) {
    showMore.style.display = 'none';
  }
});

// Табы
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {

      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.tabs__nav-btn').click();

// Слайдер-отзывы
const swiper = new Swiper('.mySwiper', {

  spaceBetween: 20,
  slidesPerView: 1,
  effect: "cards",
  grabCursor: true,
  mousewheel: true,
  keyboard: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

// Аккордеон
const lists = document.querySelectorAll('.accordion__list');
const contents = document.querySelectorAll('.accordion__content');

lists.forEach(item => item.addEventListener('click', () => {
  const activeContent = document.querySelector('#' + item.dataset.tab);

  if (activeContent.classList.contains('active')) {
    activeContent.classList.remove('active');
    item.classList.remove('active');
    activeContent.style.maxHeight = 0;
  } else {
    contents.forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
    });

    lists.forEach(element => element.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}))

document.querySelector('[data-tab="tab-3"]').classList.add('active');
document.querySelector('#tab-3').classList.add('active');
document.querySelector('#tab-3').style.maxHeight = document.querySelector('#tab-3').scrollHeight + 'px';


