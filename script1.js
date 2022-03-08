// script for "Submitted page"
$(document).ready(function () {
  $(".section-title").click(function (e) {
    // Get current link value
    var currentLink = $(this).attr("href");
    if ($(e.target).is(".active")) {
      close_section();
    } else {
      close_section();
      // Add active class to section title
      $(this).addClass("active");
      // Display the hidden content
      $(".accordion " + currentLink)
        .slideDown(350)
        .addClass("open");
    }
    e.preventDefault();
    console.log(e);
  });

  function close_section() {
    $(".accordion .section-title").removeClass("active");
    $(".accordion .section-content").removeClass("open").slideUp(350);
  }
});
