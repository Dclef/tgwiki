if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const i=e=>a(e,f),b={module:{uri:f},exports:r,require:i};s[f]=Promise.all(c.map((e=>b[e]||i(e)))).then((e=>(d(...e),r)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"e38d923080bb7fed80cf513cc93c671b"},{url:"adddescription.html",revision:"6ff27c53988f7be967ce4a63fa7439e1"},{url:"archive.html",revision:"8b2891fa75b2c45ac70539cb2e67559f"},{url:"assets/404.html-da017051.js",revision:"927daba4745b2ed66b269b1e4f0b4900"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-5c4a6b25.js",revision:"7084142e2f1f336de8607d1c21f6f5fa"},{url:"assets/adddescription.html-82acf01f.js",revision:"1ea41ad993eb543fbf286a41b815a55b"},{url:"assets/app-9965cb02.js",revision:"e1a337a96f0500ec05f4b1c0f8ff8283"},{url:"assets/archive.html-0698d95d.js",revision:"f60bc6f1a917c7e27c700b9e2841f068"},{url:"assets/archive.html-d81faf09.js",revision:"0c3d922f2d4686c926dad48f07b62b33"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/banned.html-a86d97db.js",revision:"b1689e01ac898ed9fc620bf056014b06"},{url:"assets/banned.html-fc6f356f.js",revision:"a95820c6635a7b3ae956fc19f6185cf5"},{url:"assets/comment.html-6f6f823a.js",revision:"9a513a0f11d48addf473b7db6d10291e"},{url:"assets/comment.html-ad3cc224.js",revision:"64c8984b788efdcfe83852c8a7023eb6"},{url:"assets/contact.html-36d77fd6.js",revision:"87aa9ee1aaedc5225c1e0de4a44f3222"},{url:"assets/contact.html-fa4906ac.js",revision:"e63c6c1608908ea3cef320e4e4b9030c"},{url:"assets/createchannel.html-1f2044d2.js",revision:"d9c3f52a5941882d8c53c4755cc012af"},{url:"assets/createchannel.html-a48dfaa7.js",revision:"04ca7cee216b7011a4b2847552cdddb3"},{url:"assets/creategroup.html-49eab337.js",revision:"e82a42aaf2f944f4cf95d880cd6a8d9b"},{url:"assets/creategroup.html-5deda219.js",revision:"9572f759e08180c70cdbbdbc02244bb2"},{url:"assets/createrobot.html-7035ad5c.js",revision:"d452f8943b3b4e803508c941457aae4c"},{url:"assets/createrobot.html-74504502.js",revision:"809467db00ed990636c109672600948c"},{url:"assets/createsticker.html-36e3c173.js",revision:"32a9fdd2e62285f3abe5a6a81c07bf09"},{url:"assets/createsticker.html-771284b4.js",revision:"7f4001f8c6b39707c4a53e02434b9870"},{url:"assets/dc.html-0ddb3048.js",revision:"888fd4c0b816a7507ddeb34fa4e5329f"},{url:"assets/dc.html-99041e15.js",revision:"efffe6bf3a0ff9a04af5b12088329454"},{url:"assets/deleteaccount.html-344ad6fc.js",revision:"ae553f038ff55bbe67f460a9a680bdca"},{url:"assets/deleteaccount.html-99525970.js",revision:"d4b32ffb8dbc8bbfd07ac183efc7716a"},{url:"assets/divide.html-4aacebad.js",revision:"fa06712c6b5b9ca57cf559ca5d6aec5b"},{url:"assets/divide.html-d1a37c30.js",revision:"19c1a46963a0fbe5e5d0862ee04f3e0f"},{url:"assets/download.html-03eef866.js",revision:"1cacbf0bec3d2b7cec5a5bbeaa912f15"},{url:"assets/download.html-2621ca59.js",revision:"89f0516cdddf31c9f16bf141141f455f"},{url:"assets/encrypt.html-7fb57e79.js",revision:"2124a471366d22832ec4352ca71188e6"},{url:"assets/encrypt.html-970d3c71.js",revision:"7a294592f739fbb547dd606602ef576e"},{url:"assets/faq.html-654506b3.js",revision:"984339e7187bbb39ea94ce2f276c89a1"},{url:"assets/faq.html-c53c7720.js",revision:"10c58a0e9cdb6186fda102a97c442d21"},{url:"assets/favourite.html-1269319d.js",revision:"481054ad5d060ad09ecec2e159978b56"},{url:"assets/favourite.html-d586df40.js",revision:"60d5489f4508a2dcaee5eb9f10680414"},{url:"assets/findadmin.html-e45a5cde.js",revision:"f4eee13118a7e6ad913b0acab0f468ce"},{url:"assets/findadmin.html-f6a1cb9a.js",revision:"cd7f38f6979bdf0d507489c9bd98a688"},{url:"assets/guide.html-0dae060d.js",revision:"c3ec7df57ae7d0d430007cbdf2b556f2"},{url:"assets/guide.html-7eb3d9aa.js",revision:"1cc3cbe93901fae2231f06aa22b5e3ee"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-53c5ae61.js",revision:"fdb4ff3314fb009795fd933b05be198f"},{url:"assets/index.html-d9bcb59c.js",revision:"073a33b0bfe298b23d7790e61f0a5d23"},{url:"assets/language.html-5b51645a.js",revision:"ec90134ff88da69fe6f83d5251d61837"},{url:"assets/language.html-aabab916.js",revision:"cfdbea3f044ec736a9f0967db9196595"},{url:"assets/limit.html-86f3a2b1.js",revision:"5fbcb8ec241ba1cc8c4cd98d1bfac354"},{url:"assets/limit.html-da8d617f.js",revision:"4556d57c0a64c125b56c5a5114f3aed0"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-12ce91ac.js",revision:"f41ed217f5327c829a23dbe3ac2e31a2"},{url:"assets/managegroup.html-36c3d1ed.js",revision:"eb2bcd0aeb8d2555aa0e0f88842f4628"},{url:"assets/multiaccount.html-43e43ab7.js",revision:"6002ab2b9e1fe27c5223bfe590735197"},{url:"assets/multiaccount.html-55b12827.js",revision:"b1dde3fb06a67dfb9ebf3caf27adf143"},{url:"assets/nearby.html-793c116e.js",revision:"44a58e4b127cd37460dc204c1c09301c"},{url:"assets/nearby.html-9897e40d.js",revision:"2b8d81cee2c1d5e80407a5c5679b112c"},{url:"assets/poll.html-3db13b58.js",revision:"1e39643c152928638dc33cd9d13d9087"},{url:"assets/poll.html-bc258634.js",revision:"9b8c4135f41de9743520cd65cad0eda8"},{url:"assets/pornios.html-4e9f2ed2.js",revision:"f588b6fd157bedfcfc27e0eeab8d3ea1"},{url:"assets/pornios.html-d9fcb2f9.js",revision:"7642ec3eeea595fa36fe5888cfbde58d"},{url:"assets/premium.html-b3ff97a6.js",revision:"c1a4e68391be0190edc279ecaea026d4"},{url:"assets/premium.html-f1869377.js",revision:"12adc88d8c16aec9a6899bf2393113df"},{url:"assets/privacy.html-1ce3c26f.js",revision:"19755bc5a9e96e386abeb6f77ba98ee4"},{url:"assets/privacy.html-b1d6e004.js",revision:"3e87eb00bc377f019313239f892a9c1e"},{url:"assets/proxy.html-30d0581f.js",revision:"69b8f857be9a371c76c7d0f44ff5dad1"},{url:"assets/proxy.html-9d157cbe.js",revision:"e519fe767c36614cb5e1e71e514fb710"},{url:"assets/robot.html-561b222f.js",revision:"4062b6b469ac3d0526b241edf8b091bd"},{url:"assets/robot.html-d3914d22.js",revision:"f5bfde7fa1185051f6552b0ab65cc4c2"},{url:"assets/scan.html-09215a45.js",revision:"ff98d42a9bfdf1b4daefa3b26d0e6114"},{url:"assets/scan.html-ff53e073.js",revision:"89fc909c57acf432c8298317c6a29b3c"},{url:"assets/search.html-2dfe0929.js",revision:"afe6cdf6a62d8f013c768d30f1133783"},{url:"assets/search.html-ac7b8b0c.js",revision:"adb07e0d1a22a78f828b3a1d0bcb6001"},{url:"assets/slowmode.html-2068b050.js",revision:"cf73c737c0978c711597bdd1ddecb2e6"},{url:"assets/slowmode.html-ac73d20e.js",revision:"ff934a1ccd87ff4d83313ab7eb3759b1"},{url:"assets/spam.html-2b377f48.js",revision:"7cf62af4167f53e68156524b514a67fe"},{url:"assets/spam.html-41131764.js",revision:"0cdcb6cd53e81e05ebd7361cdf716986"},{url:"assets/speakaschannel.html-6639fd87.js",revision:"46f203f446a9dc0e48224ed47a0e2834"},{url:"assets/speakaschannel.html-d0b9f000.js",revision:"74579f028f829270108c597e59003ff7"},{url:"assets/style-a1392647.css",revision:"ae3d43c3a2dd00ecc90e43c074d70d09"},{url:"assets/telegraph.html-e1338cb3.js",revision:"529c9d524fc839a7ecdab200e40f871e"},{url:"assets/telegraph.html-f6407f21.js",revision:"eb31d87fc5698df9aadb2fe884471afd"},{url:"assets/term.html-9e658090.js",revision:"645c2c879bdcd8390ab1b6d738b80bff"},{url:"assets/term.html-f7fe595c.js",revision:"37220ad53ec2a3c78d5882c5df03b86e"},{url:"assets/theme.html-10c95592.js",revision:"dbc4ac1114546141da02a4063072de48"},{url:"assets/theme.html-9cd8d7f6.js",revision:"b67437cdf3af545b3221231935411b65"},{url:"assets/thirdparty.html-4fb30bdb.js",revision:"84d3781e2fd421587225df823e9b46e6"},{url:"assets/thirdparty.html-e94ca7bc.js",revision:"3e52bca07ff587870a1eea5372cb9b93"},{url:"assets/translate.html-12a47a17.js",revision:"b838039042872edc2bdfd6c18b1ee01e"},{url:"assets/translate.html-44522a41.js",revision:"bc7453512a9083e8137c14c40f47013c"},{url:"banned.html",revision:"c74c2de360bc9c63e2db918644dbfb0e"},{url:"comment.html",revision:"a90d5b5f1cdcbd033b39a7005785b62e"},{url:"contact.html",revision:"6673b51b360c447256db99e99913136f"},{url:"createchannel.html",revision:"879b6bdfac73621dec5769e6246cb112"},{url:"creategroup.html",revision:"7c6df819e06384d818417f18bf952c4f"},{url:"createrobot.html",revision:"ffae0357f8465bbbcaa51c493b451a73"},{url:"createsticker.html",revision:"c6af4700b1c92c4c3aec77245e5ed9a9"},{url:"dc.html",revision:"9de1caad859a6469fbfd0b3b904a081d"},{url:"deleteaccount.html",revision:"7dff8787435f711e298cb8d194810534"},{url:"divide.html",revision:"e9e095bcf56339803d7826fe0edef4ba"},{url:"download.html",revision:"393ef9ab32c6a613f8b38a44170c7090"},{url:"encrypt.html",revision:"03f5ab8af2238791dc6dea07c514dc76"},{url:"faq.html",revision:"4efda7ce057d3d0226f767514e88e913"},{url:"favourite.html",revision:"ea6b0a8cea3dd79bd51ddb703cf9e116"},{url:"findadmin.html",revision:"7b9556665c69a5a827d59f291749ed3a"},{url:"guide.html",revision:"a52d7e1c5ba8c387ac83cf94be261163"},{url:"index.html",revision:"9fe03f90d466ac6fa611d48cf781fb97"},{url:"language.html",revision:"4e6fabfc23443cf01146705f475df4e3"},{url:"limit.html",revision:"bd41e83b5014c9cd3eb980047e4a972c"},{url:"managegroup.html",revision:"11acd6ffb18b661dc8e97da64db82bf7"},{url:"multiaccount.html",revision:"0e0521ec9dbbd1ccd9b1cf087a3ba4b7"},{url:"nearby.html",revision:"e93231a38a2bd95a7118d1330ed7b4c1"},{url:"poll.html",revision:"f9087ebde30cd894ef76f5dc6a784b35"},{url:"pornios.html",revision:"21a668fff44edc624fbc54eb7de2ca79"},{url:"premium.html",revision:"30d885f2729291f5490ad81fe4814e90"},{url:"privacy.html",revision:"e2095627b152dcf73802497c3b73ce80"},{url:"proxy.html",revision:"1eef879db9d8e366299679b9de4b6faf"},{url:"robot.html",revision:"056ead1811b1a1290c49347c9a157d62"},{url:"scan.html",revision:"6f35fb5d5ca61146f4ced688740991b7"},{url:"search.html",revision:"b3fde3f143bbb3af5dd31c0ebc4310a5"},{url:"slowmode.html",revision:"dcd1a421a9b86a58d444480ff5e4fd00"},{url:"spam.html",revision:"a062bff68bb0fd2ededd480c35d50137"},{url:"speakaschannel.html",revision:"4d8f3321afae65424dbd629dc5f07c07"},{url:"telegraph.html",revision:"97beaf6b9df02c6f2505cf03baf30165"},{url:"term.html",revision:"116c21dca033b10565c1f68746922223"},{url:"theme.html",revision:"971d1d33e8cc3499d87f6de1d7486ad2"},{url:"thirdparty.html",revision:"5259aef7c2bac7ec7b44c6ee012d9fe0"},{url:"translate.html",revision:"90d979939eaa37304744fac321c17f20"}],{})}));
