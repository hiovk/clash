# ==========================================
# 1. 代理集合 (Proxy Providers)
# ==========================================
proxy-providers:
  my-subscription:
    type: http
    url: "你的订阅链接放在这里" # 请替
    interval: 3600
    path: ./proxies/my-subscription.yaml
    health-check:
      enable: true
      interval: 600
      url: https://g.cn/generate_204
    # 对应脚本中的 excludeFilter，自动剔除到期、流量、官网等无效节点
    exclude-filter: "(?i)群|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|过期|已用|联系|邮箱|工单|贩卖|通知|倒卖|防止|国内|地址|频道|无法|说明|使用|提示|特别|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|失联|选择|剩余|公益|发布|DIZTNA|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|http|com"

# ==========================================
# 2. 规则集 (Rule Providers) - 对应脚本 24 项全量规则
# ==========================================
rule-providers:
  private: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs", path: ./ruleset/private.mrs }
  private_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs", path: ./ruleset/private_ip.mrs }
  douyin: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/douyin.mrs", path: ./ruleset/douyin.mrs }
  zhihu: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/zhihu.mrs", path: ./ruleset/zhihu.mrs }
  xiaohongshu: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/xiaohongshu.mrs", path: ./ruleset/xiaohongshu.mrs }
  cn: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs", path: ./ruleset/cn.mrs }
  cn_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs", path: ./ruleset/cn_ip.mrs }
  gfw: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-ruleset/gfw.mrs", path: ./ruleset/gfw.mrs }
  DownloadApps: { type: http, interval: 86400, behavior: classical, format: text, url: "https://fastly.jsdelivr.net/gh/AIsouler/MyClash@main/Rules/DownloadApps.txt", path: ./ruleset/DownloadApps.txt }
  ai: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-ruleset/ai.mrs", path: ./ruleset/ai.mrs }
  chatgpt: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/openai.mrs", path: ./ruleset/chatgpt.mrs }
  claude: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/anthropic.mrs", path: ./ruleset/claude.mrs }
  gemini: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google-gemini.mrs", path: ./ruleset/gemini.mrs }
  grok: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/x.mrs", path: ./ruleset/grok.mrs }
  reddit: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/reddit.mrs", path: ./ruleset/reddit.mrs }
  youtube: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs", path: ./ruleset/youtube.mrs }
  googlefcm: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/googlefcm.mrs", path: ./ruleset/googlefcm.mrs }
  google: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.mrs", path: ./ruleset/google.mrs }
  google_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/google.mrs", path: ./ruleset/google_ip.mrs }
  github: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs", path: ./ruleset/github.mrs }
  telegram: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs", path: ./ruleset/telegram.mrs }
  telegram_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/echs-top/proxy@main/rules/mrs/telegram_ip.mrs", path: ./ruleset/telegram_ip.mrs }
  microsoft: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs", path: ./ruleset/microsoft.mrs }
  microsoft_cn: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft@cn.mrs", path: ./ruleset/microsoft_cn.mrs }
  apple: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple.mrs", path: ./ruleset/apple.mrs }
  twitter: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/twitter.mrs", path: ./ruleset/twitter.mrs }
  twitter_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/twitter.mrs", path: ./ruleset/twitter_ip.mrs }
  steam: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam.mrs", path: ./ruleset/steam.mrs }
  steam_cn: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam@cn.mrs", path: ./ruleset/steam_cn.mrs }
  epicgames: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/epicgames.mrs", path: ./ruleset/epicgames.mrs }
  nvidia_cn: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/nvidia@cn.mrs", path: ./ruleset/nvidia_cn.mrs }
  cloudflare: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cloudflare.mrs", path: ./ruleset/cloudflare.mrs }
  cloudflare_cn: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cloudflare@cn.mrs", path: ./ruleset/cloudflare_cn.mrs }
  cloudflare_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cloudflare.mrs", path: ./ruleset/cloudflare_ip.mrs }
  pixiv: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/pixiv.mrs", path: ./ruleset/pixiv.mrs }
  emby: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/domain/Emby.mrs", path: ./ruleset/emby.mrs }
  emby_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/666OS/rules@release/mihomo/ip/Emby.mrs", path: ./ruleset/emby_ip.mrs }
  spotify: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/spotify.mrs", path: ./ruleset/spotify.mrs }
  tiktok: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tiktok.mrs", path: ./ruleset/tiktok.mrs }
  netflix: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs", path: ./ruleset/netflix.mrs }
  netflix_ip: { type: http, interval: 86400, behavior: ipcidr, format: mrs, url: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/netflix.mrs", path: ./ruleset/netflix_ip.mrs }
  adblockmihomolite: { type: http, interval: 86400, behavior: domain, format: mrs, url: "https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs", path: ./ruleset/adblockmihomolite.mrs }

# ==========================================
# 3. 策略组 (Proxy Groups)
# ==========================================
proxy-groups:
  # --- 基础/核心策略组 ---
  - name: 默认节点
    type: select
    proxies: [香港, 日本, 美国, 新加坡, 台湾省, 低倍率节点, 高倍率节点]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png

  - name: 直连
    type: select
    proxies: [DIRECT]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png

  - name: 下载专用
    type: select
    proxies: [DIRECT, 默认节点]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Download.png
    
  - name: 漏网之鱼
    type: select
    proxies: [默认节点, DIRECT]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png

  # --- 应用服务策略组 (Service Configs) ---
  - name: ChatGPT
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png

  - name: Gemini
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Gemini.png

  - name: Grok
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png

  - name: Claude
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Anthropic.png

  - name: 国外AI
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png

  - name: Reddit
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reddit.png

  - name: YouTube
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png

  - name: 国内抖音
    type: select
    proxies: [DIRECT, 默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png

  - name: 知乎
    type: select
    proxies: [DIRECT, 默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Zhihu.png

  - name: 小红书
    type: select
    proxies: [DIRECT, 默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Xiaohongshu.png

  - name: FCM
    type: select
    proxies: [DIRECT, 默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/MiToverG422/Qure@master/IconSet/Color/fcm.png

  - name: Google
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png

  - name: GitHub
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png

  - name: Telegram
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png

  - name: Microsoft
    type: select
    proxies: [默认节点, DIRECT, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png

  - name: Apple
    type: select
    proxies: [默认节点, DIRECT, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png

  - name: Steam
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png

  - name: Twitter
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png

  - name: Pixiv
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pixiv.png

  - name: Spotify
    type: select
    proxies: [默认节点, DIRECT, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png

  - name: TikTok
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png

  - name: Netflix
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png

  - name: Emby
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png

  - name: Cloudflare
    type: select
    proxies: [默认节点, 香港, 日本, 美国, 新加坡, 台湾省]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png

  - name: 广告拦截
    type: select
    proxies: [REJECT, DIRECT]
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png

  # --- 地区与特性分组 (自动测速选择 & 手动选择) ---
  - name: 低倍率节点-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)(0\\.[0-5]|低倍)"
    hidden: true
  - name: 低倍率节点
    type: select
    proxies: [低倍率节点-自动选择]
    use: [my-subscription]
    filter: "(?i)(0\\.[0-5]|低倍)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png

  - name: 高倍率节点-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)([2-9]倍|[2-9]\\.?\\d*x)"
    hidden: true
  - name: 高倍率节点
    type: select
    proxies: [高倍率节点-自动选择]
    use: [my-subscription]
    filter: "(?i)([2-9]倍|[2-9]\\.?\\d*x)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png

  - name: 香港-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)(港|🇭🇰|HK|Hong)"
    hidden: true
  - name: 香港
    type: select
    proxies: [香港-自动选择]
    use: [my-subscription]
    filter: "(?i)(港|🇭🇰|HK|Hong)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png

  - name: 日本-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)(日本|🇯🇵|JP|Japan)"
    hidden: true
  - name: 日本
    type: select
    proxies: [日本-自动选择]
    use: [my-subscription]
    filter: "(?i)(日本|🇯🇵|JP|Japan)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png

  - name: 美国-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)(美|🇺🇸|US|America|States)"
    hidden: true
  - name: 美国
    type: select
    proxies: [美国-自动选择]
    use: [my-subscription]
    filter: "(?i)(美|🇺🇸|US|America|States)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png

  - name: 新加坡-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)(新加坡|狮城|🇸🇬|SG|Singapore)"
    hidden: true
  - name: 新加坡
    type: select
    proxies: [新加坡-自动选择]
    use: [my-subscription]
    filter: "(?i)(新加坡|狮城|🇸🇬|SG|Singapore)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png

  - name: 台湾省-自动选择
    type: url-test
    url: https://g.cn/generate_204
    interval: 600
    use: [my-subscription]
    filter: "(?i)(台湾|🇹🇼|TW|Taiwan)"
    hidden: true
  - name: 台湾省
    type: select
    proxies: [台湾省-自动选择]
    use: [my-subscription]
    filter: "(?i)(台湾|🇹🇼|TW|Taiwan)"
    icon: https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png

# ==========================================
# 4. 路由规则 (Rules)
# ==========================================
rules:
  # --- 本地直连/去广告规则 ---
  - RULE-SET,private,直连
  - RULE-SET,private_ip,直连,no-resolve
  - RULE-SET,DownloadApps,下载专用
  - RULE-SET,steam_cn,直连
  - RULE-SET,epicgames,直连
  - RULE-SET,nvidia_cn,直连
  - RULE-SET,microsoft_cn,直连
  - RULE-SET,cloudflare_cn,直连

  # --- 应用服务分流规则 ---
  - RULE-SET,chatgpt,ChatGPT
  - RULE-SET,gemini,Gemini
  - RULE-SET,grok,Grok
  - RULE-SET,claude,Claude
  - RULE-SET,ai,国外AI
  - RULE-SET,reddit,Reddit
  - RULE-SET,youtube,YouTube
  - RULE-SET,douyin,国内抖音
  - RULE-SET,zhihu,知乎
  - RULE-SET,xiaohongshu,小红书
  - RULE-SET,googlefcm,FCM
  - RULE-SET,google,Google
  - RULE-SET,google_ip,Google,no-resolve
  - RULE-SET,github,GitHub
  - RULE-SET,telegram,Telegram
  - RULE-SET,telegram_ip,Telegram,no-resolve
  - RULE-SET,microsoft,Microsoft
  - RULE-SET,apple,Apple
  - RULE-SET,steam,Steam
  - RULE-SET,twitter,Twitter
  - RULE-SET,twitter_ip,Twitter,no-resolve
  - RULE-SET,pixiv,Pixiv
  - RULE-SET,spotify,Spotify
  - RULE-SET,tiktok,TikTok
  - RULE-SET,netflix,Netflix
  - RULE-SET,netflix_ip,Netflix,no-resolve
  - RULE-SET,emby,Emby
  - RULE-SET,emby_ip,Emby,no-resolve
  - RULE-SET,cloudflare,Cloudflare
  - RULE-SET,cloudflare_ip,Cloudflare,no-resolve
  - RULE-SET,adblockmihomolite,广告拦截

  # --- 兜底规则 ---
  - RULE-SET,google,默认节点
  - RULE-SET,gfw,默认节点
  - GEOIP,LAN,DIRECT,no-resolve
  - RULE-SET,cn,DIRECT
  - RULE-SET,cn_ip,DIRECT,no-resolve
  - MATCH,漏网之鱼

