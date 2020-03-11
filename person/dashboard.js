'use strict';
$('.dashcontent').each(function () {
  if (!$(this).html()) {
    $(this).html('<em>none</em>');
  }
});
$('.dashheader').click(function () { $(this).next().toggle(); });
