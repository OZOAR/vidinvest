$(document).ready(function() {
  var $signInButton = $('#signInButton');
  var $signInForm = $('#signInForm');
  var $errorMessage = $('.sign-in .error-message');

  $signInButton.on('click', function(e) {
    $errorMessage.addClass('hidden');
    if (validateForm(e)) {
      signInUser();
    }
    else {
      e.preventDefault();
      $errorMessage.removeClass('hidden');
    }
  });

  function signInUser() {
    var msg = $signInForm.serialize();
    // AJAX login
  }

  function validateForm(e) {
    var elementsList = $('#signInForm').find('.form-element');
    var isFormValide = true;

    elementsList.each(function() {
      if($(this).hasClass('incorrect-field')) {
        isFormValide = false;
      }
    });

    return isFormValide;
  }
});
