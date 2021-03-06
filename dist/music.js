const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
	order: 'random',
    audio: [
	{
        name: "回到夏天",
        artist: '傲七爷 / 小田音乐社',
        url: 'http://music.163.com/song/media/outer/url?id=1449678888.mp3',
        cover: 'http://p2.music.126.net/6DtmsO-P4jyJPLjnGa8Ytg==/109951165004114065.jpg?param=130y130',
      },{
        name: "认真地老去",
        artist: '张希 / 曹方',
        url: 'http://music.163.com/song/media/outer/url?id=461080452.mp3',
        cover: 'http://p1.music.126.net/LwisuwyurwWs3zpkoBIC9g==/19024849695642179.jpg?param=130y130',
      },{
        name: "晚安",
        artist: '颜人中',
        url: 'http://music.163.com/song/media/outer/url?id=1359356908.mp3',
        cover: 'http://p1.music.126.net/8N1fsMRm2L5HyZccc6I3ew==/109951164007377169.jpg?param=130y130',
      },{
        name: "我在等",
        artist: '林宝馨',
        url: 'http://music.163.com/song/media/outer/url?id=1809976865.mp3',
        cover: 'http://p1.music.126.net/-bhK61sS9wxPm2ATbn56mg==/109951165610821040.jpg?param=130y130',
      },{
        name: "白羊",
        artist: '徐秉龙 / 沈以诚',
        url: 'http://music.163.com/song/media/outer/url?id=514761281.mp3',
        cover: 'http://p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg?param=130y130',
      },{
        name: "Please Don't Go",
        artist: 'Joel Adams',
        url: 'http://music.163.com/song/media/outer/url?id=37653063.mp3',
        cover: 'http://p2.music.126.net/mBK9S-dCl0NW3yDUCwwqZw==/109951164853861010.jpg?param=130y130',
      },{
        name: "南方姑娘",
        artist: '赵雷',
        url: 'http://music.163.com/song/media/outer/url?id=202373.mp3',
        cover: 'http://p1.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg?param=130y130',
      },{
        name: "I Am You",
        artist: 'Kim Taylor',
        url: 'http://music.163.com/song/media/outer/url?id=2919622.mp3',
        cover: 'http://p1.music.126.net/cCw5Kr5C52bYbV-AOp6IUA==/109951163073357482.jpg?param=130y130',
      },{
        name: "芒种",
        artist: '音阙诗听 / 赵方婧',
        url: 'http://music.163.com/song/media/outer/url?id=1369798757.mp3',
        cover: 'http://p2.music.126.net/KFWbxh1ZLyy9WR77Ca08tA==/109951164866828786.jpg?param=130y130',
      },{
        name: "There For You",
        artist: 'Martin Garrix / Troye Sivan',
        url: 'http://music.163.com/song/media/outer/url?id=480426313.mp3',
        cover: 'http://p1.music.126.net/E_ffmvXrVZoTugVf_Zf4Cg==/18520173860179248.jpg?param=130y130',
      },{
        name: "红昭愿",
        artist: '音阙诗听',
        url: 'http://music.163.com/song/media/outer/url?id=452986458.mp3',
        cover: 'http://p2.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg?param=130y130',
      },{
        name: "国王与乞丐",
        artist: '华晨宇 / 杨宗纬',
        url: 'http://music.163.com/song/media/outer/url?id=32835565.mp3',
        cover: 'http://p1.music.126.net/UsSAd3Bdf77DjhCuTSEvUw==/109951163077613693.jpg?param=130y130',
      },{
        name: "虚拟",
        artist: '陈粒',
        url: 'http://music.163.com/song/media/outer/url?id=421423808.mp3',
        cover: 'http://p2.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg?param=130y130',
      },{
        name: "End Of The Night",
        artist: 'Danny Avila',
        url: 'http://music.163.com/song/media/outer/url?id=1324159296.mp3',
        cover: 'http://p1.music.126.net/JgypqYl8PkTOwtIallrpxQ==/109951163656707857.jpg?param=130y130',
      },{
        name: "想见你想见你想见你",
        artist: '八三夭',
        url: 'http://music.163.com/song/media/outer/url?id=1403215687.mp3',
        cover: 'http://p2.music.126.net/8MjQbJQtJRV81d1dNfiH6A==/109951164485238047.jpg?param=130y130',
      },{
        name: "失眠飞行",
        artist: '接个吻，开一枪',
        url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
        cover: 'http://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=130y130',
      },{
        name: "没有理由",
        artist: '永彬Ryan.B/周延英(英子-effie)',
        url: 'http://music.163.com/song/media/outer/url?id=550138197.mp3',
        cover: 'http://p1.music.126.net/VAux0wpbTJz6timFFHVgLQ==/109951163237307291.jpg?param=130y130',
      },{
        name: "再也没有",
        artist: '永彬Ryan.B/AY楊佬叁',
        url: 'http://music.163.com/song/media/outer/url?id=480580003.mp3',
        cover: 'http://p1.music.126.net/B7MRU9cieODaInnwzyLwYQ==/18771962022944662.jpg?param=130y130',
      },{
        name: "勇气",
        artist: '梁静茹',
        url: 'http://music.163.com/song/media/outer/url?id=254485.mp3',
        cover: 'http://p1.music.126.net/PavIMxZq16K7-0fSF5n-yg==/109951163240604120.jpg?param=130y130',
      },{
        name: "Nevada",
        artist: 'Vicetone/Cozi Zuehlsdorff',
        url: 'http://music.163.com/song/media/outer/url?id=447281026.mp3',
        cover: 'http://p2.music.126.net/ifxF9yxIzU1-lZAm9GscWg==/109951163311434257.jpg?param=130y130',
      },{
        name: "Faded",
        artist: 'Alan Walker / Iselin Solheim',
        url: 'http://music.163.com/song/media/outer/url?id=36990266.mp3',
        cover: 'http://p2.music.126.net/8dzD62VK8jLDbhEqkmpIAg==/18277181788626198.jpg?param=130y130',
      },{
        name: "Sold Out",
        artist: 'Hawk Nelson',
        url: 'http://music.163.com/song/media/outer/url?id=31010566.mp3',
        cover: 'http://p2.music.126.net/UR8jAfqus_o1j_QkaYkZ_g==/109951163664241365.jpg?param=130y130',
      },{
        name: "北京东路的日子",
        artist: '汪源',
        url: 'http://music.163.com/song/media/outer/url?id=5240550.mp3',
        cover: 'http://p2.music.126.net/nioPMqyc0opzEavs67vdYw==/19128203788658830.jpg?param=130y130',
      },{
        name: "明天，你好",
        artist: '牛奶咖啡',
        url: 'http://music.163.com/song/media/outer/url?id=368727.mp3',
        cover: 'http://p1.music.126.net/LQ2iUKlZwqGMysGkeCR4ww==/27487790697969.jpg?param=130y130',
      },{
        name: "On My Own",
        artist: 'Ashes Remain',
        url: 'http://music.163.com/song/media/outer/url?id=16483438.mp3',
        cover: 'http://p2.music.126.net/u4uhhO8c9vJirQZLv4Y0rw==/109951163370757964.jpg?param=130y130',
      },{
        name: "East of Eden",
        artist: 'Zella Day',
        url: 'http://music.163.com/song/media/outer/url?id=29009655.mp3',
        cover: 'http://p1.music.126.net/orDs-AZ0jJjB06uoP0pdMw==/6667438510952720.jpg?param=130y130',
      },{
        name: "All Falls Down",
        artist: 'Alan Walker',
        url: 'http://music.163.com/song/media/outer/url?id=515453363.mp3',
        cover: 'http://p2.music.126.net/rTb28CZeLWxIRuSlJWkPLQ==/18850027346628137.jpg?param=130y130',
      },{
        name: "会不会",
        artist: '刘大壮',
        url: 'http://music.163.com/song/media/outer/url?id=1481164987.mp3',
        cover: 'http://p2.music.126.net/SFXsIYI3hCCedvbqrvVytA==/109951165335411992.jpg?param=130y130',
      },{
        name: "赤伶",
        artist: '是二智呀',
        url: 'http://music.163.com/song/media/outer/url?id=1377748865.mp3',
        cover: 'http://p2.music.126.net/R9d4-eULOknTXf4fZz41Dg==/109951164346847770.jpg?param=130y130',
      },{
        name: "我要找到你",
        artist: 'Zic子晨',
        url: 'http://music.163.com/song/media/outer/url?id=1406642934.mp3',
        cover: 'http://p1.music.126.net/A4uSU0kJZT0xpw-S0fGg2Q==/109951164539421824.jpg?param=130y130',
      },{
        name: "那就这样吧",
        artist: '动力火车',
        url: 'http://music.163.com/song/media/outer/url?id=351271.mp3',
        cover: 'http://p2.music.126.net/OgwL-MYu5rdXUw_PIGKp4g==/109951163167393472.jpg?param=130y130',
      },{
        name: "谪仙",
        artist: '伊格赛听 / 叶里',
        url: 'http://music.163.com/song/media/outer/url?id=1421256202.mp3',
        cover: 'http://p2.music.126.net/X-ZQ6wkyaL9cJTiyxmDhuw==/109951164680974796.jpg?param=130y130',
      },{
        name: "Tony Igy-Astronomia（Jiaye remix）",
        artist: 'Jiaye',
        url: 'http://music.163.com/song/media/outer/url?id=446154202.mp3',
        cover: 'http://p1.music.126.net/m0q0Ukc1pdwfTjdYYgmCvg==/109951162821165944.jpg?param=130y130',
      },{
        name: "Friendships (Original Mix)",
        artist: 'Pascal Letoublon',
        url: 'http://music.163.com/song/media/outer/url?id=505449407.mp3',
        cover: 'http://p1.music.126.net/ejBqv__hHneHWQnMd1x00A==/18338754440252475.jpg?param=130y130',
      },{
        name: "Dream It Possible",
        artist: 'Delacey',
        url: 'http://music.163.com/song/media/outer/url?id=38592976.mp3',
        cover: 'http://p2.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg?param=130y130',
      },{
        name: "记·念",
        artist: '雷雨心',
        url: 'http://music.163.com/song/media/outer/url?id=36229053.mp3',
        cover: 'http://p2.music.126.net/LWmhB3XX8szN3V9TU-A5UA==/3390893862255408.jpg?param=130y130',
      },{
        name: "没有什么不同",
        artist: '曲婉婷',
        url: 'http://music.163.com/song/media/outer/url?id=25713024.mp3',
        cover: 'http://p2.music.126.net/8jt2KnGDF0qMP9JbidOtVA==/573945069746475.jpg?param=130y130',
      },{
        name: "人间城",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=1377574592.mp3',
        cover: 'http://p1.music.126.net/0QKeN1ZJtrwCDoX8fK72CA==/109951164209431473.jpg?param=130y130',
      },{
        name: "他只是经过",
        artist: 'h3R3 / Felix Bennett',
        url: 'http://music.163.com/song/media/outer/url?id=1443838552.mp3',
        cover: 'http://p2.music.126.net/mX6DKxPxdt2nInfNCIz9Fw==/109951165015483353.jpg?param=130y130',
      },{
        name: "是想你的声音啊",
        artist: '傲七爷',
        url: 'http://music.163.com/song/media/outer/url?id=1459950258.mp3',
        cover: 'http://p2.music.126.net/cIR63lyPGgQ4mAyuOTg8lA==/109951165109878587.jpg?param=130y130',
      },{
        name: "愿你余生漫长",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=1425814935.mp3',
        cover: 'http://p2.music.126.net/x8mEAmSeYWPh-lXldUujmg==/109951164738889941.jpg?param=130y130',
      },{
        name: "偏爱",
        artist: '张芸京',
        url: 'http://music.163.com/song/media/outer/url?id=5238992.mp3',
        cover: 'http://p1.music.126.net/L-7tS-3YBuh558I8OYbA3g==/6667438510890774.jpg?param=130y130',
      },{
        name: "把回忆拼好给你",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=1403318151.mp3',
        cover: 'http://p2.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg?param=130y130',
      },{
        name: "当真 (完整版)",
        artist: '野小马',
        url: 'http://music.163.com/song/media/outer/url?id=1448197936.mp3',
        cover: 'http://p1.music.126.net/4WQ7kKtDjtb9B-WJk77zzQ==/109951164987803704.jpg?param=130y130',
      },{
        name: "魔鬼中的天使",
        artist: '田馥甄',
        url: 'http://music.163.com/song/media/outer/url?id=296837.mp3',
        cover: 'http://p1.music.126.net/W9HqFsgMcjgWjW9SutIvrw==/18956679974613469.jpg?param=130y130',
      },{
        name: "男孩",
        artist: '梁博 / 陶孟童 / 肖和东 / 高誉容',
        url: 'http://music.163.com/song/media/outer/url?id=482988834.mp3',
        cover: 'http://p2.music.126.net/QFXbRb-OOk-ThxtDyg8fjQ==/18618030395080088.jpg?param=130y130',
      },{
        name: "爱，存在",
        artist: '卢卢快闭嘴',
        url: 'http://music.163.com/song/media/outer/url?id=1460682363.mp3',
        cover: 'http://p1.music.126.net/yZipSHp6XCUqy9l2VybCTQ==/109951165115661793.jpg?param=130y130',
      },{
        name: "Psycho, Pt. 2",
        artist: 'Russ',
        url: 'http://music.163.com/song/media/outer/url?id=440208643.mp3',
        cover: 'http://p1.music.126.net/Z8q0skkFiyZUxzJK2uCYcg==/109951164939830012.jpg?param=130y130',
      },{
        name: "追光者",
        artist: '岑宁儿',
        url: 'http://music.163.com/song/media/outer/url?id=483671599.mp3',
        cover: 'http://p1.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=130y130',
      },{
        name: "Reality",
        artist: 'Lost Frequencies / Janieck',
        url: 'http://music.163.com/song/media/outer/url?id=32835377.mp3',
        cover: 'http://p2.music.126.net/LKFWPd5m8ZStX8gm_536Ag==/109951163131792528.jpg?param=130y130',
      },{
        name: "还是分开",
        artist: '张叶蕾',
        url: 'http://music.163.com/song/media/outer/url?id=465921195.mp3',
        cover: 'http://p2.music.126.net/tH5FdakJX47uy8mlM0GMWQ==/19218363741925314.jpg?param=130y130',
      },{
        name: "Right Now (Na Na Na)",
        artist: 'Am1r',
        url: 'http://music.163.com/song/media/outer/url?id=463352828.mp3',
        cover: 'http://p1.music.126.net/ejLPvQsq-7TrU-3D1z2hrg==/19132601834939735.jpg?param=130y130',
      },{
        name: "我还年轻 我还年轻",
        artist: '张叶蕾',
        url: 'http://music.163.com/song/media/outer/url?id=1296893537.mp3',
        cover: 'http://p1.music.126.net/QcPmEF4s16kfXo0SbBjAGA==/109951164590805849.jpg?param=130y130',
      },{
        name: "Send It",
        artist: 'Austin Mahone / Rich Homie Quan',
        url: 'http://music.163.com/song/media/outer/url?id=426291544.mp3',
        cover: 'http://p1.music.126.net/OvNzao--j5ZfucYr6MSdXw==/18561955300159599.jpg?param=130y130',
      },{
        name: "尽头",
        artist: '赵方婧',
        url: 'http://music.163.com/song/media/outer/url?id=444267766.mp3',
        cover: 'http://p1.music.126.net/c0VxHYdzc0GGFM68YKCYxA==/3315027565433520.jpg?param=130y130',
      },{
        name: "迷人的危险",
        artist: '尚士达',
        url: 'http://music.163.com/song/media/outer/url?id=1383876635.mp3',
        cover: 'http://p1.music.126.net/aryxbULAHjqP5MPgUdg9gA==/109951164292787462.jpg?param=130y130',
      },{
        name: "爱你",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=558290126.mp3',
        cover: 'http://p2.music.126.net/UoNu_Cvwo_jvtIUvUeG3vA==/109951164581577669.jpg?param=130y130',
      },{
        name: "心安理得",
        artist: '王天戈',
        url: 'http://music.163.com/song/media/outer/url?id=474739467.mp3',
        cover: 'http://p1.music.126.net/Hrckg2IfeAV34N4UAZctRg==/109951163604902705.jpg?param=130y130',
      },{
        name: "少一点天分",
        artist: '孙盛希',
        url: 'http://music.163.com/song/media/outer/url?id=543798652.mp3',
        cover: 'http://p2.music.126.net/1QT6pMrufe1LjwVOgDJ81w==/109951163176818589.jpg?param=130y130',
      },{
        name: "天亮以前说再见",
        artist: '曲肖冰',
        url: 'http://music.163.com/song/media/outer/url?id=1336789644.mp3',
        cover: 'http://p2.music.126.net/_P71psYXWlTrEWEuyyN7QA==/109951163770392080.jpg?param=130y130',
      },{
        name: "房间-新版",
        artist: '刘瑞琦',
        url: 'http://music.163.com/song/media/outer/url?id=562598081.mp3',
        cover: 'http://p2.music.126.net/F5x7VgIRu_awduoWu2sDeA==/109951163302871673.jpg?param=130y130',
      },{
        name: "MOM",
        artist: '蜡笔小心',
        url: 'http://music.163.com/song/media/outer/url?id=1387581250.mp3',
        cover: 'http://p2.music.126.net/ZOkr1NI-WGGRuc5-G_7-CA==/109951164332837488.jpg?param=130y130',
      },{
        name: "只是太爱你（原唱：张敬轩）",
        artist: '丁芙妮',
        url: 'http://music.163.com/song/media/outer/url?id=1357816405.mp3',
        cover: 'http://p2.music.126.net/mKhOfpO72lu1vrXbXohX8A==/109951163988545723.jpg?param=130y130',
      },{
        name: "最美的期待",
        artist: '周笔畅',
        url: 'http://music.163.com/song/media/outer/url?id=531295576.mp3',
        cover: 'http://p1.music.126.net/mwCUI0iL3xEC2a4WVICHlA==/109951163115369030.jpg?param=130y130',
      },{
        name: "活着",
        artist: '郝云',
        url: 'http://music.163.com/song/media/outer/url?id=27646786.mp3',
        cover: 'http://p1.music.126.net/9A9o8KnCftKoJLmfk7jE-A==/1252343744099790.jpg?param=130y130',
      },{
        name: "关山酒",
        artist: '等什么君',
        url: 'http://music.163.com/song/media/outer/url?id=1387592437.mp3',
        cover: 'http://p2.music.126.net/TzhBcIpEldkML6hvYKtzsQ==/109951164333017222.jpg?param=130y130',
      },{
        name: "过客",
        artist: '周思涵',
        url: 'http://music.163.com/song/media/outer/url?id=445665094.mp3',
        cover: 'http://p2.music.126.net/ai-tIcR1c69_tXCoDy8hyA==/18770862510931326.jpg?param=130y130',
      },{
        name: "喜欢",
        artist: '阿肆',
        url: 'http://music.163.com/song/media/outer/url?id=526464145.mp3',
        cover: 'http://p2.music.126.net/BA0bFrD0cK4YDSYublCThA==/109951163093942268.jpg?param=130y130',
      },{
        name: "只要平凡",
        artist: '张杰 / 张碧晨',
        url: 'http://music.163.com/song/media/outer/url?id=574919767.mp3',
        cover: 'http://p2.music.126.net/CjGoliP3xOB0gcCUaeTTBg==/109951163375727336.jpg?param=130y130',
      },{
        name: "起风了",
        artist: '买辣椒也用券',
        url: 'http://music.163.com/song/media/outer/url?id=1330348068.mp3',
        cover: 'http://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130',
      },{
        name: "无人之岛",
        artist: '任然',
        url: 'http://music.163.com/song/media/outer/url?id=493735012.mp3',
        cover: 'http://p1.music.126.net/mIUtHBPTJ52H78_FhHzcWg==/19188676928210304.jpg?param=130y130',
      },{
        name: "岁月神偷",
        artist: '金玟岐',
        url: 'http://music.163.com/song/media/outer/url?id=28285910.mp3',
        cover: 'http://p1.music.126.net/54wdQi_3rpjreY2oo2jb7w==/5998935441219557.jpg?param=130y130',
      },{
        name: "侧脸",
        artist: '于果',
        url: 'http://music.163.com/song/media/outer/url?id=534542079.mp3',
        cover: 'http://p1.music.126.net/FWR6RWtqhljoKR0QyRhQzQ==/109951163127272432.jpg?param=130y130',
      },{
        name: "心如止水",
        artist: 'Ice Paper',
        url: 'http://music.163.com/song/media/outer/url?id=1349292048.mp3',
        cover: 'http://p2.music.126.net/MLQl_7poLz2PTON6_JZZRQ==/109951163938219545.jpg?param=130y130',
      },{
        name: "像鱼",
        artist: '王贰浪',
        url: 'http://music.163.com/song/media/outer/url?id=1331819951.mp3',
        cover: 'http://p1.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=130y130',
      },{
        name: "丢了你",
        artist: '井胧',
        url: 'http://music.163.com/song/media/outer/url?id=1442508316.mp3',
        cover: 'http://p1.music.126.net/zYIadX_Prawn3nMTRA9tOQ==/109951164928052888.jpg?param=130y130',
      },{
        name: "去年夏天",
        artist: '王大毛',
        url: 'http://music.163.com/song/media/outer/url?id=557581476.mp3',
        cover: 'http://p2.music.126.net/5M7Qvv32HaFmMrLN8uehuA==/109951163293243877.jpg?param=130y130',
      },{
        name: "大眠（原唱：王心凌）",
        artist: '小乐哥',
        url: 'http://music.163.com/song/media/outer/url?id=1413142894.mp3',
        cover: 'http://p1.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg?param=130y130',
      },
	{
        name: "春娇与志明",
        artist: '街道办GDC&欧阳耀莹',
        url: 'http://attachment.mc.0sm.com/node0/2020/06/85ED48CE7BC7E4BF-f0826684c6fdea1b.mp3',
        cover: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2975910205,862942433&fm=85&app=92&f=JPEG?w=121&h=75&s=F1B28B746E60560D003290460300A0FB',
      },
	{
        name: "出山",
        artist: '花粥 / 王胜娚',
        url: 'http://music.163.com/song/media/outer/url?id=1313354324.mp3',
        cover: 'http://p1.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=130y130',
      },
	{
        name: "夏天的风",
        artist: '火羊瞌睡了',
        url: 'http://music.163.com/song/media/outer/url?id=1436709403.mp3',
        cover: 'http://p1.music.126.net/rFUKVdOjqxgwAT6Zi6qv7A==/109951164906689206.jpg?param=130y130',
      },
	{
        name: "后来遇见他",
        artist: '胡66',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ED07178E4D75DD-f9e51ec78d1730f9.mp3',
        cover: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3932174931,1270489708&fm=85&app=92&f=JPEG?w=121&h=75&s=3C20A219481276CA0A3C1CC50300E0B0',
      },
	{
        name: "莫问归期",
        artist: '蒋雪儿',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ED06D7F6CEBB80-3ebc658a718a7d95.mp3',
        cover: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=559466186,582788614&fm=85&app=92&f=JPEG?w=121&h=75&s=00E0F904548A84FE5CB9348003008090',
      },
	{
        name: "与我无关",
        artist: '阿冗',
        url: 'http://music.163.com/song/media/outer/url?id=1413585838.mp3',
        cover: 'http://p2.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg?param=130y130',
      },
	{
        name: "桥边姑娘",
        artist: 'MC海伦',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC7736F7014C7-98d409c1d7eb4f69.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000037Yq3H3RznaX.jpg?max_age=2592000',
      },
	{
        name: "Monsters",
        artist: 'Katie Sky',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC8284853C157-a89bbd388e9e04ad.mp3',
        cover: 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3258847239,1952088160&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=63f89e236ea652721da5d5c01be3b0a4',
      },
	{
        name: "余香",
        artist: '张小九',
        url: 'http://music.163.com/song/media/outer/url?id=487885426.mp3',
        cover: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=773072047,1899519217&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=e302fc3a4fd68c7375f95ce3585c4e02',
      },{
        name: "bad guy",
        artist: 'Billie Eilish',
        url: 'http://music.163.com/song/media/outer/url?id=1355147933.mp3',
        cover: 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=1223117760,3496327365&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=86fa76f140934b65dd85ae6d0745e2a1',
      },
	  {
        name: "处处吻",
        artist: '杨千嬅',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC82355A050E2-46db27dbb023fefb.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003imHj00yzEjE.jpg?max_age=2592000',
      },
	{
        name: "盗将行",
        artist: '花粥',
        url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
        cover: 'http://m10.music.126.net/20200212184557/a2e6a29e1a3c7b64413fc9834363a62e/ymusic/07fa/a2a1/35ea/732937117d6d0a8c13a81bb40184662e.mp3',
      },
	{
        name: "世间美好与你环环相扣",
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: 'http://p1.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg?param=130y130',
      },
	{
        name: "理想三旬",
        artist: '陈鸿宇',
        url: 'http://music.163.com/song/media/outer/url?id=31445772.mp3',
        cover: 'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3908928353,4267090781&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=ca1b525dd410d20af1cd6c0f04b54b6e',
      },
	{
        name: "下山",
        artist: '要不要买菜',
        url: 'http://music.163.com/song/media/outer/url?id=1404885266.mp3',
        cover: 'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=396357701,2786951898&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=5f9160bb84598f53dd003016711152e2',
      },
	{
        name: "Dance Monkey",
        artist: 'Tones and I',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC82BB2D776AB-d248eb3fb81f5da7.mp3',
        cover: 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=641324820,938261058&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=164673e91708baf452da66197f2d6049',
      },{
        name: "归去来兮",
        artist: '花粥',
        url: 'http://music.163.com/song/media/outer/url?id=1357999894.mp3',
        cover: 'http://p2.music.126.net/H6dt7IgvXNWhRM_w7XbcqQ==/109951163990575387.jpg?param=130y130',
      },{
        name: "可不可以",
        artist: '张紫豪',
        url: 'http://music.163.com/song/media/outer/url?id=553755659.mp3',
        cover: 'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3015610235,3817130670&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=d40f164ea7b8fc835ebb3480ea68e81d',
      },
	{
        name: "Something Just Like This",
        artist: 'The Chainsmokers',
        url: 'http://music.163.com/song/media/outer/url?id=461347998.mp3',
        cover: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2882527225,1580440848&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=3d38d1d212bdac43485e36e2fffee1c2',
      },
	{
        name: "七月上",
        artist: 'Jam',
        url: 'http://music.163.com/song/media/outer/url?id=31445554.mp3',
        cover: 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2526299784,549016668&fm=74&app=80&f=JPG&size=f121,121?sec=1880279984&t=ef532520f2dea28f7d588e8e5eab1997',
      },
	{
        name: "听说",
        artist: '丛铭君',
        url: 'http://music.163.com/song/media/outer/url?id=505820138.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000hj2em054Hil.jpg?max_age=2592000',
      },
	{
        name: "云烟成雨",
        artist: '房东的猫',
        url: 'http://music.163.com/song/media/outer/url?id=513360721.mp3',
        cover: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2018143654,3948552994&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=cff1a825be71e7880f7d6a3e356f2679',
      },
	{
        name: "麻雀",
        artist: '李荣浩',
        url: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003eE8gA3TfuKc.jpg?max_age=2592000',
      },
	{
        name: "冬眠",
        artist: '司南',
        url: 'http://music.163.com/song/media/outer/url?id=1398663411.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/20191025/20191025175719997108.jpg',
      },
	{
        name: "广东爱情故事",
        artist: '广东雨神',
        url: 'http://music.163.com/song/media/outer/url?id=545413103.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001gFRFR0344aw.jpg?max_age=2592000',
      },
	{
        name: "世界这么大还是遇见你",
        artist: '程响',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC7A5885A4D35-0d26e2412f525466.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH.jpg?max_age=2592000',
      },
	{
        name: "嚣张",
        artist: 'en',
        url: 'http://music.163.com/song/media/outer/url?id=1382596189.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002lJJi244utqN.jpg?max_age=2592000',
      },
	{
        name: "空空如也",
        artist: '胡66',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC7BA2CF79550-13c07419245da09f.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002TtvI007ZBG3.jpg?max_age=2592000',
      },
	{
        name: "浪人琵琶",
        artist: '胡66',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC83E9A89FF71-20cefb2ea1d6ea21.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001uw3LY2ryrl2.jpg?max_age=2592000',
      },
	{
        name: "红色高跟鞋",
        artist: '蔡健雅',
        url: 'http://attachment.mc.0sm.com/node0/2020/05/85ECC832435728D3-b98e7b29f9e5adc0.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002dOge41xlS8x.jpg?max_age=2592000',
      }
    ]
});
