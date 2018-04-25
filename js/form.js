$(document).ready(function(){
  var $popupBg = $('#popupBg');
  var $closeIcon = $('#closeLoginForm');
  var $loginCta = $('.loginCta');
  var $loginForm = $('.login-form');
  var $sigInForm = $loginForm.find('.sign-in');
  var $sigUpForm = $loginForm.find('.sign-up');
  var joinButtons = $('.join-button');
  var formValidationState = false;

  function showLoginPopup() {
    $popupBg.removeClass('hidden');
    $loginForm.removeClass('hidden');
  }
  function hideLoginPopup() {
    $loginForm.addClass('hidden');
    $popupBg.addClass('hidden');
  }

  $loginCta.on('click', function(e) {
    e.preventDefault();
    showLoginPopup();
  });

  $popupBg.on('click', hideLoginPopup);
  $closeIcon.on('click', hideLoginPopup);

  $('#switchToSignUp').on('click', function(e) {
    e.preventDefault();
    $sigInForm.addClass('hidden');
    $sigUpForm.removeClass('hidden');
  });
  $('#switchToSignIn').on('click', function(e) {
    e.preventDefault();
    $sigInForm.removeClass('hidden');
    $sigUpForm.addClass('hidden');
  });

  function signInFormValidation(regex, passwordConfirmation) {
    var inputData = $(this).val();
    var $inputWrapper = $(this).closest('.form-element');
    if((!regex && !inputData) || (regex && !regex.test(inputData))) {
      $inputWrapper.addClass('incorrect-field');
    }
    else {
      $inputWrapper.removeClass('incorrect-field');
    }
  }

  $('.email input').on('blur', function() {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    signInFormValidation.call(this, regex);
  });

  $('.password input').on('blur', function() {
    signInFormValidation.call(this);
  });

  joinButtons.each(function() {
    $(this).on('click', function(e) {
      e.preventDefault;
      $sigInForm.addClass('hidden');
      $sigUpForm.removeClass('hidden');
      showLoginPopup();
    })
  });
})
