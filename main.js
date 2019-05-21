const aboutMeList = `
<h2>About me</h2>
<ul>
  <li>Third Year PMF Informatics Student</li>
  <li>Finished "Prva Gimnazija Split"</li>
  <li>Currently an intern at "DUMP - Udruga Mladih Programera"</li>
</ul>
<div class="main__item__dots">
  <span class="main__item__dots__dot"></span>
  <span class="main__item__dots__dot"></span>
</div>`;

const skillsList = `
<h2>Skills</h2>
<ul>
  <li>HTML & CSS</li>
  <li>Java Script</li>
  <li>C#</li>
  <li>SQL</li>
  <li>Python and React basics</li>
</ul>
<div class="main__item__dots">
  <span class="main__item__dots__dot"></span>
  <span class="main__item__dots__dot"></span>
</div>`;

const hopesList = `
<h2>Aspiratinos</h2>
<ul>
  <li>Finish University</li>
  <li>Learn as much as possible</li>
  <li>Become a senior developer</li>
  <li>Improve my team leader skils</li>
</ul>
<div class="main__item__dots">
  <span class="main__item__dots__dot"></span>
  <span class="main__item__dots__dot"></span>
</div>`;

const aboutMeText = `
But I must explain to you how all this mistaken idea of denouncing pleasure and praising 
pain was born and I will give you a complete account of the system, and expound the actual 
teachings of the great explorer of the truth, the master-builder of human happiness.`;

document
  .querySelector(".dot-about-me-list")
  .addEventListener("click", function() {
    document.querySelector(".about-me").innerHTML = aboutMeList;
  });

document
  .querySelector(".dot-about-me-text")
  .addEventListener("click", function() {
    document.querySelector(".about-me").innerHTML = aboutMeText;
  });

document
  .querySelector(".dot-skills-list")
  .addEventListener("click", function() {
    document.querySelector(".skills").innerHTML = skillsList;
  });

document
  .querySelector(".dot-skills-text")
  .addEventListener("click", function() {
    document.querySelector(".skills").innerHTML = aboutMeText;
  });

document.querySelector(".dot-hopes-list").addEventListener("click", function() {
  document.querySelector(".hopes").innerHTML = hopesList;
});

document.querySelector(".dot-hopes-text").addEventListener("click", function() {
  document.querySelector(".hopes").innerHTML = aboutMeText;
});
