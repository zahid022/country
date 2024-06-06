import api from '../_services/api'
import './input.css'
import './style.css'

const sidebar = document.querySelector(".sidebar")
const navMenu = document.getElementById("nav-menu")
const openSide = document.getElementById("open-side")
const sidebarMenu = document.querySelector(".sidebar-menu")
const closeSide = document.getElementById("close-side")
let qiteler

function sideOpen()  {sidebar.classList.toggle('active-side')}

openSide.onclick = sideOpen
closeSide.onclick = sideOpen

async function getMenuData(){
    let data = await api.getCountry()
    qiteler = [... new Set(data.map(item => item.continents[0]))]
    qiteler.map(item => {
        sidebarMenu.innerHTML += `<li class="mb-2"><a target="_blank" href="/qiteler/?params=${item}">${item}</a></li>`
        navMenu.innerHTML += `<li class="mx-2"><a target="_blank" href="/qiteler/?params=${item}">${item}</a></li>`
    })
}

getMenuData()