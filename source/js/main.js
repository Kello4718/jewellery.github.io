// Переменные
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerMenu = header.querySelector('.header__button-menu');
const headerSearch = header.querySelector('.header__button-search-container');
const headerSearchInput = header.querySelector('input[type=search]');
const headerLogo = header.querySelector('.header__logo');
const headerAuth = header.querySelector('.header__auth-container');
const headerCart = header.querySelector('.header__auth-container-cart-tablet');
const headerList = header.querySelector('.header__navigation-list-container');
const main = document.querySelector('main');
const sections = document.querySelectorAll('section');
const login = document.querySelector('.login');
const loginForm = login.querySelector('form');
const loginEmail = login.querySelector('input[type=email]');
const loginButtonClose = login.querySelector('.login__button-close');
const logoContainer = document.querySelector('.header__auth-container-login-desktop');
const loginLogo = logoContainer.querySelector('a');
const logoImage = document.querySelector('.login__logo-link');
const menuLogin = document.querySelector('.header__login');
const filterButtons = document.querySelectorAll('.catalog__filter-button-container');
const filterArrowDown = document.querySelectorAll('.catalog__filter-arrow-down');
const filterArrowUp = document.querySelectorAll('.catalog__filter-arrow-up');
const filterContent = document.querySelectorAll('.catalog__filter-input-container');
const catalogButtonFilter = document.querySelector('.catalog__button-filter');
const modalFilter = document.querySelector('.modal-filter');
const modalFilterButtons = document.querySelectorAll('.modal-filter__button-container');
const modalFilterButtonClose = document.querySelector('.modal-filter__form-button-close');
const modalContent = document.querySelectorAll('.modal-filter__input-container');
const modalArrowDown = document.querySelectorAll('.modal-filter__arrow-down');
const modalArrowUp = document.querySelectorAll('.modal-filter__arrow-up');
const pageWidth = document.documentElement.scrollWidth;

if (pageWidth < 769) {
  headerSearchInput.setAttribute('placeholder', '');
}

/* Функция переключатель для раздела FAQ */

const handler = (button, text, up, down) => {
  button.addEventListener('click', () => {
    if (text.classList.contains('hide')) {
      text.classList.toggle('hide');
      up.classList.toggle('hide');
      down.classList.toggle('hide');
    } else {
      text.classList.toggle('hide');
      up.classList.toggle('hide');
      down.classList.toggle('hide');
    }
  });
  button.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 32) {
      evt.preventDefault();
      if (text.classList.contains('hide')) {
        text.classList.toggle('hide');
        up.classList.toggle('hide');
        down.classList.toggle('hide');
      } else {
        text.classList.toggle('hide');
        up.classList.toggle('hide');
        down.classList.toggle('hide');
      }
    }
  });
};

for (const section of sections) {
  if (section.classList.contains('faq')) {
    const faq = document.querySelector('.faq');
    const faqButtons = faq.querySelectorAll('.faq__item-button');
    const faqArrowDown = faq.querySelectorAll('.faq__arrow-down');
    const faqArrowUp = faq.querySelectorAll('.faq__arrow-up');
    const faqText = faq.querySelectorAll('p');
    /* Цикл для всех кнопок раздела FAQ */
    for (let i = 0; i < faqButtons.length; i++) {
      handler(faqButtons[i], faqText[i], faqArrowUp[i], faqArrowDown[i]);
    }
  }
}


for (let i = 0; i < filterButtons.length; i++) {
  handler(filterButtons[i], filterContent[i], filterArrowUp[i], filterArrowDown[i]);
}

for (let i = 0; i < modalFilterButtons.length; i++) {
  handler(modalFilterButtons[i], modalContent[i], modalArrowUp[i], modalArrowDown[i]);
}

window.addEventListener('load', () => {
  header.classList.remove('no-js');
  headerMenu.classList.remove('no-js');
  headerSearch.classList.remove('no-js');
  headerLogo.classList.remove('no-js');
  headerAuth.classList.remove('no-js');
  headerCart.classList.remove('no-js');
  headerList.classList.remove('no-js');
});

// Функция, которая запрещает скролл при открытом модальном окне

const bodyFixPosition = () => {

  setTimeout( () => {
    if ( !body.hasAttribute('data-body-scroll-fix') ) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      body.setAttribute('data-body-scroll-fix', scrollPosition);
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${  scrollPosition  }px`;
      body.style.left = '0';
      body.style.width = '100%';
    }
  }, 15 );
};

// Функция, которая разрешает скролл страницы при закрытии модального окна

const bodyUnfixPosition = () => {
  if ( body.hasAttribute('data-body-scroll-fix') ) {
    const scrollPosition = body.getAttribute('data-body-scroll-fix');
    body.removeAttribute('data-body-scroll-fix');
    body.style.overflow = '';
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.width = '';
    window.scroll(0, scrollPosition);
  }
};

/* Код для работы меню */

headerMenu.addEventListener('click', () => {
  header.classList.toggle('no-js');
  headerMenu.classList.toggle('no-js');
  headerSearch.classList.toggle('no-js');
  headerLogo.classList.toggle('no-js');
  headerAuth.classList.toggle('no-js');
  headerCart.classList.toggle('no-js');
  headerList.classList.toggle('no-js');
  body.classList.toggle('open');
});

loginLogo.addEventListener('click', (evt) => {
  evt.preventDefault();
  logoImage.style.display = 'none';
  login.classList.remove('hide');
  login.classList.add('show');
  bodyFixPosition();
  main.style.opacity = '20%';
});

menuLogin.addEventListener('click', (evt) => {
  evt.preventDefault();
  logoImage.style.display = 'none';
  login.classList.remove('hide');
  login.classList.add('show');
  bodyFixPosition();
  main.style.opacity = '20%';
});

// Код по работе с модальным окном

loginLogo.addEventListener('click', (evt) => {
  evt.preventDefault();
  login.classList.remove('hide');
  loginEmail.focus();
  bodyFixPosition();
});

menuLogin.addEventListener('click', (evt) => {
  evt.preventDefault();
  login.classList.remove('hide');
  loginEmail.focus();
  bodyFixPosition();
});

loginButtonClose.addEventListener('click', () => {
  login.classList.add('hide');
  main.style.opacity = '100%';
  bodyUnfixPosition();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ESC' || evt.key === 'Escape') {
    login.classList.add('hide');
    main.style.opacity = '100%';
    bodyUnfixPosition();
  }
});

login.addEventListener('click', (evt) => {
  if (evt.target === login) {
    login.classList.add('hide');
    main.style.opacity = '100%';
    bodyUnfixPosition();
  }
});

menuLogin.addEventListener('click', (evt) => {
  if (evt.target === login) {
    login.classList.add('hide');
    main.style.opacity = '100%';
    bodyUnfixPosition();
  }
});

// Функция, по отправки формы

const toPushForm = (form, formEmail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    localStorage.setItem('email', formEmail.value);
    formEmail.value = '';
    login.classList.add('hide');
    main.style.opacity = '100%';
    bodyUnfixPosition();
    if (evt.target === login) {
      login.classList.add('hide');
      main.style.opacity = '100%';
      bodyUnfixPosition();
    }
  });
};

toPushForm(loginForm, loginEmail);

/* Обработчик события на кнопку фильтра */

if (catalogButtonFilter) {
  catalogButtonFilter.addEventListener('click', () => {
    modalFilter.classList.remove('hide');
    main.style.opacity = '10%';
    bodyFixPosition();
  });
}


/* Обработчик события на кнопку "Закрыть фильтр" */
if (modalFilterButtonClose) {
  modalFilterButtonClose.addEventListener('click', () => {
    modalFilter.classList.add('hide');
    main.style.opacity = '100%';
    bodyUnfixPosition();
  });
}

/* Слайдер */

/* eslint-disable */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-slide',
    prevEl: '.swiper-button-prev-slide',
  },
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      simulateTouch: true,
      touchRatio: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return `<ul><li class="${currentClass}"></li><li>of</li><li class="${totalClass}"></li></ul>`;
        },
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      simulateTouch: true,
      touchRatio: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      simulateTouch: false,
      touchRatio: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
    },
  },
});

