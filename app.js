//app.js
App({
    onLaunch: function() {
        this.globalData = {
            getHeroList: 'https://www.somekey.cn/mini/hero/getHeroList.php',
            getHeroInfo: 'https://www.somekey.cn/mini/hero/getHeroInfo.php',
            herolist: [{
                    ename: 105,
                    cname: "廉颇",
                    group: "1",
                    title: "正义爆轰",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
                },
                {
                    ename: 106,
                    cname: "小乔",
                    group: "4",
                    title: "恋之微风",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"
                },
                {
                    ename: 107,
                    cname: "赵云",
                    group: "2,3",
                    title: "苍天翔龙",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
                },
                {
                    ename: 108,
                    cname: "墨子",
                    group: "2,4",
                    title: "和平守望",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
                },
                {
                    ename: 109,
                    cname: "妲己",
                    group: "4",
                    title: "魅力之狐",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
                },
                {
                    ename: 110,
                    cname: "嬴政",
                    group: "4",
                    title: "王者独尊",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"
                },
                {
                    ename: 111,
                    cname: "孙尚香",
                    group: "5",
                    title: "千金重弩",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
                },
                {
                    ename: 112,
                    cname: "鲁班七号",
                    group: "5",
                    title: "机关造物",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
                },
                {
                    ename: 113,
                    cname: "庄周",
                    group: "1,6",
                    title: "逍遥梦幻",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
                },
                {
                    ename: 114,
                    cname: "刘禅",
                    group: "1,6",
                    title: "暴走机关",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
                },
                {
                    ename: 115,
                    cname: "高渐离",
                    group: "4",
                    title: "叛逆吟游",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"
                },
                {
                    ename: 116,
                    cname: "阿轲",
                    group: "3",
                    title: "信念之刃",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
                },
                {
                    ename: 117,
                    cname: "钟无艳",
                    group: "1,2",
                    title: "野蛮之锤",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
                },
                {
                    ename: 118,
                    cname: "孙膑",
                    group: "4,6",
                    title: "逆流之时",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
                },
                {
                    ename: 119,
                    cname: "扁鹊",
                    group: "4",
                    title: "善恶怪医",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"
                },
                {
                    ename: 120,
                    cname: "白起",
                    group: "1",
                    title: "最终兵器",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
                },
                {
                    ename: 121,
                    cname: "芈月",
                    group: "1,4",
                    title: "永恒之月",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
                },
                {
                    ename: 123,
                    cname: "吕布",
                    group: "1,2",
                    title: "无双之魔",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
                },
                {
                    ename: 124,
                    cname: "周瑜",
                    group: "4",
                    title: "铁血都督",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"
                },
                {
                    ename: 126,
                    cname: "夏侯惇",
                    group: "1,2",
                    title: "不羁之风",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
                },
                {
                    ename: 127,
                    cname: "甄姬",
                    group: "4",
                    title: "洛神降临",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
                },
                {
                    ename: 128,
                    cname: "曹操",
                    group: "2",
                    title: "鲜血枭雄",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"
                },
                {
                    ename: 129,
                    cname: "典韦",
                    group: "2",
                    title: "狂战士",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
                },
                {
                    ename: 130,
                    cname: "宫本武藏",
                    group: "2",
                    title: "剑圣",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"
                },
                {
                    ename: 131,
                    cname: "李白",
                    group: "3",
                    title: "青莲剑仙",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
                },
                {
                    ename: 132,
                    cname: "马可波罗",
                    group: "5",
                    title: "远游之枪",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
                },
                {
                    ename: 133,
                    cname: "狄仁杰",
                    group: "5",
                    title: "断案大师",
                    pay_type: 11,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
                },
                {
                    ename: 134,
                    cname: "达摩",
                    group: "1,2",
                    title: "拳僧",
                    pay_type: 10,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
                },
                {
                    ename: 135,
                    cname: "项羽",
                    group: "1",
                    title: "霸王",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
                },
                {
                    ename: 136,
                    cname: "武则天",
                    group: "4",
                    title: "女帝",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"
                },
                {
                    ename: 139,
                    cname: "老夫子",
                    group: "2",
                    title: "万古长明",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"
                },
                {
                    ename: 140,
                    cname: "关羽",
                    group: "2",
                    title: "一骑当千",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"
                },
                {
                    ename: 141,
                    cname: "貂蝉",
                    group: "4",
                    title: "绝世舞姬",
                    pay_type: 10,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
                },
                {
                    ename: 142,
                    cname: "安琪拉",
                    group: "4",
                    title: "暗夜萝莉",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
                },
                {
                    ename: 144,
                    cname: "程咬金",
                    group: "1,2",
                    title: "热烈之斧",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
                },
                {
                    ename: 146,
                    cname: "露娜",
                    group: "2,3",
                    title: "月光之女",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
                },
                {
                    ename: 148,
                    cname: "姜子牙",
                    group: "4",
                    title: "太古魔导",
                    pay_type: 10,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
                },
                {
                    ename: 149,
                    cname: "刘邦",
                    group: "1",
                    title: "双面君主",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
                },
                {
                    ename: 150,
                    cname: "韩信",
                    group: "3",
                    title: "国士无双",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
                },
                {
                    ename: 152,
                    cname: "王昭君",
                    group: "4",
                    title: "冰雪之华",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
                },
                {
                    ename: 153,
                    cname: "兰陵王",
                    group: "3",
                    title: "暗影刀锋",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
                },
                {
                    ename: 154,
                    cname: "花木兰",
                    group: "2,3",
                    title: "传说之刃",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
                },
                {
                    ename: 156,
                    cname: "张良",
                    group: "4",
                    title: "言灵之书",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"
                },
                {
                    ename: 157,
                    cname: "不知火舞",
                    group: "3,4",
                    title: "明媚烈焰",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
                },
                {
                    ename: 162,
                    cname: "娜可露露",
                    group: "3",
                    title: "鹰之守护",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
                },
                {
                    ename: 163,
                    cname: "橘右京",
                    group: "2,3",
                    title: "神梦一刀",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
                },
                {
                    ename: 166,
                    cname: "亚瑟",
                    group: "1,2",
                    title: "圣骑之力",
                    pay_type: 11,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
                },
                {
                    ename: 167,
                    cname: "孙悟空",
                    group: "2,3",
                    title: "齐天大圣",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
                },
                {
                    ename: 168,
                    cname: "牛魔",
                    group: "1,6",
                    title: "精英酋长",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
                },
                {
                    ename: 169,
                    cname: "后羿",
                    group: "5",
                    title: "半神之弓",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
                },
                {
                    ename: 170,
                    cname: "刘备",
                    group: "2",
                    title: "仁德义枪",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"
                },
                {
                    ename: 171,
                    cname: "张飞",
                    group: "1,6",
                    title: "禁血狂兽",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
                },
                {
                    ename: 173,
                    cname: "李元芳",
                    group: "5",
                    title: "王都密探",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
                },
                {
                    ename: 174,
                    cname: "虞姬",
                    group: "5",
                    title: "森之风灵",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
                },
                {
                    ename: 175,
                    cname: "钟馗",
                    group: "4,6",
                    title: "虚灵城判",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
                },
                {
                    ename: 177,
                    cname: "成吉思汗",
                    group: "5",
                    title: "苍狼末裔",
                    pay_type: 10,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
                },
                {
                    ename: 178,
                    cname: "杨戬",
                    group: "2",
                    title: "根源之目",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"
                },
                {
                    ename: 183,
                    cname: "雅典娜",
                    group: "2",
                    title: "圣域余晖",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"
                },
                {
                    ename: 184,
                    cname: "蔡文姬",
                    group: "6",
                    title: "天籁弦音",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
                },
                {
                    ename: 186,
                    cname: "太乙真人",
                    group: "1,6",
                    title: "炼金大师",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
                },
                {
                    ename: 180,
                    cname: "哪吒",
                    group: "2",
                    title: "桀骜炎枪",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"
                },
                {
                    ename: 190,
                    cname: "诸葛亮",
                    group: "4",
                    title: "绝代智谋",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"
                },
                {
                    ename: 192,
                    cname: "黄忠",
                    group: "5",
                    title: "燃魂重炮",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
                },
                {
                    ename: 191,
                    cname: "大乔",
                    group: "6",
                    title: "沧海之曜",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
                },
                {
                    ename: 187,
                    cname: "东皇太一",
                    group: "6",
                    title: "噬灭日蚀",
                    pay_type: 10,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
                },
                {
                    ename: 182,
                    cname: "干将莫邪",
                    group: "4",
                    title: "淬命双剑",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"
                },
                {
                    ename: 189,
                    cname: "鬼谷子",
                    group: "6",
                    title: "万物有灵",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
                },
                {
                    ename: 193,
                    cname: "铠",
                    group: "1",
                    title: "破灭刃锋",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
                },
                {
                    ename: 196,
                    cname: "百里守约",
                    group: "3,5",
                    title: "静谧之眼",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
                },
                {
                    ename: 195,
                    cname: "百里玄策",
                    group: "3",
                    title: "嚣狂之镰",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
                },
                {
                    ename: 194,
                    cname: "苏烈",
                    group: "1",
                    title: "不屈铁壁",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
                },
                {
                    ename: 198,
                    cname: "梦奇",
                    group: "2,4",
                    title: "入梦之灵",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
                },
                {
                    ename: 179,
                    cname: "女娲",
                    group: "4",
                    title: "至高创世",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"
                },
                {
                    ename: 501,
                    cname: "明世隐",
                    group: "6",
                    title: "灵魂劫卜",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
                },
                {
                    ename: 199,
                    cname: "公孙离",
                    group: "5",
                    title: "幻舞玲珑",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
                },
                {
                    ename: 176,
                    cname: "杨玉环",
                    group: "4",
                    title: "霓裳风华",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
                },
                {
                    ename: 502,
                    cname: "裴擒虎",
                    group: "2,3",
                    title: "六合虎拳",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
                },
                {
                    ename: 197,
                    cname: "弈星",
                    group: "4",
                    title: "天元之弈",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"
                },
                {
                    ename: 503,
                    cname: "狂铁",
                    group: "2",
                    title: "战车意志",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"
                },
                {
                    ename: 504,
                    cname: "米莱狄",
                    group: "4",
                    title: "筑城者",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"
                },
                {
                    ename: 125,
                    cname: "元歌",
                    group: "3",
                    title: "无间傀儡",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
                },
                {
                    ename: 510,
                    cname: "孙策",
                    group: "1,2",
                    title: "光明之海",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
                },
                {
                    ename: 137,
                    cname: "司马懿",
                    group: "3,4",
                    title: "寂灭之心",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
                },
                {
                    ename: 509,
                    cname: "盾山",
                    group: "1,6",
                    title: "无尽之盾",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
                },
                {
                    ename: 508,
                    cname: "伽罗",
                    group: "5",
                    title: "破魔之箭",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
                },
                {
                    ename: 312,
                    cname: "沈梦溪",
                    group: "4",
                    title: "爆弹怪猫",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"
                },
                {
                    ename: 507,
                    cname: "李信",
                    group: "2",
                    title: "谋世之战",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"
                },
                {
                    ename: 513,
                    cname: "上官婉儿",
                    group: "3,4",
                    title: "惊鸿之笔",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
                },
                {
                    ename: 515,
                    cname: "嫦娥",
                    group: "1,4",
                    title: "寒月公主",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
                },
                {
                    ename: 511,
                    cname: "猪八戒",
                    group: "1",
                    title: "无忧猛士",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
                },
                {
                    ename: 529,
                    cname: "盘古",
                    group: "2",
                    title: "破晓之神",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"
                },
                {
                    ename: 505,
                    cname: "瑶",
                    group: "6",
                    title: "鹿灵守心",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
                },
                {
                    ename: 506,
                    cname: "云中君",
                    group: "2,3",
                    title: "流云之翼",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
                },
                {
                    ename: 522,
                    cname: "曜",
                    group: "2",
                    title: "星辰之子",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"
                },
                {
                    ename: 518,
                    cname: "马超",
                    group: "2",
                    title: "冷晖之枪",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
                },
                {
                    ename: 523,
                    cname: "西施",
                    group: "4",
                    title: "幻纱之灵",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg"
                },
                {
                    ename: 525,
                    cname: "鲁班大师",
                    group: "5",
                    title: "神匠",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg"
                },
                {
                    ename: 524,
                    cname: "蒙犽",
                    group: "5",
                    title: "烈炮小子",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg"
                },
                {
                    ename: 531,
                    cname: "镜",
                    group: "3",
                    title: "破镜之刃",
                    pay_type: 10,
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg"
                },
                {
                    ename: 527,
                    cname: "蒙恬",
                    group: "1,2",
                    title: "秩序统将",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg"
                },
                {
                    ename: 533,
                    cname: "阿古朵",
                    group: "1",
                    title: "山林之子",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg"
                },
                {
                    ename: 536,
                    cname: "夏洛特",
                    group: "2",
                    title: "玫瑰剑士",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg"
                },
                {
                    ename: 528,
                    cname: "澜",
                    group: "3",
                    title: "鲨之猎刃",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"
                },
                {
                    ename: 537,
                    cname: "司空震",
                    group: "2",
                    title: "雷霆之王",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg"
                },
                {
                    ename: 155,
                    cname: "艾琳",
                    group: "5",
                    title: "精灵之舞",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg"
                },
                {
                    ename: 538,
                    cname: "云缨",
                    group: "2,3",
                    title: "燎原之心",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg"
                },
                {
                    ename: 540,
                    cname: "金蝉",
                    group: "4",
                    title: "渡世行者",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg"
                },
                {
                    ename: 542,
                    cname: "暃",
                    group: "2,3",
                    title: "玉城之子",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/542/542.jpg"
                },
                {
                    ename: 534,
                    cname: "桑启",
                    group: "6",
                    title: "萤火之旅",
                    iconUrl: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/534/534.jpg"
                }
            ],
        }
        wx.cloud.init({
            // env: "cloud1-2gcr8sm521ca9b17"
        })
    }
})