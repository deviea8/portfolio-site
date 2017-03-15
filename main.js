var displayProjectOverlay = function() {
  console.log('function fired')
  $(this).children(":first").addClass('project-overlay').removeClass('project-overlay-hidden');
}

var hideProjectOverlay = function() {
  console.log('function fired hide')
  $(this).children(":first").addClass('project-overlay-hidden').removeClass('project-overlay');
}

$('.project').on('mouseover', displayProjectOverlay);
$('.project').on('mouseleave', hideProjectOverlay);
