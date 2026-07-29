
const partialBlurb = "I build responsive and adaptable software solutions to real-world problems. My work spans client websites";
const fullBlurb = partialBlurb + ", robotics and personal applications where I’ve focused on creating an intuitive and accessible user experience. I enjoy learning new technologies to improve the efficiency and user experience of my solutions.";

const blurb = document.getElementById("blurb");
const blurbBtn = document.getElementById("blurb-btn");
let blurbShort = true;

blurbBtn.addEventListener("click", () => {
    if(blurbShort){
        blurbShort = false;
        blurbBtn.textContent = "Collapse";
        blurb.textContent = fullBlurb;
    }
    else{
        blurbShort = true;
        blurbBtn.textContent = "Learn More";
        blurb.textContent = partialBlurb;
    }
})