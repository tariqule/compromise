'use strict';
const fns = require('../fns');
//names with a distinctive signal that they identify as a male, internationally

//the unique/uncompressed names..
let arr = [
  'abu',
  'adolfo',
  'anthony',
  'arthur',
  'billy',
  'bobby',
  'bob',
  'bradford',
  'bret',
  'caleb',
  'clifford',
  'craig',
  'derek',
  'doug',
  'dwight',
  'eli',
  'elliot',
  'enrique',
  'felipe',
  'felix',
  'francisco',
  'frank',
  'george',
  'glenn',
  'greg',
  'gregg',
  'hans',
  'hugh',
  'ira',
  'isaac',
  'kermit',
  'kobe',
  'leo',
  'levi',
  'lorenzo',
  'percy',
  'philip',
  'phillip',
  'regis',
  'rex',
  'ricky',
  'shaun',
  'shaquille',
  'shawn',
  'steve',
  'timothy',
  'ty',
  'wilbur',
  'williams',
  'woodrow',
  'youssef',
  'mahmoud',
  'mustafa',
  'hamza',
  'tareq',
  'ali',
  'beshoi',
  'mark',
  'habib',
  'moussa',
  'adama',
  'osama',
  'abdoulaye',
  'modibo',
  'mustapha',
  'aziz',
  'mateo',
  'santino',
  'davi',
  'jacob',
  'vicente',
  'alonso',
  'maximiliano',
  'jose',
  'jeronimo',
  'joshua',
  'ajani',
  'amir',
  'arnav',
  'suraj',
  'bruno',
  'yousouf',
  'wei',
  'hao',
  'yi',
  'jun',
  'lei',
  'aarav',
  'reyansh',
  'arjun',
  'abulfazl',
  'reza',
  'kathem',
  'ori',
  'yosef',
  'itai',
  'moshe',
  'ichika',
  'itsuki',
  'tatsuki',
  'asahi',
  'haruki',
  'tomoharu',
  'yuuma',
  'taichi',
  'saqib',
  'abubakr',
  'ergi',
  'marc',
  'eric',
  'enzo',
  'pol',
  'alex',
  'marti',
  'jakob',
  'paul',
  'leevi',
  'aputsiaq',
  'inunnguaq',
  'inuk',
  'francesco',
  'andrea',
  'mattia',
  'matteo',
  'tommaso',
  'nikola',
  'ilija',
  'marko',
  'luka',
  'antoni',
  'jakub',
  'franciszek',
  'filip',
  'stanislaw',
  'mikolaj',
  'yusuf',
  'berat',
  'emir',
  'ahmet',
  'mehmet',
  'leroy',
  'roy',
  'troy',
  'floyd',
  'lloyd',
  'carl',
  'earl',
  'karl',
  'raul',
  'saul',
  'earnest',
  'ernest',
  'forrest',
  'arnold',
  'harold',
  'andrew',
  'mathew',
  'matthew',
  'elliott',
  'matt',
  'scott',
  'marty',
  'monty',
  'scotty',
  'clay',
  'jay',
  'murray',
  'monte',
  'pete',
  'elwood',
  'jarrod',
  'claude',
  'clyde',
  'wade',
  'alfredo',
  'reynaldo',
  'wilfredo',
  'clark',
  'kirk',
  'chase',
  'jesse',
  'cedric',
  'dominic',
  'josh',
  'rocky',
  'rodolfo',
  'roosevelt',
  'roscoe',
  'ross',
  'jeff',
  'jeremy',
  'jerome',
  'jess',
  'toby',
  'todd',
  'tom',
  'tony',
  'darryl',
  'daryl',
  'dave',
  'joe',
  'john',
  'jorge',
  'malcolm',
  'marco',
  'max',
  'alfonso',
  'alonzo',
  'guillermo',
  'gustavo'
];



//compressed by frequent suffixes
//comprssed with
//https://github.com/nlp-compromise/thumb/blob/master/src/compress/compress.js
let suffix_compressed = {
  'rence': 'cla,lau,law,te,ter',
  'lbert': 'a,de,e,gi,wi',
  'berto': 'al,gil,hum,ro',
  'ustin': 'ag,j,a,d',
  'rick': 'e,frede,rode,der,fred,kend,pat,',
  'ardo': 'bern,leon,ricc,edu,ger,ric',
  'lvin': 'e,ke,me,a,ca',
  'nnie': 'do,lo,ro,be,joh',
  'bert': ',her,hu,nor,ro',
  'than': 'e,na,johna,jona',
  'ando': 'arm,fern,orl,rol',
  'land': 'cleve,gar,le,ro',
  'arry': 'b,g,h,l',
  'lton': 'a,car,e,mi',
  'ian': 'sebast,j,,maximil,krist,adr,br,christ,dam,fab,jul',
  'ton': 'an,clin,quin,bur,clay,clif,pres,wins',
  'ter': 'car,pe,ches,les,sylves,dex,wal',
  'ard': 'bern,edw,ger,how,leon,rich,will',
  'ell': 'darn,darr,low,mitch,russ,terr,wend',
  'son': 'jack,ma,harri,ja,nel,ty,wil',
  'aan': 'ish,arm,viv,ay,vih,nom',
  'ron': 'a,aa,by,came,my,',
  'lan': 'mi,a,al,dy,har,no',
  'man': 'abdulrah,us,her,nor,sher,ro',
  'mon': 'ra,szy,da,si,solo',
  'uel': 'mig,sam,eman,emman,man',
  'don': 'bran,,el,gor,shel',
  'med': 'moha,muha,ah,moham,muham',
  'ald': 'don,regin,ron,ger,jer',
  'vin': 'er,ir,mar,de,ke',
  'rey': 'ca,co,geoff,jeff',
  'ett': 'br,ever,garr,emm',
  'ael': 'raf,ism,mich,raph',
  'mmy': 'ji,sa,ti,to',
  'las': 'nico,dal,doug,nicho',
  'red': 'alf,f,wilf,ja',
  'nny': 'be,da,joh,ke',
  'ius': 'cornel,dar,demetr,jul',
  'ley': 'brad,har,stan,wes',
  'mar': 'o,ou,am,la',
  'iel': 'gabr,dan,ar,nathan',
  'ane': 'souleym,d,du,sh',
  'ent': 'br,k,tr,vinc',
  'an': 'hass,ju,log,ary,roh,has,eit,yonat,ro,zor,drag,dej,stef,iv,emirh,ev,brend,d,jord,bry,de,esteb,ry,se,st,steph',
  'er': 'ik,javi,alexand,oliv,aleksand,om,christoph,kristoph,luth,elm,grov,hom,jasp,rodg,rog,spenc,tyl,xavi',
  'en': 'jayd,jad,aid,dev,eym,b,reub,rub,darr,lor,warr,all,dami,gl,k,ow,steph,stev',
  'in': 'yass,husse,benjam,mart,joaqu,hosse,col,frankl,marl,darw,edw,erw,dar,darr,efra,quent',
  'ie': 'j,jimm,samm,tomm,bill,charl,will,ern,arch,edd,frank,fredd,lou,regg,robb',
  'is': 'alex,lu,lou,math,chr,curt,den,denn,ell,franc,lew,morr,ot,trav,will',
  'el': 'abd,ang,no,jo,ro,ab,darr,fid,lion,marc,mich,russ',
  'ry': 'jer,per,ter,co,grego,ro,ga,zacha,hen,jeffe,jeff',
  'ce': 'lan,terran,van,bru,bry,hora,mauri,roy,walla',
  'ne': 'deway,dway,way,antoi,blai,jermai,euge,ge,tyro',
  'to': 'mina,yuu,haru,haruhi,haya,beni,ernes,ot',
  'or': 'heit,vict,ig,hect,juni,salvad,tayl,trev',
  'as': 'mati,tom,luc,thom,luk,tobi,jon,eli',
  'io': 'anton,emil,jul,rogel,gregor,ignac,mar,serg',
  'le': 'gabrie,doy,ky,ly,da,mer,orvil',
  'al': 'bil,,h,jam,miche,ne,rand',
  'dy': 'fred,ted,an,bra,co,gra,ru',
  'ad': 'muhamm,mohamm,moham,mur,br,ch,conr',
  'ey': 'dew,harv,jo,mick,rick,rodn,sidn',
  'am': 'li,willi,no,ad,abrah,grah,s',
  'ah': 'abdall,no,elij,jeremi,abdull,mic',
  'on': 'bry,j,jonath,le,marl,vern',
  'il': 'ne,nikh,cec,em,ph,virg',
  'im': 'j,t,ibrah,kar,hal,sel',
  'go': 'santia,thia,die,rodri,domin,hu',
  'ar': 'ces,hyd,aleksand,pet,edg,osc',
  'os': 'kiroll,carl,mil,am,marc,sant',
  'ro': 'ped,alejand,alessand,alva,artu,rami',
  'nd': 'arma,edmu,desmo,edmo,raymo',
  'ck': 'ja,chu,domini,ma,ni',
  'ta': 'hina,haru,sou,ara,kana',
  'ou': 'l,mamad,mahamad,sek,ry',
  'ph': 'ral,randol,rudol,jose,joes',
  'ik': 'er,adv,mal,min,sal',
  'rt': 'cu,ku,ba,stewa,stua',
  'us': 'mathe,jes,marc,ruf',
  'lo': 'ange,pab,abdul,nii',
  'es': 'jam,andr,charl,mos',
  'id': 'rach,dav,zah,shah',
  'nt': 'brya,cli,gra,lamo',
  're': 'and,pier,salvato,theodo',
  'ng': 'irvi,sterli,fe,yo',
  'ed': 'khal,,n,t',
  'ke': 'bla,ja,lu,mi',
  'th': 'hea,kei,kenne,se',
  'll': 'carro,kenda,marsha,randa',
  'di': 'fa,meh,mah,jor'
};
arr = fns.uncompress_suffixes(arr, suffix_compressed);

module.exports = arr;

// console.log(JSON.stringify(arr, null, 2))
