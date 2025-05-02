async function main() {

    let response = await fetch("http://127.0.0.1:5500/songs/");
    let result = await response.text();

    let div = document.createElement("div");
    div.innerHTML = result;

    let anchors = div.getElementsByTagName("a");
    let songNames = [];

    for (let anchor of anchors) {
        if (anchor.href) {

            let name = decodeURIComponent(anchor.href.split("/").pop());
            songNames.push(name);
        }
    }

    displaySongs(songNames);
}

let buttons = document.querySelectorAll(".lft, .puse, .rht");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "gray";
        setTimeout(() => {
            button.style.backgroundColor = ""; 
        }, 200);
    });
});

// Get the first element with the class name "hamb"
let hamb = document.getElementsByClassName("hamb")[0]; // Use the correct class name without the dot

// Add an event listener to the hamburger icon
hamb.addEventListener("click", () => {
    console.log("clicked"); // Log a message when clicked

    // Get the sidebar element
    const sidebar = document.getElementsByClassName("left")[0]; // Get the sidebar element

    // Toggle the "active" class on the sidebar
    sidebar.classList.toggle("active"); // Show/hide the sidebar
});

let cls = document.getElementsByClassName("close")[0]; // Access the first element with class "close"



// hamberger functionality ----------
cls.addEventListener("click", () => {
    let sidebar = document.getElementsByClassName("left")[0]; 

    sidebar.style.display = "none";
});





function displaySongs(songNames) {

    let songDisplay = document.querySelector(".song_disp");
    songDisplay.innerHTML = ''; 

    let ul = document.createElement("ul");
    ul.style.listStyleType = 'none'; 
    ul.style.padding = '0'; 
    ul.style.backgroundColor = 'transparent'; 
    ul.style.maxWidth = '400px'; 
    ul.style.margin = '20px auto'; 
    ul.style.overflow = 'hidden'; 
    ul.style.maxHeight = '300px'; 
    ul.style.overflowY = 'auto'; 

    songNames.slice(1).forEach(song => { 

        if (song.trim() && !song.includes("list")) { 
            let li = document.createElement("li");
            li.textContent = song.replace(/%20/g, " "); 
            li.style.padding = '15px'; 
            // li.style.fontSize = '18px'; 
            li.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)'; 
            li.style.transition = 'background 0.3s'; 
            li.style.color = 'white'; 

            li.addEventListener('mouseover', () => {
                li.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
            });
            li.addEventListener('mouseout', () => {
                li.style.backgroundColor = ''; 
            });

            ul.appendChild(li); 
        }
    });

    songDisplay.appendChild(ul); 
}

main();

