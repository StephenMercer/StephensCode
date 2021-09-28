console.log(window.document.URL)

// Selectors 
const current = document.querySelector('.current')
const home = document.querySelector('.home')


if (current.getAttribute("href") === 'about.html') {
   const changeHome = document.head.appendChild(document.createElement("style"));
   changeHome.innerHTML = '#main-nav ul li:nth-child(1)::before { background: var(--secondary-color)}'
   current.style = 'z-index: -6'
} else if(current.getAttribute("href") === 'index.html') {
   const changeHome = document.head.appendChild(document.createElement("style"));
   changeHome.innerHTML = '#main-nav ul li:nth-child(1)::before { background: var(--primary-color)}'
}  else {
   const changeHome = document.head.appendChild(document.createElement("style"));
   changeHome.innerHTML = '#main-nav ul li:nth-child(1)::before { background: var(--primary-color)}'
}

