if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const b=e=>a(e,r),t={module:{uri:r},exports:i,require:b};s[r]=Promise.all(c.map((e=>t[e]||b(e)))).then((e=>(d(...e),i)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"9c42394fb114723bab926e277108dd70"},{url:"adddescription.html",revision:"deae830820e3afa3e995f1306887898e"},{url:"archive.html",revision:"ed92fbd2ba0bcf9ba36b1230c5eae67e"},{url:"assets/404.html-55c50cda.js",revision:"90f5eb8858c4bd6e930cd05c7e606c19"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/adddescription.html-976ecc06.js",revision:"40a2ad2c02c5336cb48c77c74f854f77"},{url:"assets/adddescription.html-dc0a036d.js",revision:"08233e1e831349c361f6ef99df3bc355"},{url:"assets/app-45d8afd5.js",revision:"43954c8ccd4bda9609aeabf0ed2b2117"},{url:"assets/archive.html-1e378ffb.js",revision:"7a6b47466f16b4ee4732b2be82c861c0"},{url:"assets/archive.html-a0e8c7c8.js",revision:"2f96fae8f2d33afc36ce37ea7b1c8cab"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/banned.html-3cf8d325.js",revision:"df684d1b2aa2dfc3e3115a8e121b405d"},{url:"assets/banned.html-640539b0.js",revision:"e71a45290ed61a675440a82c4c21c005"},{url:"assets/comment.html-71fa8d05.js",revision:"b91d3399a1e607be8cb51ef707ccfb9c"},{url:"assets/comment.html-b75136ce.js",revision:"6e9cf8e8cc49e5b6c2545f42f3ceae2c"},{url:"assets/contact.html-2b928aa6.js",revision:"474541ccee380346b2d998b99bc0ac7d"},{url:"assets/contact.html-b1cce4c3.js",revision:"8b30612bb0516dc7e252dc6cbd9dd71e"},{url:"assets/createchannel.html-444e752c.js",revision:"54b3f70c3d06d0e73646cc750037e17f"},{url:"assets/createchannel.html-4d93d097.js",revision:"dad02aec6f2899c932a1110c1a08d35c"},{url:"assets/creategroup.html-1edac5fc.js",revision:"aa95c4c421342a455d9a1e612438ccb4"},{url:"assets/creategroup.html-cb74706e.js",revision:"e751d235ef49411f15ef32591813f587"},{url:"assets/createrobot.html-6bf714c9.js",revision:"1dba7c630dca44f48d52d050c2d2967b"},{url:"assets/createrobot.html-ed55b2a2.js",revision:"79a4ef626acd17496717d60fbad68fb0"},{url:"assets/createsticker.html-3d2341bb.js",revision:"c758e39d7d45f60714a1c7d404186e63"},{url:"assets/createsticker.html-bc9588d1.js",revision:"63836a219a2765f7f052c5ac0061ebd2"},{url:"assets/dc.html-301459a3.js",revision:"a5a43927ffbc6262da1c426463f8aa12"},{url:"assets/dc.html-58d3f861.js",revision:"2f7a0556f258533a54b912962a61802a"},{url:"assets/deleteaccount.html-9a5c6aca.js",revision:"ac5bfc9d46f044cb01b8b594966fc402"},{url:"assets/deleteaccount.html-de62f410.js",revision:"4589bd99f0fc0a74dd11445ed322a151"},{url:"assets/divide.html-014909b1.js",revision:"6b108efc666f921b1c91691c56c4e6c2"},{url:"assets/divide.html-1cda537f.js",revision:"efad6e7482b8d4ff1d83cffb83569bfa"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/download.html-e20d83b0.js",revision:"eeebc425a4c96189a5c966428379cfb0"},{url:"assets/download.html-ff3a527e.js",revision:"8fce1d5d5172256555c5565d07d4a059"},{url:"assets/encrypt.html-4fe53abe.js",revision:"d62a1d97e1ba07228c5cd2abb3e44797"},{url:"assets/encrypt.html-a6b73882.js",revision:"37244250876c02012b88dc72ccbdae52"},{url:"assets/faq.html-3d5b32d5.js",revision:"3f5aa663f219918c8e67c38ba44ddc3c"},{url:"assets/faq.html-565924d6.js",revision:"08a78125ae3061a25bb94ce646e7f7b9"},{url:"assets/favourite.html-67d3a1ac.js",revision:"4e6dfa92859204a68868db11efda0100"},{url:"assets/favourite.html-d88faf59.js",revision:"4e1877ff31b246a6a33bcd11b0b03f99"},{url:"assets/findadmin.html-7b048e56.js",revision:"021a89400034178b4cdc9f4600755115"},{url:"assets/findadmin.html-8e73f344.js",revision:"ea04ad7758934e7e4aea92f22e7b5129"},{url:"assets/guide.html-45375f56.js",revision:"b6db162ab87e2b33a25d3ff06cb4f8d0"},{url:"assets/guide.html-dc94b54f.js",revision:"d34decd2dc1cae17aba8825831cdb941"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-6b3d2eec.js",revision:"c6519df65901e4f9be513d7e9dac5488"},{url:"assets/index.html-738b32fd.js",revision:"a23fee8cc1e1417d3c39ea5accc57d29"},{url:"assets/language.html-33b89ca7.js",revision:"d789037d294608c9e37abaa3613e08f6"},{url:"assets/language.html-dcefb48b.js",revision:"d2e638b2a23d77a8cb50588d8befd578"},{url:"assets/limit.html-19c7c27e.js",revision:"81db3f740474cebcc6e9c8a91d13666e"},{url:"assets/limit.html-7116e93f.js",revision:"7495fbad158da29ecd7e98dbe6570ffb"},{url:"assets/logo.png",revision:"d6a8011f08e128f9673db7ca7b560b13"},{url:"assets/managegroup.html-3b2201de.js",revision:"32c07b973ae11faca334cdde5035cbc5"},{url:"assets/managegroup.html-a980a17d.js",revision:"1e0f984e38d3ec2418a4bf2c1f1a89fa"},{url:"assets/multiaccount.html-0e595a0b.js",revision:"7a30111f2b2a41537d22fe041e9ef9bd"},{url:"assets/multiaccount.html-af14e450.js",revision:"6e5dd4c6933dbe059e769de7289907e7"},{url:"assets/nearby.html-27b0c0f3.js",revision:"1358afab3ff3327809eb1ddff4cc7cea"},{url:"assets/nearby.html-bfc7d8b8.js",revision:"79627e55af43f468082aa38a8450713a"},{url:"assets/poll.html-30255082.js",revision:"f00c3789c2055fe71c9296095f26ee2e"},{url:"assets/poll.html-92a7a201.js",revision:"94979fda71390c22c308289ca075605a"},{url:"assets/pornios.html-d43e9436.js",revision:"4cfe1a02bfc0664e3bfd6c752d09498c"},{url:"assets/pornios.html-e004a3b6.js",revision:"5dc8bf0abe1e8ec7d6b487e4fd8b27de"},{url:"assets/premium.html-5204256e.js",revision:"e972db793e1be96ce58f6bcdbd4fda44"},{url:"assets/premium.html-87d2ad3e.js",revision:"6a501eafe499b2aeb40e77f92dc8fc15"},{url:"assets/privacy.html-7f4fb626.js",revision:"fb0d18d76beead34d597504a68e2408c"},{url:"assets/privacy.html-9dfd645d.js",revision:"94cc5ecb6c808a4ecabcb25ff98f3fb0"},{url:"assets/proxy.html-404ed08f.js",revision:"066c614fcea0faf72cd917617bd527ef"},{url:"assets/proxy.html-b632a2f4.js",revision:"35bda1c2de9f3c5a97fe76200cb29503"},{url:"assets/robot.html-14d9d2a8.js",revision:"b3c54dfed09842a2b815da04d3df9127"},{url:"assets/robot.html-33bc1d31.js",revision:"20672563b247b4de1646204c026f41a2"},{url:"assets/scan.html-93f0da12.js",revision:"e5237a0981e23dc16f028f02c5c604f5"},{url:"assets/scan.html-e5924107.js",revision:"962af7e709cb504a6bcad8f339126482"},{url:"assets/search.html-efc93417.js",revision:"4b34489b03be64c1e400de0288afdff1"},{url:"assets/search.html-f492b13c.js",revision:"74de5aa00ff2d231b1afcf39750013f5"},{url:"assets/slowmode.html-2065972b.js",revision:"2689d5bc0b546df84b8114caa8387883"},{url:"assets/slowmode.html-779ad7be.js",revision:"15d0dfd4a5b34ce864a752fd240ba5b6"},{url:"assets/spam.html-3c8aaa5b.js",revision:"31a33ca8d2b6d9e147fcf10a06d8f9e5"},{url:"assets/spam.html-b427cac0.js",revision:"8f30ee1f0c6ecf3b8fd9f611267be8f4"},{url:"assets/speakaschannel.html-8399b330.js",revision:"cfa3d079cb033c3412c38ec76d2db577"},{url:"assets/speakaschannel.html-b2e0d1fa.js",revision:"f5fa97505eb5754a3f8e6b0dbe24d554"},{url:"assets/style-9466b0a4.css",revision:"4eb742470f05c4fbfd96ec378080183c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/telegraph.html-36414d9c.js",revision:"c99b9db6a39430f536eb3628c233e7f8"},{url:"assets/telegraph.html-7b065efa.js",revision:"4e4d36f3dbe3b6f0c18a2d918507297f"},{url:"assets/term.html-7c5f7863.js",revision:"169e0604142b5ca0f59b0b16633a0aa7"},{url:"assets/term.html-7d70b561.js",revision:"d87aed3cc1b6de0192095a837ecc0045"},{url:"assets/theme.html-2469a81d.js",revision:"34dd31c7d529314f33264161bc9cefd1"},{url:"assets/theme.html-ce602ab6.js",revision:"c806e3dcbb6610a13ee32ae2b1fdef86"},{url:"assets/thirdparty.html-216f0360.js",revision:"dce55ffb064b0a923ca7b075c49463ee"},{url:"assets/thirdparty.html-db5940e8.js",revision:"b5359ce78505aab83c2732b0f7daccd7"},{url:"assets/translate.html-a0146eb0.js",revision:"0f536460d89747029d8e6fb1ac60c362"},{url:"assets/translate.html-c61e8573.js",revision:"827ea3615f72a10f9468749602c34ac5"},{url:"banned.html",revision:"ce00391f78766043376c7ad64090c3fb"},{url:"comment.html",revision:"f9d649ca2722a0499a3a8d7ba393cb1b"},{url:"contact.html",revision:"31cc85d6de1c18a330ade32d2ddcfdd7"},{url:"createchannel.html",revision:"5b093703eee2539e24796d98c96ead4f"},{url:"creategroup.html",revision:"038d701429bf5caf6aabaad8f724bda4"},{url:"createrobot.html",revision:"5174b23b66e06145e7dff4441873f0b0"},{url:"createsticker.html",revision:"cb5d9f1e4418223ef318118cec6104ee"},{url:"dc.html",revision:"019b39f5d0a6c7a088145b4d30e4189f"},{url:"deleteaccount.html",revision:"3b8eab45f5fd14ce104f59bc54b14075"},{url:"divide.html",revision:"75a6cd73d9c3f7e5242bf48b7cc29337"},{url:"download.html",revision:"e1deaf1d1fa2bca6cb08a1039e89ec6c"},{url:"encrypt.html",revision:"6fc2c083c79479d3d096ec3a80e03987"},{url:"faq.html",revision:"51ae18a6a09b3df1d144f918a008573f"},{url:"favourite.html",revision:"348f179b44849d1e40b4a4b00bca6f1a"},{url:"findadmin.html",revision:"9f60b80117fc38f50ac7ec5f84b272d6"},{url:"guide.html",revision:"88e7d4728d0b2ba31e4c7dd7f43f61b8"},{url:"index.html",revision:"4a48d5d49b9ccf345836ba83f7918d58"},{url:"language.html",revision:"65a18e21dbfde6dc74c09c7625fae50b"},{url:"limit.html",revision:"5c7c7692a95d22b08c5e9da5c8241f1b"},{url:"managegroup.html",revision:"a4734d87367f1b98bc7cfb59bce020c9"},{url:"multiaccount.html",revision:"d7c02f246c0a11ceeef348bc50c7fdd9"},{url:"nearby.html",revision:"8efbf964262bc586de08e22750be6452"},{url:"poll.html",revision:"799a63756e2da7f9a1a16fb3e9580586"},{url:"pornios.html",revision:"bb9884c531c1b20e9f16db39093a89bf"},{url:"premium.html",revision:"34964ee69ad003dd79c5ac5be4c080e1"},{url:"privacy.html",revision:"247486caeb56e78408866b4297e5882d"},{url:"proxy.html",revision:"6040405dad802cb652df89ae1603ee8e"},{url:"robot.html",revision:"be1f6a11e37c9f8edb4a5b742618e33f"},{url:"scan.html",revision:"dd312d551b509fd70262819112b48fa6"},{url:"search.html",revision:"d686077ee76820d7053cd9702f9f3287"},{url:"slowmode.html",revision:"8b9e2b496b20cc2215ae85d1206ce473"},{url:"spam.html",revision:"7a043ec17fddb58518dc6cd34c887fda"},{url:"speakaschannel.html",revision:"829bbdd0b963a67fa8694049e3099fad"},{url:"telegraph.html",revision:"447e3de504944f93d314e7b8907ed2f0"},{url:"term.html",revision:"52935fef02db9697d76ff418ad635df7"},{url:"theme.html",revision:"df5a367748773c9ad9d8ce5785d49530"},{url:"thirdparty.html",revision:"aa83a468a9716781d0a4eae62a3d4973"},{url:"translate.html",revision:"79a4dde3e0be34182c414ca77b074f5d"}],{})}));
