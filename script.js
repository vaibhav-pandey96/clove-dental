/* This is captcha Function */
function generateCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 4; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captcha-text").innerText = captcha;
}

/* Dropdown Function */
function toggleDropdown(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector(".toggle-icon");

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.innerText = "+";
  } else {
    content.style.display = "block";
    icon.innerText = "-";
  }
}

function updateTextContent() {
  const text1Elements = document.querySelectorAll(".text-1");
  const text3Elements = document.querySelectorAll(".text-3");

  if (window.innerWidth >= 768) {
    
    if (text1Elements.length >= 2) {
      text1Elements[0].textContent = "Painless Root Canal Treatment in Delhi";
      text1Elements[1].style.display = "none"; // Hide the second line
    }

    if (text3Elements.length >= 2) {
      text3Elements[0].textContent = "Expert RCT. Zero Pain. Right Here in Delhi.";
      text3Elements[1].style.display = "none";
    }
  } else {
    
    if (text1Elements.length >= 2) {
      text1Elements[0].textContent = "Your Smile,";
      text1Elements[1].textContent = "Our Priority At";
      text1Elements[1].style.display = "block";
    }

    if (text3Elements.length >= 2) {
      text3Elements[0].textContent = "Expert RCT. Zero Pain.";
      text3Elements[1].textContent = "Right here in Delhi";
      text3Elements[1].style.display = "block";
    }
  }
}

/* Run it once and on resize */ 
updateTextContent();
window.addEventListener("resize", updateTextContent);

/* Adding  Nav Links for 768px and above */

  const navLinks = document.querySelector('.nav-links');

  /* Checks if screen width is at least 768px */
  if (window.matchMedia('(min-width: 768px)').matches) {
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.textContent = 'Accessibilities';

    navLinks.appendChild(newLink);
  }

/* Changing Implants description*/
  const desc = document.querySelector('.implants-description');

  function updateTextForScreen(e) {
    if (e.matches) {
      desc.innerHTML = 'In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.';
    }
  }

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', updateTextForScreen);

  updateTextForScreen(mediaQuery);



  /* Captcha 2 */
  function generateCaptcha2() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 4; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captcha-text2").innerText = captcha;
}