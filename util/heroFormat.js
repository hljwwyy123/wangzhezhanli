function formatHeroList(dataSource) {
    const structorList = [{
        group: '0',
        label: '全部',
        heroList: []
    }, {
        group: '1',
        label: '坦克',
        heroList: []
    }, {
        group: '2',
        label: '战士',
        heroList: []
    }, {
        group: '3',
        label: '刺客',
        heroList: []
    }, {
        group: '4',
        label: '法师',
        heroList: []
    }, {
        group: '5',
        label: '射手',
        heroList: []
    }, {
        group: '6',
        label: '辅助',
        heroList: []
    }];
    dataSource.forEach((el) => {
        if (el.group) {
            if (el.group.indexOf(",") < 0) {
                structorList[el.group].heroList.push(el)
            } else {
                let mutiplGroup = el.group.split(",");
                mutiplGroup.forEach(m => {
                    structorList[m].heroList.push(el)
                })
            }
        }
    })
    return structorList
}

export default formatHeroList