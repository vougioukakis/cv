//todo: add ambient bg sound and sound effects on click

function loadContent(contentId) {
  const mainContent = document.getElementById("mainContent");

  switch (contentId) {
    case "home":
      document.getElementsByClassName("current")[0].className = "not-current";
      console.log(document.getElementById("eduNav").className);
      document.getElementById("homeNav").className = "current";
      loadHomeContent();
      break;
    case "education":
      document.getElementsByClassName("current")[0].className = "not-current";
      document.getElementById("eduNav").className = "current";
      loadEducationContent();
      break;
    case "portfolio":
      mainContent.innerHTML =
        "<h2>Projects Content</h2><p>This is the projects section.</p>";
      break;
    case "learning hub":
      document.getElementsByClassName("current")[0].className = "not-current";
      document.getElementById("hubNav").className = "current";
      loadLHContent();
      break;
    case "CV":
      break;
    default:
      console.error("Invalid content ID:", contentId);
  }
}

// sounds on click 
function play() {
  var audio = document.getElementById("click-sound");
  audio.play();
  console.log('click!');  
}

function addClickEventListenersForSound(){
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', play);
  });
}

addClickEventListenersForSound();
/*
window.onload = function() {

  // Get the background image URL of the body element
  var src = document.body.style.backgroundImage;
  src = src.replace('url("', '').replace('")', '');
  console.log("Background image URL:", src);

  var img = new Image();
  img.src = src;

  img.onload = function() {
      // remove loading screen and load content
      document.getElementById("load-screen").style.opacity = 0;
      loadContent('home');
      setTimeout(delete_loading_screen, 400);
  }

  if (img.complete) {
      img.onload();
  }
};
*/
function delete_loading_screen() {
  document.getElementById("load-screen").remove();
}

window.onload = function () {
  loadContent("home");
  document.getElementById("load-screen").style.opacity = 0;
  setTimeout(delete_loading_screen, 1400);

};

function toggleMail() {
  /*
  var element = document.getElementById("mailBox");
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }*/
  let email = "vougioukakis99@gmail.com";
  navigator.clipboard.writeText(email);
  alert("You just copied my email to clipboard: " + email);
}



function loadHomeContent() {
  const homeContent = `
        <div class="contents">
            <div class="card">
                    <h3 class="card-title">About Me</h3>
                    <div class="content-box">
                        <p style="margin: 0;">My main interests revolve around Applied and Computational Mathematics,
                         Data Science, Machine Learning and Software Development.
                         I love turning ideas into reality by using code and exploring the world through data.
                          You'll frequently find me immersed in books or experimenting with new code to bring concepts to life.
                          More disciplines that fuel my curiosity are Biology, Bioinformatics, Neuroscience and Physics. I strive
                           to learn as much as possible across these disciplines, aiming to integrate them into my career,
                            fostering innovation and making meaningful contributions across technology and science.</p>
                    </div>
            </div>

            <div class="card">
                    <h3 class="card-title">Experience</h3>
                    <div class="content-box">
                        <ul>
                          <li>Spring 2024: Teaching Assistant in Numerical Analysis, University of Crete</li>
                        </ul>
                    </div>
            </div>
        </div>

        
  `;

  document.getElementById("mainContent").innerHTML = homeContent;
}

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("email");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}