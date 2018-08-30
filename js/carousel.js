$(document).ready(function() {
  $(".testimonial-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    prevArrow: $(".testimonial-carousel-controls .prev"),
    nextArrow: $(".testimonial-carousel-controls .next")
  });
});
