$(function() {
  $('.index-nav').fix();
  /*
  $('a').pjax({
    container: '#body',
    part: '#body'
  });
  */
  $('.index-nav li a, .pagination li a').pjax({
    container: '#body',
    part: '#body',
    event: 'click',
    success: function(d) {
      var $nodeTag = $('.node .node-tag'),
          $no = $('.nav li.on'),
          $nbs = $('.nav-bottom-span');
      if ($nodeTag.length) {
        $nodeTag.next('.description').tooltip();
      }
      if ($no.length) {
        setTimeout(function() {
          $no.trigger('mouseover');
          if ($nbs.length) {
            $nbs.css({'opacity': 1});
          }
        }, 300);
      }
    }
  });
});
