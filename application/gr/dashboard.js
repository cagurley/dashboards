'use strict';
$('#gradash * .dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('#gradash * .dash-header').on('click keypress', function () { $(this).next().toggle(); });
$('#gradash * .dash-header').on('mouseover focusin', function () {
  $(this).parent().addClass('dash-ic');
});
$('#gradash * .dash-header').on('mouseout focusout', function () {
  $(this).parent().removeClass('dash-ic');
});
$('#gradash * .dash-header').on('mousedown', function () {
  $(this).parent().addClass('dash-tl');
});
$('#gradash * .dash-header').on('mouseup', function () {
  $(this).parent().removeClass('dash-tl');
});
if (window.matchMedia('(max-width: 575px)').matches) {
  var re = /^\/manage\/lookup\/message\?cmd=compose&person=.+?&recipient=(.+?)(&.+)?$/;
  $('#gradash * .dash-popem').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'mailto:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
}
