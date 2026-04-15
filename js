// --- 1. 静态配置区域 ---
var enable = true;

// 1.1 规则功能开关 (24项全量)
var ruleOptionsEnable = {
  ai: true, claude: true,chatgpt: true, gemini: true, grok: true, reddit: true, 
  youtube: true, googlefcm: true, google: true, github: true, 
  microsoft: true, apple: true, telegram: true, twitter: true, 
  steam: true, cloudflare: true, pixiv: true, emby: true, 
  spotify: true, tiktok: true, netflix: true, douyin: true, 
  zhihu: true, xiaohongshu: true, adblock: true,
};

var regionDefinitionsEnable = {
  "香港": true, "日本": true, "美国": true, "新加坡": true, "台湾省": true, 
  "低倍率节点": true, "高倍率节点": true,
};

var excludeFilterEnable = true;
var excludeFilter = /群|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|失联|选择|剩余|公益|发布|DIZTNA|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|http|com/u;

// 1.4 核心规则集定义 (确保包含报错的 private)
var ruleProviders = {
  'private': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs', path: './ruleset/private.mrs' },
  'private_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs', path: './ruleset/private_ip.mrs' },
  'cn': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs', path: './ruleset/cn.mrs' },
  'cn_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs', path: './ruleset/cn_ip.mrs' },
  'gfw': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-ruleset/gfw.mrs', path: './ruleset/gfw.mrs' },
  'DownloadApps': { type: 'http', interval: 86400, behavior: 'classical', format: 'text', url: 'https://fastly.jsdelivr.net/gh/AIsouler/MyClash@main/Rules/DownloadApps.txt', path: './ruleset/DownloadApps.txt' },
  'ai': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-ruleset/ai.mrs', path: './ruleset/ai.mrs' },
  'chatgpt': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/openai.mrs', path: './ruleset/chatgpt.mrs' },
  'claude': {
  type: 'http',
  interval: 86400,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/anthropic.mrs',
  path: './ruleset/claude.mrs'
},
  'gemini': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google-gemini.mrs', path: './ruleset/gemini.mrs' },
  'grok': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/x.mrs', path: './ruleset/grok.mrs' },
  'reddit': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/reddit.mrs', path: './ruleset/reddit.mrs' },
  'youtube': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs', path: './ruleset/youtube.mrs' },
  'googlefcm': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/googlefcm.mrs', path: './ruleset/googlefcm.mrs' },
  'google': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.mrs', path: './ruleset/google.mrs' },
  'google_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/google.mrs', path: './ruleset/google_ip.mrs' },
  'github': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs', path: './ruleset/github.mrs' },
  'telegram': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs', path: './ruleset/telegram.mrs' },
  'telegram_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/echs-top/proxy@main/rules/mrs/telegram_ip.mrs', path: './ruleset/telegram_ip.mrs' },
  'microsoft': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs', path: './ruleset/microsoft.mrs' },
  'microsoft_cn': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft@cn.mrs', path: './ruleset/microsoft_cn.mrs' },
  'apple': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple.mrs', path: './ruleset/apple.mrs' },
  'twitter': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/twitter.mrs', path: './ruleset/twitter.mrs' },
  'twitter_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/twitter.mrs', path: './ruleset/twitter_ip.mrs' },
  'steam': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam.mrs', path: './ruleset/steam.mrs' },
  'steam_cn': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam@cn.mrs', path: './ruleset/steam_cn.mrs' },
  'epicgames': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/epicgames.mrs', path: './ruleset/epicgames.mrs' },
  'nvidia_cn': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/nvidia@cn.mrs', path: './ruleset/nvidia_cn.mrs' },
  'cloudflare': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cloudflare.mrs', path: './ruleset/cloudflare.mrs' },
  'cloudflare_cn': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cloudflare@cn.mrs', path: './ruleset/cloudflare_cn.mrs' },
  'cloudflare_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cloudflare.mrs', path: './ruleset/cloudflare_ip.mrs' },
  'pixiv': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/pixiv.mrs', path: './ruleset/pixiv.mrs' },
  'emby': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/domain/Emby.mrs', path: './ruleset/emby.mrs' },
  'emby_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/ip/Emby.mrs', path: './ruleset/emby_ip.mrs' },
  'spotify': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/spotify.mrs', path: './ruleset/spotify.mrs' },
  'tiktok': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tiktok.mrs', path: './ruleset/tiktok.mrs' },
  'netflix': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs', path: './ruleset/netflix.mrs' },
  'netflix_ip': { type: 'http', interval: 86400, behavior: 'ipcidr', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/netflix.mrs', path: './ruleset/netflix_ip.mrs' },
  'douyin': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/douyin.mrs', path: './ruleset/douyin.mrs' },
  'zhihu': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/zhihu.mrs', path: './ruleset/zhihu.mrs' },
  'xiaohongshu': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/xiaohongshu.mrs', path: './ruleset/xiaohongshu.mrs' },
  'adblockmihomolite': { type: 'http', interval: 86400, behavior: 'domain', format: 'mrs', url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs', path: './ruleset/adblockmihomolite.mrs' }
};

var regionDefinitions = [
  { name: '香港', regex: /(港|🇭🇰|HK|Hong)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png' },
  { name: '日本', regex: /(日本|🇯🇵|JP|Japan)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png' },
  { name: '美国', regex: /(美|🇺🇸|US|America|States)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png' },
  { name: '新加坡', regex: /(新加坡|狮城|🇸🇬|SG|Singapore)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png' },
  { name: '台湾省', regex: /(台湾|🇹🇼|TW|Taiwan)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png' },
  { name: '低倍率节点', regex: /(0\.[0-5]|低倍)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png' },
  { name: '高倍率节点', regex: /([2-9]倍|[2-9]\.?\d*x)/i, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png' }
];

var serviceConfigs = [
  { key: 'chatgpt', name: 'ChatGPT', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png', rules: ['RULE-SET,chatgpt,ChatGPT'] },
  { 
  key: 'claude', 
  name: 'Claude', 
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Anthropic.png', 
  rules: ['RULE-SET,claude,Claude'] 
},
  { key: 'gemini', name: 'Gemini', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Gemini.png', rules: ['RULE-SET,gemini,Gemini'] },
  { key: 'grok', name: 'Grok', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png', rules: ['RULE-SET,grok,Grok'] },
  { key: 'ai', name: '国外AI', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png', rules: ['RULE-SET,ai,国外AI'] },
  { key: 'reddit', name: 'Reddit', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reddit.png', rules: ['RULE-SET,reddit,Reddit'] },
  { key: 'youtube', name: 'YouTube', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png', rules: ['RULE-SET,youtube,YouTube'] },
  { key: 'googlefcm', name: 'FCM', icon: 'https://fastly.jsdelivr.net/gh/MiToverG422/Qure@master/IconSet/Color/fcm.png', rules: ['RULE-SET,googlefcm,FCM'] },
  { key: 'google', name: 'Google', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png', rules: ['RULE-SET,google,Google', 'RULE-SET,google_ip,Google,no-resolve'] },
  { key: 'github', name: 'GitHub', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png', rules: ['RULE-SET,github,GitHub'] },
  { key: 'telegram', name: 'Telegram', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png', rules: ['RULE-SET,telegram,Telegram', 'RULE-SET,telegram_ip,Telegram,no-resolve'] },
  { key: 'douyin', name: '国内抖音', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png', rules: ['RULE-SET,douyin,国内抖音'] },
  { key: 'zhihu', name: '知乎', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Zhihu.png', rules: ['RULE-SET,zhihu,知乎'] },
  { key: 'xiaohongshu', name: '小红书', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Xiaohongshu.png', rules: ['RULE-SET,xiaohongshu,小红书'] },
  { key: 'microsoft', name: 'Microsoft', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png', rules: ['RULE-SET,microsoft,Microsoft'] },
  { key: 'apple', name: 'Apple', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png', rules: ['RULE-SET,apple,Apple'] },
  { key: 'steam', name: 'Steam', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png', rules: ['RULE-SET,steam,Steam'] },
  { key: 'twitter', name: 'Twitter', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png', rules: ['RULE-SET,twitter,Twitter', 'RULE-SET,twitter_ip,Twitter,no-resolve'] },
  { key: 'pixiv', name: 'Pixiv', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pixiv.png', rules: ['RULE-SET,pixiv,Pixiv'] },
  { key: 'spotify', name: 'Spotify', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png', rules: ['RULE-SET,spotify,Spotify'] },
  { key: 'tiktok', name: 'TikTok', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png', rules: ['RULE-SET,tiktok,TikTok'] },
  { key: 'netflix', name: 'Netflix', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png', rules: ['RULE-SET,netflix,Netflix', 'RULE-SET,netflix_ip,Netflix,no-resolve'] },
  { key: 'emby', name: 'Emby', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png', rules: ['RULE-SET,emby,Emby', 'RULE-SET,emby_ip,Emby,no-resolve'] },
  { key: 'cloudflare', name: 'Cloudflare', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png', rules: ['RULE-SET,cloudflare,Cloudflare', 'RULE-SET,cloudflare_ip,Cloudflare,no-resolve'] },
  { key: 'adblock', name: '广告拦截', icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png', rules: ['RULE-SET,adblockmihomolite,广告拦截'], reject: true }
];

// --- 2. 主逻辑执行 ---
function main(config) {
  if (!enable) return config;

  // 必须先把 rule-providers 挂载上去，否则内核解析 rules 时会报 found 错误
  config['rule-providers'] = ruleProviders;

  var localRules = [
    'RULE-SET,private,直连',
    'RULE-SET,private_ip,直连,no-resolve',
    'RULE-SET,DownloadApps,下载专用',
    'RULE-SET,steam_cn,直连',
    'RULE-SET,epicgames,直连',
    'RULE-SET,nvidia_cn,直连',
    'RULE-SET,microsoft_cn,直连',
    'RULE-SET,cloudflare_cn,直连'
  ];

  var proxies = config.proxies || [];
  var filteredProxyNames = [];
  for (var i = 0; i < proxies.length; i++) {
    var p = proxies[i];
    if (p && p.name) {
      var n = p.name.toString().trim();
      if (excludeFilterEnable && excludeFilter.test(n)) continue;
      filteredProxyNames.push(n);
    }
  }

  var regionMap = {};
  for (var j = 0; j < regionDefinitions.length; j++) { regionMap[regionDefinitions[j].name] = []; }
  var others = [];

  for (var k = 0; k < filteredProxyNames.length; k++) {
    var pname = filteredProxyNames[k];
    var isMatched = false;
    for (var l = 0; l < regionDefinitions.length; l++) {
      var rd = regionDefinitions[l];
      if (regionDefinitionsEnable[rd.name] && rd.regex.test(pname)) {
        regionMap[rd.name].push(pname);
        isMatched = true;
        if (regionDefinitionsEnable[rd.name] && rd.regex.test(pname)) {
  if (!regionMap[rd.name].includes(pname)) {
  regionMap[rd.name].push(pname);
};
  isMatched = true;
}
      }
    }
    if (!isMatched) others.push(pname);
  }

  var regionSelectNames = [];
  var finalGroups = [];
  for (var m = 0; m < regionDefinitions.length; m++) {
    var def = regionDefinitions[m];
    var list = regionMap[def.name];
    if (list && list.length > 0) {
      var autoName = def.name + "-自动选择";
      finalGroups.push({ name: autoName, type: 'url-test', url: 'https://g.cn/generate_204', interval: 600, proxies: list, hidden: true });
      var list = [...new Set(regionMap[def.name])];

finalGroups.push({
  name: def.name,
  type: 'select',
  proxies: [autoName].concat(list),
  icon: def.icon
});
      regionSelectNames.push(def.name);
    }
  }

  if (others.length > 0) {
    finalGroups.push({ name: '其他节点', type: 'select', proxies: others, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png' });
    regionSelectNames.push('其他节点');
  }

  var functionalGroups = [];
  functionalGroups.push({ name: '默认节点', type: 'select', proxies: regionSelectNames, icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png' });

  // 业务逻辑
  for (var n = 0; n < serviceConfigs.length; n++) {
    var sc = serviceConfigs[n];
    if (ruleOptionsEnable[sc.key]) {
      localRules = localRules.concat(sc.rules);
      var pSelection = [];
      if (sc.reject) { pSelection = ['REJECT', 'DIRECT']; }
      else if (['microsoft', 'apple', 'spotify'].indexOf(sc.key) !== -1) { pSelection = ['默认节点', 'DIRECT'].concat(regionSelectNames); }
      else if (['googlefcm', 'douyin', 'zhihu', 'xiaohongshu'].indexOf(sc.key) !== -1) { pSelection = ['DIRECT', '默认节点']concat(filteredProxyNames); }
      else { pSelection = ['默认节点'].concat(regionSelectNames); }
      functionalGroups.push({ name: sc.name, type: 'select', proxies: pSelection, icon: sc.icon });
    }
  }

  functionalGroups.push({ name: '下载专用', type: 'select', proxies: ['DIRECT', '默认节点'], icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Download.png' });
  functionalGroups.push({ name: '直连', type: 'select', proxies: ['DIRECT'], icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png' });
  functionalGroups.push({ name: '漏网之鱼', type: 'select', proxies: ['默认节点', 'DIRECT'], icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png' });

  // 封底规则：确保 GFW 规则在 CN 之前，防止漏网
  localRules.push('RULE-SET,gfw,默认节点');
  localRules.push('GEOIP,LAN,DIRECT,no-resolve');
  localRules.push('RULE-SET,cn,DIRECT');
  localRules.push('RULE-SET,cn_ip,DIRECT,no-resolve');
  localRules.push('MATCH,漏网之鱼');

  config['proxy-groups'] = functionalGroups.concat(finalGroups);
  config['rules'] = localRules;

  return config;
    }
