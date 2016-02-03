$(function(){
  var canvas = $("canvas")[0],
      ctx = canvas.getContext("2d"),
      method;

  var drawing_methods = {
    square: function() {
      var side = 30;
      ctx.fillRect(0, 0, side, side);
    }
  };

  $(".drawing_method").on("click", function(e){
    e.preventDefault();
    var $e = $(this)
        class_name = "active";
    $e.closest("ul").find("." + class_name).removeClass(class_name);
    $e.addClass(class_name);
    method = $e.attr("data-method");
  }).eq(0).click();

  $("canvas").on("click", function() {
    drawing_methods[method]();
  });
});
