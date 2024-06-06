import api from "../_services/api";

const qitelerContainer = document.getElementById('qiteler-container')
const url = new URLSearchParams(window.location.search)
let params = url.get("params")
let DATA

async function getQitelerData() {
    let data = await api.getCountry()
    DATA = data.filter(item => item.continents[0] == params)
    DATA.map(item => {
        qitelerContainer.innerHTML += `<div class="xl:w-3/12 md:w-4/12 w-6/12 mb-3 px-2 bg-white">
                                            <div class="border pop-card bg-white">
                                                <div class="sm:h-[200px] h-[180px]">
                                                    <img class="w-full object-cover h-full" src="${item.flags.png}" alt="">
                                                </div>
                                                <div class="py-3 px-2 overflow-hidden">
                                                    <p class="text-[16px] w-[200px] h-[25px] overflow-hidden font-medium">Ad:<span class="text-[12px] font-normal ml-1">${item.name.official}</span></p>
                                                    <p class="text-[16px] font-medium">Paytaxt:<span class="text-[14px] font-normal ml-1">${item.capital ? item.capital[0] : ""}</span></p>
                                                    <p class="text-[16px] font-medium">Ərazi:<span class="text-[14px] font-normal ml-1">${(item.area).toLocaleString('tr-TR')}</span></p>
                                                    <p class="text-[16px] font-medium">Əhali:<span class="text-[14px] font-normal ml-1">${(item.population).toLocaleString('tr-TR')}</span></p>
                                                    <div class="flex flex-col sm:flex-row justify-between mt-2">
                                                        <a href="/olkeler/detail/?params=${item.cca3}" target="_blank" class="bg-[#332c33] text-center sm:text-left  px-2 rounded-sm text-[14px] font-medium text-white">Ətraflı</a>
                                                        <span><a target="_blank" href="${item.maps.googleMaps}"><i class="fab fa-google text-[red]"></i> Google Maps</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
    })
}
getQitelerData()