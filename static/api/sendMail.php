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

// コンタクトフォームよりメールを送信
function sendEmail ($data) {

  $to = "takahashi@maylily.co.jp";
  $fromName = "メイリリィサイト コンタクトフォームより";
  $fromAddress = "corporate-site-contact-form@maylily.co.jp";

  // 全ての値をエスケープ
  foreach ($data as $v) {
    // $v = json_decode($v);
    // if (gettype($v) === "boolean") {
    //   continue;
    // }
    $v = htmlspecialchars($v);
  }

  $inputAllOK = true;

  foreach ($data as $key => $value) {
    if(!$value){
      $inputAllOK = false;
    }
  }

  if ($inputAllOK) {

    $subject = "コンタクトフォームからのお問い合わせです。";
    $header = "From: " . mb_encode_mimeheader($fromName) . "<" . $fromAddress . ">";

    // HTML メールはなんか<html></html>のなかで変数展開がうまく行かない謎すぎ
    // $header .= "\r\n";
    // $header .= "Content-type: text/html; charset=UTF-8";

    $body_common =
      "<company>"."\n".
      $data["company"]."\n\n".
      "<name>"."\n".
      $data["name"]."\n\n".
      "<phone>"."\n".
      $data["phone"]."\n\n".
      "<zipcode>"."\n".
      $data["zipcode"]."\n\n".
      "<address>"."\n".
      $data["address"]."\n\n".
      "<email>"."\n".
      $data["email"]."\n\n";

    $body_branch = "";
    if ($data["contactTypeOEM"] === "true") {
      $body_branch .=
        "<oemProductSelect>"."\n".
        str_replace(",", "\n", $data["oemProductSelect"])."\n\n".
        "<oemObjectSelect>"."\n".
        str_replace(",", "\n", $data["oemObjectSelect"])."\n\n".
        "<oemNum>"."\n".
        $data["oemNum"]."\n\n".
        "<oemDate>"."\n".
        $data["oemDate"]."\n\n";
    } else {
      $body_branch .=
        "<contactContentSelect>"."\n".
        str_replace(",", "\n", $data["contactContentSelect"])."\n\n";
    }

    $body_message = "<message>"."\n".$data["message"]."\n";

    $body = $body_common . $body_branch . $body_message;

    $sendEmailResult = mb_send_mail($to, $subject, $body, $header);
  }
  return $sendEmailResult || false; // true | false
} // function sendEmail
