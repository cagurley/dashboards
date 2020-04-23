'use strict';
$('#adash * .dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('#adash * .dash-header').on('click keypress', function () { $(this).next().toggle(); });
$('#adash * .dash-header').on('mouseover focusin', function () {
  $(this).parent().addClass('dash-ic');
});
$('#adash * .dash-header').on('mouseout focusout', function () {
  $(this).parent().removeClass('dash-ic');
});
$('#adash * .dash-header').on('mousedown', function () {
  $(this).parent().addClass('dash-tl');
});
$('#adash * .dash-header').on('mouseup', function () {
  $(this).parent().removeClass('dash-tl');
});
if (window.matchMedia('(max-width: 575px)').matches) {
  var re = /^\/manage\/lookup\/message\?cmd=compose&person=.+?&recipient=(.+?)(&.+)?$/;
  $('#adash * .dash-popph').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'tel:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
  $('#adash * .dash-popem').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'mailto:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
}
