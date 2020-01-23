$(document).ready(function () {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var unlucky = [];
    var lucky = [];
    
    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      var no = $(this).val();
      unlucky.push(no);
    });
    
    $("input:checkbox[name=lucky-events]:checked").each(function() {
      var yes = $(this).val();
      lucky.push(yes);
    });

    var notluck = unlucky.length;
    var luck = lucky.length;
    
    if (luck < notluck) {
      $("#result1").show();
    } else if (luck <= notluck) {
      $("#result2").show();
    }  else {
      $("#result3").show();
      }

  });
});