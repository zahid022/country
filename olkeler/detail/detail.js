import api from "../../_services/api"

const detailContainer = document.getElementById("detail-container")
const url = new URLSearchParams(window.location.search)
let data = await api.getDetail(url.get("params"))



async function getDetailData(item){
    detailContainer.innerHTML += `
                                 <div class="border">
                                    <div class="flex items-center border-b">
                                        <div class="w-5/12 pr-3">
                                            <div>
                                                <img class="w-full" src="${item.flags.png}" />
                                            </div>
                                        </div>
                                        <div class="w-7/12 h-full pl-3">
                                            <div>
                                                <h2 class="text-center text-[20px] font-medium">${item.name.official}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3">
                                        <p class="mb-3 font-medium text-[20px]">Paytaxt: <span class="text-[16px] font-normal">${item.capital ? item.capital[0] : ""}</span></p>
                                        <p class="mb-3 font-medium text-[20px]">Ərazi: <span class="text-[16px] font-normal">${item.area.toLocaleString('tr-TR')}</span></p>
                                        <p class="mb-3 font-medium text-[20px]">Əhali: <span class="text-[16px] font-normal">${item.population.toLocaleString('tr-TR')}</span></p>
                                        <p class="mb-3 font-medium text-[20px]">Sərhəd: ${item.borders ? item.borders.map(item => `<a class="text-[16px] font-normal" href="/olkeler/detail/?params=${item}">${item}</a>`).join(' ') : ''}</p>
                                        <p class="mb-3 font-medium text-[20px]">Yerləşdiyi qitə: ${item.continents ? item.continents.map(item => `<span class="text-[16px] font-normal">${item}</span>`).join(' ') : ''}</p>
                                    </div>
                                 </div>       
                                `
}
getDetailData(...data)