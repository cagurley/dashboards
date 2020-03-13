'use strict';
$('.dash-content').each(function () {
  if (!$(this).text()) {
    $(this).html('<em>none</em>');
  }
});
$('.dash-header').click(function () { $(this).next().toggle(); });
