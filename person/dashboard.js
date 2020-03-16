'use strict';
$('.dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('.dash-header').click(function () { $(this).next().toggle(); });
$('.dash-header').on('mouseover mouseout', function () {
  $(this).parent().toggleClass('dash-ic');
});
$('.dash-header').on('mousedown mouseup', function () {
  $(this).parent().toggleClass('dash-tl');
});
$('#dash-recdet .dash-body').hide();
// if (window.matchMedia('(max-width: 575px)')) {}
