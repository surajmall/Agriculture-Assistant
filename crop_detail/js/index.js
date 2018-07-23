$(document).ready(function() {

  var ct = 0;

  $('.next1').one('click', function(e) {

    e.preventDefault();

    $('#account').animate('slow', function() {

      if (ct > 0) {
        $('#account').removeClass('transition visible');
        $('#account').addClass('transition hidden');

      }
      $('#account').css('display', 'none');

      $('#accountS').addClass('disabled');
      $('#socialP').removeClass('disabled');
      $("#social").transition('fly right');
      $('body').css('background-color', '#06000a');
      $('#social button').removeClass('inverted violet');
      $('#social button').addClass('inverted blue');
      ct++;

    });

  });

  $('.prev1').one('click', function(e) {

    e.preventDefault();
    $('#accountS').removeClass('disabled');
    $('#socialP').addClass('disabled');

    $('#social').animate('slow', function() {

      $('body').css('background-color', '#300032');
      $('#social').transition('hide');
      $("#account").transition('fly right');

    });

  });

  $('.next2').one('click', function(m) {

    m.preventDefault();

    $('#socialP').addClass('disabled');
    $('#details').removeClass('disabled');

    $('#social').animate('slow', function() {

      $('#personal button').removeClass("inverted violet");
      $('#personal button').addClass("inverted orange");
      $('body').css('background-color', '#251605');
      $('#social').transition('hide');

      $('#personal').transition('fly right');
    });

  });

  $('.prev2').one('click', function(m) {

    m.preventDefault();
    $('#details').addClass('disabled');
    $('#socialP').removeClass('disabled');

    $('#personal').animate('slow', function() {

      $('body').css('background-color', '#06000a');
      $('#personal').transition('hide');

      $('#social').transition('fly right');
    });

  });

  $('.submit').one('click', function(p) {

    p.preventDefault();

    $('#personal').stop();
  });

});