$('.details-caret').click(function () {
  var parentRow = $(this).parent('tr');
  console.log($(this));

  if (parentRow.hasClass('details-open')) {
    parentRow.removeClass('details-open');
    parentRow.addClass('details-closed');
  } else {
    parentRow.removeClass('details-closed');
    parentRow.addClass('details-open');
  }
});
