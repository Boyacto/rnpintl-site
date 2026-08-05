// 스크롤 리빌 — 뷰포트 밖 요소만 순차 등장, 초기 화면은 즉시 표시
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var els = document.querySelectorAll("main section .wrap > *");
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px" }
  );
  var delay = 0;
  els.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.classList.add("reveal", "in");
    } else {
      el.classList.add("reveal");
      el.style.transitionDelay = (delay % 3) * 70 + "ms";
      delay++;
      io.observe(el);
    }
  });
})();
