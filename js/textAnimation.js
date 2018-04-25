$(document).ready(function(){
 $.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 80 * i);
   });
  });
 };
 $('#title').show();
 $('#title').animate_Text();

setTimeout(function(){
  $('.banner-summary p').each(function() {
    $(this).css('opacity', '1');
  })
}, 1000);
setTimeout(function(){
  $('.banner-summary .button').each(function() {
    $(this).css('opacity', '1');
  })
}, 1500);
});
