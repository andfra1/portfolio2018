<?php
 $portfolio = [
  'title' => 'projekty',
  'project' => [
    'wsm' => [
      'text' => [
        'desc' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sequi, nisi veritatis vel vitae, nulla culpa laudantium obcaecati necessitatibus ipsam delectus eum velit labore similique quo aliquid aliquam! Nesciunt, sapiente.',
        'tools' => [
          'html', 'sass', 'jquery', 'wordpress', 'joomla', 'bootstrap', 'php', 'rwd'
        ]
      ],
      'img' => 'img/portfolio/wsm.jpg',
      'link' => '#'
    ],
    'teja' => [
      'subtext' => '(komercyjnie)',
      'text' => [
        'desc' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sequi, nisi veritatis vel vitae, nulla culpa laudantium obcaecati necessitatibus ipsam delectus eum velit labore similique quo aliquid aliquam! Nesciunt, sapiente.',
        'tools' => [
          'html', 'sass', 'jquery', 'wordpress', 'joomla', 'bootstrap', 'php', 'rwd'
        ]
      ],
      'img' => 'img/portfolio/teja.jpg',
      'link' => '#'
    ],
    'bodie' => [
      'text' => [
        'desc' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sequi, nisi veritatis vel vitae, nulla culpa laudantium obcaecati necessitatibus ipsam delectus eum velit labore similique quo aliquid aliquam! Nesciunt, sapiente.',
        'tools' => [
          'html', 'sass', 'jquery', 'wordpress', 'joomla', 'bootstrap', 'php', 'rwd'
        ]
      ],
      'img' => 'img/portfolio/bodie.png',
      'link' => '#'
    ]
  ]
 ];

 $project = $portfolio['project'];
?>

  <section class="section projects" id="projects">
    <div class="wrapper">
      <h1 class="projects__header">
        <?= $portfolio['title']?>
      </h1>

      <div class="slider" id="slider">

        <?php foreach ($project as $name => $content) : ?>
        <div class="slider__slide">
          <div class="slider__slideContent">
            <div class="slider__slideContentText">
              <h2>
                <?= $name; ?>
                  <?php if( !empty($content['subtext'])) : ?>
                  <small>
                    <?= $content['subtext']?>
                  </small>
                  <?php endif; ?>
              </h2>
              <p>
                <?= $content['text']['desc']; ?>
              </p>

              <ul>
                <?php foreach ($content['text']['tools'] as $key) : ?>
                <li data-tooltip="<?= $key; ?>">
                  <?= file_get_contents('img/svg/' . $key . '.svg'); ?>
                </li>
                <?php endforeach; ?>
              </ul>

            </div>
            <div class="slider__slideContentImg">
              <img src="<?= $content['img']; ?>" alt="<?= $name; ?>">
            </div>
          </div>
        </div>

        <?php
        endforeach;
        ?>
      </div>
    </div>
  </section>