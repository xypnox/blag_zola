function initMobile() {
  var $mobileNav = document.getElementById('mobile-navbar');
  var $mobileNavIcon = document.querySelector('.mobile-navbar-icon');

  var slideout = new Slideout({
    panel: document.getElementById('mobile-panel'),
    menu: document.getElementById('mobile-menu'),
    padding: 180,
    tolerance: 70,
  });
  slideout.disableTouch();

  $mobileNavIcon.addEventListener('click', function () {
    slideout.toggle();
  });

  slideout.on('beforeopen', function () {
    $mobileNav.classList.add('fixed-open');
    $mobileNavIcon.classList.add('icon-click');
    $mobileNavIcon.classList.remove('icon-out');
  });

  slideout.on('beforeclose', function () {
    $mobileNav.classList.remove('fixed-open');
    $mobileNavIcon.classList.add('icon-out');
    $mobileNavIcon.classList.remove('icon-click');
  });

  document
    .getElementById('mobile-panel')
    .addEventListener('touchend', function () {
      slideout.isOpen() && $mobileNavIcon.click();
    });
}

// function initToc() {
//   var $toclink = document.querySelectorAll('.toc-link');
//   var $headerlink = document.querySelectorAll(
//     '.post-content h1 , .post-content h2'
//   );
//   var $tocLinkLis = document.querySelectorAll('.post-toc-content li');

//   console.log($toclink, $headerlink);

//   var searchActiveTocIndex = function (array, target) {
//     if (!array.length) {
//       return -1;
//     }

//     target += 30;
//     for (let i = 0; i < array.length - 1; i++) {
//       // console.log(array[i].textContent, array[i + 1].offsetTop);
//       if (target > array[i].offsetTop && target <= array[i + 1].offsetTop)
//         return i;
//     }
//     if (target > array[array.length - 1].offsetTop) return array.length - 1;
//     return -1;
//   };

//   document.addEventListener('scroll', function () {
//     var scrollTop =
//       document.body.scrollTop | document.documentElement.scrollTop;
//     var activeTocIndex = searchActiveTocIndex($headerlink, scrollTop);

//     $toclink.forEach(function (el) {
//       el.classList.remove('active');
//     });
//     $tocLinkLis.forEach(function (el) {
//       el.classList.remove('has-active');
//     });

//     if ($toclink.length && activeTocIndex !== -1) {
//       $toclink[activeTocIndex].classList.add('active');
//       let ancestor = $toclink[activeTocIndex].parentNode;
//       while (ancestor.tagName !== 'NAV') {
//         ancestor.classList.add('has-active');
//         ancestor = ancestor.parentNode.parentNode;
//       }
//     }
//   });
// }

function toggleTheme() {
  let body = document.getElementsByTagName('body')[0];
  if (body) {
    body.style.transition = 'background-color 1s ease-in-out';
    if (body.getAttribute('data-theme') === 'light') {
      body.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    } else if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      window.localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'light');
      window.localStorage.setItem('theme', 'light');
    }
  }
  setTimeout(function () {
    var d = document,
      s = d.createElement('script');
    s.src = 'https://xypnox-blag.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }, 1000);
}

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  initMobile();
  // initToc();
} else {
  document.addEventListener('DOMContentLoaded', initMobile);
  // document.addEventListener('DOMContentLoaded', initToc);
}
