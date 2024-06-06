import api from '../_services/api'
import './input.css'
import './style.css'

const swiperContainer1 = document.getElementById("swiper-container1")
const mainAllBtn = document.getElementById("main-all-btn")
const searchInput = document.getElementById('search-input')
const countryList = document.getElementById('country-list')
let data = await api.getCountry()
let DATA

searchInput.oninput = showCntName

let population

async function getDataMain() {
    population = [...data].sort((b, a) => a.population - b.population).slice(0, 10)
    population.map(item => {
        swiperContainer1.innerHTML += `<div class="swiper-slide px-10 sm:px-0 bg-white">
                                            <div class="border pop-card bg-white">
                                                <div class="sm:h-[200px] h-[180px]">
                                                    <img class="w-full object-cover h-full" src="${item.flags.png}" alt="">
                                                </div>
                                                <div class="py-3 px-2">
                                                    <p class="text-[16px] font-medium">Ad:<span class="text-[14px] font-normal ml-1">${item.name.official}</span></p>
                                                    <p class="text-[16px] font-medium">Paytaxt:<span class="text-[14px] font-normal ml-1">${item.capital[0]}</span></p>
                                                    <p class="text-[16px] font-medium">Ərazi:<span class="text-[14px] font-normal ml-1">${(item.area).toLocaleString('tr-TR')}</span></p>
                                                    <p class="text-[16px] font-medium">Əhali:<span class="text-[14px] font-normal ml-1">${(item.population).toLocaleString('tr-TR')}</span></p>
                                                    <div class="flex justify-between mt-2">
                                                        <a href="/olkeler/detail/?params=${item.cca3}" target="_blank" class="bg-[#332c33] px-2 rounded-sm text-[14px] font-medium text-white">Ətraflı</a>
                                                        <span><a target="_blank" href="${item.maps.googleMaps}"><i class="fab fa-google text-[red]"></i> Google Maps</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
    })
    mainAllBtn.innerHTML = `<a href="/olkeler/" class="text-[14px] md:text-[20px] bg-[#332c33] text-white py-2 md:py-3 px-2 md:px-5 rounded-md font-medium">
    Bütün ölkələrin siyahısı üçün bura klik edin
    </a>`
}

getDataMain()
let time

function showCntName() {
    clearInterval(time)
    time = setTimeout(() => {
        showCntName2()
    }, 200);
}


function showCntName2() {
    let value = searchInput.value.toLowerCase()
    countryList.innerHTML = ""
    DATA = data.filter(item => item.name.common.toLowerCase().includes(value))
    if (DATA.length) {
        countryList.style.padding = "8px"
        countryList.style.border = "1px solid #000"
        countryList.style.maxHeight = "160px"
        countryList.style.overflowY = "auto"
    } else {
        countryList.style.padding = "0"
        countryList.style.border = "0"
        countryList.style.height = "0"
    }
    if (value == '') {
        countryList.style.display = "none"
    } else {
        countryList.style.display = "block"
    }
    DATA.map(item => {
        countryList.innerHTML += `<li class="mb-2">
                                    <a href="/olkeler/detail/?params=${item.cca3}" class="flex items-center"> 
                                        <div class="h-[20px] w-[20px] mr-1">
                                            <img src="${item.flags.png}" class="w-full" />
                                        </div>
                                        <p class="overflow-hidden w-[120px] h-[30px]">${item.name.common}</p>
                                    </a>
                                  </li>`
    })
}