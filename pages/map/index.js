let app = getApp()
let interstitialAd = null

Page(Object.assign({
    data: {
        heroInfo: null,
        latitude: 23.099994,
        longitude: 113.324520,
        markers: []
    },
    onLoad(opt) {
        const heroInfo = JSON.parse(opt.heroInfo.replace(/^["](.*)["]$/, "$1"))
        const _this = this;
        this.setData({
            scale: 6,
            // heroInfo: JSON.parse(opt.heroInfo)
            heroInfo: heroInfo
        })
        this.mapContext = wx.createMapContext("hero_map", this)
        var locations = [heroInfo.area, heroInfo.city, heroInfo.province]
        if (wx.createInterstitialAd) {
            interstitialAd = wx.createInterstitialAd({
                adUnitId: 'adunit-ae456fed20bcf505'
            })
            interstitialAd.onLoad(() => {})
            interstitialAd.onError((err) => {})
            interstitialAd.onClose(() => {})
        }
        interstitialAd.show().catch((err) => {
            console.error(err)
        })
        wx.cloud.callFunction({
            name: 'poiSearch',
            data: {
                "locations": locations
            },
            success: response => {
                const res = response.result
                const areaLocation = res[0].location;
                const cityLocation = res[1].location;
                const provinceLocation = res[2].location;
                _this.mapContext.includePoints([{
                    longitude: areaLocation.lng,
                    latitude: areaLocation.lat
                }, {
                    longitude: cityLocation.lng,
                    latitude: cityLocation.lat
                }, {
                    longitude: provinceLocation.lng,
                    latitude: provinceLocation.lat
                }])
                _this.setData({
                    latitude: provinceLocation.lat,
                    longitude: provinceLocation.lng
                })
                _this.mapContext.addMarkers({
                    markers: [{
                        iconPath: '../../images/flag/area.jpeg',
                        id: 0,
                        latitude: areaLocation.lat,
                        longitude: areaLocation.lng,
                        width: 64,
                        height: 42,
                        anchor: { x: .5, y: 0.8 },
                        title: '区标',
                        callout: { content: `${heroInfo.name} - 区标 - ${heroInfo.area}(${heroInfo.areaPower})` }
                    }, {
                        iconPath: '../../images/flag/city.jpeg',
                        id: 1,
                        latitude: cityLocation.lat,
                        longitude: cityLocation.lng,
                        width: 64,
                        height: 42,
                        anchor: { x: .5, y: 0.8 },
                        title: '市标',
                        callout: { content: `${heroInfo.name} - 市标 - ${heroInfo.city}(${heroInfo.cityPower}) ` }
                    }, {
                        iconPath: '../../images/flag/province.jpeg',
                        id: 2,
                        latitude: provinceLocation.lat,
                        longitude: provinceLocation.lng,
                        width: 64,
                        height: 42,
                        anchor: { x: .5, y: 0.8 },
                        title: '省标',
                        callout: { content: `省标(${heroInfo.provincePower})` }
                    }],
                    clear: true,
                    complete() {
                        _this.mapContext.includePoints([areaLocation, cityLocation, provinceLocation])
                    }
                })
            }
        });
    }
}, app.page))