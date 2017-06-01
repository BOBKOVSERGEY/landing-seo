  // Declare the variable
  var toggles = $(".burger");

// This function adds the class that displays the menu
  toggles.on("click", function() {
    $(this).closest(".menu").toggleClass("open");
    $(this).toggleClass('burger--close');
  });

// Declare the variable
  var toggleLink = $(".link");

// This function removes the class that displays the menu
  toggleLink.on("click", function() {
    $(this).closest(".menu").toggleClass("open");
    $('.burger').removeClass('burger--close');
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      $('.menu').addClass('menu_scroll');

    } else {
      $('.menu').removeClass('menu_scroll');
    }
  });

  $(".menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);

  });




