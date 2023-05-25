new WOW().init();

$(function () {
  // drawer-js //
  $(".drawer").drawer();

  //***** スムーススクロール *****//
  jQuery('a[href^="#"]').click(function () {
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top - header;
    if ("fixed" !== jQuery(".header").css("position")) {
      position = jQuery(target).offset().top;
    }
    if (0 > position) {
      position = 0;
    }
    jQuery("html, body").animate(
      {
        scrollTop: position,
      },
      speed
    );
    return false;
  });

  //***** スクロール判定 *****//
  jQuery(window).on("scroll", function () {
    if (100 < jQuery(this).scrollTop()) {
      jQuery(".totop").addClass("is-show");
    } else {
      jQuery(".totop").removeClass("is-show");
    }
  });

  //****** swiper *****//
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1.5,
    width: 438,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "clickable",
    },

    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 2.5,
        spaceBetween: 42,
        width: 1060,
      },
    },
  });

  //****** アコーディオン *****//
  jQuery(".accordion__head").click(function () {
    jQuery(this).next().slideToggle();
    jQuery(this).children(".accordion__title").toggleClass("is-open");
  });

  //***** クリックした要素に対して下線を引く *****//
  jQuery(".header__nav-link").click(function () {
    jQuery(".header__nav-link").removeClass("is-active");
    jQuery(this).addClass("is-active");
    return false;
  });

  //*****Google Form *****//
  let $form = $("#js-form");

  $form.submit(function (e) {
    $.ajax({
      url: $form.attr("action"),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したときの処理
          $form.slideUp();
          $("#js-success").slideDown();
        },
        200: function () {
          //送信に失敗したときの処理
          $form.slideUp();
          $("#js-error").slideDown();
        },
      },
    });
    return false;
  });

  // formの入力確認
  let $submit = $('#js-submit')

  $('#js-form input').on('change', function(){
    if (
        $('#js-form input[name="entry.2108141962"]').val() !== "" &&
        $('#js-form input[name="entry.1779443982"]').val() !== "" &&
        $('#js-form input[name="entry.1962186872"]').prop('checked') === true
    ) {
        // 全て入力された時
        $submit.prop('disabled', false)
        $submit.addClass('-active')
    }else{
        // 入力されていない時
        $submit.prop('disabled', true)
        $submit.removeClass('-active')
    }
  })
});

