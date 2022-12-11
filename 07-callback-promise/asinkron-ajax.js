$(function () {
  $.ajax({
    url: "target_file.ext",
    success: (a) => alert(a),
    error: (e) => console.log(e),
  });
});
