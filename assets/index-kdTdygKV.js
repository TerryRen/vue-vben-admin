var pe=Object.defineProperty,me=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var C=Math.pow,F=(r,e,t)=>e in r?pe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,S=(r,e)=>{for(var t in e||(e={}))Me.call(e,t)&&F(r,t,e[t]);if(q)for(var t of q(e))ye.call(e,t)&&F(r,t,e[t]);return r},A=(r,e)=>me(r,be(e));import{p as _,f as ke,c as xe,w as Se}from"./entry/index-C24idMx3-1709028881000.js";import{E as ve}from"./antd-BS7GgtZr.js";import{d as Ee,f as we,c as Ae,h as De,w as Te,Z as V,_ as Ce,a8 as Ie,ad as Re,aa as Pe,ac as Le,u as D,ab as je,$ as B,a1 as N,a9 as _e,ae as Ne,aj as Oe,ak as Ue}from"./vue-COhTiP8A.js";const W=(r,e)=>r.push.apply(r,e),I=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),H=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var We={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const Z=2050,X=1e3,$e=We,ze=10,Ye=1e4,se=10,ne=50,re=20,ae=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Ge=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,qe=/^[A-Z\xbf-\xdf]+$/,ie=/^[^a-z\xdf-\xff]+$/,Fe=/^[a-z\xdf-\xff]+$/,Ve=/^[^A-Z\xbf-\xdf]+$/,Be=/[a-z\xdf-\xff]/,He=/[A-Z\xbf-\xdf]/,Ze=/[^A-Za-z\xbf-\xdf]/gi,Xe=/^\d+$/,z=new Date().getFullYear(),Ke={recentYear:/19\d\d|200\d|201\d|202\d/g},oe=[" ",",",";",":","|","/","\\","_",".","-"],Je=oe.length;class Qe{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return I(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),c=s.exec(i);if(c!=null){const o=this.mapIntegersToDayMonthYear([parseInt(c[1],10),parseInt(c[3],10),parseInt(c[4],10)]);o!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:c[2],year:o.year,month:o.month,day:o.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-z);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const c=e.slice(a,+i+1||9e9);if(s.exec(c)){const o=[],l=c.length;if($e[l].forEach(([f,p])=>{const m=this.mapIntegersToDayMonthYear([parseInt(c.slice(0,f),10),parseInt(c.slice(f,p),10),parseInt(c.slice(p),10)]);m!=null&&o.push(m)}),o.length>0){let f=o[0],p=n(o[0]);o.slice(1).forEach(m=>{const d=n(m);d<p&&(f=m,p=d)}),t.push({pattern:"date",token:c,i:a,j:i,separator:"",year:f.year,month:f.month,day:f.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const c=e[a];if(c>99&&c<X||c>Z)return null;c>31&&(s+=1),c>12&&(t+=1),c<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(X<=a&&a<=Z){const c=this.mapIntegersToDayMonth(i);return c!=null?{year:a,month:c.month,day:c.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],c=this.mapIntegersToDayMonth(i);if(c!=null)return{year:this.twoToFourDigitYear(a),month:c.month,day:c.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const w=new Uint32Array(65536),et=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,c=t,o=t;for(;o--;)w[r.charCodeAt(o)]|=1<<o;for(o=0;o<s;o++){let l=w[e.charCodeAt(o)];const h=l|i;l|=(l&a)+a^a,i|=~(l|a),a&=l,i&n&&c++,a&n&&c--,i=i<<1|1,a=a<<1|~(h|i),i&=h}for(o=t;o--;)w[r.charCodeAt(o)]=0;return c},tt=(r,e)=>{const t=e.length,s=r.length,n=[],a=[],i=Math.ceil(t/32),c=Math.ceil(s/32);for(let d=0;d<i;d++)a[d]=-1,n[d]=0;let o=0;for(;o<c-1;o++){let d=0,b=-1;const v=o*32,y=Math.min(32,s)+v;for(let g=v;g<y;g++)w[r.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const x=w[e.charCodeAt(g)],k=a[g/32|0]>>>g&1,E=n[g/32|0]>>>g&1,Y=x|d,G=((x|E)&b)+b^b|x|E;let R=d|~(G|b),L=b&G;R>>>31^k&&(a[g/32|0]^=1<<g),L>>>31^E&&(n[g/32|0]^=1<<g),R=R<<1|k,L=L<<1|E,b=L|~(Y|R),d=R&Y}for(let g=v;g<y;g++)w[r.charCodeAt(g)]=0}let l=0,h=-1;const f=o*32,p=Math.min(32,s-f)+f;for(let d=f;d<p;d++)w[r.charCodeAt(d)]|=1<<d;let m=s;for(let d=0;d<t;d++){const b=w[e.charCodeAt(d)],v=a[d/32|0]>>>d&1,y=n[d/32|0]>>>d&1,g=b|l,x=((b|y)&h)+h^h|b|y;let k=l|~(x|h),E=h&x;m+=k>>>s-1&1,m-=E>>>s-1&1,k>>>31^v&&(a[d/32|0]^=1<<d),E>>>31^y&&(n[d/32|0]^=1<<d),k=k<<1|v,E=E<<1|y,h=E|~(g|k),l=k&g}for(let d=f;d<p;d++)w[r.charCodeAt(d)]=0;return m},st=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?et(r,e):tt(r,e)},nt=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},rt=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=nt(r,a,t);if(Math.abs(r.length-a.length)>i)return!1;const c=st(r,a),o=c<=i;return o&&(s=c),o});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var K={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},O={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class P{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new P([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<e.length;a+=1){const i=e.charAt(a);n.hasChild(i)||n.addChild(i),n=n.getChild(i)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new P([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var J=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class at{constructor(){this.matchers={},this.l33tTable=K,this.trieNodeRoot=J(K,new P),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=O,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=J(e.l33tTable,new P)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(O).forEach(s=>{if(s in e){const n=s;Object.keys(O[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=H(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),H(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}}const u=new at;class it{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>A(S({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class ot{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const a=this.substr.charAt(n);if(s=s.getChild(a),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:a,lastSubLetter:i,consecutiveSubCount:c}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:a});return}const o=[...this.getAllPossibleSubsAtIndex(s)];let l=!1;for(let h=s+o.length-1;h>=s;h-=1){const f=o[h-s];if(f.isTerminal()){if(i===f.parents.join("")&&c>=3)continue;l=!0;const p=f.subs;for(const m of p){this.buffer.push(m);const d=a.concat({i:n,letter:m,substitution:f.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:h+1,subIndex:n+m.length,changes:d,lastSubLetter:f.parents.join(""),consecutiveSubCount:i===f.parents.join("")?c+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!l){const h=this.substr.charAt(s);this.buffer.push(h),this.helper({onlyFullSub:e,isFullSub:t&&!l,index:s+1,subIndex:n+1,changes:a,lastSubLetter:i,consecutiveSubCount:c}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const ct=(r,e,t)=>new ot({substr:r,limit:e,trieRoot:t}).getAll(),lt=(r,e,t)=>{const n=r.changes.filter(l=>l.i<e).reduce((l,h)=>l-h.letter.length+h.substitution.length,e),a=r.changes.filter(l=>l.i>=e&&l.i<=t),i=a.reduce((l,h)=>l-h.letter.length+h.substitution.length,t-e+n),c=[],o=[];return a.forEach(l=>{c.findIndex(f=>f.letter===l.letter&&f.substitution===l.substitution)<0&&(c.push({letter:l.letter,substitution:l.substitution}),o.push(`${l.substitution} -> ${l.letter}`))}),{i:n,j:i,subs:c,subDisplay:o.join(", ")}};class ht{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===t[n]))}match({password:e}){const t=[],s=ct(e,u.l33tMaxSubstitutions,u.trieNodeRoot);let n=!1,a=!0;return s.forEach(i=>{if(n)return;const c=this.defaultMatch({password:i.password,useLevenshtein:a});a=!1,c.forEach(o=>{n||(n=o.i===0&&o.j===e.length-1);const l=lt(i,o.i,o.j),h=e.slice(l.i,+l.j+1||9e9),f=S(A(S({},o),{l33t:!0,token:h}),l),p=this.isAlreadyIncluded(t,f);h.toLowerCase()!==o.matchedWord&&!p&&t.push(f)})}),t.filter(i=>i.token.length>1)}}class ut{constructor(){this.l33t=new ht(this.defaultMatch),this.reverse=new it(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return I(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,a=e.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(i=>{const c=u.rankedDictionaries[i],o=u.rankedDictionariesMaxWordSize[i],l=Math.min(o,n);for(let h=0;h<n;h+=1){const f=Math.min(h+l,n);for(let p=h;p<f;p+=1){const m=a.slice(h,+p+1||9e9),d=m in c;let b={};const v=h===0&&p===n-1;u.useLevenshteinDistance&&v&&!d&&t&&(b=rt(m,c,u.levenshteinThreshold));const y=Object.keys(b).length!==0;if(d||y){const g=y?b.levenshteinDistanceEntry:m,x=c[g];s.push(S({pattern:"dictionary",i:h,j:p,token:e.slice(h,+p+1||9e9),matchedWord:m,rank:x,dictionaryName:i,reversed:!1,l33t:!1},b))}}}}),s}}class dt{match({password:e,regexes:t=Ke}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;let i;for(;i=a.exec(e);)if(i){const c=i[0];s.push({pattern:"regex",token:c,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),I(s)}}var T={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},ft=({token:r})=>{let e=C(ze,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=se+1:t=ne+1,Math.max(e,t)},gt=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-z),re)*365;return e&&(s*=4),s};const pt=r=>{const e=r.split(""),t=e.filter(i=>i.match(He)).length,s=e.filter(i=>i.match(Be)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=T.nCk(t+s,i);return n};var mt=r=>{const e=r.replace(Ze,"");if(e.match(Ve)||e.toLowerCase()===e)return 1;const t=[ae,Ge,ie],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return pt(e)};const Q=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},bt=({sub:r,token:e})=>{const t=e.toLowerCase(),s=Q(t,r.substitution),n=Q(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var Mt=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:a,unsubbedCount:i}=bt({sub:n,token:t});if(a===0||i===0)s*=2;else{const c=Math.min(i,a);let o=0;for(let l=1;l<=c;l+=1)o+=T.nCk(i+a,l);s*=o}}),s},yt=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:a})=>{const i=r,c=mt(n),o=Mt({l33t:t,subs:s,token:n}),l=e&&2||1;let h;return a==="diceware"?h=C(6,5)/2:h=i*c*o*l,{baseGuesses:i,uppercaseVariations:c,l33tVariations:o,calculation:h}},kt=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return C(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-z),re)}return 0},xt=({baseGuesses:r,repeatCount:e})=>r*e,St=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const vt=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},Et=({token:r,graph:e,turns:t})=>{const s=Object.keys(u.graphs[e]).length,n=vt(u.graphs[e]);let a=0;const i=r.length;for(let c=2;c<=i;c+=1){const o=Math.min(t,c-1);for(let l=1;l<=o;l+=1)a+=T.nCk(c-1,l-1)*s*C(n,l)}return a};var wt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=Et({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let c=1;c<=Math.min(t,a);c+=1)i+=T.nCk(t+a,c);n*=i}}return Math.round(n)},At=()=>Je;const Dt=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=se:t=ne),t},ee={bruteforce:ft,date:gt,dictionary:yt,regex:kt,repeat:xt,sequence:St,spatial:wt,separator:At},Tt=(r,e)=>ee[r]?ee[r](e):u.matchers[r]&&"scoring"in u.matchers[r]?u.matchers[r].scoring(e):0;var Ct=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=Dt(r,e),n=Tt(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return A(S(S({},r),t),{guesses:i,guessesLog10:T.log10(i)})};const M={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=Ct(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=T.factorial(e)*n;this.excludeAdditive||(a+=C(Ye,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(c=>{const o=this.optimal.g[t][c];parseInt(c,10)<=e&&o<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const c=a[i];c<n&&(s=parseInt(i,10),n=c)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var $={mostGuessableMatchSequence(r,e,t=!1){M.password=r,M.excludeAdditive=t;const s=r.length;let n=M.fillArray(s,"array");e.forEach(o=>{n[o.j].push(o)}),n=n.map(o=>o.sort((l,h)=>l.i-h.i)),M.optimal={m:M.fillArray(s,"object"),pi:M.fillArray(s,"object"),g:M.fillArray(s,"object")};for(let o=0;o<s;o+=1)n[o].forEach(l=>{l.i>0?Object.keys(M.optimal.m[l.i-1]).forEach(h=>{M.update(l,parseInt(h,10)+1)}):M.update(l,1)}),M.bruteforceUpdate(o);const a=M.unwind(s),i=a.length,c=this.getGuesses(r,i);return{password:r,guesses:c,guessesLog10:T.log10(c),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=M.optimal.g[t-1][e],s}};class It{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),c=this.getLazyMatch(e,n);if(i==null)break;const{match:o,baseToken:l}=this.setMatchToken(i,c);if(o){const h=o.index+o[0].length-1,f=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,h,o,f)),n=h+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>A(S({},a),{baseGuesses:i})):A(S({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>$.mostGuessableMatchSequence(e,a).guesses):$.mostGuessableMatchSequence(e,s).guesses}}class Rt{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const c=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=c),c!==n){const o=i-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=c}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const c=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:l}=this.getSequence(c);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Fe.test(e)?(t="lower",s=26):qe.test(e)?(t="upper",s=26):Xe.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class Pt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];W(t,this.helper(e,n,s))}),I(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const c=e.length;for(;i<c-1;){let o=i+1,l=null,h=0;for(n=this.checkIfShifted(s,e,i);;){const f=e.charAt(o-1),p=t[f]||[];let m=!1,d=-1,b=-1;if(o<c){const v=e.charAt(o),y=p.length;for(let g=0;g<y;g+=1){const x=p[g];if(b+=1,x){const k=x.indexOf(v);if(k!==-1){m=!0,d=b,k===1&&(n+=1),l!==d&&(h+=1,l=d);break}}}}if(m)o+=1;else{o-i>2&&a.push({pattern:"spatial",i,j:o-1,token:e.slice(i,o),graph:s,turns:h,shiftedCount:n}),i=o;break}}}return a}}const Lt=new RegExp(`[${oe.join("")}]`);class j{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>Lt.test(n)).reduce((n,a)=>{const i=n.get(a);return i?n.set(a,i+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[i,c])=>c-a);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=j.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=j.getSeparatorRegex(s);for(const a of e.matchAll(n)){if(a.index===void 0)continue;const i=a.index+1;t.push({pattern:"separator",token:s,i,j:i})}return t}}class jt{constructor(){this.matchers={date:Qe,dictionary:ut,regex:dt,repeat:It,sequence:Rt,spatial:Pt,separator:j}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(a=>{if(!this.matchers[a]&&!u.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:u.matchers[a].Matching,o=new i().match({password:e,omniMatch:this});o instanceof Promise?(o.then(l=>{W(t,l)}),s.push(o)):W(t,o)}),s.length>0?new Promise((a,i)=>{Promise.all(s).then(()=>{a(I(t))}).catch(c=>{i(c)})}):I(t)}}const ce=1,le=ce*60,he=le*60,ue=he*24,de=ue*31,fe=de*12,_t=fe*100,U={second:ce,minute:le,hour:he,day:ue,month:de,year:fe,century:_t};class Nt{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(U),a=n.findIndex(i=>e<U[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/U[t]):t="ltSecond"),this.translate(t,s)}}var Ot=()=>null,Ut=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const Wt=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=u.translations.warnings.topTen:r.rank<=100?t=u.translations.warnings.topHundred:t=u.translations.warnings.common:r.guessesLog10<=4&&(t=u.translations.warnings.similarToCommon),t},$t=(r,e)=>{let t=null;return e&&(t=u.translations.warnings.wordByItself),t},zt=(r,e)=>e?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames,Yt=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=Wt(r,e):s.includes("wikipedia")?t=$t(r,e):n?t=zt(r,e):s==="userInputs"&&(t=u.translations.warnings.userInputs),t};var Gt=(r,e)=>{const t=Yt(r,e),s=[],n=r.token;return n.match(ae)?s.push(u.translations.suggestions.capitalization):n.match(ie)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(u.translations.suggestions.reverseWords),r.l33t&&s.push(u.translations.suggestions.l33t),{warning:t,suggestions:s}},qt=r=>r.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Ft=r=>{let e=u.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=u.translations.warnings.simpleRepeat),{warning:e,suggestions:[u.translations.suggestions.repeated]}},Vt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),Bt=r=>{let e=u.translations.warnings.keyPattern;return r.turns===1&&(e=u.translations.warnings.straightRow),{warning:e,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},Ht=()=>null;const te={warning:null,suggestions:[]};class Zt{constructor(){this.matchers={bruteforce:Ot,date:Ut,dictionary:Gt,regex:qt,repeat:Ft,sequence:Vt,spatial:Bt,separator:Ht},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return te;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):u.matchers[e.pattern]&&"feedback"in u.matchers[e.pattern]?u.matchers[e.pattern].feedback(e,t):te}}const ge=()=>new Date().getTime(),Xt=(r,e,t)=>{const s=new Zt,n=new Nt,a=$.mostGuessableMatchSequence(e,r),i=ge()-t,c=n.estimateAttackTimes(a.guesses);return A(S(S({calcTime:i},a),c),{feedback:s.getFeedback(c.score,a.sequence)})},Kt=(r,e)=>(e&&u.extendUserInputsDictionary(e),new jt().match(r)),Jt=(r,e)=>{const t=ge(),s=Kt(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Xt(s,r,t)},Qt=["data-score"],es=Ee({name:"StrengthMeter",__name:"StrengthMeter",props:{value:_.string,showInput:_.bool.def(!0),disabled:_.bool},emits:["score-change","change"],setup(r,{emit:e}){const t=r,s=e,n=we(""),{prefixCls:a}=ke("strength-meter"),i=Ae(()=>{const{disabled:o}=t;if(o)return-1;const h=D(n)?Jt(D(n)).score:-1;return s("score-change",h),h});function c(o){s("change",o.target.value),n.value=o.target.value}return De(()=>{n.value=t.value||""}),Te(()=>D(n),o=>{s("change",o)}),(o,l)=>(V(),Ce("div",{class:N([D(a),"relative"])},[r.showInput?(V(),Ie(D(ve).Password,Le({key:0},o.$attrs,{allowClear:"",value:n.value,onChange:c,disabled:r.disabled}),Re({_:2},[Pe(Object.keys(o.$slots),h=>({name:h,fn:_e(f=>[Ne(o.$slots,h,Oe(Ue(f||{})),void 0,!0)])}))]),1040,["value","disabled"])):je("",!0),B("div",{class:N(`${D(a)}-bar`)},[B("div",{class:N(`${D(a)}-bar--fill`),"data-score":i.value},null,10,Qt)],2)],2))}}),ts=xe(es,[["__scopeId","data-v-a884d127"]]),is=Se(ts);export{is as S};
