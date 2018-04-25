$(document).ready(function() {
  initTabs($('.portfolio-tabs'));
  initTabs($('.contacts'));
})

function initTabs($parent) {
  var tabs = $parent.find('.nav-tabs .tab');
  var tabContent = $parent.find('.tab-content .tab-pane');

  tabs.each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var tabContentId = $(this).find('a').attr('href');
      tabs.each(function() {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      tabContent.each(function() {
        $(this).addClass('hidden');
        if ($(this).is(tabContentId)) {
          $(this).removeClass('hidden');
        }
      });
    });
  });
}
