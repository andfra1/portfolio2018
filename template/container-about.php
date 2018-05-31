<?php
  $about = [
    'title' => 'o mnie',
    'text' => '<p>
    Nazywam się
    <strong>Franciszek Andruszkiewicz</strong> i jestem front-end developerem. Od sierpnia 2017 rozpocząłem staż w firmie
    <a href="http://www.solmedia.pl/" rel="nofollow">SOLMedia</a>, a od października 2017 roku zająłem stanowisko web-developera w firmie
    <a href="https://crafton.pl/" rel="nofollow">Crafton</a>.
  </p>
  <p>
    Jestem zainteresowany współpracą przy tworzeniu stron internetowych lub pracę w pełnym wymiarze godzin (UoP, UZ). W zakładce <a href="#" id="portfolio-link">portfolio</a> można obejrzeć projekty w pełni wykonane przeze mnie.
  </p>
  <p>
      <a href="./cv/">Link do CV</a>
    </p>'
  ];
?>

<section class="section matrix">
<div class="matrixDimmer"></div>
<canvas id="matrix" width="100%" height="100%"></canvas>
</section>

<section class="section about" id="about">

  <div class="wrapper">
    <h1>
      <?= $about['title']?>
    </h1>
    <p>
      <?= $about['text']?>
    </p>
  </div>
</section>