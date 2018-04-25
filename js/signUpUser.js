$(document).ready(function() {
  var $signUpButton = $('#signUpButton');
  var $signUpForm = $('#signUpForm');
  var $errorMessage = $('.sign-up .error-message');
  var $infoMessage = $('.sign-up .info-message');
  var $successMessage = $('.sign-up .success-message');

  function signUpUser() {
    var msg = $signUpForm.serialize();

    //AJAX Sign Up
  }

  function validateForm(e) {
    var elementsList = $('#signUpForm').find('.form-element');
    var isFormValide = true;
    elementsList.each(function() {
      if($(this).hasClass('incorrect-field')) {
        isFormValide = false;
      }
    });

    return isFormValide
  }

  $signUpButton.on('click', function() {
    $errorMessage.addClass('hidden');

    if (validateForm(e)) {
      $infoMessage.addClass('hidden');
      $signUpForm.addClass('hidden');
      $successMessage.removeClass('hidden');
      signUpUser();
    }
    else {
      e.preventDefault();
      $errorMessage.removeClass('hidden');
    }
  });
});
