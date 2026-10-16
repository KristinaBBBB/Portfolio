
const partialBlurb = "I build responsive and adaptable software solutions to real-world problems. My work spans client websites";
const fullBlurb = partialBlurb + ", robotics and personal applications where I’ve focused on creating an intuitive and accessible user experience. I enjoy learning new technologies to improve the efficiency and user experience of my solutions.";

const blurb = document.getElementById("blurb");
const blurbBtn = document.getElementById("blurb-btn");
let blurbShort = true;

blurbBtn.addEventListener("click", () => {
    if(blurbShort){
        blurbShort = false;
        blurbBtn.innerHTML = 'Show Less <span aria-hidden="true">⌃</span>';
        blurb.textContent = fullBlurb;
    }
    else{
        blurbShort = true;
        blurbBtn.innerHTML = 'Read More <span aria-hidden="true">⌄</span>';
        blurb.textContent = partialBlurb + "...";
    }

    blurbBtn.setAttribute("aria-expanded", String(!blurbShort));
});

const desktopQuery = window.matchMedia("(min-width: 800px)");

function updateBlurbLayout(){
    if (desktopQuery.matches){
        blurb.textContent = fullBlurb;
        blurbBtn.hidden = true;
    }
    else{
        blurb.textContent = blurbShort ? partialBlurb + "..." : fullBlurb;
        blurbBtn.hidden = false;
        blurbBtn.setAttribute("aria-expanded", String(!blurbShort));
    }
}