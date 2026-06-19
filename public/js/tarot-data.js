// ========== 塔罗牌数据 - 78张完整版 ==========

const TAROT_DATA = {
  // ---- 大阿尔卡纳 (22张) ----
  major: [
    {
      id: 0, name: "愚人", nameEn: "The Fool",
      keywords: "开始、冒险、天真、潜力",
      upright: "新的开始、冒险精神、纯粹的心、无限可能",
      reversed: "鲁莽行事、不负责任、风险过高、停滞不前",
      description: "愚人站在悬崖边缘，行囊中仅有少量必需品，仰望天空义无反顾地迈步。他代表着纯真的开始，对未知的旅程充满期待。这张牌鼓励你拥抱新的冒险，相信自己的直觉，勇敢踏上未知的道路。"
    },
    {
      id: 1, name: "魔术师", nameEn: "The Magician",
      keywords: "能力、创造、资源、自信",
      upright: "技能纯熟、创造力迸发、自信满满、把握时机",
      reversed: "才能浪费、欺诈、操纵、潜力未开发",
      description: "魔术师立于桌前，四元素（圣杯、权杖、宝剑、星币）尽在掌握。他象征着将想法转化为现实的能力。当这张牌出现时，说明你拥有所需的一切资源来实现目标。"
    },
    {
      id: 2, name: "女祭司", nameEn: "The High Priestess",
      keywords: "直觉、潜意识、智慧、神秘",
      upright: "内心声音、直觉指引、深层智慧、神秘知识",
      reversed: "表面化、直觉受阻、隐藏信息、拒绝聆听",
      description: "女祭司坐在两根柱子之间，手持卷轴，身后是神秘的帷幕。她代表潜意识的智慧和内在的知识。她提醒你要聆听内心的声音，相信自己的直觉。"
    },
    {
      id: 3, name: "女皇", nameEn: "The Empress",
      keywords: "丰饶、自然、温柔、繁荣",
      upright: "丰收、母性关怀、物质丰盛、创造力绽放",
      reversed: "依赖他人、创造力受阻、家庭问题、情感空虚",
      description: "女皇坐在舒适的宝座上，周围是茂盛的大自然。她象征着丰饶、母性和大地的滋养。她出现时预示着物质和情感上的丰收。"
    },
    {
      id: 4, name: "皇帝", nameEn: "The Emperor",
      keywords: "权威、秩序、稳定、保护",
      upright: "领导力、纪律、父亲形象、稳固的结构",
      reversed: "专制、固执、缺乏纪律、权力滥用",
      description: "皇帝端坐于宝座之上，全副武装，象征着至高的权威和秩序。他代表着稳定、结构和保护。这张牌提醒你要建立规则和边界。"
    },
    {
      id: 5, name: "教皇", nameEn: "The Hierophant",
      keywords: "传统、信仰、教育、引导",
      upright: "传统智慧、知识传授、婚姻/盟约、心灵导师",
      reversed: "教条主义、叛逆、非传统、自我探索",
      description: "教皇坐在神殿前，为信徒祝福。他代表传统价值观、教育和精神引导。这张牌暗示你需要寻求智者的建议或遵循传统的方式。"
    },
    {
      id: 6, name: "恋人", nameEn: "The Lovers",
      keywords: "爱情、选择、和谐、价值观",
      upright: "真爱、关键选择、和谐关系、价值观统一",
      reversed: "关系破裂、价值观冲突、犹豫不决、不和谐",
      description: "恋人牌上，亚当和夏娃在天使的祝福下赤诚相对。这张牌代表爱情、和谐和重要的选择。它关乎遵循内心的真实价值。"
    },
    {
      id: 7, name: "战车", nameEn: "The Chariot",
      keywords: "意志、胜利、决心、征服",
      upright: "强烈意志、克服困难、自信前行、最终胜利",
      reversed: "缺乏自律、方向迷失、侵略性、挫败",
      description: "战士驾驶战车，两匹马（意志与情感）方向一致向前冲。这张牌代表通过强大的意志力克服挑战，取得胜利。"
    },
    {
      id: 8, name: "力量", nameEn: "Strength",
      keywords: "勇气、内在力量、耐心、慈悲",
      upright: "内心强大、以柔克刚、勇气、耐心",
      reversed: "软弱、自我怀疑、脆弱、缺乏自信",
      description: "一位女子温柔地合上狮子的嘴。这不是蛮力，而是内在的勇气和温和的力量。她代表用慈悲和耐心驯服内心的野兽。"
    },
    {
      id: 9, name: "隐士", nameEn: "The Hermit",
      keywords: "内省、智慧、独处、指引",
      upright: "自我反省、寻求真理、独立思考、导师出现",
      reversed: "孤独、迷失方向、逃避社交、固执己见",
      description: "隐士独自站在山顶，提灯照亮前路。他代表内省和寻求智慧。有时需要远离外界的喧嚣，才能找到内心的光明。"
    },
    {
      id: 10, name: "命运之轮", nameEn: "Wheel of Fortune",
      keywords: "变化、循环、命运、机遇",
      upright: "好运降临、命运转折、新机会、周期变化",
      reversed: "坏运气、计划受阻、失控、抗拒改变",
      description: "命运之轮永恒转动，万物皆在变化之中。这张牌代表生命中不可预测的变化和循环。无论是好运还是厄运，都不会永远持续。"
    },
    {
      id: 11, name: "正义", nameEn: "Justice",
      keywords: "公正、诚实、因果、平衡",
      upright: "公平裁决、真相大白、因果报应、法律事务",
      reversed: "不公正、偏袒、逃避责任、欺骗",
      description: "正义女神手持天平和剑，目光坚定。她代表公正、真相和因果报应。你的行为将产生相应的结果。"
    },
    {
      id: 12, name: "倒吊人", nameEn: "The Hanged Man",
      keywords: "牺牲、暂停、新视角、放下",
      upright: "以退为进、换位思考、自愿牺牲、顿悟",
      reversed: "拖延、无谓牺牲、抗拒放手、失去耐心",
      description: "倒吊人被倒挂在树上，姿态安详。他代表自愿的牺牲和暂停，以获得新的视角。有时候停下来反而能看得更清楚。"
    },
    {
      id: 13, name: "死神", nameEn: "Death",
      keywords: "终结、转变、新生、放下",
      upright: "结束旧阶段、重大转变、新生、放手",
      reversed: "抗拒改变、停滞、恐惧未知、顽固",
      description: "死神骑着白马，象征着生命中不可避免的结束和新开始。不要害怕这张牌——它很少代表物理死亡，更多的是旧事物的终结和转变。"
    },
    {
      id: 14, name: "节制", nameEn: "Temperance",
      keywords: "平衡、中庸、耐心、调和",
      upright: "适度、平衡、融合、耐心等待",
      reversed: "极端、失调、没有耐心、过度",
      description: "天使将水在两个杯子之间倒来倒去，寻找完美的平衡。这张牌代表中庸之道、耐心和适当的调和。"
    },
    {
      id: 15, name: "恶魔", nameEn: "The Devil",
      keywords: "束缚、欲望、物质、成瘾",
      upright: "沉迷欲望、物质主义、束缚依赖、负面模式",
      reversed: "挣脱束缚、觉醒、重获自由、放下执念",
      description: "恶魔坐在宝座上，一对被锁链束缚的人站在前方。但实际上锁链很松，他们可以挣脱。这张牌代表物质欲望的束缚和内心的恶魔。"
    },
    {
      id: 16, name: "高塔", nameEn: "The Tower",
      keywords: "剧变、崩塌、觉醒、重建",
      upright: "突发变故、信念崩塌、震惊、重新开始",
      reversed: "避免灾难、抗拒变化、延迟危机",
      description: "高塔被闪电击中，火焰四起，两个人从塔上坠落。这张牌代表突然的变故、旧有结构的崩塌。虽然痛苦，却为重建创造了可能。"
    },
    {
      id: 17, name: "星星", nameEn: "The Star",
      keywords: "希望、灵感、平静、愈合",
      upright: "希望重燃、灵感涌现、心灵愈合、平静祥和",
      reversed: "失去希望、灵感枯竭、绝望、自我怀疑",
      description: "女子跪在岸边，将水倒入池塘和大地，头顶闪耀着七颗星辰。这张牌代表着希望、疗愈和灵感的到来。"
    },
    {
      id: 18, name: "月亮", nameEn: "The Moon",
      keywords: "恐惧、幻觉、潜意识、不安",
      upright: "迷惑不安、潜意识浮现、直觉、梦境",
      reversed: "恐惧消退、迷雾散开、看清真相、情绪稳定",
      description: "月光下，狼对着月亮吠叫，龙虾从水中爬出。这张牌代表恐惧、幻觉和潜意识中的不安。提醒你面对内心的恐惧。"
    },
    {
      id: 19, name: "太阳", nameEn: "The Sun",
      keywords: "快乐、成功、活力、童真",
      upright: "成功喜悦、充满活力、成就达成、乐观正面",
      reversed: "暂时沮丧、快乐被遮蔽、计划延迟",
      description: "阳光普照，一个孩子骑着白马在向日葵花田里欢快奔跑。这张牌是塔罗牌中最积极的牌之一，代表快乐、成功和生命力。"
    },
    {
      id: 20, name: "审判", nameEn: "Judgement",
      keywords: "觉醒、重生、审判、召唤",
      upright: "内心觉醒、自我反省、重新评估、新生",
      reversed: "自我否定、拒绝反省、错过机会",
      description: "天使吹响号角，唤醒沉睡的亡灵接受审判。这张牌代表内心的觉醒、自我反省和获得新生的机会。"
    },
    {
      id: 21, name: "世界", nameEn: "The World",
      keywords: "完成、完整、圆满、成就",
      upright: "目标达成、旅程圆满、融合统一、成就感",
      reversed: "未完成、停滞、目标缺失、不完整",
      description: "舞者被花环环绕，四角有四个活物（代表四元素）。这张牌代表着周期的完成、目标的达成和灵魂的圆满。"
    }
  ],

  // ---- 权杖组 (Wands) ----
  wands: [
    {
      id: 100, name: "权杖王牌", nameEn: "Ace of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "创造、开始、灵感、能量",
      upright: "新项目、创造火花、创业、热情迸发",
      reversed: "拖延、创意枯竭、缺乏动力、错误的开始",
      description: "一只手从云中伸出，握着一根发芽的权杖。这代表着新的创意、灵感和事业的开始。充满创造的能量等待释放。"
    },
    {
      id: 101, name: "权杖二", nameEn: "Two of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "规划、决策、未来、探索",
      upright: "规划未来、做出选择、扩张视野",
      reversed: "恐惧改变、计划受阻、缺乏规划",
      description: "一位商人站在城堡上，手持地球仪眺望远方。这张牌代表规划、决策和对未来的探索。"
    },
    {
      id: 102, name: "权杖三", nameEn: "Three of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "扩展、远见、探索、贸易",
      upright: "事业扩展、远见卓识、海外机遇、稳步前进",
      reversed: "阻碍延迟、视野狭隘、缺乏耐心",
      description: "商人站在悬崖边，眺望远方航行的船只。这张牌代表事业扩展、远见和探索新的可能性。"
    },
    {
      id: 103, name: "权杖四", nameEn: "Four of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "庆祝、和谐、家园、成就",
      upright: "庆祝成功、家庭和谐、乔迁、团聚",
      reversed: "庆祝取消、缺乏归属、不安定",
      description: "四根权杖撑起花环，人们在远处欢庆。这张牌代表庆祝、和谐和成就的喜悦。"
    },
    {
      id: 104, name: "权杖五", nameEn: "Five of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "竞争、冲突、挑战、混乱",
      upright: "激烈竞争、意见分歧、挑战、混乱",
      reversed: "避免冲突、和解、合作",
      description: "五个人挥舞权杖互相争斗。这张牌代表着竞争、冲突和挑战，但也是激励进步的力量。"
    },
    {
      id: 105, name: "权杖六", nameEn: "Six of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "胜利、认可、荣誉、成功",
      upright: "获得认可、公众胜利、自信、好消息",
      reversed: "失败、缺乏认可、骄傲自满",
      description: "胜者骑着马穿过欢呼的人群，手持权杖头戴桂冠。这张牌代表胜利、社会认可和成功。"
    },
    {
      id: 106, name: "权杖七", nameEn: "Seven of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "防御、坚持、挑战、勇气",
      upright: "坚守立场、勇敢面对、不屈不挠、竞争",
      reversed: "放弃立场、不堪一击、疲惫",
      description: "一人站在高处，手持权杖抵挡下方的攻击。这张牌代表捍卫自己的立场、坚持和勇气。"
    },
    {
      id: 107, name: "权杖八", nameEn: "Eight of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "速度、行动、进展、消息",
      upright: "快速发展、行动推进、好消息到来、旅行",
      reversed: "延迟、减速、计划暂停、沟通不畅",
      description: "八根权杖在空中飞速飞行。这张牌代表着快速的进展、行动力的爆发和好消息的到来。"
    },
    {
      id: 108, name: "权杖九", nameEn: "Nine of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "坚韧、毅力、最后防线、警惕",
      upright: "坚持不懈、警惕、接近终点、韧性",
      reversed: "筋疲力尽、放弃、失去动力",
      description: "受伤的人手持权杖，身后立着八根权杖，面带警惕。代表坚韧不拔的精神，即使疲惫也要坚持到最后。"
    },
    {
      id: 109, name: "权杖十", nameEn: "Ten of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "负担、压力、责任、过度",
      upright: "负担过重、压力山大、承担太多责任",
      reversed: "释放压力、分担任务、放下包袱",
      description: "一人费力地抱着十根权杖前行。这张牌代表过重的负担和压力，提醒你需要分担任务。"
    },
    {
      id: 110, name: "权杖侍从", nameEn: "Page of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "探索、热情、消息、自由",
      upright: "新消息、探索精神、热情、自由灵魂",
      reversed: "缺乏方向、热情消退、不成熟",
      description: "年轻的侍从手持权杖，眺望远方。代表着探索的热情、新的消息和自由的精神。"
    },
    {
      id: 111, name: "权杖骑士", nameEn: "Knight of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "冒险、冲动、热情、旅行",
      upright: "冒险行动、充满热情、追求目标、旅行",
      reversed: "冲动鲁莽、半途而废、急躁",
      description: "骑士全副武装骑在马上，高举权杖，充满冒险的热情。代表充满能量的行动和追求。"
    },
    {
      id: 112, name: "权杖王后", nameEn: "Queen of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "自信、热情、魅力、果断",
      upright: "自信笃定、魅力四射、果敢决断、温暖",
      reversed: "嫉妒、热情消退、缺乏自信",
      description: "王后坐在宝座上，手持向日葵权杖，身边有黑猫相伴。代表自信、魅力和果断的领导力。"
    },
    {
      id: 113, name: "权杖国王", nameEn: "King of Wands",
      suit: "权杖", suitEn: "Wands",
      keywords: "领导、远见、企业家、荣誉",
      upright: "天生领袖、远见卓识、创业精神、威严",
      reversed: "专横跋扈、要求过高、缺乏远见",
      description: "国王端坐宝座，权杖开花，蜥蜴相伴。代表企业家精神、领导力和远见。"
    }
  ],

  // ---- 圣杯组 (Cups) ----
  cups: [
    {
      id: 200, name: "圣杯王牌", nameEn: "Ace of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "爱、情感、直觉、开始",
      upright: "新恋情、情感充盈、灵感、喜悦",
      reversed: "情感空虚、爱被阻隔、压抑感受",
      description: "一只手从云中托出圣杯，杯中泉水涌出，鸽子衔着圣饼降临。代表爱的开始、情感的充盈和灵性的觉醒。"
    },
    {
      id: 201, name: "圣杯二", nameEn: "Two of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "结合、吸引、爱情、伙伴",
      upright: "恋爱、深厚友谊、合作关系、心灵相通",
      reversed: "关系破裂、分离、不平衡、沟通不良",
      description: "一男一女举杯相向，头顶双蛇杖。这张牌象征爱情、友谊和深刻的联结。"
    },
    {
      id: 202, name: "圣杯三", nameEn: "Three of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "友谊、庆祝、社交、欢乐",
      upright: "姐妹情深、庆祝聚会、欢乐时光、艺术创作",
      reversed: "过度放纵、三人行矛盾、社交孤立",
      description: "三位女子举杯共舞，庆祝丰收。这张牌代表了友谊、庆祝和欢乐的社交活动。"
    },
    {
      id: 203, name: "圣杯四", nameEn: "Four of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "沉思、不满、厌倦、内省",
      upright: "厌倦现状、沉思冥想、错失机会、无感",
      reversed: "新机会、觉醒、行动、告别抑郁",
      description: "一人坐在树下，面前有三个圣杯，天上递来的第四个圣杯却视而不见。代表对现状的不满和沉思。"
    },
    {
      id: 204, name: "圣杯五", nameEn: "Five of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "失落、悲伤、遗憾、失望",
      upright: "失去与悲伤、后悔、执着于失去、失望",
      reversed: "接受、原谅、向前看、重新开始",
      description: "黑衣之人低头注视三个倒下的圣杯，身后两个圣杯仍然站立。代表失落和悲伤，但提醒你仍然拥有希望。"
    },
    {
      id: 205, name: "圣杯六", nameEn: "Six of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "怀旧、回忆、童年、天真",
      upright: "童年回忆、怀旧之情、故人重逢、纯真",
      reversed: "活在过去、无法成长、不愿放手",
      description: "两个孩子在一座老宅前，其中一个将圣杯递给另一个。代表怀旧、童年回忆和纯真的时光。"
    },
    {
      id: 206, name: "圣杯七", nameEn: "Seven of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "幻想、选择、幻觉、欲望",
      upright: "白日梦、太多选择、幻想、自欺欺人",
      reversed: "认清现实、做出选择、脚踏实地",
      description: "七个圣杯漂浮在云端，各自装着不同的东西。代表幻想、许多不确定的选择，需要你分辨真实与虚幻。"
    },
    {
      id: 207, name: "圣杯八", nameEn: "Eight of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "离开、放弃、寻找、转变",
      upright: "告别过去、追寻更高目标、失望离开",
      reversed: "原地踏步、害怕改变、迷茫",
      description: "一人背对堆叠的八个圣杯，在月光下走向荒山。代表放弃现有的一切，去追寻更高层次的精神满足。"
    },
    {
      id: 208, name: "圣杯九", nameEn: "Nine of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "满足、愿望、舒适、成功",
      upright: "愿望成真、满足幸福、梦想实现",
      reversed: "不满足、物质至上、空虚感",
      description: "一人满足地坐在椅子上，背后九个圣杯。这张牌被称为「愿望牌」，代表梦想成真和内心的满足。"
    },
    {
      id: 209, name: "圣杯十", nameEn: "Ten of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "幸福、家庭、和谐、圆满",
      upright: "家庭幸福、和谐美满、心灵满足、完美爱情",
      reversed: "家庭问题、理想破灭、关系紧张",
      description: "彩虹上有十个圣杯，一对夫妻和两个孩子快乐地生活。这张牌代表家庭的幸福、情感的圆满。"
    },
    {
      id: 210, name: "圣杯侍从", nameEn: "Page of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "创意、直觉、消息、敏感",
      upright: "创意灵感、直觉、新消息、探索情感",
      reversed: "情感不成熟、创意枯竭、逃避",
      description: "年轻的侍从好奇地看着圣杯中跃出的鱼。代表创意的灵感、直觉和情感的消息。"
    },
    {
      id: 211, name: "圣杯骑士", nameEn: "Knight of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "浪漫、追求、理想、邀请",
      upright: "浪漫追求、理想主义、邀请、艺术创作",
      reversed: "不切实际、嫉妒、虚幻爱情",
      description: "骑士悠闲地骑马行进，手持圣杯。代表浪漫的追求、理想的召唤和充满美感的邀请。"
    },
    {
      id: 212, name: "圣杯王后", nameEn: "Queen of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "同理心、关怀、直觉、情感",
      upright: "富有同情心、直觉敏锐、情感滋养、温柔",
      reversed: "情感压抑、过度敏感、自我牺牲",
      description: "王后凝望华丽的圣杯，宝座置于水边。代表同理心、关怀他人和深厚的情感智慧。"
    },
    {
      id: 213, name: "圣杯国王", nameEn: "King of Cups",
      suit: "圣杯", suitEn: "Cups",
      keywords: "情感平衡、智慧、成熟、慈悲",
      upright: "情绪稳定、富有智慧、慈悲为怀、成熟",
      reversed: "情绪失控、冷酷、双重标准",
      description: "国王端坐于风暴中的宝座，手中的圣杯和表情依然平静。代表情感的成熟和深层的智慧。"
    }
  ],

  // ---- 宝剑组 (Swords) ----
  swords: [
    {
      id: 300, name: "宝剑王牌", nameEn: "Ace of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "真理、理智、突破、清晰",
      upright: "清晰思维、突破性见解、真理、决心",
      reversed: "混乱、误解、想法受阻、不公正",
      description: "一只手握住宝剑，剑尖穿过王冠。代表清晰的思维、真理和突破性的认知。"
    },
    {
      id: 301, name: "宝剑二", nameEn: "Two of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "抉择、僵局、逃避、平衡",
      upright: "难以抉择、故意回避、内心矛盾、僵局",
      reversed: "信息过载、做出选择、面对事实",
      description: "蒙眼女子手持两把交叉的宝剑，坐在水边。代表需要做出艰难的决定，却选择逃避。"
    },
    {
      id: 302, name: "宝剑三", nameEn: "Three of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "心碎、悲伤、痛苦、背叛",
      upright: "心痛、分离、背叛、伤心的消息",
      reversed: "走出伤痛、疗愈、释怀、宽恕",
      description: "三把剑刺穿一颗心，背景是阴云和雨。代表心碎、悲伤和情感上的痛苦。"
    },
    {
      id: 303, name: "宝剑四", nameEn: "Four of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "休息、恢复、冥想、休养",
      upright: "休息充电、冥想沉思、康复、放松",
      reversed: "坐立不安、无法休息、重返战场",
      description: "一人躺在教堂的石棺上休息，三把剑悬挂在墙上，身下也有一把。代表休息、恢复和冥想。"
    },
    {
      id: 304, name: "宝剑五", nameEn: "Five of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "冲突、失败、损失、屈辱",
      upright: "胜之不武、冲突升级、损失、屈辱的胜利",
      reversed: "和解、放下争斗、避免冲突",
      description: "一人怀抱三把剑回头看去，另外两人沮丧离开。代表冲突后的苦涩胜利——赢了战斗却输了尊重。"
    },
    {
      id: 305, name: "宝剑六", nameEn: "Six of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "过渡、放下、旅程、平静",
      upright: "走向更平静的地方、放下过去、过渡期",
      reversed: "无法放下、阻力、困境依旧",
      description: "船夫撑船载着六把剑和乘客渡河。代表从困境中走向平静的过渡。"
    },
    {
      id: 306, name: "宝剑七", nameEn: "Seven of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "欺骗、策略、偷窃、逃逸",
      upright: "投机取巧、欺骗、策略、秘密行动",
      reversed: "诚实面对、坦白、良心发现",
      description: "一人偷偷带走五把剑，留下两把在军营。代表欺骗、偷窃和暗中行动。"
    },
    {
      id: 307, name: "宝剑八", nameEn: "Eight of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "束缚、无助、限制、恐惧",
      upright: "感到困住、自我限制、消极思维、无助",
      reversed: "重获自由、新视角、解放、力量",
      description: "蒙眼女子被八把剑包围，但脚下是开阔的土地。代表感到被困住，但这种束缚大多是自我施加的。"
    },
    {
      id: 308, name: "宝剑九", nameEn: "Nine of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "焦虑、噩梦、担忧、绝望",
      upright: "噩梦般的担忧、失眠、焦虑发作、绝望",
      reversed: "放下恐惧、寻求帮助、释然",
      description: "一人半夜从床上坐起，双手抱头，九把剑挂在墙上。代表极度的焦虑、噩梦和担忧。"
    },
    {
      id: 309, name: "宝剑十", nameEn: "Ten of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "终结、失败、痛苦、黎明前",
      upright: "最坏的情况、痛苦结束、被背叛、触底",
      reversed: "否极泰来、缓慢恢复、重生",
      description: "一人背上插着十把剑倒在沙滩上，但远方是黎明前的曙光。代表痛苦的终结，暗示新的开始即将到来。"
    },
    {
      id: 310, name: "宝剑侍从", nameEn: "Page of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "好奇、警觉、沟通、思想",
      upright: "好奇探索、思维敏锐、新的想法、沟通",
      reversed: "冲动言行、想法混乱、八卦",
      description: "年轻的侍从手持宝剑，在风中警觉地张望。代表好奇的思维和新的想法。"
    },
    {
      id: 311, name: "宝剑骑士", nameEn: "Knight of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "行动、冲刺、决心、冲突",
      upright: "全速前进、果断行动、直言不讳、冲锋",
      reversed: "鲁莽、不假思索、受阻、冲动",
      description: "骑士全速冲入战场，宝剑高举。代表迅速的行动和强烈的决心，但可能缺少深思熟虑。"
    },
    {
      id: 312, name: "宝剑王后", nameEn: "Queen of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "清晰、独立、理性、边界",
      upright: "清晰表达、独立思考、客观理性、设定边界",
      reversed: "冷酷、尖酸刻薄、过度理性、孤立",
      description: "王后端坐，宝剑高举，表情严肃。代表清晰的思维、理性和独立的判断力。"
    },
    {
      id: 313, name: "宝剑国王", nameEn: "King of Swords",
      suit: "宝剑", suitEn: "Swords",
      keywords: "权威、真理、公正、智力",
      upright: "清晰的判断、权威、公正、理智的领导者",
      reversed: "滥用权力、不公、冷漠、无理",
      description: "国王手持宝剑端坐，象征公平和权威。代表清晰的头脑、公正的判断和智力上的权威。"
    }
  ],

  // ---- 星币组 (Pentacles) ----
  pentacles: [
    {
      id: 400, name: "星币王牌", nameEn: "Ace of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "机遇、财富、开始、物质",
      upright: "新财务机会、财富开始、物质收获、健康",
      reversed: "错失良机、财务损失、计划延迟",
      description: "云中托出一枚大星币，花园中鲜花盛开。代表新的财务机会、物质上的新开始。"
    },
    {
      id: 401, name: "星币二", nameEn: "Two of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "平衡、适应、多任务、变化",
      upright: "平衡收支、多任务处理、灵活适应、玩乐",
      reversed: "失衡、过度扩张、财务混乱",
      description: "杂耍者同时抛接着两枚星币，身后的船只在波浪中起伏。代表生活的平衡和适应变化。"
    },
    {
      id: 402, name: "星币三", nameEn: "Three of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "合作、技能、团队、工作",
      upright: "团队合作、精进技艺、学徒、共同创造",
      reversed: "缺乏团队精神、技能不足、平庸",
      description: "三位工匠在教堂中讨论建筑细节。代表团队合作、技能的精进和共同努力。"
    },
    {
      id: 403, name: "星币四", nameEn: "Four of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "守护、节俭、控制、囤积",
      upright: "节约储蓄、财务保守、安全感、占有欲",
      reversed: "过度慷慨、财务损失、放手、不安全感",
      description: "一人紧抱一枚星币，脚下还踩着两枚，头顶一枚。代表对财务的保守态度和对安全感的渴求。"
    },
    {
      id: 404, name: "星币五", nameEn: "Five of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "贫困、孤立、困难、排斥",
      upright: "财务困难、感到被排斥、健康问题、物质匮乏",
      reversed: "改善、找回希望、心灵富足、康复",
      description: "两个乞丐在雪中走过教堂的彩色玻璃窗。代表物质匮乏和被排斥的感觉。"
    },
    {
      id: 405, name: "星币六", nameEn: "Six of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "慷慨、慈善、分享、帮助",
      upright: "慷慨解囊、给予与接受、慈善、帮助他人",
      reversed: "不公平、债务、自私、依赖",
      description: "商人将硬币施舍给乞丐。代表慷慨、慈善和帮助他人的行为。"
    },
    {
      id: 406, name: "星币七", nameEn: "Seven of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "耐心、评估、投资、等待",
      upright: "审视进展、长期投资、耐心等待、评估",
      reversed: "浪费努力、投资失败、不耐烦",
      description: "农夫倚靠在锄头上，凝视着藤蔓上结出的星币果实。代表对进展的评估和对长期投资的耐心。"
    },
    {
      id: 407, name: "星币八", nameEn: "Eight of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "学徒、技能、勤奋、工作",
      upright: "勤学苦练、专注工作、精进技艺、学徒",
      reversed: "分心、敷衍了事、放弃学习、平庸",
      description: "工匠专注地雕刻星币，桌上摆满了他的作品。代表勤奋工作、技能的提升和对细节的关注。"
    },
    {
      id: 408, name: "星币九", nameEn: "Nine of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "自律、富足、独立、享受",
      upright: "自给自足、物质富足、优雅生活、自律",
      reversed: "依赖他人、过度挥霍、表面的富足",
      description: "贵妇在丰收的庄园中散步，手上停着一只鸟。代表通过自律获得的富足和独立的生活。"
    },
    {
      id: 409, name: "星币十", nameEn: "Ten of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "传承、家族、财富、遗产",
      upright: "家族财富、世代传承、牢固的基础、遗产",
      reversed: "家族纷争、财务损失、传承断裂",
      description: "家族在庄园前，老人、夫妻、孩子和狗在一起。代表家族的传承、财富的积累和稳定的基础。"
    },
    {
      id: 410, name: "星币侍从", nameEn: "Page of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "学习、勤奋、实践、消息",
      upright: "学习的热情、实践精神、财务消息、务实",
      reversed: "拖延、缺乏实践、错失学习",
      description: "年轻的侍从专注地凝视手中的星币。代表学习的热情、务实的态度和财务方面的消息。"
    },
    {
      id: 411, name: "星币骑士", nameEn: "Knight of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "可靠、勤奋、责任、耐心",
      upright: "勤勉可靠、责任在肩、稳步前进、耐心",
      reversed: "懒惰、停滞不前、固执、无趣",
      description: "骑士稳稳地骑在马上，手持星币。代表勤奋、可靠和负责任的品质。"
    },
    {
      id: 412, name: "星币王后", nameEn: "Queen of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "滋养、务实、丰盛、母性",
      upright: "持家有道、务实关怀、生活丰裕、爱护",
      reversed: "过度关注物质、不安全感、忽视家庭",
      description: "王后坐在花丛中，手捧星币，周围是大自然。代表实用主义、丰裕的生活和母性的关爱。"
    },
    {
      id: 413, name: "星币国王", nameEn: "King of Pentacles",
      suit: "星币", suitEn: "Pentacles",
      keywords: "成功、商业、财富、领导",
      upright: "商业成功、财富积累、安全稳定、慷慨",
      reversed: "贪婪、财务管理不善、物质主义",
      description: "国王坐在宝座上，手持星币，周围是丰盛的葡萄园。代表商业上的成功和财务的稳定。"
    }
  ]
};
