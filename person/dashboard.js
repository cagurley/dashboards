'use strict';
$('#pdash * .dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('#pdash * .dash-header').on('click keypress', function () { $(this).next().toggle(); });
$('#pdash * .dash-header').on('mouseover focusin', function () {
  $(this).parent().addClass('dash-ic');
});
$('#pdash * .dash-header').on('mouseout focusout', function () {
  $(this).parent().removeClass('dash-ic');
});
$('#pdash * .dash-header').on('mousedown', function () {
  $(this).parent().addClass('dash-tl');
});
$('#pdash * .dash-header').on('mouseup', function () {
  $(this).parent().removeClass('dash-tl');
});
if (window.matchMedia('(max-width: 575px)').matches) {
  var re = /^\/manage\/lookup\/message\?cmd=compose&person=.+?&recipient=(.+?)(&.+)?$/;
  $('#pdash * .dash-popph').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'tel:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
  $('#pdash * .dash-popem').each(function () {
    var matches = $(this).attr('data-href').match(re);
    if (matches[1]) {
      $(this).removeAttr('onclick');
      $(this).attr('href', 'mailto:' + matches[1]);
      $(this).removeAttr('data-href');
    }
  });
} else if ($('#dash-tp').text().toLowerCase() !== 'yes') {
  $('#dash-mob').html($('#dash-mob').text());
}
