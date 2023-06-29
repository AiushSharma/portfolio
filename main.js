var typed = new Typed("#text_element", {
  strings: [
    "Hello ,",
    "I am Aiush Sharma ",
    "I am  ",
    " an organic farmer",
    " a salesman",
    " an agricultural scientist",
    "Scroll For more ...",
  ],
  typeSpeed: 80,
});
let fixed = document.querySelector(".cart-icon");
let score = 0;
// the priority was to make button disable first but I enabled
let clicker = document.querySelectorAll("#disabled");

let a = 0,
  b = 0,
  c = 0,
  d = 0,
  e = 0,
  f = 0;
clicker.forEach((item, index) => {
  item.addEventListener("click", () => {
    //basic idea not so advanced self
    if (index === 0) {
      a++;
      item.innerText = a;
    }
    if (index === 1) {
      b++;
      item.innerText = b;
    }
    if (index === 2) {
      c++;
      item.innerText = c;
    }
    if (index === 3) {
      d++;
      item.innerText = d;
    }
    if (index === 4) {
      e++;
      item.innerText = e;
    }
    if (index === 5) {
      f++;
      item.innerText = f;
    }

    fixed.innerText = a + b + c + d + e + f;
  });
});
let btn = document.querySelectorAll("#minus");
btn.forEach((element, index) => {
  element.addEventListener("click", () => {
    //basic idea not so advanced self
    if (index === 0) {
      if (a > 0) {
        a--;
        document.querySelector(".add-0").innerText = a;
      }
    }
    if (index === 1) {
      if (b > 0) {
        b--;
        document.querySelector(".add-1").innerText = b;
      }
    }
    if (index === 2) {
      if (c > 0) {
        c--;
        document.querySelector(".add-2").innerText = c;
      }
    }
    if (index === 3) {
      if (d > 0) {
        d--;

        document.querySelector(".add-3").innerText = d;
      }
    }
    if (index === 4) {
      if (e > 0) {
        e--;

        document.querySelector(".add-4").innerText = e;
      }
    }
    if (index === 5) {
      if (f > 0) {
        f--;
        document.querySelector(".add-5").innerText = f;
      }
    }

    fixed.innerText = a + b + c + d + e + f;
  });
});
