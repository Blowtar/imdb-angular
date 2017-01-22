$(document).ready(function() {
  
  $('#review-btn').on('click', function(e) {
    e.preventDefault();
    
    var $this = $(this);
    $this.closest('.details').next().slideDown('slow')
  });
  
});