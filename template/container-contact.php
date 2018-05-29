<?php
  $contact = [
    'title' => 'kontakt',
    'text' => '<ul class="contact-list">
    <li class="contact-list_item">
      <span class="contact-list_item_span">tel: </span>
      <a href="tel:+48886552562" class="contact-list_item-tel">+48 886 552 562</a>
    </li>
    <li class="contact-list_item">
      <span class="contact-list_item_span">e-mail: </span>
      <a href="mailto:fandruszkiewicz@gmail.com" class="contact-list_item-mail">fandruszkiewicz[at]gmail.com</a>
    </li>
    <li class="contact-list_item">
      <figure class="qrcode">
        <figcaption class="qrcode_caption">Skanuj kod lub dotknij:</figcaption>
        <a href="data/andfra_vcard.vcf" download>
          <img src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3AFranciszek+Andruszkiewicz%0AN%3AAndruszkiewicz%3BFranciszek%0ATEL%3BHOME%3BVOICE%3A%2B48886552562%0AEMAIL%3BHOME%3BINTERNET%3Afandruszkiewicz%40gmail.com%0AURL%3Ahttps%3A%2F%2Fandfra1.github.io%2F%0AEND%3AVCARD%0A&amp;qzone=1&amp;margin=0&amp;ecc=L"
            alt="QR code" class="qrcode_img">
        </a>
      </figure>
    </li>
  </ul>'
  ];
?>


<section class="section section1">
  <div class="wrapper">
    <h1>
      <?= $contact['title']?>
    </h1>
    <p>
      <?= $contact['text']?>
    </p>
    <a href="#" id="mail"></a>
    <a href="#" id="phone"></a>
  </div>
</section>