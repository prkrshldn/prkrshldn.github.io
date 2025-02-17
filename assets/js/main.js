/**
 * main.js made by Parker Sheldon
 * This is the brains behind the single page website.
 */

let start = document.getElementById("start");
let pgdiv = document.getElementById("page");
let ftdiv = document.getElementById("footer");
function pressed(page) {
    let intro = document.getElementById("intro");
    intro.style.height = "20vh";
    document.body.style.overflowY = "hidden";
    pgdiv.innerHTML = "";
    if (page == 'about') {
        ftdiv.innerHTML = "";
        intro.style.height = "20vh";
        document.body.style.overflowY = "visible";
        let pg = document.createElement("div");
        pg.style.transition = "2s all";
        pg.innerHTML = `
                <img src="assets/img/me.jpg" width="200px" height="200px" style="display: block; margin-left:auto; margin-right: auto; border-radius: 1em; border: 1px solid yellow;">
                <h1>About Me</h1>
                <p>I was born in 2004 as a quiet but energetic kid. My love for computers came when I accidentally stumbled upon Ctrl-U and found many random words I thought were being assembled into a webpage. This interest became my biggest hobby, and I've been developing websites for the last 7 years. I have always been obsessed with creating something, from childhood memories of LEGO to video creation to web design; I enjoy showing off my creativity in different fields, with web design being no exception. With LEGO, it always felt like creations that I could only share with the people at home; Compared to video creation and web design, I've been able to share my creations with hundreds to thousands of people online. I enjoy what I do and find ways to help others enjoy what I make.</p>
                <p>I'm a huge sports fan; I mainly watch Soccer/Football, American Football, and a bit of Basketball, Baseball, and Hockey. I'm a big Philly sports fan, so the Eagles, Flyers, 76ers, Phillies, and Union are all teams that I love to support and watch. I'm also into European football, having seen teams like Barcelona, Real Madrid, Chelsea, Manchester United, and many other European teams. Chelsea is my team of choice; GO, BLUES!! I'm also an avid music fan; My musical taste is indescribable.</p>
                `
        pgdiv.style.visibility = "visible";
        pgdiv.appendChild(pg);
        let footer = document.createElement("footer");
        footer.innerHTML = "All made by Parker Sheldon (2025)";
        ftdiv.appendChild(footer);
    } else if (page == 'portfolio') {
        ftdiv.innerHTML = "";
        intro.style.height = "20vh";
        document.body.style.overflowY = "visible";
        let pg = document.createElement("div");
        pg.style.transition = "2s all";
        pg.innerHTML = `
                <h1>Stuff I Created</h1>
                <div class="profolio-grid">
                    <div class="profolio-grid-container">
                        <img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/logo.png">    
                        <div class="profolio-grid-text">
                            <a href="https://www.imadejptr.com/" target="_blank" style="color: yellow;"><i>imadejptr.com</i></a> - A game site that I made in my senior year of high school. It's an unblocked games website that has garnered over 675k+ users in its 3 years of existence.
                        </div>
                    </div>
                </div>
                <h1>Stuff I Collaberated On</h1>
                <div class="profolio-grid">
                    <div class="profolio-grid-container">
                        <img src="assets/img/shsgames.png">    
                        <div class="profolio-grid-text">
                            <a href="https://shsgames.github.io/" target="_blank" style="color: yellow;"><i>shsgames.github.io</i></a> - A game site that I worked on with <a href="https://www.joshmerlino.me/" target="_blank" style="color: yellow;">Josh Merlino</a>. He did a lot of the coding for this website but I helped with adding games and coming up with ideas.
                        </div>
                    </div>
                </div>
                `
        pgdiv.style.visibility = "visible";
        pgdiv.appendChild(pg);
        let footer = document.createElement("footer");
        footer.innerHTML = "All made by Parker Sheldon (2025)";
        ftdiv.appendChild(footer);
    } else if (page == 'socials') {
        ftdiv.innerHTML = "";
        intro.style.height = "20vh";
        let pg = document.createElement("div");
        pg.className = "socials";
        pg.innerHTML = `<h1>Socials</h1> <div class="socials-grid"> <div class="social-btn insta"> <a href="https://instagram/prkrshldn" target="_blank"><i class="fa-brands fa-instagram"></i></a> <p>@prkrshldn</p> </div> <div class="social-btn in"> <a href="https://linkedin.com/in/prkrshldn" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <p>@prkrshldn</p> </div> <div class="social-btn mail"> <a href="mailto:prkrshldn@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a> <p>prkrshldn@gmail.com</p> </div> <div class="social-btn github"> <a href="https://github.com/th3skeleton" target="_blank"><i class="fa-brands fa-github"></i></a> <p>@th3skeleton</p> </div> </div>
                `;
        pgdiv.style.visibility = "visible";
        pgdiv.appendChild(pg);
        let footer = document.createElement("footer");
        footer.innerHTML = "All made by Parker Sheldon (2025)";
        ftdiv.appendChild(footer);
    }

    document.getElementById("footer").style.visibility = "visible";
}