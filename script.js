const slip = 20;
const nav = document.querySelector("#nav");
const text = document.querySelector("#text-content");
const inp = document.querySelector("#connectId");
const LoginId = "exam123";

let clutter = "";
for (let i = 0; i < slip; i++) {
  clutter += `<div class="py-4 text-center w-full text-white bg-black rounded hover:bg-zinc-950/85" key="${
    i + 1
  }">Slip ${i + 1}</div>`;
}
nav.innerHTML = clutter;

const showFile = (files) => {
  let clutter = "";
  files.forEach((file) => {
    let p = document.createElement("p");
    p.innerText = file;
    clutter += p.outerHTML;
  });
  text.innerHTML = clutter;
};

const fetchFile = (i) => {
  fetch(`./public/${i}.txt`)
    .then((res) => res.text())
    .then((raw) => showFile(raw.split("--end")));
};

nav.addEventListener("click", (elm) => {
  fetchFile(elm.target.getAttribute("key"));
});

function copySelectedText() {
  let selectedText = window.getSelection().toString();
  if (selectedText !== "") {
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = selectedText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  }
}

text.addEventListener("click", copySelectedText);

const login = () => {
  if (inp.value === LoginId) {
    document.getElementById("login").style.display = "none";
  }
};


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    document.querySelector("#hide").classList.toggle("hidden");
});

