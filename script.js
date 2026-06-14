/* ===========================================================
   About — fit text + images to the 100vh container.
   The font-size of .about-inner is grown until the content
   just fills the available height. Inline images are sized in
   `em`, so they scale together with the text automatically.
   =========================================================== */
(function () {
  var about = document.querySelector(".about");
  var inner = document.querySelector(".about-inner");
  if (!about || !inner) return;

  function fit() {
    var cs = getComputedStyle(about);
    var avail =
      about.clientHeight -
      parseFloat(cs.paddingTop) -
      parseFloat(cs.paddingBottom);

    // binary-search the largest font-size that still fits the height
    var lo = 14,
      hi = 96,
      best = lo;
    for (var i = 0; i < 20; i++) {
      var mid = (lo + hi) / 2;
      inner.style.fontSize = mid + "px";
      if (inner.scrollHeight <= avail) {
        best = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }
    inner.style.fontSize = best + "px";
  }

  window.addEventListener("load", fit);
  window.addEventListener("resize", fit);
  document.addEventListener("DOMContentLoaded", fit);

  // re-fit once webfonts swap in (metrics change)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fit);
  }

  inner.querySelectorAll("img").forEach(function (img) {
    if (!img.complete) img.addEventListener("load", fit);
  });

  fit();
})();
