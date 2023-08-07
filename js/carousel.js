plugins: [
    new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
    }),
]

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'

$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false, // Отключаем навигационные стрелки Owl Carousel
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });

    // Получаем кнопки по их id
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');
    
    // Обработчики событий для кнопок
    prevButton.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем действие ссылки
      owl.trigger('prev.owl.carousel'); // Переключаем карусель на предыдущий слайд
    });
    
    nextButton.addEventListener('click', function(e) {
      e.preventDefault(); // Отменяем действие ссылки
      owl.trigger('next.owl.carousel'); // Переключаем карусель на следующий слайд
    });

    // Обработчик события после смены слайда
    owl.on('changed.owl.carousel', function(event) {
      var currentSlideIndex = event.item.index;
      var currentSlide = event.target.querySelector('.owl-item').children[currentSlideIndex];
      var backgroundImage = currentSlide.getAttribute('data-bg');
      
      document.body.style.backgroundImage = 'url(' + backgroundImage + ')';
    });
});

//Chat gpt