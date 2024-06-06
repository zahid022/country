let api
export default api = {
    getCountry : async () => await (await fetch("https://countryapi.yetim.me/country")).json(),
    getDetail : async (fifa) => await (await fetch(`https://countryapi.yetim.me/country/${fifa}`)).json()
}