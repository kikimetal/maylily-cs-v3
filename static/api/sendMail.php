<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if (!empty($_POST)) {
  $result = sendEmail($_POST);
  response_json($result);
} else {
  response_json(null);
}

// 与えられた object をもとに json string をレスポンスする
function response_json($obj) {
  if (!empty($obj)) {
    http_response_code(200);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($obj);
  } else {
    http_response_code(404);
  }
}

// エスケープ
function h ($text) {
  return htmlspecialchars($text);
}

// コンタクトフォームよりメールを送信
function sendEmail ($post) {

  $to = "takahashi@maylily.co.jp";
  $fromName = "メイリリィサイト コンタクトフォームより";
  $fromAddress = "corporate-site-contact-form@maylily.co.jp";

  $data = array(
    "email" => h($post["email"]),
    "title" => h($post["title"]),
    "name" => h($post["name"]),
    "message" => h($post["message"]),
    "contactTypeSelect" => h($post["contactTypeSelect"]),
    // "age" => h($post["age"]) ? h($post["age"]) : "年齢不詳",
  );

  $inputAllOK = true;

  foreach ($data as $key => $value) {
    if(!$value){
      $inputAllOK = false;
    }
  }

  if ($inputAllOK) {

    $subject = $data["title"];
    $header = "From: " . mb_encode_mimeheader($fromName) . "<" . $fromAddress . ">";

    // HTML メールはなんか<html></html>のなかで変数展開がうまく行かない謎すぎ
    // $header .= "\r\n";
    // $header .= "Content-type: text/html; charset=UTF-8";

    $body =
      "<title>"."\n".
      $data["title"]."\n\n".
      "<name>"."\n".
      $data["name"]."\n\n".
      "<e-mail>"."\n".
      $data["email"]."\n\n".
      "<contact type select>"."\n".
      $data["contactTypeSelect"]."\n\n".
      "<message>"."\n".
      $data["message"]."\n"
      ;

    $sendEmailResult = mb_send_mail($to, $subject, $body, $header);
  }
  return $sendEmailResult || false; // true | false
} // function sendEmail
