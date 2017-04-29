.pragma library

var availIds = [
    0,
    710113, 710114, 710115,
    712411, 712412, 712413,
    712611, 712613,
    712714, 712715,
    712915,
    713311, 713314,
    713301,
    713811, 713815,
    714915,
    715212,
    990001, 990002, 990003
];

var helpIds = [
    0,
    710111, 710112, 710113, 710114, 710115,
    710411, 710414, 710415,
    712411, 712412, 712413,
    712611, 712613, 712615,
    712713, 712714, 712715,
    712915,
    713311, 713313, 713314, 713315,
    713301, 713302,
    713811, 713813, 713815,
    714914, 714915,
    715211, 715212,
    990001, 990002, 990003, 990004,
    990008, 990011, 990017,
    990020, 990023
];

var allIds = [
    0,
    710111, 710112, 710113, 710114, 710115,
    710411, 710412, 710413, 710414, 710415,
    712411, 712412, 712413, 712414, 712415,
    712401,
    712611, 712612, 712613, 712614, 712615,
    712601,
    712711, 712712, 712713, 712714, 712715,
    712701,
    712911, 712912, 712913, 712914, 712915,
    713311, 713312, 713313, 713314, 713315,
    713321, 713322, 713323, 713324, 713325,
    713331, 713332, 713333, 713334, 713335,
    713341, 713342, 713343, 713344, 713345,
    713301, 713302,
    713613,
    713811, 713812, 713813, 713814, 713815,
    714911, 714912, 714913, 714914, 714915,
    715211, 715212, 715213, 715214, 715215,
    990001, 990002, 990003, 990004, 990005,
    990006, 990007, 990008, 990009, 990010,
    990011, 990012, 990013, 990014, 990015,
    990016, 990017, 990018, 990019, 990020,
    990021, 990022, 990023
];

function genId() {
    return availIds[Math.floor(Math.random() * availIds.length)];
}

function genAvailIndex() {
    return Math.floor(Math.random() * availIds.length);
}

function genIndices() {
    var res = [ 0, 0, 0, 0 ];
    res[0] = genAvailIndex();
    do {
        res[1] = genAvailIndex();
    } while (res[1] === res[0]);
    do {
        res[2] = genAvailIndex();
    } while (res[2] === res[0] || res[2] === res[1]);
    do {
        res[3] = genAvailIndex();
    } while (res[3] === res[0] || res[3] === res[1] || res[3] === res[2]);
    return res;
}

var names = {
    // *** SYNC with libsaki/Girl.h enum 'Id'
    // *** SYNC with availIds
    // *** SYNC with the 'blabla' below
    "-1": "???", "-2": "総合",
    "0": "須賀京太郎",
    // IH-71/A-block
    "710111": "宮永照", "710112": "弘世菫", "710113": "渋谷尭深",
        "710114": "亦野誠子", "710115": "大星淡",
    "710411": "花田煌", "710412": "安河内美子", "710413": "江崎仁美",
        "710414": "白水哩", "710415": "鶴田姫子",
    "712411": "松実玄", "712412": "松実宥", "712413": "新子憧",
        "712414": "鷺森灼", "712415": "高鴨穏乃",
    "712401": "小走やえ",
    "712611": "園城寺怜", "712612": "二条泉", "712613": "江口セーラ",
        "712614": "船久保浩子", "712615": "清水谷竜華",
    "712601": "荒川憩",
    // IH-71/B-block
    "712711": "神代小蒔", "712712": "狩宿巴", "712713": "滝見春",
        "712714": "薄墨初美", "712715": "石戸霞",
    "712701": "藤原利仙",
    "712911": "小瀬川白望", "712912": "Aislinn Wishart", "712913": "鹿倉胡桃",
        "712914": "臼沢塞", "712915": "姉帯豊音",
    "713311": "片岡優希", "713312": "染谷まこ", "713313": "竹井久",
        "713314": "原村和", "713315": "宮永咲",
    "713321": "井上純", "713322": "沢村智紀", "713323": "国広一",
        "713324": "龍門渕透華", "713325": "天江衣",
    "713331": "津山睦月", "713332": "妹尾佳織", "713333": "蒲原智美",
        "713334": "東横桃子", "713335": "加治木ゆみ",
    "713341": "福路美穂子", "713342": "吉留未春", "713343": "文堂星夏",
        "713344": "深堀純代", "713345": "池田華菜",
    "713301": "南浦数絵", "713302": "夢乃マホ",
    "713613": "佐佐野莓",
    "713811": "上重漫",  "713812": "真瀬由子", "713813": "愛宕洋榎",
        "713814": "愛宕絹恵", "713815": "末原恭子",
    "714911": "本内成香", "714912": "桧森誓子", "714913": "岩馆摇杏",
        "714914": "真屋由暉子", "714915": "獅子原爽",
    "715211": "辻垣内智葉", "715212": "郝慧宇", "715213": "雀明華",
        "715214": "Megan Davin", "715215": "Nelly Virsaladze",
    // 99xxxx are temporarily uncatagorized names
    // should be kept in this map and deleted in all other places
    // when an accurate id is assigned
    "990001": "稲村杏果", "990002": "白築慕", "990003": "本藤悠慧",
        "990004": "瑞原はやり", "990005": "石飛閑無",
    "990006": "赤土晴絵", "990007": "新子望", "990008": "小鍛治健夜",
        "990009": "戒能良子", "990010": "藤田靖子",
    "990011": "三尋木咏", "990012": "野依理沙", "990013": "小禄心",
        "990014": "多久和李緒", "990015": "森脇曖奈",
    "990016": "藤白七実", "990017": "椋千尋", "990018": "永見知子",
        "990019": "野上葉子", "990020": "Lotta Niemann",
    "990021": "白築ナナ", "990022": "Ai Arctander", "990023": "松実露子"
};

var availNames = availIds.map(function(i) { return names[i]; });

var blabla = {
    "0":
    "<h3>帅哥你谁啊</h3>" +
    "<ul>" +
    "<li>可在同一桌上重复登场</li>" +
    "</ul>"
    ,
    "710111":
    "<h3>（*）照魔镜</h3>" +
    "<ul>" +
    "<li>能看穿对手的本质<ul>" +
        "<li>启动前需要一定的时间观察对手</li>" +
        "<li>发动后一定时间内无法再次观察同一对手</li></ul></li>" +
    "</ul>" +
    "<h3>（*）连续和了</h3>" +
    "<ul>" +
    "<li>和牌后的下一局极容易继续和牌，且点数略高于前一局</li>" +
    "<li>未和牌的下一局仍然极容易和牌，且点数相对较低</li>" +
    "<li>和牌速度与点数无关</li>" +
    "</ul>" +
    "<h3>（*）王者的余裕</h3>" +
    "<ul>" +
    "<li>手牌素点不大于前一局和牌素点收入时无法宣告和牌<ul>" +
        "<li>被头跳抢和，致使无实际收入时天梯重置</li>" +
        "<li>发生荒牌流局、各种途中流局、流局满贯时天梯重置</li></ul></li>" +
    "</ul>" +
    "<h3>（*）唧唧唧</h3>" +
    "<ul>" +
    "<li>?</li>" +
    "</ul>" +
    "<h3>（*）牌风</h3>" +
    "<ul>" +
    "<li>适合默听</li>" +
    "<li>容易做成678的三色同顺</li>" +
    "<li>时常形成纠结的多面听牌并刚好避开低目自摸</li>" +
    "</ul>" +
    "<h3>（*）感知</h3>" +
    "<ul>" +
    "<li>能够分辨出手中的铳牌</li>" +
    "</ul>"
    ,
    "710112":
    "<h3>（*）农家乐之打猎的</h3>" +
    "<ul>" +
    "<li>门前默听后可开始对一名对手进行瞄准</li>" +
    "<li>瞄准完成后固定牌型并保持默听，即可发起任意次数射击</li>" +
    "<li>被射击的对手进张会变顺，使得铳牌多余<ul>" +
        "<li>\"变顺\"包括摸入有效牌、摸入改良牌、遇到有效鸣牌机会</li>" +
        "<li>摸回打过的牌不属于\"变顺\"，作为特殊情况排除</li></ul></li>" +
    "<li>被射击的对手不存在使得铳牌多余的\"变顺\"可能时，会直接摸入铳牌</li>" +
    "</ul>"
    ,
    "710113":
    "<h3>农家乐之种田的</h3>" +
    "<ul>" +
    "<li>最终局配牌时会摸回之前每一局的首张弃牌（播种）<ul>" +
        "<li>播种超出13张时超出部分不计</li>" +
        "<li>播种当中同一种牌超出4张时超出部分不计</li></ul></li>" +
    "</ul>"
    ,
    "710114":
    "<h3>农家乐之钓鱼的</h3>" +
    "<ul>" +
    "<li>手牌中容易形成碰牌的机会</li>" +
    "<li>以明刻/明杠三副露后进张变好</li>" +
    "</ul>"
    ,
    "710115":
    "<h3>序盘支配</h3>" +
    "<ul>" +
    "<li>除自己外，全员配牌至少5向听</li>" +
    "</ul>" +
    "<h3>自动麻将机</h3>" +
    "<ul>" +
    "<li>每局都可以有意识地做到双立直</li>" +
    "<li>双立直后会在牌山末转角前摸到杠材</li>" +
    "<li>暗杠后和了牌会从末转角开始处连续出现</li>" +
    "<li>双立直暗杠和了后暗杠将中为杠里宝牌</li>" +
    "</ul>"
    ,
    "710411":
    "<h3>（*）好棒</h3>" +
    "<ul>" +
    "<li>牌感简直不能太棒，无挂胜有挂</li>" +
    "</ul>" +
    "<h3>（*）不飞</h3>" +
    "<ul>" +
    "<li>飞不飞？不飞<img src=\"qrc:///pic/icon/huaji.png\"/></li>" +
    "</ul>"
    ,
    "710414":
    "<h3>（*）ACE中的ACE</h3>" +
    "<ul>" +
    "<li>分数刷不够，根本停不下来</li>" +
    "</ul>" +
    "<h3>（*）束缚</h3>" +
    "<ul>" +
    "<li>配牌后可选择加上N番缚</li>" +
    "<li>束缚后和牌，之后出场的姬子将在同一局目拿到2N番钥匙</li>" +
    "<li>束缚后未能和牌，之后出场的姬子将在同一局目难以和牌，和也只有一番</li>" +
    "</ul>"
    ,
    "710415":
    "<h3>（*）连携</h3>" +
    "<ul>" +
    "<li>拿到钥匙的局目会以对应番数和牌，职业雀士也无法阻止</li>" +
    "</ul>"
    ,
    "712411":
    "<h3>龙王</h3>" +
    "<ul>" +
    "<li>容易摸到宝牌</li>" +
    "<li>他家摸不到宝牌</li>" +
    "<li>被他家能力绝对收集的牌不会成为宝牌</li>" +
    "<li>一旦舍弃宝牌，能力效果反转并持续到终局<ul>" +
        "<li>自己将摸不到宝牌，同时解除对他家的宝牌封锁</li></ul></li>" +
    "</ul>" +
    "<h3>阿知贺通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到菫的小动作</li>" +
    "</ul>"
    ,
    "712412":
    "<h3>暧牌收集</h3>" +
    "<ul>" +
    "<li>容易摸到暧色的牌<ul>" +
        "<li>越暧越容易摸到</li>" +
        "<li>其中最容易摸到万子和中</li>" +
        "<li>6p、7p、9p、9s的概率也很高，只比万子稍低一点</li>" +
        "<li>其余的饼子和索子根据红色的面积不同概率也不同（参考船Q的平板）</li></ul></li>" +
    "</ul>" +
    "<h3>阿知贺通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到菫的小动作</li>" +
    "</ul>"
    ,
    "712413":
    "<h3>锻神看了都说好</h3>" +
    "<ul>" +
    "<li>食三色和食一通做起来特别舒♀服</li>" +
    "</ul>" +
    "<h3>阿知贺通修技能</h3>" +
    "<ul>" +
    "<li>（*）能注意到菫的小动作</li>" +
    "</ul>"
    ,
    "712611":
    "<h3>未来视・进化</h3>" +
    "<ul>" +
    "<li>行动遇到分歧点时，可对各个未来分支进行预知。</li>" +
    "<li>未来视中的视角与现实中自己的视角相同，能看到的信息不多也不少。</li>" +
    "<li>未来分支中再次出现<i>二级分支</i>时按以下规则自动行动：<ul>" +
        "<li>出现鸣牌/食和机会时一律放过；</li>" +
        "<li>出现鸣牌后的打牌机会时随意打一张；</li>" +
        "<li>出现自摸和牌机会时宣告自摸并结束分支；</li>" +
        "<li>出现其它分歧点时什么都不做并结束分支。</li></ul></li>" +
    "<li>根据预知改变行动时，能力会出现一段CD。<ul>" +
        "<li>大体上，最终行动与最初想法差距越大，付出的CD代价就越大。</li>" +
        "<li>CD的单位是未来遇到的分歧点次数。</li>" +
        "<li>依次查看若干分支后，实际进入第n个分支时，产生的CD为<i>2(n-1)</i>次。</li>" +
        "<li>查看k个分支后，实际未进入其中任何分支时，产生的CD为<i>2k</i>次。</li>" +
        "<li>二级分支上的自动行动系免费赠送，不在CD代价之列。</li>" +
        "<li>一局内未等完的CD会延续到下一局。</li>" +
        "<li>例1：试拆12m见次巡入3m，改拆78s：k = 1，CD = 2</li>" +
        "<li>例2：试拆12m见次巡入无效牌，仍拆12m：n = 1，CD = 0</li>" +
        "<li>例3：见对手自摸，鸣牌错开：二级分支自动，CD = 0</li>" +
        "<li>例4：见对手自摸，对比碰与杠，选后者：n = 2，CD = 2</li>" +
        "<li>例5：试默听见自摸，试立直见一发，遂立直：n = 2，CD = 2</li>" +
        "<li>例6：试默听见自摸，试立直见错开，遂默听：n = 1，CD = 0</li>" +
        "<li>例7：试默听见自摸，试立直见错开还自摸，遂立直：n = 2，CD = 2</li>" +
        "<li>例8：试默听无自摸，试立直见错开而自摸，遂立直：n = 2，CD = 2</li>" +
        "<li>例9：试默听无自摸，试立直当然仍无自摸，遂默听：n = 1，CD = 0</li>" +
        "<li>例10：试攻见铳，遂兜牌 -> k = 1，CD = 2</li>" +
        "<li>例11：试攻见铳，试兜牌铳另家，另兜其牌：k = 2，CD = 4</li>" +
        "<li>例12：试送铳，连试四张而成 -> n = 4，CD = 6</li></ul></li>" +
    "<li><i>牌山不变定律</i>：对于所有未来分支，牌山相同。<ul>" +
        "<li>一张牌在牌山中的绝对位置不随世界线的变动而变动。</li>" +
        "<li>岭上牌以及各种指示牌也不例外。</li></ul></li>" +
    "<li>（*）代价<ul>" +
        "<li>使用未来视会消耗体力，长时间停用则慢速恢复体力</li>" +
        "<li>随着体力降低，视线会逐渐变得模糊</li>" +
        "<li>体力耗尽将导致比赛后住院</li></ul></li>" +
    "</ul>" +
    "<h3>（*）未来视・二巡</h3>" +
    "<ul>" +
    "<li>比起一巡，多一次在未来中摸打的机会，但体力消耗与CD代价也随之变大</li>" +
    "</ul>" +
    "<h3>（*）未来视・三巡</h3>" +
    "<ul>" +
    "<li>二巡的延续，共有三次在未来中摸打的机会，同时体力也会尽乎耗尽</li>" +
    "</ul>" +
    "<h3>信念</h3>" +
    "<ul>" +
    "<li>自从当了ACE，腰不酸了，腿不痛了，配牌和进张都变好了。</li>" +
    "</ul>"
    ,
    "712613":
    "<h3>不明觉厉</h3>" +
    "<ul>" +
    "<li>虽然不是很明白，但觉得好厉害的样子</li>" +
    "</ul>"
    ,
    "712615":
    "<h3>（*）从小R量不科学</h3>" +
    "<ul>" +
    "<li>平均获得素点关西首屈一指</li>" +
    "</ul>" +
    "<h3>（*）枕神</h3>" +
    "<ul>" +
    "<li>配牌开始前可以召唤怜</li>" +
    "<li>召唤成功后，将会看到本局的最佳打法，能见即能和</li>" +
    "<li>召唤需要消耗储存在膝枕中的能量</li>" +
    "<li>怜没有住院的情况下能量可在休息时通过膝枕补回</li>" +
    "<li>怜本体在场时无法进行召唤</li>" +
    "</ul>"
    ,
    "712713":
    "<h3>（*）武功再高</h3>" +
    "<ul>" +
    "<li>一番撂倒</li>" +
    "</ul>"
    ,
    "712714":
    "<h3>鬼门</h3>" +
    "<ul>" +
    "<li>做北家时将鬼门牌置于鬼门方位，手牌将向里鬼门进展。</li>" +
    "</ul>"
    ,
    "712715":
    "<h3>（*）Defensiveな Style</h3>" +
    "<ul>" +
    "<li>常态下全守打法的顺位期望优于普通打法</li>" +
    "</ul>" +
    "<h3>形代</h3>" +
    "<ul>" +
    "<li>降神启动进攻模式，该模式会一直持续到终局</li>" +
    "<li>进攻模式下自己的数牌皆为一色，同时他家进入该色的绝一门状态</li>" +
    "<li>牌局进行到深山时绝一门的支配力下降</li>" +
    "</ul>"
    ,
    "712915":
    "<h3>六曜</h3>" +
    "<ul>" +
    "<li>先胜（*）</li>" +
    "<li>友引<ul>" +
        "<li>裸单骑则自摸和</li></ul></li>" +
    "<li>先负<ul>" +
        "<li>被他家先制立直后，门前未听状态下进张变好</li>" +
        "<li>追立直后先制者立即摸铳</li></ul></li>" +
    "<li>佛灭（*）</li>" +
    "<li>大安（*）</li>" +
    "<li>赤口（*）</li>" +
    "</ul>"
    ,
    "713311":
    "<h3>东风之神</h3>" +
    "<ul>" +
    "<li>容易成为起家</li>" +
    "<li>这场比赛没有东二局<ul>" +
        "<li>如果不小心有了东二局，东场好歹还是东场</li></ul></li>" +
    "</ul>"
    ,
    "713312":
    "<h3>TODO</h3>" +
    "<ul>" +
    "<li>TODO</li>" +
    "</ul>"
    ,
    "713313":
    "<h3>（*）人生恶听</h3>" +
    "<ul>" +
    "<li>听牌时<u><i>舍弃两面或以上的良形</i></u>而选择愚形时容易和牌<ul>" +
        "<li>并且容易中里宝牌</li>" +
        "<li>不知为什么多面听的机会超乎常人</li></ul></li>" +
    "<li>故意去听被他家能力所收集的牌时容易和牌</li>" +
    "<li>故意破坏手牌役种时容易通过一发和里宝牌提高打点</li>" +
    "<li>莫名其妙留住的孤张宝牌容易成为关键牌</li>" +
    "<li>坏的都是好的，好的还是好的<ul>" +
        "<li>愚形容易和牌不代表良形不容易和牌——良形照样容易和牌</li>" +
        "<li>乖戾过头也是要吃苦头的，不过一路都是这么过来的</li></ul></li>" +
    "</ul>"
    ,
    "713314":
    "<h3>这太不科学了</h3>" +
    "<ul>" +
    "<li>容易做成七对子</li>" +
    "<li>（*）对运势流能力免疫</li>" +
    "<li>（*）对隐身能力免疫</li>" +
    "</ul>" +
    "<h3>信念</h3>" +
    "<ul>" +
    "<li>关键时刻牌运会变好</li>" +
    "</ul>"
    ,
    "713315":
    "<h3>（*）正负零</h3>" +
    "<ul>" +
    "<li>意识可以支配整个空间</li>" +
    "<li>容易调整出+4600到+5500之间的终局点数</li>" +
    "</ul>" +
    "<h3>（*）牌风</h3>" +
    "<ul>" +
    "<li>普通的麻将，普通的杠，普通的岭上，普通的开花</li>" +
    "<li>不会通过开杠为自己增加宝牌</li>" +
    "<li>不容易中里宝牌</li>" +
    "<li>容易摸到西风</li>" +
    "</ul>" +
    "<h3>（*）大魔王</h3>" +
    "<ul>" +
    "<li>自带灵压雷达</li>" +
    "<li>可远程对能力侦测类道具造成永久性物理破坏</li>" +
    "</ul>"
    ,
    "713301":
    "<h3>好暧和的风</h3>" +
    "<ul>" +
    "<li>南入后牌运变好</li>" +
    "<li>（*）今年的规则没有不利</li>" +
    "</ul>"
    ,
    "713302":
    "<h3>（*）小魔王</h3>" +
    "<ul>" +
    "<li>每局可复制一次周围在场者的能力，持续一局</li>" +
    "<li>终局结算前无法再次山寨复制过的能力者</li>" +
    "<li>部分能力无法在与本尊同场时复制，例如：<ul>" +
        "<li>绝一门、海底捞月、宝牌封锁等将自己与他三家极端对立的能力</li>" +
        "<li>未来视等因复制导致因果悖论的能力</li></ul></li>" +
    "<li>部分能力即使本尊不在场也无法复制，例如：<ul>" +
        "<li>正负零、SM连携、收获之时、运势分配等不能单看一局的能力</li>" +
        "<li>记忆宫殿、枕神、神威等需要特殊准备的能力</li></ul></li>" +
    "<li>东风之神等需要食物的能力复制后仍然需要相应的食物</li>" +
    "<li>风神、爆发、暖牌等能力复制后牌山资源会与同场本尊以同等强度争抢</li>" +
    "<li>两个隐身者之间同样无法感觉到对方存在</li>" +
    "<li>治水、山神等能力复制后力场会与同场本尊叠加，控场强度翻倍</li>" +
    "<li>照魔镜只能照出复制能力本身，而照不出当前被复制者是谁</li>" +
    "</ul>"
    ,
    "713811":
    "<h3>爆发</h3>" +
    "<ul>" +
    "<li>随机爆发，爆发效果可持续到终局</li>" +
    "<li>爆发后极容易摸到6、7、8、9的数牌；摸到6、7、8、9的概率依次递增</li>" +
    "</ul>" +
    "<h3>（*）姬松通修技能</h3>" +
    "<ul>" +
    "<li>能注意到咲的小动作</li>" +
    "</ul>"
    ,
    "713813":
    "<h3>（*）宙斯盾</h3>" +
    "<ul>" +
    "<li>除非故意，永不放铳</li>" +
    "<li>可大致察觉他家手牌进展与打点预期</li>" +
    "</ul>" +
    "<h3>（*）姬松通修技能</h3>" +
    "<ul>" +
    "<li>能注意到咲的小动作</li>" +
    "</ul>"
    ,
    "713815":
    "<h3>超速攻</h3>" +
    "<ul>" +
    "<li>配牌适合速攻时容易在早巡鸣到牌</li>" +
    "<li>同时他家会“不知为什么有点迟钝”</li>" +
    "</ul>" +
    "<h3>（*）姬松通修技能</h3>" +
    "<ul>" +
    "<li>能注意到咲的小动作</li>" +
    "</ul>"
    ,
    "714914":
    "<h3>（*）每日一次</h3>" +
    "<ul>" +
    "<li>每天可向对手申请一次使用左手立直<ul>" +
        "<li>你问支持不支持，她们能说不支持吗？</li></ul></li>" +
    "<li>然后就是一次闪耀的自摸</li>" +
    "</ul>"
    ,
    "714915":
    "<h3>五色云</h3>" +
    "<ul>" +
    "<li>每局开始前可释放任意朵云</li>" +
    "<li>各颜色的云效果如下：<ul>" +
            "<li>青云：尚未实现</li>" +
            "<li>黄云：尚未实现</li>" +
            "<li>赤云：可对自家或其它三家施放，被施放者一局内摸不到字牌</li>" +
            "<li>白云：使用后一局内配牌和进张偏向索子</li>" +
            "<li>黑云：尚未实现</li></ul></li>" +
    "<li>云是一次性用品，用掉以后需要很长的时间才能补充回来</li>" +
    "</ul>" +
    "<h3>神威</h3>" +
    "<ul>" +
    "<li>局中可在任意时机施放神威</li>" +
    "<li>各神威效果如下：<ul>" +
            "<li>瘟神威：听牌后向对手施放诅咒，使其连续摸上铳牌。<ul>" +
                "<li>效果持续1局，换听后仍然有效。</li></ul></li>" +
            "<li>海神威：染红牌河与牌山<ul>" +
                "<li>自己的进张全为万子/红中；</li>" +
                "<li>大量的万子成为他家的不要牌；</li>" +
                "<li>新的杠宝牌指示牌和里宝牌指示牌也会成为万子；</li>" +
                "<li>效果持续1局，一直作用到山里没有万子为止。</li></ul></li>" +
            "<li>蛇神威：（*）保护自己不受他人能力影响</li>" +
            "<li>鸟神威：招来手牌中已有的除自风以外的风牌。<ul>" +
                "<li>效果持续2局，</li></ul></li>" +
            "<li>淫神威：（*）对人施放，使其口嫌体正直，欲罢不能</li></ul></li>" +
    "<li>神威是一次性用品，用掉以后需要很长的时间才能补充回来</li>" +
    "</ul>"
    ,
    "715211":
    "<h3>（*）黑社会拔刀爷</h3>" +
    "<ul>" +
    "<li>可以砍了对手</li>" +
    "</ul>"
    ,
    "715212":
    "<h3>麻\"将\"</h3>" +
    "<ul>" +
    "<li>容易以国标麻将的打法摸到好牌</li>" +
    "<li>无法宣告在国标规则下不足8番的错和<ul>" +
        "<li>明暗杠计5番</li>" +
        "<li>宝牌指示牌计入绝张判定</li></ul></li>" +
    "<li>无法立直</li>" +
    "<li>（*）对记忆类能力有干涉作用</li>" +
    "</ul>"
    ,
    "990001":
    "<h3>直向手</h3>" +
    "<ul>" +
    "<li>容易摸到对子和暗刻</li>" +
    "<li>（*）对读牌类能力有一定的免疫作用</li>" +
    "</ul>"
    ,
    "990002":
    "<h3>自古南三出奇迹</h3>" +
    "<ul>" +
    "<li>容易在终前局与最终局逆转<ul>" +
        "<li>凹大牌/速攻连庄自选</li></ul></li>" +
    "</ul>" +
    "<h3>牌风</h3>" +
    "<ul>" +
    "<li>容易做成平和、一杯、三色、全带</li>" +
    "<li>与此同时手牌不失灵活性，可随机应变而不拘泥于以上役种</li>" +
    "<li>（*）容易听1s</li>" +
    "<li>听牌为1s时容易自摸</li>" +
    "<li>见逃低目振听状态下容易高目和牌</li>" +
    "</ul>" +
    "<h3>感知</h3>" +
    "<ul>" +
    "<li>能够察觉到对手拆掉对子的向听倒退</li>" +
    "</ul>"
    ,
    "990003":
    "<h3>疯狂门混</h3>" +
    "<ul>" +
    "<li>来吧！开启混一色无限洗脑循环</li>" +
    "</ul>"
    ,
    "990004":
    "<h3>（*）好早</h3>" +
    "<ul>" +
    "<li>某些部位的确很早</li>" +
    "</ul>"
    ,
    "990008":
    "<h3>（*）不明植物</h3>" +
    "<ul>" +
    "<li>虽然不是很明白，但是会爆出一堆植物</li>" +
    "</ul>"
    ,
    "990011":
    "<h3>（*）布吉岛</h3>" +
    "<ul>" +
    "<li>布吉岛，啥也布吉岛</li>" +
    "<li>带上可以弯曲的条形猫，胜率会提高</li>" +
    "</ul>"
    ,
    "990017":
    "<h3>（*）魔物同学</h3>" +
    "<ul>" +
    "<li>魔物同学，你的思想很危险啊</li>" +
    "<li>43话又被奶了……</li>" +
    "</ul>" +
    "<h3>（*）不是宠物</h3>" +
    "<ul>" +
    "<li>有一定机率临场骑马</li>" +
    "</ul>"
    ,
    "990020":
    "<h3>（*）Schadenzauber</h3>" +
    "<ul>" +
    "<li>输了也没关系，这个时候把对手监禁play就行了</li>" +
    "<li>对隐身能力免疫</li>" +
    "</ul>"
    ,
    "990023":
    "<h3>（*）……</h3>" +
    "<ul>" +
    "<li>随便一句话就能让人获得能力</li>" +
    "</ul>"
};


