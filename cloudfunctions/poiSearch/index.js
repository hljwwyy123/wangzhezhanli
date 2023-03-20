// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: "cloud1-2gcr8sm521ca9b17"
})




// 云函数入口函数
exports.main = async(event, context) => {
    const areaRes = await cloud.openapi.serviceMarket.invokeService({
        service: "wxc1c68623b7bdea7b",
        api: "poiSearch",
        data: {
            "boundary": "nearby(" + "40.040415,116.273511,1000" + ")",
            "keyword": event.locations[0],
        },
        client_msg_id: `${Date.now()}`
    });
    const cityRes = await cloud.openapi.serviceMarket.invokeService({
        service: "wxc1c68623b7bdea7b",
        api: "poiSearch",
        data: {
            "boundary": "region(" + event.locations[1] + ")",
            "keyword": "火车站",
        },
        client_msg_id: `${Date.now()}`
    });
    const provinceRes = await cloud.openapi.serviceMarket.invokeService({
        service: "wxc1c68623b7bdea7b",
        api: "poiSearch",
        data: {
            "boundary": "region(" + event.locations[2] + ")",
            "keyword": "火车站",
        },
        client_msg_id: `${Date.now()}`
    });
    console.log(JSON.parse(areaRes.data), JSON.parse(cityRes.data), JSON.parse(provinceRes.data))
    let provinceJson = JSON.parse(provinceRes.data)
    let provincePos = { data: [] }
    if (provinceJson.data.length) {
        provincePos = provinceJson
    } else if (provinceJson.cluster.length) {
        const clusterRes = await cloud.openapi.serviceMarket.invokeService({
            service: "wxc1c68623b7bdea7b",
            api: "poiSearch",
            data: {
                "boundary": "region(" + provinceJson.cluster[0].title + ")",
                "keyword": "火车站",
            },
            client_msg_id: `${Date.now()}`
        });
        provincePos = JSON.parse(clusterRes.data)
    }

    return [JSON.parse(areaRes.data).data[0], JSON.parse(cityRes.data).data[0], provincePos.data[0]]
}