/* OBLIVION / independent layered-feedback component, based on the archived
   2026-10-23 parallel-plane study. All quotes are from the saved source archive. */
(function () {
 'use strict';
 const script=document.currentScript;
 const base=script?new URL('assets/feedback/',script.src).href:'assets/feedback/';
 const framePreloads=['top-left','top-right','top','spine','bottom-left','bottom-right','bottom'].map(name=>{const im=new Image();im.src=base+'edge-'+name+'.png';return im;});
 const archive={
  "archived_on": "2026-09-26",
  "source": "user-provided screenshots",
  "capture_date": null,
  "emoji_policy": "descriptive placeholders",
  "entries": [
    {
      "id": "C01",
      "image": 1,
      "title": "从暗适应、视线焦点到动物视角的长篇创意建议",
      "user": "冉跃之人",
      "date": "2026-07-28 05:17",
      "likes": 241,
      "tags": [
        "创意延伸",
        "视觉感知",
        "提示设计"
      ],
      "text": "看到这个设计我突然想到了一个绝妙的点子：\n在我们仰望夜空时由于身处万家灯火往往不能第一时间适应宇宙的黑暗，所以必须盯着星星看一会才能看见更多更暗的星星。作者不妨在一下毫无提示但是现实里很常见而经常不被专门注视的东西上放一些这种“星光”提示。\n而注视比较亮的东西比如月亮的话又能清除这种适应黑暗的状态，那么既然如此岂不是可以卡着时间让玩家反复切换注视的物体来进行跑酷或者在同一个地方制造两条路线？\n而注视又是一个大有可为的设计，摄像头式的屏幕虽然视觉效果好但缺乏创意，何不模仿人眼，只让一个“焦点”附近的景象清晰而屏幕周边模糊呢？通过按住shift或者点击鼠标中键的方式固定头部而转动眼球，一些东西只有在斜视的情况下才能触发或者看见，另一些东西在焦点上很模糊但是在本来模糊的地方会变得清晰（这种东西推荐做成透镜的样子，毕竟透镜就是正常看不清只有距离、角度控制好才能看清的东西）。\n后面甚至还可以利用这个原理把玩家的人类视角变成各种动物的视角，比如蜘蛛的多个焦点视角，老鹰的远视视角和鱼眼视角，昆虫的复眼反而会成为最普通的视角。",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 09:04",
          "likes": 19,
          "text": "哇！很有趣的想法，可以给我提供新的思路hhh"
        }
      ],
      "threadCount": 5,
      "note": "适合展示观众投入讨论的深度。回复说明得到启发，未确认这些机制已实现。原文“一下”按截图保留。"
    },
    {
      "id": "C02",
      "image": 1,
      "title": "视觉惊艳，但玩法与概念结合仍可加强",
      "user": "zhnhahah",
      "date": "2026-07-27 10:25",
      "likes": 173,
      "tags": [
        "概念表达",
        "批评与肯定"
      ],
      "text": "看起来概念的实现仅仅是延迟渲染啊，美术风格第一眼很惊艳，但是玩法和概念结合的可以再好一些",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:16",
          "likes": 12,
          "text": "还在比较前期的demo阶段，因为是gamejam作品，所以有点赶hhhh感谢反馈！"
        }
      ],
      "note": "可证明观众对玩法—概念关系提出质疑；不能把“仅仅是延迟渲染”当成项目技术事实。"
    },
    {
      "id": "C03",
      "image": 1,
      "title": "黑暗画面的辨认负担与轮廓强化建议",
      "user": "要努力变强的咸鱼…（昵称末尾以原图为准）",
      "date": "2026-07-27 15:55",
      "likes": 116,
      "tags": [
        "视觉可读性",
        "视频观看",
        "作者回应"
      ],
      "text": "美术很有趣，但是从视频来看，整体黑暗的视野感觉辨认起来会有点吃力，特别是电脑附近光源不好的话……请问游戏里有加强描边或者增加模型描边的粒子特效之类的考虑吗？感觉这个出现和消失的特效上进行额外演出的话，其实也可以加强遗忘和重现出来的视觉语言上的设计暗示。",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:17",
          "likes": 1,
          "text": "其实b站有点糊。玩的时候还好。不过我会考虑优化一下这个问题的！让玩家看的更清确实很重要！"
        }
      ],
      "note": "明确基于视频观看。作者回应承认可读性的重要性并表示会考虑优化；这条回复本身不是完成修改的证明。"
    },
    {
      "id": "C04",
      "image": 2,
      "title": "建议设计不注视才能通过的障碍",
      "user": "独死人",
      "date": "2026-07-27 11:10",
      "likes": 508,
      "tags": [
        "机制讨论",
        "表达清晰度",
        "既有机制澄清"
      ],
      "text": "可以设计一些要不注视才能通过的障碍，毕竟遗忘也是摆脱苦楚的路径",
      "replies": [
        {
          "user": "账号真注销",
          "date": "2026-07-27 12:37",
          "likes": 188,
          "text": "比方说搞个需要回头的场景，回头再转头绝对震撼"
        },
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:57",
          "likes": 45,
          "text": "现在其实就是有的，视频中看到有时玩家会抬头就是因为玩家必须不注视它让它消逝玩家才能穿过。还有些部分是必须等待月食时让这个物品完全被遗忘玩家才能通过！可能视频中表现的不是很清晰，之后会出个带讲解版的视频[表情×3]感谢反馈！"
        }
      ],
      "threadCount": 10,
      "note": "重要纠正：作者当时明确说这些机制已经存在。适合说明视频未把既有设计讲清楚、作者进行了回应，不能写成采纳后新增该机制。"
    },
    {
      "id": "C05",
      "image": 2,
      "title": "将遗忘世界联想到《极乐迪斯科》的灰域",
      "user": "FigoTheO5-8（O/0 按图暂录）",
      "date": "2026-07-27 23:52",
      "likes": 33,
      "tags": [
        "主题联想",
        "创作交流"
      ],
      "text": "看到DiscElysium，不知道up是否知道设定上极乐世界里的“灰域”其实就是上层叙事逐渐遗忘了极乐世界的历史以后，极乐世界的物质开始逐渐减退并消失？抑或是这个游戏本身就受到了灰域的启发？",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:30",
          "likes": 7,
          "text": "知道知道！！！[表情×3]但是其实构思这个的时候没有想起来这个点！不过非常有启发！感谢感谢"
        }
      ],
      "threadCount": 2,
      "note": "这是观众对另一作品的解读与联想，不作外部作品设定的核验。作者明确表示构思时未想起这一点，不能据此写成最初灵感来源。"
    },
    {
      "id": "C06",
      "image": 2,
      "title": "美术风格联想到《奥伯拉丁的回归》",
      "user": "咒蛋",
      "date": "2026-07-27 11:19",
      "likes": 33,
      "tags": [
        "视觉风格",
        "作品联想"
      ],
      "text": "美术让我想起了奥伯拉丁的回归",
      "replies": [],
      "threadCount": 5,
      "note": "可用于评论墙的风格识别背景；截图未展开相应回复。"
    },
    {
      "id": "C07",
      "image": 2,
      "title": "围绕作品名称的轻松互动",
      "user": "虹夢アンジ",
      "date": "2026-07-27 14:09",
      "likes": 145,
      "tags": [
        "社区互动",
        "玩梗"
      ],
      "text": "我，毋畏遗忘",
      "replies": [
        {
          "user": "坍缩在呐喊奇点",
          "date": "2026-07-27 15:01",
          "likes": 26,
          "text": "ob一串字母大人"
        }
      ],
      "threadCount": 10,
      "note": "适合说明社区氛围，不承担改进证据。梗的含义不另作未经确认的解读。"
    },
    {
      "id": "C08",
      "image": 2,
      "title": "认可创意，并询问《奥伯拉丁的回归》的关联",
      "user": "烧鹅会长",
      "date": "2026-07-27 21:09",
      "likes": 17,
      "tags": [
        "积极反应",
        "视觉风格"
      ],
      "text": "很有创意哎[表情]美术风格也很有意思，up有玩过奥伯拉丁的回归吗？",
      "replies": [],
      "note": "截图底部只展示这条评论，不补充未显示的回复。蓝色跳转文字仅保留其可见文字。"
    },
    {
      "id": "C09",
      "image": 3,
      "title": "对眼动追踪的预期与适配设想",
      "user": "芥子意",
      "date": "2026-07-28 00:54",
      "likes": 12,
      "tags": [
        "输入方式",
        "未来设想"
      ],
      "text": "还以为调用摄像头进行眼部追踪呢，只是屏幕准星而已啊。",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:19",
          "likes": 10,
          "text": "好想法！我觉得可以加哈哈哈哈！可以做一个眼动适配"
        }
      ],
      "threadCount": 2,
      "note": "眼动适配是当时回复中的设想，没有实现证据；不要列入已完成改动。"
    },
    {
      "id": "C10",
      "image": 3,
      "title": "慢节奏沉浸体验与跳跃、移速的取舍",
      "user": "troublesomexxl",
      "date": "2026-07-27 17:02",
      "likes": 10,
      "tags": [
        "节奏",
        "跳跃",
        "设计取舍"
      ],
      "text": "设计的好好，感觉是一个慢节奏的沉浸体验，要不要适当的减少一点跳跃，再减缓一些移速",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:22",
          "likes": 1,
          "text": "是的我也想是个慢节奏的沉浸体验，但是不想太慢让玩家感觉无聊，所以加了一点跳跃"
        }
      ],
      "threadCount": 3,
      "note": "评论者是否实际试玩未明。可和母稿已确认的降低跳跃难度联系；减少跳跃、降低难度、减缓移速是不同改动，不能混写。"
    },
    {
      "id": "C11",
      "image": 3,
      "title": "被创意吸引，但从视频感觉上手困难",
      "user": "Cynical_",
      "date": "2026-07-27 11:07",
      "likes": 11,
      "tags": [
        "入门引导",
        "视频观看",
        "作者承认问题"
      ],
      "text": "这个创意真的是特别惊艳，一下就吸引到我了[表情]不过看视频感觉这游戏有些难上手的样子（）",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:26",
          "likes": 6,
          "text": "其实是想做一个星际拓荒那种一遍遍探索的知识锁的游戏，让玩家通过新学会的东西探索不同的道路，但是确实有些缺乏引导。感谢反馈"
        }
      ],
      "threadCount": 3,
      "note": "评论明确基于视频，不称为实测失败；作者当时承认缺乏引导。这组对话很适合与后来更直白的提示一起展示。"
    },
    {
      "id": "C12",
      "image": 3,
      "title": "对项目潜力的鼓励",
      "user": "霜雪霁千丝",
      "date": "2026-07-27 15:45",
      "likes": 13,
      "tags": [
        "积极反应",
        "潜力评价"
      ],
      "text": "上限不比纪念碑谷差[狗头表情]",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:22",
          "likes": null,
          "text": "哇哇哇过赞过赞"
        }
      ],
      "note": "观众的赞赏，不是作品质量的客观比较；也不能作为修改后评价提升的证据。"
    },
    {
      "id": "C13",
      "image": 3,
      "title": "对其他游戏及创作者名称的联想",
      "user": "ChronosDesideria",
      "date": "2026-07-27 13:01",
      "likes": 7,
      "tags": [
        "作品联想",
        "社区互动"
      ],
      "text": "神秘格言是Antichamber学来的吗（\n看到DiscElysium也没绷住哈哈哈",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-28 03:25（底部部分裁切，日期文字可辨）",
          "likes": null,
          "text": "[狗头表情×3]"
        }
      ],
      "note": "原文括号未闭合，按截图保留。回复下方被裁切，点赞数字不可确认。"
    },
    {
      "id": "C14",
      "image": 4,
      "title": "简短支持与作者致谢",
      "user": "自身所构成之物",
      "date": "2026-07-27 08:19",
      "likes": 8,
      "tags": [
        "积极反应",
        "作者互动"
      ],
      "text": "支持一下up！",
      "replies": [
        {
          "user": "adios12312（UP主）",
          "date": "2026-07-27 09:54",
          "likes": 1,
          "text": "感谢支持"
        }
      ],
      "threadCount": 2,
      "note": "适合作为评论墙中的短评论，不承担具体修改的论证。"
    },
    {
      "id": "C15",
      "image": 4,
      "title": "将真实视线移出屏幕的交互想象",
      "user": "今天也追番了吗",
      "date": "2026-07-27 10:33",
      "likes": 7,
      "tags": [
        "交互设想",
        "创意延伸"
      ],
      "text": "有意思，如果视线看电脑屏幕外面整个游戏场景也会受损有没有说法",
      "replies": [],
      "note": "这是观众的交互设想，未提供实现或采纳记录。"
    },
    {
      "id": "C16",
      "image": 4,
      "title": "对“不观察就不存在”相关概念的兴趣",
      "user": "2541284120",
      "date": "2026-07-27 12:38",
      "likes": 6,
      "tags": [
        "积极反应",
        "概念兴趣"
      ],
      "text": "今年有一个和“不观察就不存在”有关的游戏要发售，看到up的这个也超级喜欢[表情]",
      "replies": [],
      "note": "另一游戏未具名，不推断作品名称，也不核验其发售情况。可用于背景中的概念认同。"
    },
    {
      "id": "C17",
      "image": 4,
      "title": "网页试玩：反复掉落、路线难辨、疑似穿模与视觉疲劳",
      "user": "Citric__Acid_",
      "date": "2026-07-30 01:32",
      "likes": 4,
      "tags": [
        "明确实际试玩",
        "平台挫败",
        "空间可读性",
        "视觉疲劳",
        "疑似碰撞问题"
      ],
      "text": "试玩了一下网页版，感觉创意很好[点赞表情]但现在的体验上还有些问题。\n移动的时候太容易掉下去了，掉下去就要从起点重新开始，导致我都没有机会走到后面，很遗憾没有体验到后面的设计。有些地方是路、是墙还是会掉下去不明确（我认为和机制无关，而是视觉引导不佳）。我个人感觉有“掉下去就死”反而有些损害这个解谜设计本身。\n有一些墙角处视角似乎会穿模？不知是碰撞箱不对还是有意这样设计的？\n最后关于画面，视觉风格很独特，但黑色背景和大量点组成的画面让人易于视觉疲劳。如果把一部分点改成线条的话可能从视觉和性能上都会好一些。当然也取决于想要呈现怎样的视觉效果。",
      "replies": [],
      "note": "本批最强的实际试玩证据，且兼具肯定与具体问题。掉落、路线难辨是玩家报告；碰撞和性能是其疑问或推测。降低跳跃难度可与母稿对照，不能据此声称已修复碰撞、增加全局检查点或改成线条渲染。"
    },
    {
      "id": "C18",
      "image": 4,
      "title": "视觉风格与另一游戏的联想",
      "user": "乱点鸳鸯谱",
      "date": "2026-07-29 06:24",
      "likes": 4,
      "tags": [
        "视觉风格",
        "作品联想"
      ],
      "text": "这画风好像前段时间见过的一个游戏，也是非常创新非常前卫，就是想不起来叫啥了，那游戏好像是最后一段这样",
      "replies": [],
      "threadCount": 1,
      "note": "评论者没有给出游戏名称，材料库也不补猜。"
    },
    {
      "id": "C19",
      "image": 4,
      "title": "详细体验：道路辨认、流程绕过与桥边卡住",
      "user": "灵辰Linsa",
      "date": "2026-07-28 09:50",
      "likes": 3,
      "tags": [
        "具体游玩经历",
        "路线引导",
        "流程问题",
        "操作手感",
        "机制建议"
      ],
      "text": "玩法是比较有趣的，深度上也可以挖一些东西，比如镜子嵌套之类的新机制——\n不过就demo阶段看起来问题还是有一些的。首先是美术风格整体指引较少，玩家很容易走到一个地方却一时半会儿不知道往哪里走，对于“路”的辨认有些费神（和费眼睛）；其次是地图上，比如最初的分叉口，玩家可以直接往下跳而落到下面平台上，从而破坏预设的流程体验，地图上可以打磨的地方感觉会比较多；再其次是一个操作手感上的整体优化，比如跳桥的时候人会卡在桥和那个框的中间（是的我卡在那了）。\n玩法还不错，加油——",
      "replies": [],
      "note": "包含亲历“卡在那了”，可支持具体体验反馈。按作者当前母稿，视觉、引导和跳跃方面有持续调整，但该条提到的流程绕过和桥框碰撞是否逐项修复未确认；镜子嵌套只是评论建议，不能推断因这条建议才加入。"
    },
    {
      "id": "C20",
      "image": 4,
      "title": "简短赞赏",
      "user": "SrTanger777",
      "date": "截图未显示",
      "likes": null,
      "tags": [
        "积极反应"
      ],
      "text": "[表情×3]好棒",
      "replies": [],
      "note": "截图底部被输入区截断，时间、点赞和后续回复均未显示。输入框占位文字与浏览器状态栏不是评论，不转录。"
    }
  ]
}
;
 // Translation data is kept apart from the unmodified screenshot transcript.
 // A translated comment remains a comment, rather than proof of an implemented change.
 const englishArchive={
  C01:{title:'Ideas about dark adaptation, visual focus and animal vision',tags:['Creative extensions','Visual perception','Hint design'],text:'Seeing this design suddenly gave me a wonderful idea:\nWhen we look up at the night sky from a brightly lit place, our eyes cannot immediately adjust to the darkness of space. We have to stare at the stars for a while before we can see more, fainter stars. Perhaps the creator could put this kind of “starlight” hint on ordinary things that have no prompt and that people rarely look at closely.\nLooking at something brighter, such as the moon, could reset that dark adaptation. Could this let you time a sequence in which players repeatedly switch what they look at to do some platforming, or create two routes through the same place?\nGaze itself offers a lot of design possibilities. A camera-like view looks good but is not very inventive. Why not imitate the human eye, making only the area around a “focus point” clear while blurring the edges of the screen? Holding Shift or clicking the middle mouse button could hold the head still while moving the eyes. Some things might only trigger or become visible when viewed from the side. Others might look blurry at the focus point but become clear in an area that is normally blurred. I would suggest making those things look like lenses: lenses also need the right distance and angle before you can see clearly through them.\nLater, this principle could even turn the player’s human vision into that of different animals: a spider’s multiple focus points, an eagle’s long-distance vision, or a fisheye view. An insect’s compound eyes might become the most ordinary view of all.',replies:['Wow! Those are really interesting ideas. They could give me some new directions, haha.'],note:'This shows the depth of audience discussion. The creator said the ideas were inspiring, but did not confirm that these mechanisms were implemented. A typo in the Chinese source is preserved in the original transcript.'},
  C02:{title:'Striking visuals, but gameplay could express the concept more closely',tags:['Concept communication','Criticism and praise'],text:'It looks as if the concept is implemented only through delayed rendering. The art style is striking at first glance, but the gameplay could connect more closely to the concept.',replies:['It is still a fairly early demo. It was a game-jam project, so we were a bit rushed, haha. Thanks for the feedback!'],note:'This documents a viewer questioning the connection between gameplay and concept. “Only through delayed rendering” is the viewer’s interpretation, not an established technical fact about the project.'},
  C03:{title:'Difficulty reading the dark view, and a suggestion to strengthen contours',tags:['Visual legibility','Video viewing','Creator response'],text:'The art is interesting, but from the video the dark view looks a little difficult to read, especially if the lighting around your computer is poor… Have you considered stronger outlines or particle effects that trace the models? Giving the appearance and disappearance effects some extra emphasis could also make the visual language of forgetting and reappearing clearer.',replies:['Bilibili makes it a bit blurry, actually. It feels better when playing. But I will consider improving this! It really is important that players can see more clearly.'],note:'The comment explicitly concerns the video. The creator acknowledged the importance of legibility and said they would consider improvements; this reply alone does not prove a change was completed.'},
  C04:{title:'A suggestion for obstacles that require looking away',tags:['Mechanism discussion','Clarity of communication','Clarifying an existing mechanism'],text:'You could design some obstacles that can only be passed when you are not looking at them. After all, forgetting is also a way out of pain.',replies:['For example, make a scene where you have to look back. Looking back and then turning around again would be amazing.','That actually already exists. Sometimes you see the player look up in the video because they must stop looking at an object and let it fade before they can pass through. In some sections they must wait for the eclipse to make the object completely forgotten before passing through! Perhaps the video does not make this very clear. I will make a version with explanations later. [emoji × 3] Thanks for the feedback!'],note:'A key distinction: the creator explicitly said these mechanisms already existed. This exchange shows that the video did not explain the existing design clearly, and that the creator responded. It should not be presented as a mechanism added after this suggestion.'},
  C05:{title:'Connecting the forgotten world with the Pale in Disco Elysium',tags:['Thematic association','Creative exchange'],text:'Seeing DiscElysium made me wonder: does the creator know that, in the setting of Disco Elysium, the “Pale” is what happens when a higher-level narrative gradually forgets the world’s history and its matter begins to diminish and disappear? Or was this game itself inspired by the Pale?',replies:['I do know about it!!! [emoji × 3] But I actually did not think of that when coming up with this idea! It is very inspiring, though. Thank you, thank you.'],note:'This is a viewer’s interpretation of and association with another work, not an independently verified account of its setting. The creator explicitly said this had not come to mind when developing the concept, so it should not be described as the original inspiration.'},
  C06:{title:'An art-style association with Return of the Obra Dinn',tags:['Visual style','Association with another work'],text:'The art reminds me of Return of the Obra Dinn.',replies:[],note:'Useful background for a comment wall about recognition of the visual style. The corresponding replies were not expanded in the screenshot.'},
  C07:{title:'A playful exchange about the project’s name',tags:['Community interaction','Wordplay'],text:'I fear no oblivion.',replies:['Lord ob-followed-by-a-string-of-letters.'],note:'This reflects the community atmosphere and is not evidence of an improvement. No unconfirmed interpretation of the joke is added.'},
  C08:{title:'Praise for the idea, and a question about Return of the Obra Dinn',tags:['Positive response','Visual style'],text:'What a creative idea! [emoji] The art style is interesting too. Have you played Return of the Obra Dinn?',replies:[],note:'Only this comment is visible at the bottom of the screenshot. No unseen replies have been supplied. For the blue link text, only the visible words are retained.'},
  C09:{title:'An expectation of eye tracking, and a possible adaptation',tags:['Input method','Future possibility'],text:'I thought it used a camera for eye tracking. It is only a screen reticle.',replies:['Good idea! I think we could add that, hahaha! We could make an eye-tracking adaptation.'],note:'Eye-tracking support was an idea in the reply at that time. There is no evidence here that it was implemented, so it should not appear among completed changes.'},
  C10:{title:'Balancing a slow, immersive pace with jumping and movement speed',tags:['Pace','Jumping','Design trade-offs'],text:'This is designed so well. It feels like a slow, immersive experience. Could there be a little less jumping, and slightly slower movement?',replies:['Yes, I also wanted it to be a slow, immersive experience. But I did not want it to be so slow that players got bored, so I added a little jumping.'],note:'It is unclear whether this commenter played the game. This can be considered alongside the reduced jump difficulty confirmed in the project manuscript. Fewer jumps, easier jumps and slower movement are different changes and should not be conflated.'},
  C11:{title:'Drawn in by the idea, but the video makes learning look difficult',tags:['Onboarding','Video viewing','Creator acknowledgment'],text:'The idea is really striking and immediately drew me in. [emoji] But from the video, the game looks a little hard to learn. ()',replies:['I actually wanted to make a knowledge-gated game like Outer Wilds, where players repeatedly explore and use what they learn to discover different routes. But it is true that there is not enough guidance. Thanks for the feedback.'],note:'The comment is explicitly based on the video and is not a documented failed playtest. The creator acknowledged insufficient guidance at the time. This exchange works well alongside the later, more direct hints.'},
  C12:{title:'Encouragement about the project’s potential',tags:['Positive response','Perceived potential'],text:'Its potential is no less than Monument Valley’s. [doge emoji]',replies:['Wow, wow, that is far too kind.'],note:'This is audience praise, not an objective comparison of quality. It also cannot establish that reactions improved after changes were made.'},
  C13:{title:'Associations with other games and a creator name',tags:['Association with other works','Community interaction'],text:'Are the mysterious maxims borrowed from Antichamber? (\nSeeing DiscElysium cracked me up too, haha.',replies:['[doge emoji × 3]'],note:'The unclosed parenthesis is retained in the Chinese transcript. The bottom of the reply is cropped, although the date is legible; its like count cannot be confirmed.'},
  C14:{title:'A brief message of support and thanks from the creator',tags:['Positive response','Creator interaction'],text:'Here to support the creator!',replies:['Thank you for the support.'],note:'Suitable as a short background comment, but not as evidence for any specific revision.'},
  C15:{title:'Imagining an interaction that follows the eyes beyond the screen',tags:['Interaction idea','Creative extension'],text:'Interesting. What if the whole game scene also broke down when your eyes looked outside the computer screen?',replies:[],note:'This is a viewer’s interaction idea. No implementation or adoption record is provided.'},
  C16:{title:'Interest in the idea of things not existing when unobserved',tags:['Positive response','Interest in the concept'],text:'There is a game about “not existing when unobserved” coming out this year. I really like this one from the creator too. [emoji]',replies:[],note:'The other game is unnamed. Its identity and release status are not inferred or verified. This can appear in the background as an expression of interest in the concept.'},
  C17:{title:'Web playtest: repeated falls, unclear routes, possible clipping and visual fatigue',tags:['Explicit hands-on play','Platforming frustration','Spatial legibility','Visual fatigue','Possible collision issue'],text:'I tried the web version. I think the idea is excellent. [thumbs-up emoji] But the current experience still has some problems.\nIt is too easy to fall while moving, and falling means restarting from the beginning. I did not get a chance to reach the later parts, so unfortunately I could not experience those designs. Some places do not clearly read as a path, a wall, or a drop. I do not think that is about the mechanism, but about poor visual guidance. Personally, I feel that “falling means death” somewhat harms the puzzle design itself.\nAt some wall corners, the view seems to clip through the geometry. I do not know whether the collision boxes are wrong or whether this is intentional.\nFinally, the visual style is distinctive, but a black background and an image made of so many points can cause visual fatigue. Replacing some points with lines might be better for both the visuals and performance. Of course, that also depends on the visual effect you want.',replies:[],note:'This is the strongest explicit hands-on evidence in this archive, combining praise with specific problems. Falling and unclear routes are player reports; collision and performance are questions or hypotheses. Reduced jump difficulty can be checked against the manuscript, but this comment does not establish fixes to collision, global checkpoints or a switch to line rendering.'},
  C18:{title:'An association with another game’s visual style',tags:['Visual style','Association with another work'],text:'This style looks like a game I saw a while ago. That one was also very innovative and avant-garde, but I cannot remember its name. I think its final section looked like this.',replies:[],note:'The commenter did not name the game, and the archive does not guess which work they meant.'},
  C19:{title:'A detailed experience: reading routes, bypassing progression and getting stuck at the bridge',tags:['Specific play experience','Route guidance','Progression issue','Movement feel','Mechanism suggestion'],text:'The gameplay is interesting, and there is room to explore it more deeply—for example, new mechanisms such as nested mirrors.\nBut at the demo stage, there still seem to be some issues. First, the art style provides little overall guidance. Players can reach a place and have no idea where to go next. Working out what counts as a “path” takes some mental effort, and some strain on the eyes. Second, at places such as the first fork, players can jump straight down onto a lower platform, bypassing the intended sequence. There seems to be quite a lot of room to refine the map. Third, the controls could use some overall refinement: when jumping at the bridge, the character can get stuck between the bridge and that frame. Yes, I got stuck there.\nThe gameplay is quite good. Keep going!',replies:[],note:'“I got stuck there” describes a specific personal experience. The current project manuscript confirms continuing work on visuals, guidance and jumping, but it does not confirm individual fixes to the reported sequence bypass or bridge-frame collision. Nested mirrors are a suggestion in this comment; it cannot establish that they were added because of it.'},
  C20:{title:'Brief praise',tags:['Positive response'],text:'[emoji × 3] Awesome.',replies:[],note:'The input area cuts off the bottom of the screenshot. The date, like count and any later replies are not visible. Input placeholder text and the browser status bar are not comments and are not transcribed.'}
 };
 const summaries={zh:{
  C01:{topic:'注意力',quote:'在我们仰望夜空时……必须盯着星星看一会才能看见更多更暗的星星。'},
  C02:{topic:'概念表达',quote:'美术风格第一眼很惊艳，但是玩法和概念结合的可以再好一些'},
  C03:{topic:'视觉可读性',quote:'整体黑暗的视野感觉辨认起来会有点吃力',title:'让黑暗也可被辨认。',change:'持续调整粒子视觉，让轮廓帮助判断道路，同时保留安静的氛围。',photo:'portal.png',caption:'实机语境 / 暗处通道'},
  C04:{topic:'移开视线',quote:'可以设计一些要不注视才能通过的障碍，毕竟遗忘也是摆脱苦楚的路径'},
  C06:{topic:'视觉语言',quote:'美术让我想起了奥伯拉丁的回归'},
  C08:{topic:'第一印象',quote:'很有创意哎[表情]美术风格也很有意思'},
  C09:{topic:'输入方式',quote:'还以为调用摄像头进行眼部追踪呢，只是屏幕准星而已啊。'},
  C10:{topic:'体验节奏',quote:'感觉是一个慢节奏的沉浸体验，要不要适当的减少一点跳跃'},
  C11:{topic:'学习与引导',quote:'这个创意真的是特别惊艳……不过看视频感觉这游戏有些难上手的样子',title:'注视 → 形成 → 通过。',change:'缩短凝视等待；以必须聚集后才能通过的教学独木桥，建立清楚的因果关系。',photo:'hint.png',caption:'实机语境 / 教学与提示'},
  C15:{topic:'交互想象',quote:'如果视线看电脑屏幕外面整个游戏场景也会受损有没有说法'},
  C17:{topic:'移动与探索',quote:'有些地方是路、是墙还是会掉下去不明确',title:'把注意力还给探索。',change:'降低跳跃难度，继续调整提示与凝视时长，把注意力留给观察、推断与重访。',photo:'moon-route.png',caption:'实机语境 / 形成中的道路'},
  C19:{topic:'路线辨认',quote:'玩家很容易走到一个地方却一时半会儿不知道往哪里走'}
 },en:{
  C01:{topic:'ATTENTION',quote:'Stare at the stars for a while, and fainter stars begin to appear.'},
  C02:{topic:'CONCEPT',quote:'The art is striking, but the gameplay could connect more closely to the concept.'},
  C03:{topic:'LEGIBILITY',quote:'The dark view looks a little difficult to read.',title:'Make darkness readable.',change:'Refine the particle visuals so contours help players judge the route while preserving the quiet atmosphere.',photo:'portal.png',caption:'Gameplay capture / A passage in the dark'},
  C04:{topic:'LOOKING AWAY',quote:'Some obstacles could require looking away to pass—forgetting is also a way out of pain.'},
  C06:{topic:'VISUAL LANGUAGE',quote:'The art reminds me of Return of the Obra Dinn.'},
  C08:{topic:'FIRST IMPRESSION',quote:'The idea is creative, and the art style is interesting too.'},
  C09:{topic:'INPUT',quote:'I thought it used a camera for eye tracking. It is only a screen reticle.'},
  C10:{topic:'PACE',quote:'It feels like a slow, immersive experience. Could there be a little less jumping?'},
  C11:{topic:'LEARNING',quote:'The idea is striking… but the video makes it look hard to learn.',title:'Look. Form. Cross.',change:'Shorten the gaze delay. A teaching bridge becomes passable only after it forms, making cause and effect clear.',photo:'hint.png',caption:'Gameplay capture / Teaching and hints'},
  C15:{topic:'POSSIBILITIES',quote:'What if the whole scene broke down when I looked away from the monitor?'},
  C17:{topic:'MOVEMENT',quote:'Some places do not clearly read as a path, a wall, or a drop.',title:'Make room for exploration.',change:'Reduce jump difficulty; refine hints and gaze timing so attention stays on observing, reasoning and returning.',photo:'moon-route.png',caption:'Gameplay capture / A forming path'},
  C19:{topic:'WAYFINDING',quote:'Players can reach a place and have no idea where to go next.'}
 }};
 const copy={zh:{
  scene:'真实公开评论组成的三维层叠空间',label:'回声 / 同一片空间',fragments:'12 个片段 · 20 则评论存档',pause:'暂停视差',enable:'开启视差',reset:'复位 ↺',footer:'真实评论节选 · 2026.07 · 点击平面阅读原文与回应',footerStatic:'真实评论节选 · 2026.07 · 公开反馈与设计回应',depth:'平行的平面 / 共享的纵深',far:'远',near:'近',list:'重点评论',dialog:'评论原文与设计回应',close:'关闭评论',likes:'赞',archived:'已存档',response:'设计回应',public:'公开评论',read:'阅读原文 ↗',source:'语境与证据说明',original:'中文原文',replies:'评论回复',translation:'',provenance:'评论原文来自用户提供的截图存档（整理于 2026-09-26）。设计迭代依据本项目第六页文稿；配图为本地游戏录像画面。',open:'打开评论全文和设计回应',learning:'引导',legibility:'可读性',movement:'移动',notShown:'截图未显示'
 },en:{
  scene:'A three-dimensional space of layered public comments',label:'VOICES / A SHARED SPACE',fragments:'12 fragments · 20 archived comments · English translations',pause:'Pause parallax',enable:'Enable parallax',reset:'Reset ↺',footer:'Jul 2026 · Select a sheet for source and response',footerStatic:'Public comments · Jul 2026 · Feedback and design responses',depth:'PARALLEL PLANES / SHARED DEPTH',far:'FAR',near:'NEAR',list:'Featured comments',dialog:'Comment transcript and design response',close:'Close comment',likes:'likes',archived:'ARCHIVED',response:'DESIGN RESPONSE',public:'PUBLIC COMMENT',read:'READ SOURCE ↗',source:'Context and limits',original:'Original Chinese transcript',replies:'Replies',translation:'English translation',provenance:'English translations of the archived Chinese comments are provided for reading; the original transcript is also shown. Source: supplied screenshots, archived on 26 September 2026. Design responses follow the manuscript for page 6; images are local gameplay captures.',open:'Read the complete comment and design response',learning:'Learning',legibility:'Legibility',movement:'Movement',notShown:'Not shown in screenshot'
 }};
 // Parallel, front-facing sheets. Small depth offsets reveal their separate
 // planes; the three complete responses occupy separate, staggered foregrounds.
 // Coordinates stay inside the 1360 × 760 layout, including projection margins.
 const placements=[
  ['C01',18,12,395,220,-250,.35],['C02',427,0,430,220,-360,.28],
  ['C04',895,5,420,245,-270,.34],['C06',1017,500,310,220,-280,.30],
  ['C08',16,525,335,220,-170,.31],['C09',505,60,365,230,-340,.28],
  ['C10',630,525,370,220,-220,.34],['C15',245,560,390,195,-300,.30],
  ['C19',425,250,420,240,-190,.33],
  ['C03',936,80,390,430,8,1],
  ['C11',32,170,420,430,28,1],
  ['C17',475,310,440,408,58,1]
 ];
 const el=(name,cls,text)=>{const x=document.createElement(name);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x;};
 const safeUser=s=>s.replace(/（.*?）/g,'');
 const date=s=>s.startsWith('2026-')?s.slice(0,10).replaceAll('-',' / '):s;
 let frameSerial=0;
 function frame(w,h){
  const x=document.createElementNS('http://www.w3.org/2000/svg','svg');x.setAttribute('viewBox',`0 0 ${w} ${h}`);x.setAttribute('preserveAspectRatio','none');x.setAttribute('aria-hidden','true');x.classList.add('of-frame');
  // Original 23 October frame fragments, at half their native size. The right
  // side stays open; only the folded spine and its finite ends retain particles.
  const n='of-grain-'+(++frameSerial),image=(name,xx,yy,ww,hh)=>`<image href="${base}edge-${name}.png" x="${xx}" y="${yy}" width="${ww}" height="${hh}" preserveAspectRatio="none"/>`;
  x.innerHTML=`<defs><pattern id="${n}-top" patternUnits="userSpaceOnUse" width="265" height="12">${image('top',0,0,265,12)}</pattern><pattern id="${n}-spine" patternUnits="userSpaceOnUse" width="29" height="61">${image('spine',0,0,29,61)}</pattern><pattern id="${n}-bottom" patternUnits="userSpaceOnUse" width="265.5" height="18.5">${image('bottom',0,0,265.5,18.5)}</pattern></defs><g class="of-original-grain">${image('top-left',0,0,47.5,47)}${image('top-right',w-78,0,78,34.5)}<svg x="47.5" y="15" width="${Math.max(0,w-125.5)}" height="12"><rect width="100%" height="100%" fill="url(#${n}-top)"/></svg><svg x="7" y="47" width="29" height="${Math.max(0,h-104.5)}"><rect width="100%" height="100%" fill="url(#${n}-spine)"/></svg>${image('bottom-left',0,h-57.5,52.5,57.5)}<svg x="52.5" y="${h-31}" width="${Math.max(0,w-133.5)}" height="18.5"><rect width="100%" height="100%" fill="url(#${n}-bottom)"/></svg>${image('bottom-right',w-81,h-49,81,49)}</g><g fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-dasharray=".2 3.4"><path opacity=".75" d="M 24 ${Math.round(h*.53)-13} l 13 10 h 17"/></g><circle cx="37" cy="${Math.round(h*.53)-3}" r="1.7" fill="#F7F7F7"/>`;
  return x;
 }
 function card(c,s,p,open,lang,ui){
  const [id,x,y,w,h,z,opacity]=p,featured=!!s.change;
  const b=el('button','of-plane'+(featured?' is-featured':' is-background'));b.type='button';b.dataset.comment=id;
  b.style.cssText=`left:${x}px;top:${y}px;width:${w}px;height:${h}px;transform:translateZ(${z}px);opacity:${opacity};`;
  b.setAttribute('aria-label',`${s.topic}: ${s.quote} — ${safeUser(c.user)}. ${ui.open}`);
  b.append(frame(w,h));
  const top=el('span','of-card-top');top.append(el('span','',id+' / '+date(c.date)),el('span','of-card-topic',s.topic));b.append(top,el('strong','of-card-quote','“'+s.quote+'”'));
  const author=el('span','of-card-author');author.append(el('span','',safeUser(c.user)),el('span','',c.likes==null?ui.archived:c.likes+' '+ui.likes));b.append(author);
  if(featured){b.append(el('span','of-card-rule'));const row=el('span','of-card-response');const text=el('span','of-card-response-text');text.append(el('strong','of-card-response-title',s.title),el('span','',s.change));const image=el('img','of-card-image');image.src=base+s.photo;image.alt=s.caption;row.append(text,image);b.append(row);}
  const foot=el('span','of-card-foot');foot.append(el('span','',featured?ui.response:ui.public),el('span','',ui.read));b.append(foot);
  b.addEventListener('click',()=>open(c));return b;
 }
 window.mountFeedbackScene=function(host,options){
  if(!host)throw new Error('A host element is required.');
  if(host.__feedbackScene)host.__feedbackScene.destroy();
  const opts=Object.assign({staticMode:false},options),motion=matchMedia('(prefers-reduced-motion: reduce)');
  const lang=(opts.lang||window.OBLIVION_I18N?.lang)==='zh'?'zh':'en',ui=copy[lang],summary=summaries[lang];
  const localizedDate=s=>lang==='en'?(s.startsWith('2026-')?s.replace(/（.*?）/g,''):ui.notShown):s;
  const localizedUser=s=>lang==='en'?safeUser(s)+(s.includes('UP主')?' (creator)':''):s;
  const root=el('div','oblivion-feedback of-'+lang+(opts.staticMode?' of-static':''));root.lang=lang;
  root.setAttribute('aria-label',ui.scene);
  const space=el('div','of-space'),fit=el('div','of-fit'),world=el('div','of-world');fit.append(world);space.append(fit);root.append(space);
  const label=el('div','of-scene-label');label.append(el('b','',ui.label),el('span','',ui.fragments));root.append(label);
  const toolbar=el('div','of-toolbar'),pause=el('button','',ui.pause),reset=el('button','',ui.reset);pause.type=reset.type='button';toolbar.append(pause,reset);root.append(toolbar);
  const footer=el('div','of-scene-footer');footer.append(el('span','',ui.footer),el('span','',ui.depth));root.append(footer);
  const ruler=el('div','of-depth-ruler');ruler.append(el('span','',ui.far),el('span','',ui.near));root.append(ruler);
  const list=el('nav','of-readlist');list.setAttribute('aria-label',ui.list);root.append(list);
  const dialog=el('dialog','of-dialog of-'+lang);dialog.lang=lang;dialog.setAttribute('aria-label',ui.dialog);document.body.append(dialog);
  host.append(root);
  let paused=opts.staticMode||motion.matches,raf=0,currentX=0,currentY=0,targetX=0,targetY=0,lastFocus=null,destroyed=false;
  function syncPause(){pause.textContent=paused?ui.enable:ui.pause;pause.setAttribute('aria-pressed',String(paused));}
  function close(){dialog.close();if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});}
  function open(c){
   lastFocus=document.activeElement;dialog.replaceChildren();
   const translated=lang==='en'?englishArchive[c.id]:c;
   const closeButton=el('button','of-dialog-close','×');closeButton.type='button';closeButton.setAttribute('aria-label',ui.close);closeButton.addEventListener('click',close);
   dialog.append(closeButton,el('p','of-dialog-meta',c.id+' / '+safeUser(c.user)+' / '+localizedDate(c.date)+(c.likes==null?'':' / '+c.likes+' '+ui.likes)));
   if(ui.translation)dialog.append(el('p','of-dialog-language',ui.translation));
   dialog.append(el('h3','',translated.title),el('blockquote','',translated.text));
   c.replies.forEach((r,i)=>{const reply=el('div','of-dialog-reply');reply.append(el('strong','',localizedUser(r.user)+' / '+localizedDate(r.date)),document.createTextNode(lang==='en'?translated.replies[i]:r.text));dialog.append(reply);});
   const s=summary[c.id];if(s?.change){const change=el('div','of-dialog-change'),words=el('div');words.append(el('h4','',ui.response),el('p','',s.change));const img=el('img');img.src=base+s.photo;img.alt=s.caption;change.append(words,img);dialog.append(change);}
   if(translated.note){const note=el('div','of-dialog-note');note.append(el('h4','',ui.source),el('p','of-dialog-source',translated.note));dialog.append(note);}
   if(lang==='en'){
    const original=el('section','of-dialog-original'),originalHeading=el('h4','',ui.original);original.lang='zh';originalHeading.lang='en';original.append(originalHeading,el('h3','',c.title),el('blockquote','',c.text));
    c.replies.forEach(r=>{const reply=el('div','of-dialog-reply');reply.append(el('strong','',r.user+' / '+r.date),document.createTextNode(r.text));original.append(reply);});
    dialog.append(original);
   }
   dialog.append(el('p','of-dialog-source',ui.provenance));
   dialog.showModal();closeButton.focus({preventScroll:true});
  }
  for(const p of placements){const c=archive.entries.find(c=>c.id===p[0]);world.append(card(c,summary[c.id],p,open,lang,ui));}
  [['C11','01 / '+ui.learning],['C03','02 / '+ui.legibility],['C17','03 / '+ui.movement]].forEach(([id,text])=>{const button=el('button','',text);button.type='button';button.addEventListener('click',()=>open(archive.entries.find(c=>c.id===id)));list.append(button);});
  function draw(){raf=0;if(destroyed)return;currentX+=(targetX-currentX)*.065;currentY+=(targetY-currentY)*.065;world.style.transform=`rotateX(${currentY}deg) rotateY(${currentX}deg)`;if(Math.abs(targetX-currentX)+Math.abs(targetY-currentY)>.005)raf=requestAnimationFrame(draw);}
  function update(){if(!raf)raf=requestAnimationFrame(draw);}
  function pointer(e){if(paused||opts.staticMode)return;const r=space.getBoundingClientRect();targetX=Math.max(-1,Math.min(1,(e.clientX-r.left)/r.width*2-1))*1.8;targetY=-Math.max(-1,Math.min(1,(e.clientY-r.top)/r.height*2-1))*.8;update();}
  function leave(){if(paused)return;targetX=targetY=0;update();}
  function resize(){const scale=Math.min(space.clientWidth/1360,space.clientHeight/760)*.94;fit.style.transform=`translate(-50%,-50%) scale(${scale})`;}
  function setStatic(value){opts.staticMode=!!value;root.classList.toggle('of-static',opts.staticMode);paused=opts.staticMode||motion.matches;if(raf){cancelAnimationFrame(raf);raf=0;}targetX=targetY=currentX=currentY=0;world.style.transform='rotateX(0deg) rotateY(0deg)';footer.firstChild.textContent=opts.staticMode?ui.footerStatic:ui.footer;syncPause();resize();}
  pause.addEventListener('click',()=>{paused=!paused;targetX=targetY=0;update();syncPause();});
  reset.addEventListener('click',()=>{targetX=targetY=0;update();});
  root.addEventListener('pointermove',pointer);root.addEventListener('pointerleave',leave);
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();});
  dialog.addEventListener('cancel',()=>{requestAnimationFrame(()=>lastFocus?.focus({preventScroll:true}));});
  function motionChange(){if(motion.matches){paused=true;targetX=targetY=0;update();syncPause();}}motion.addEventListener('change',motionChange);
  const observer=new ResizeObserver(resize);observer.observe(root);setStatic(opts.staticMode);
  const api={setStaticMode:setStatic,openComment(id){const c=archive.entries.find(c=>c.id===id);if(c)open(c);},pause(){paused=true;targetX=targetY=0;update();syncPause();},get ready(){return [...framePreloads,...root.querySelectorAll('img')].every(i=>i.complete&&i.naturalWidth>0);},get staticMode(){return opts.staticMode;},get planeCount(){return placements.length;},destroy(){destroyed=true;if(raf)cancelAnimationFrame(raf);observer.disconnect();motion.removeEventListener('change',motionChange);dialog.remove();root.remove();delete host.__feedbackScene;}};
  host.__feedbackScene=api;return api;
 };
})();
