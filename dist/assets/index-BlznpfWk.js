(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`

<div id="intro">
        <p class="name">Parker</p>
        <p class="last">Sheldon</p>
        <p class="short">Web Developer, Video Editor, Music and Video Game Enjoyer</p>
        <span id="start"><a onclick="pressed('about')">About Me</a> | <a onclick="pressed('portfolio')">Portfolio</a> |
            <a onclick="pressed('socials')">Socials</a></span>
    </div>

    <div id="page">
    </div>

    <div id="footer">
    </div>
`;document.getElementById("start");let s=document.getElementById("page"),l=document.getElementById("footer");window.pressed=function(r){let a=document.getElementById("intro");if(a.style.height="20vh",document.body.style.overflowY="hidden",s.innerHTML="",s.style.overflowY="auto",r=="about"){l.innerHTML="",a.style.height="20vh",document.body.style.overflowY="visible";let t=document.createElement("div");t.style.transition="2s all",t.innerHTML=`
        <img src="./img/me.jpg" width="200px" height="200px" style="display: block; margin-left:auto; margin-right: auto; border-radius: 1em; border: 1px solid yellow;">
        <h1>About Me</h1>
        <p>I was born in 2004 as a quiet but energetic kid. My love for computers came when I accidentally stumbled upon Ctrl-U and found many random words I thought were being assembled into a webpage. This interest became my biggest hobby, and I've been developing websites for the last 7 years. I have always been obsessed with creating something, from childhood memories of LEGO to video creation to web design; I enjoy showing off my creativity in different fields, with web design being no exception. With LEGO, it always felt like creations that I could only share with the people at home; Compared to video creation and web design, I've been able to share my creations with hundreds to thousands of people online. I enjoy what I do and find ways to help others enjoy what I make.</p>
        <p>I'm a huge sports fan; I mainly watch Soccer/Football, American Football, and a bit of Basketball, Baseball, and Hockey. I'm a big Philly sports fan, so the Eagles, Flyers, 76ers, Phillies, and Union are all teams that I love to support and watch. I'm also into European football, having seen teams like Barcelona, Real Madrid, Chelsea, Manchester United, and many other European teams. Chelsea is my team of choice; GO, BLUES!! I'm also an avid music fan; My musical taste is indescribable.</p>
        `,s.style.visibility="visible",s.appendChild(t);let i=document.createElement("footer");i.innerHTML="All made by Parker Sheldon (2025)",l.appendChild(i)}else if(r=="portfolio"){l.innerHTML="",a.style.height="20vh",document.body.style.overflowY="visible";let t=document.createElement("div");t.style.transition="2s all",t.innerHTML=`
        <h1>Stuff I Created</h1>
        <div class="profolio-grid">
          <div class="profolio-grid-container">
            <img src="./img/rottenapplesv2.png">    
            <div class="profolio-grid-text">
              <p>Life-Span: 2022 - Present</p>
              <p>Status: <b style="color: lightgreen;">Active</b></p>
              <a href="https://rottenapples.live/" target="_blank" style="color: yellow;"><i>rottenapples.live</i></a> - My personal music review website I made freshman year of college to find 20 album covers to put on my wall. It went from a simple spreadsheet full of information to a full fledged website with a custom API and database. It has over 70 albums reviewed so far and is still being worked on to this day.
            </div>
          </div>
          <div class="profolio-grid-container">
            <img src="./img/logo.png">    
            <div class="profolio-grid-text">
              <p>Life-Span: 2022 - 2025</p>
              <p>Status: <b style="color: red;">Ended July of 2025</b></p>
              <a href="https://www.imadejptr.com/" target="_blank" style="color: yellow;"><i>imadejptr.com</i></a> - A game site that I made in my senior year of high school. It's an unblocked games website that has garnered over 675k+ users in its 3 years of existence.
            </div>
          </div>
        </div>
        <h1>Stuff I Collaberated On</h1>
        <div class="profolio-grid">
          <div class="profolio-grid-container">
            <img src="./img/shsgames.png">    
            <div class="profolio-grid-text">
              <p>Life-Span: 2019 - Present</p>
              <p>Status: <b style="color: lightgreen;">Still Up</b></p>
              <a href="https://shsgames.github.io/" target="_blank" style="color: yellow;"><i>shsgames.github.io</i></a> - A game site that I worked on with <a href="https://www.joshmerlino.me/" target="_blank" style="color: yellow;">Josh Merlino</a>. He did a lot of the coding for this website but I helped with adding games and coming up with ideas.
            </div>
          </div>
        </div>
        `,s.style.visibility="visible",s.appendChild(t);let i=document.createElement("footer");i.innerHTML="All made by Parker Sheldon (2025)",l.appendChild(i)}else if(r=="socials"){l.innerHTML="",a.style.height="20vh",document.body.style.overflowY="visible";let t=document.createElement("div");t.className="socials",t.innerHTML=`<h1>Socials</h1> <div class="socials-grid"> <div class="social-btn insta"> <a href="https://instagram/prkrshldn" target="_blank"><i class="fa-brands fa-instagram"></i></a> <p>@prkrshldn</p> </div> <div class="social-btn in"> <a href="https://linkedin.com/in/prkrshldn" target="_blank"><i class="fa-brands fa-linkedin"></i></a> <p>@prkrshldn</p> </div> <div class="social-btn mail"> <a href="mailto:prkrshldn@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a> <p>prkrshldn@gmail.com</p> </div> <div class="social-btn github"> <a href="https://github.com/th3skeleton" target="_blank"><i class="fa-brands fa-github"></i></a> <p>@th3skeleton</p> </div> </div>
        `,s.style.visibility="visible",s.appendChild(t);let i=document.createElement("footer");i.innerHTML="All made by Parker Sheldon (2025)",l.appendChild(i)}document.getElementById("footer").style.visibility="visible"};
