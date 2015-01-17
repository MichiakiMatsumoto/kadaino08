
$("#copy").click(function(){  // 出力ボタンを押した場合は、setBlobUrl関数に値を渡して実行
  console.log("ボタンがおされた");
  var value = $("#moetweet").val();
  setBlobUrl("download",value);
});



function setBlobUrl(id, content) {
  console.log("setBlobUrl:" + content);

  var download = $("#download");
  // 指定されたデータを保持するBlobを作成する。
  var blob = new Blob([ content ], { "type" : "application/x-msdownload" });
  // Aタグのhref属性にBlobオブジェクトを設定し、リンクを生成
  window.URL = window.URL || window.webkitURL;
  /*
  $("#" + id).attr("href", window.URL.createObjectURL(blob));
  $("#" + id).attr("download", "tmp.txt");
  */
  download.attr("href", window.URL.createObjectURL(blob));
}
