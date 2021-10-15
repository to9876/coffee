$(function () {
  $(".js-nav-menu-list a").on("click", function () {
    const sectionId = $(this).attr("href");
    const duration = 500;
    const easing = "swing";
    const position = $(sectionId).offset().top;
    $("html,body").animate({ scrollTop: position }, duration, easing);
  });

  // $(".js-nav-menu-list a").click(function () {
  //   const sectionId = $(this).attr("href");
  //   const duration = 500;
  //   const easing = "swing";
  //   const position = $(sectionId).offset().top;
  //   $("html").animate({ scrollTop: position }, duration, easing);
  // });
});
