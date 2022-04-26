// this info simulates getting data from a database
var homeContent = `<div class="banner">
<p>Header goes here</p>
<p class="bot-ban">Less important text goes here</p>
<p class="par-ban">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
  aliquid minus nemo sed est.
</p>
<p class="main-ban">
  “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab
  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
  explicabo. Iste natus error sit voluptatem accusantium doloremque
  laudantium totam rem aperiam eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo”
</p>
<!-- button for banner -->
<input class="submitted" type="submit" value="Read More" />
<div class="client-name">John Smith</div>
<div class="name-quote">Corporation CEO, books author.</div>
</div>
<!-- begin content for purple box -->
<div class="purp-box">
<p class="purp-events">UPCOMING EVENTS:</p>
<hr />
<!-- still purple box, intro to blog in purple box -->
<div class="row">
  <!-- blog one -->
  <div class="column">
   <a href = "#bone"><span class="blog-btn">06 JUN</span></a> 
    <p class="blog-title">Sed et persipiatis unde omnis iste natus</p>
    <div class="pink-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <p class="br">Aliquid temporibus quos aspernatur</p>
    </div>
  </div>
  <!-- blog two -->
  <div class="column">
  <a href = "#btwo"><span class="blog-btn">30 JUL</span></a> 
    <p class="blog-title">Sed et persipiatis unde omnis iste natus</p>
    <div class="pink-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <p class="br">Aliquid temporibus quos aspernatur</p>
    </div>
  </div>
  <!-- blog three -->
  <div class="column">
  <a href = "#bthree"><span class="blog-btn">30 AUG</span></a> 
    <p class="blog-title">Sed et persipiatis unde omnis iste natus</p>
    <div class="pink-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <p class="br">Aliquid temporibus quos aspernatur</p>
    </div>
  </div>
  <!-- blog four -->
  <div class="column">
  <a href = "#bfour"><span class="blog-btn">23 NOV</span></a> 
    <p class="blog-title">Sed et persipiatis unde omnis iste natus</p>
    <div class="pink-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <p class="br">Aliquid temporibus quos aspernatur</p>
    </div>
  </div>
  <!-- blog five -->
  <div class="column">
  <a href = "#bfive"><span class="blog-btn">23 DEC</span></a> 
    <p class="blog-title">Sed et persipiatis unde omnis iste natus</p>
    <div class="pink-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <p class="br">Aliquid temporibus quos aspernatur</p>
    </div>
  </div>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var aboutContent = ` <div class="black-line">
<hr />
</div> <div class="heading"></div>
<p class="about-his">OUR HISTORY:</p>
<hr />
<p class="about-par">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
  illo inventore veritatis et quasi architecto beatae vitae dicta sunt
  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
  voluptatem.
</p> <!-- begin footer -->
<footer>
  <div class="logo">
    <p>eventsy</p>
  </div>
  <p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
  <p class="foot-numb">(213)-467-2627</p>
  <p class="foot-em">info@eventsy.com</p>
  <form>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Enter your email to join newsletter…"
    />
    <input class="submit" type="submit" value="SUBSCRIBE" />
  </form>
  <div class="social">
    <i class="icon fa-brands fa-facebook-square fa-3x"></i>
    <i class="icon fa-brands fa-instagram-square fa-3x"></i>
    <i class="icon fa-brands fa-twitter-square fa-3x"></i>
  </div>
  <p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>
`;

var galleryContent = ` <div class="black-line">
<hr />
</div> <p class="gall-title">GALLERY:</p>
<hr />
<div class="rows">
  <div class="columns">
    <a href="#one"><div class="gall-one"></div></a>
  </div>

  <div class="columns">
  <a href="#two"><div class="gall-two"></div></a>
  </div>

  <div class="columns">
  <a href="#three"><div class="gall-three"></div></a>
  </div>
</div>

<div class="rows">
  <div class="columns">
  <a href="#four"><div class="gall-four"></div></a>
  </div>

  <div class="columns">
  <a href="#five"><div class="gall-five"></div></a>
  </div>
</div>
<!-- begin footer -->
<footer>
  <div class="logo">
    <p>eventsy</p>
  </div>
  <p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
  <p class="foot-numb">(213)-467-2627</p>
  <p class="foot-em">info@eventsy.com</p>
  <form>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Enter your email to join newsletter…"
    />
    <input class="submit" type="submit" value="SUBSCRIBE" />
  </form>
  <div class="social">
    <i class="icon fa-brands fa-facebook-square fa-3x"></i>
    <i class="icon fa-brands fa-instagram-square fa-3x"></i>
    <i class="icon fa-brands fa-twitter-square fa-3x"></i>
  </div>
  <p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var blogContent = `  <div class="black-line">
<hr />
</div>
<p class="blog-title">BLOG:</p>
<hr />
<div class="rowing">
<!-- blog one -->
<div class="columning">
  <span class="blog-btns">06 JUN</span>
  <div class="blog-image">
  <a href="#bone"><img src="images/blog.jpg" alt="Blog" /></a> 
  </div>
  <p>Sed et persipiatis unde omnis iste natus</p>
  <span class="pinky-text"
    >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium
  </span>
  <p class="pinky-textOne">
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.
  </p>
</div>

<div class="columning">
  <span class="blog-btns">30 JUL</span>
  <div class="blog-image">
  <a href="#btwo"><img src="images/blog.jpg" alt="Blog" /></a> 
  </div>
  <p>Sed et persipiatis unde omnis iste natus</p>
  <span class="pinky-text"
    >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium
  </span>
  <p class="pinky-textOne">
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.
  </p>
</div>
</div>

<div class="rowing">
<!-- blog one -->
<div class="columning">
  <span class="blog-btns">30 AUG</span>
  <div class="blog-image">
  <a href="#bthree"><img src="images/blog.jpg" alt="Blog" /></a> 
  </div>
  <p>Sed et persipiatis unde omnis iste natus</p>
  <span class="pinky-text"
    >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium
  </span>
  <p class="pinky-textOne">
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.
  </p>
</div>

<div class="columning">
  <span class="blog-btns">23 NOV</span>
  <div class="blog-image">
  <a href="#bfour"><img src="images/blog.jpg" alt="Blog" /></a> 
  </div>
  <p>Sed et persipiatis unde omnis iste natus</p>
  <span class="pinky-text"
    >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium
  </span>
  <p class="pinky-textOne">
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.
  </p>
</div>
</div>

<div class="rowing">
<!-- blog one -->
<div class="columning">
  <span class="blog-btns">23 DEC</span>
  <div class="blog-image">
  <a href="#bfive"><img src="images/blog.jpg" alt="Blog" /></a> 
  </div>
  <p>Sed et persipiatis unde omnis iste natus</p>
  <span class="pinky-text"
    >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium
  </span>
  <p class="pinky-textOne">
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.
  </p>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var contactContent = ` <div class="black-line">
<hr />
</div>
<p class="cont-title">CONTACT US:</p>
<hr />
<div class="cont-dis">
<div class="cont-sec">
  <form>
    <input
      class="full-size"
      type="text"
      id="fname"
      name="fname"
      placeholder="Your Name..."
    />

    <input
      class="full-size"
      type="text"
      id="email"
      name="email"
      placeholder="Email Address..."
    />

    <input
      class="full-size"
      type="text"
      id="pnumber"
      name="pnumber"
      placeholder="Company..."
    />

    <input
      class="full-size"
      type="text"
      id="message"
      name="message"
      placeholder="Message..."
      style="height: 199px"
    />
    <input class="submit" type="submit" value="SEND MESSAGE" />
  </form>
</div>
<div class="cont-sec">
  <div class="cont-image"></div>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var oneContent = ` <div class="black-line">
<hr />
</div>
<div class="gall-one-head"></div>
<p class="gall-one-text">1.food festival</p>
<div class="gall-dis-text">
<div class="gall-flex">
  <p class="reg-text">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
</div>
<div class="gall-flex">
  <p class="reg-texts">
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var twoContent = `  <div class="black-line">
<hr />
</div>
<div class="gall-two-head"></div>
<p class="gall-two-text">2.dee-jay</p>
<div class="gall-dis-text">
<div class="gall-flex">
  <p class="reg-text">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
</div>
<div class="gall-flex">
  <p class="reg-texts">
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var threeContent = ` <div class="black-line">
<hr />
</div>
<div class="gall-three-head"></div>
<p class="gall-three-text">3.speech</p>
<div class="gall-dis-text">
<div class="gall-flex">
  <p class="reg-text">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
</div>
<div class="gall-flex">
  <p class="reg-texts">
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var fourContent =  ` <div class="black-line">
<hr />
</div>
<div class="gall-four-head"></div>
<p class="gall-four-text">4.open foodfest</p>
<div class="gall-dis-text">
<div class="gall-flex">
  <p class="reg-text">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
</div>
<div class="gall-flex">
  <p class="reg-texts">
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var fiveContent = `<div class="black-line">
<hr />
</div>
<div class="gall-five-head"></div>
<p class="gall-five-text">5.international</p>
<div class="gall-dis-text">
<div class="gall-flex">
  <p class="reg-text">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt.
  </p>
</div>
<div class="gall-flex">
  <p class="reg-texts">
    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
    consectetur, adipisci velit, sed quia non numquam eius modi tempora
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
  </p>
</div>
</div>
<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var boneContent =  `<div class="black-line">
<hr />
</div>
<div class="blogs-header"></div>
<div class="button-protect">
<span class="blog-butns">06 JUN</span>
</div>

<div class="blog-sep">
<p class="headers">Header #1:</p>
<p class="des-one">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<div class="blog-seps">
<p class="headers">Header #2:</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var btwoContent =  ` <div class="black-line">
<hr />
</div>
<div class="blogs-header"></div>
<div class="button-protect">
<span class="blog-butns">30 JUL</span>
</div>

<div class="blog-sep">
<p class="headers">Header #1:</p>
<p class="des-one">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<div class="blog-seps">
<p class="headers">Header #2:</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var bthreeContent =  ` <div class="black-line">
<hr />
</div>
<div class="blogs-header"></div>
<div class="button-protect">
<span class="blog-butns">30 AUG</span>
</div>

<div class="blog-sep">
<p class="headers">Header #1:</p>
<p class="des-one">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<div class="blog-seps">
<p class="headers">Header #2:</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var bfourContent =  ` <div class="black-line">
<hr />
</div>
<div class="blogs-header"></div>
<div class="button-protect">
<span class="blog-butns">23 NOV</span>
</div>

<div class="blog-sep">
<p class="headers">Header #1:</p>
<p class="des-one">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<div class="blog-seps">
<p class="headers">Header #2:</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;

var bfiveContent =  `<div class="black-line">
<hr />
</div>
<div class="blogs-header"></div>
<div class="button-protect">
<span class="blog-butns">23 DEC</span>
</div>

<div class="blog-sep">
<p class="headers">Header #1:</p>
<p class="des-one">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
  ab illo inventore veritatis et quasi architecto beatae vitae dicta
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
  qui ratione voluptatem sequi nesciunt.
</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<div class="blog-seps">
<p class="headers">Header #2:</p>
<p class="des-one">
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit, sed quia non numquam eius modi tempora
  incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>

<!-- begin footer -->
<footer>
<div class="logo">
  <p>eventsy</p>
</div>
<p class="foot-direc">420 Smoke St. Los Angeles, CA 46318</p>
<p class="foot-numb">(213)-467-2627</p>
<p class="foot-em">info@eventsy.com</p>
<form>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email to join newsletter…"
  />
  <input class="submit" type="submit" value="SUBSCRIBE" />
</form>
<div class="social">
  <i class="icon fa-brands fa-facebook-square fa-3x"></i>
  <i class="icon fa-brands fa-instagram-square fa-3x"></i>
  <i class="icon fa-brands fa-twitter-square fa-3x"></i>
</div>
<p class="foot-copy">Copyright 2019 eventsy. All rights reserved</p>
</footer>`;
// this function is being called from the app.js and it has the page name
export function modelPageName(pageName) {
    // console.log(pageName);
    // $("#app").html(eval(pageName));
    if(pageName == "homeContent") {
        $("nav a ").removeClass("black-text").addClass("white-text");
        $("nav p ").removeClass("black-text").addClass("white-text");
        $("nav texts").removeClass("black-texts").addClass("white-texts");
    } else {
        $("nav a ").removeClass("white-text").addClass("black-text");
        $("nav p ").removeClass("white-text").addClass("black-text");
        $("nav texts").removeClass("white-texts").addClass("black-texts");
    }
    try {
        eval(pageName);
 $("#app").html(eval(pageName));
    } catch (e) {
        console.log("hello", e);
    }
    }

