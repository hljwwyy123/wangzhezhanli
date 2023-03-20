import formatHeroList from "../../util/heroFormat"
import config from "../../config/index"
import { hadWatch, setWatched } from "../../util/utils"
const app = getApp();
let videoAd = null;
let interstitialAd = null
Page({
    data: {
        herolist: [],
        currHeroList: [],
        allHeroList: [],
        heroInfo: null,
        currHero: null,
        multiArray: [
            [{ label: '苹果', value: 'i' }, { label: '安卓', value: 'a' }],
            [{ label: '微信', value: 'wx' }, { label: 'QQ', value: 'qq' }]
        ],
        multiIndex: [0, 0],
        plateform: 'i',
        channel: 'wx'
    },

    onLoad: function(options) {
        var _this = this;

        if (app.globalData.herolist.length > 0) {
            const groupList = formatHeroList(app.globalData.herolist);
            _this.setData({
                allHeroList: app.globalData.herolist,
                herolist: groupList,
                currHeroList: app.globalData.herolist
            })
        } else {
            wx.showLoading({
                title: '大招CD中...',
                mask: true
            })
            wx.request({
                url: app.globalData.getHeroList,
                success: res => {
                    if (res.data.code == 200) {
                        app.globalData.herolist = res.data.data;
                        _this.setData({
                            herolist: res.data.data
                        })
                    } else {
                        wx.showToast({
                            title: '英雄加载失败',
                            icon: 'info'
                        })
                    }
                },
                complete: () => {
                    wx.hideLoading();
                }
            })
        }
        this.initVideoAd()
        this.initInsertAd()
    },

    initInsertAd: function() {
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
    },

    initVideoAd: function() {
        const _this = this
        if (wx.createRewardedVideoAd) {
            videoAd = wx.createRewardedVideoAd({
                adUnitId: config.adUnitId
            })
            videoAd.onLoad(() => {})
            videoAd.onError((err) => {})
        }
        videoAd.onClose((result) => {
            if (result && result.isEnded) {
                _this.showHeroScore(this.data.currHero)
                    // setWatched(config.adUnitId)
            } else {
                wx.showToast({
                    title: '看完广告才能查看分数哦~',
                    icon: 'none'
                })
            }
        })
    },
    showAd: function() {
        videoAd.show().catch(() => {
            videoAd.load()
                .then(() => videoAd.show())
                .catch(err => {
                    console.log('激励视频 广告显示失败')
                })
        });

    },

    filterHero: function(e) {
        const group = e.currentTarget.dataset.group
        this.setData({
            currHeroList: group == '0' ? this.data.allHeroList : this.data.herolist.find(el => el.group == group).heroList
        });
    },

    findHero: function(e) {
        const _this = this
        wx.showLoading({
            title: '加载中...',
        })
        var hero = e.currentTarget.dataset.hero;
        this.setData({
            currHero: hero
        });
        if (hero == "") {
            wx.showToast({
                title: '没有找到相关英雄',
                icon: 'info'
            })
        } else {
            if (videoAd) {
                wx.hideLoading()
                    // if (!hadWatch(config.adUnitId)) {
                this.showAd()
                    // } else {
                    // this.showHeroScore()
                    // }
            } else {
                this.showHeroScore()
            }
        }
    },


    showHeroScore: function() {
        const _this = this
        wx.request({
            url: app.globalData.getHeroInfo + '?hero=' + this.data.currHero + '&type=' + this.data.plateform + this.data.channel,
            success: res => {
                if (res.data.code == 200) {
                    var result = res.data.data;
                    var content = '最低县标：' + result.area + '（' + result.areaPower + '）\r\n'
                    content = content + '最低市标：' + result.city + '（' + result.cityPower + '）\r\n'
                    content = content + '最低省标：' + result.province + '（' + result.provincePower + '）\r\n'
                    content = content + '更新时间：' + result.updatetime;
                    _this.scoreModal = wx.showModal({
                        title: `${this.data.multiArray[0][this.data.multiIndex[0]].label}-${this.data.multiArray[1][this.data.multiIndex[1]].label} ${this.data.currHero}`,
                        showCancel: false,
                        content: content,
                        confirmText: '查看地图',
                        success(res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '/pages/map/index?heroInfo=' + JSON.stringify(result),
                                })
                            }
                        },
                        complete() {

                        }
                    })
                } else {
                    wx.showToast({
                        title: '请求失败',
                        icon: 'info'
                    })
                }
            },
            complete: () => {
                wx.hideLoading();
            }
        })
    },

    bindMultiPickerChange: function(e) {
        this.setData({
            multiIndex: e.detail.value,
            plateform: this.data.multiArray[0][e.detail.value[0]].value,
            channel: this.data.multiArray[1][e.detail.value[1]].value,
        })
    },

    onShareAppMessage: function() {
        var shareObj = {
            title: "王者战力免费查询",
            path: '/pages/home/index',
            imageUrl: '/images/share.png'
        };
        return shareObj;
    }
})