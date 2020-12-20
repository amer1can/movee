new Swiper('.avto__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
})
new Swiper('.avto-mobile__slider', {
 // Пагинация (<div class="swiper-pagination"></div>)
 pagination: {
  el: '.swiper-pagination',

// Буллеты
  type: 'bullets', //  (по-умолчанию)
  clickable: true, //возможность кликать по ним
  dynamicBullets: false, //точки изменяют свой размер
 }
})

//icon
const body = document.querySelector('body');
const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');
icon.addEventListener('click', () => {
  icon.classList.toggle('active')
  menu.classList.toggle('show')
  body.classList.toggle('fixed')
})

//кнопка 'Все цены' на мобилке
const allPrices = document.querySelector('.price__all-prices');
const allItems = document.querySelectorAll('.price__item');

const allPricesHided = () => {
  for (let i = 1; i < allItems.length; i++) {
    allItems[i].classList.add('price__item-hide')
  }
}
const allPricesShowed = () => {
  for (let i = 1; i < allItems.length; i++) {
    allItems[i].classList.remove('price__item-hide')
  }
}

allPrices.addEventListener('click', () => {
  allPrices.classList.toggle('showed');

    //элементы скрыты
  if (!allPrices.classList.contains('showed')) {
      allPricesHided();
      allPrices.innerHTML = 'Все цены';
    } else {
    //элементы показаны
      allPricesShowed();
      allPrices.innerHTML = 'Скрыть все цены';  
    };
  })


const manPic = document.querySelector('.header__man');
const headerBtn = document.querySelector('.header__btn');
const headerImages = document.querySelector('.header__images');
const avtoMobile = document.querySelector('.avto-mobile');
const avto = document.querySelector('.avto');

//перемещаем картинку на моб. разрешении
const mediaQuery = window.matchMedia('(max-width: 768px)');
function mediaChange(e) {
  //если размер экрана < 768px
    if (e.matches) {
      //перекидываем фотку мужика для моб.вида
       headerBtn.insertAdjacentElement('beforebegin',manPic);
       manPic.classList.add('header__man-mobile');

       //показываем кнопку "Все цены" + скрытие лишних элементов
       allPricesHided();
       
       //скрываем большой слайдер/показываем мобильный
       avto.classList.add('hide');
       avtoMobile.classList.add('show');
  //размер экрана > 768px
    } else {
      //фотка мужика ставится обратно
      headerImages.prepend(manPic);
      manPic.classList.remove('header__man-mobile');
      //скрываем "Все цены" + все элементы показаны
      allPricesShowed()

      //показываем большой слайдер/скрываем мобильный
      avto.classList.remove('hide');
      avtoMobile.classList.remove('show');

    }
}
mediaQuery.addListener(mediaChange)
mediaChange(mediaQuery)