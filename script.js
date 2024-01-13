function toggleVisibility(triggerElement, targetElement) {
  triggerElement.addEventListener('click', function () {
    if (targetElement.style.display == 'inherit') {
      targetElement.style.display = 'none';
    } else {
      targetElement.style.display = 'inherit';
    }
  });
}

const vs = document.getElementById('p');
const vsimg = document.getElementById('ps');
toggleVisibility(vs, vsimg);

const vs2 = document.getElementById('p2');
const vsimg2 = document.getElementById('ps2');
toggleVisibility(vs2, vsimg2);

const vs3 = document.getElementById('p3');
const vsimg3 = document.getElementById('ps3');
toggleVisibility(vs3, vsimg3);

const vs4 = document.getElementById('p4');
const vsimg4 = document.getElementById('ps4');
toggleVisibility(vs4, vsimg4);


const vs5 = document.getElementById('p5');
const vsimg5 = document.getElementById('ps5');
toggleVisibility(vs5, vsimg5);


const vs6 = document.getElementById('p6');
const vsimg6 = document.getElementById('ps6');
toggleVisibility(vs6, vsimg6);


const vs7 = document.getElementById('p7');
const vsimg7 = document.getElementById('ps7');
toggleVisibility(vs7, vsimg7);

const vs8 = document.getElementById('p8');
const vsimg8 = document.getElementById('ps8');
toggleVisibility(vs8, vsimg8);

const vs9 = document.getElementById('p9');
const vsimg9 = document.getElementById('ps9');
toggleVisibility(vs9, vsimg9);

const vs10 = document.getElementById('p10');
const vsimg10 = document.getElementById('ps10');
toggleVisibility(vs10, vsimg10);

const vs11 = document.getElementById('p11');
const vsimg11 = document.getElementById('ps11');
toggleVisibility(vs11, vsimg11);