import{_ as n,r as o,o as i,c as s,b as a,d as e,e as r,a as l}from"./app-5288b126.js";const c={},d=l('<h1 id="telegram-dc说明" tabindex="-1"><a class="header-anchor" href="#telegram-dc说明" aria-hidden="true">#</a> Telegram DC说明</h1><p>DC：Data Centers，数据中心，Telegram在世界各地部署有5个数据中心：</p><ul><li>DC1：美国-迈阿密</li><li>DC2：荷兰-阿姆斯特丹</li><li>DC3：美国-迈阿密</li><li>DC4：荷兰-阿姆斯特丹</li><li>DC5：新加坡</li></ul><h2 id="如何知道自己账号属于哪个dc" tabindex="-1"><a class="header-anchor" href="#如何知道自己账号属于哪个dc" aria-hidden="true">#</a> 如何知道自己账号属于哪个DC?</h2>',4),h={href:"https://core.telegram.org/api/datacenter",target:"_blank",rel:"noopener noreferrer"},m=a("li",null,"但实际上并非如此，账号属于哪个DC实际上是由注册账号时选择的国家/地区决定的，比如+86的号码大都是在DC5，+1的号码大都是在DC1",-1),_=a("li",null,"DC是注册时候就决定了，无法更换，更换手机号也不能更换DC，如果想要更换DC，只有注销重新注册新账号",-1),C={href:"https://t.me/Sean_Bot",target:"_blank",rel:"noopener noreferrer"},D={href:"https://t.me/WooMaiBot",target:"_blank",rel:"noopener noreferrer"},p={href:"https://t.me/nmnmfunBot",target:"_blank",rel:"noopener noreferrer"},g=l('<details class="custom-container details"><summary>附：注册手机号区号对应的Telegram DC</summary><p><img src="https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png" alt="image.png"></p></details><h2 id="代理单独为-telegram-设置策略组有用吗" tabindex="-1"><a class="header-anchor" href="#代理单独为-telegram-设置策略组有用吗" aria-hidden="true">#</a> 代理单独为 Telegram 设置策略组有用吗?</h2><ol><li>你的账号属于哪个DC，你的数据（消息、图片、文件等）也就存放在哪个DC，你给别人私聊和群里发送媒体，则别人是从你的账号所在的DC下载在客户端上才能看到的</li><li>假如你的账号在DC5，不管别人的账号在DC几，查看你发送的媒体都是从DC5上下载. 你去查看别人发的文件也是如此的，别人的账号在DC1，你的账号在DC5，那你查看他发送的媒体也是从DC1下载的</li><li>理解了以上两点，你就会发现单独为Telegram设置策略组是没有意义的，因为群里的人，有的在DC1，有的在DC5，你把Telegram策略设为SG，那查看DC1发送的媒体也就要从SG绕一下，不过感知差别不明显</li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>Telegram的数据中心都是土豆服务器，时不时会炸，如果大家都发不出去消息那就是Telegram服务器炸了。</p>',5);function f(u,b){const t=o("ExternalLinkIcon");return i(),s("div",null,[d,a("ol",null,[a("li",null,[e("根据"),a("a",h,[e("Telegram 官方文档说明"),r(t)]),e("，账号属于哪个DC是由注册时的IP决定的")]),m,_,a("li",null,[e("可以用机器人Bot查询自己账号属于哪个DC："),a("a",C,[e("@Sean_Bot"),r(t)]),e(),a("a",D,[e("@WooMaiBot"),r(t)]),e(),a("a",p,[e("@nmnmfunBot"),r(t)])])]),g])}const B=n(c,[["render",f],["__file","dc.html.vue"]]);export{B as default};
