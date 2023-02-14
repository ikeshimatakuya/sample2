/* JS書き方
$(funcion(){
    記述したい処理
});
*/

$(function () {
    $('#btn').on('click', function() {
      // ここに処理を記述してください
      $(this).val('ボタンが押されました');
      $(this).css('color', 'Blue')

    });
  });