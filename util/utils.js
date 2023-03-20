function hadWatch(pos) {
    return !!wx.getStorageSync(`${getKeyPrefix()}_${pos}`)
}

function setWatched(pos) {

    wx.setStorageSync(`${getKeyPrefix()}_${pos}`, true)
}

function getKeyPrefix() {
    const date = new Date()
    return `${date.getMonth()}_${date.getDay()}`
}

export {
    hadWatch,
    setWatched
}