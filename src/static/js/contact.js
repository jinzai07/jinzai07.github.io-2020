$('#alert').on('closed.bs.alert', function () {
  window.history.replaceState({}, document.title, "/contact");
});

$('#sendEmailForm').one('submit', function() {
  $(this).find('button[type="submit"]').attr('disabled','disabled');
});