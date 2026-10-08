(()=>{
const I=window.ITEMS,FM=window.FM,by={};I.forEach(i=>by[i.id]=i);
// illustrative footprints, inches W x D
const DIM={Sofa_01:[84,38],sofa_02:[90,38],sofa_03:[88,36],chinese_sofa:[72,26],vintage_day_bed:[80,32],ArmChair_01:[32,34],GreenChair_01:[33,34],Rockingchair_01:[26,36],WoodenChair_01:[18,20],dining_chair_02:[19,21],mid_century_lounge_chair:[32,32],modern_arm_chair_01:[30,32],chinese_armchair:[24,20],plastic_monobloc_chair_01:[21,21],bar_chair_round_01:[16,16,1],metal_stool_01:[15,15,1],Ottoman_01:[30,30],painted_wooden_bench:[48,16],CoffeeTable_01:[48,24],modern_coffee_table_01:[44,24],industrial_coffee_table:[50,26],round_wooden_table_01:[42,42,1],dining_table:[84,40],side_table_01:[20,20],gothic_coffee_table:[46,26],ClassicConsole_01:[54,16],GothicCabinet_01:[40,20],modern_wooden_cabinet:[36,18],vintage_cabinet_01:[38,18],wooden_display_shelves_01:[48,16]};
const LAYOUTS=[
 {key:'living',name:'Living Room Showroom',w:576,h:432,entry:[252,72],
  zones:[['ENT','Decompression',216,342,144,90,'ent'],['PA','Power aisle',246,96,84,246,'aisle'],['FW','Focal wall',156,18,264,72,'focal'],
   ['V1','Living vignette',348,110,210,200],['V2','Reading vignette',18,110,210,150],['CW','Cash wrap',18,300,150,114,'cw'],['V3','Seating niche',372,330,186,84]],
  flows:[[[300,426],[318,330],[318,104]],[[258,104],[258,290],[176,320]],[[340,330],[372,322]]],
  focal:[[288,72,'FOCAL POINT']],
  fx:[['wooden_display_shelves_01',288,40,0,'Focal anchor on entry axis; restyle every floor set'],['GothicCabinet_01',220,52,0,'Flanks focal L; mirrors F-03 for symmetry'],['vintage_cabinet_01',356,52,0,'Flanks focal R; pair w/ F-02'],
   ['round_wooden_table_01',288,352,0,'Speed-bump table at back of decompression; first touch point'],
   ['Sofa_01',520,210,-90,'Hero sofa, back to wall, faces power aisle (right-turn bias)'],['CoffeeTable_01',450,210,90,'18" clear to F-05; styled tabletop'],['modern_arm_chair_01',390,170,90,'Pair w/ F-08 opposite hero sofa; open to aisle'],['GreenChair_01',390,250,90,'Color pop seen from aisle'],['side_table_01',520,140,0,'Lamp + price card for F-05'],
   ['vintage_day_bed',123,128,0,'Against back wall; visible across aisle from F-05'],['mid_century_lounge_chair',60,200,90,'Reading chair, pair w/ F-12 ottoman'],['Ottoman_01',118,200,0,'Add-on sale to F-11'],['Rockingchair_01',190,200,-90,'Edges aisle; invites sit-test'],
   ['ClassicConsole_01',93,350,0,'Cash wrap counter (stand-in); staffed, faces entry'],['modern_wooden_cabinet',93,320,0,'Back wrap: bags, tissue, impulse'],['bar_chair_round_01',93,382,0,'Associate stool'],
   ['sofa_03',465,395,180,'Secondary sofa; closes loop back to entry'],['modern_coffee_table_01',465,350,0,'Pairs w/ F-17; 15" clear']]},
 {key:'gallery',name:'Gallery Entry',w:432,h:360,entry:[180,72],
  zones:[['ENT','Threshold',144,282,144,78,'ent'],['FW','Gallery wall (focal)',96,18,240,60,'focal'],['HI','Hero island',156,130,120,110,'focal'],
   ['V1','Left vignette',18,96,130,170],['V2','Right vignette',284,96,130,170],['CW','Cash wrap',300,282,114,60,'cw']],
  flows:[[[232,355],[240,280],[288,250],[288,110],[228,86]],[[204,86],[150,112],[150,262],[250,290],[300,308]]],
  focal:[[216,72,'FOCAL POINT'],[216,214,'HERO']],
  fx:[['chinese_sofa',216,40,0,'On axis with entry; the room\'s "frame"'],['chinese_armchair',150,45,0,'Symmetric flank L'],['chinese_armchair',282,45,0,'Symmetric flank R'],
   ['gothic_coffee_table',216,185,0,'Hero table; rotate feature product weekly, 360° shoppable'],
   ['GreenChair_01',60,140,90,'Accent chair, faces island'],['side_table_01',60,190,0,'Between F-05/F-07; small-ticket add-on'],['Rockingchair_01',60,240,90,'Sit-test; slows traffic on return loop'],['wooden_display_shelves_01',132,180,90,'Outpost shelf facing aisle; accessories'],
   ['modern_arm_chair_01',380,140,-90,'Faces island; pairs w/ F-11'],['industrial_coffee_table',380,200,90,'Material contrast to F-04'],['WoodenChair_01',380,250,-90,'Entry-price item near cash wrap'],
   ['ClassicConsole_01',357,300,0,'Cash wrap counter (stand-in); sightline to door'],['bar_chair_round_01',357,326,0,'Associate stool']]},
 {key:'dining',name:'Dining Vignette',w:360,h:288,entry:[150,60],
  zones:[['ENT','Entry',120,228,120,60,'ent'],['FW','Focal wall',60,14,240,50,'focal'],['V1','Dining set',70,90,220,130],['ST','Storage wall',18,90,44,170],['BC','Counter seating',300,90,42,170]],
  flows:[[[170,284],[100,228],[92,96]],[[268,96],[268,216],[196,240]]],
  focal:[[180,62,'FOCAL POINT']],
  fx:[['vintage_cabinet_01',180,32,0,'Sideboard centered on table axis; tablescape above'],['wooden_display_shelves_01',100,30,0,'Dinnerware display L'],['wooden_display_shelves_01',260,30,0,'Dinnerware display R'],
   ['dining_table',180,155,0,'Seats 6; 36" clearance all sides for pull-out'],['dining_chair_02',150,122,180,'Side chair'],['dining_chair_02',210,122,180,'Side chair'],['dining_chair_02',150,188,0,'Side chair, faces focal wall'],['dining_chair_02',210,188,0,'Side chair, faces focal wall'],
   ['WoodenChair_01',126,155,90,'End chair; mix-and-match story'],['chinese_armchair',234,155,-90,'Host chair; upsell'],
   ['GothicCabinet_01',34,140,90,'Bar cabinet; adjacency to dining'],['side_table_01',34,212,0,'Lamp + candles'],
   ['bar_chair_round_01',320,130,0,'Counter stool'],['bar_chair_round_01',320,170,0,'Counter stool'],['bar_chair_round_01',320,210,0,'Counter stool']]}
];
const KEY='fm_plans_v2',NS='http://www.w3.org/2000/svg',SNAP=6;
let store={};try{store=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}};
let L=LAYOUTS[0],svg;
const sec=document.getElementById('plans'),tabs=sec.querySelector('.p-tabs'),tbody=sec.querySelector('tbody');
const fid=n=>'F-'+String(n+1).padStart(2,'0');
const pos=(n)=>{const s=(store[L.key]||{})[fid(n)];const f=L.fx[n];return s?{x:s[0],y:s[1],r:s[2]??f[3]}:{x:f[1],y:f[2],r:f[3]}};
const ft=n=>{const f=L.fx[n],d=DIM[f[0]],p=pos(n),sw=Math.abs(p.r)%180===90;return{w:sw?d[1]:d[0],h:sw?d[0]:d[1]}};
const zoneOf=n=>{const p=pos(n);const z=L.zones.find(z=>p.x>=z[2]&&p.x<=z[2]+z[4]&&p.y>=z[3]&&p.y<=z[3]+z[5]);return z?z[0]+' · '+z[1]:'Open floor'};
const el=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e};
const ftIn=v=>`${Math.floor(v/12)}′${v%12?(v%12)+'″':''}`;
function draw(){
 const box=sec.querySelector('.p-svg');box.innerHTML='';
 svg=el('svg',{viewBox:`-36 -30 ${L.w+72} ${L.h+76}`,role:'img','aria-label':L.name+' floor plan','font-family':'DM Mono, ui-monospace, monospace'},box);
 el('rect',{x:-36,y:-30,width:L.w+72,height:L.h+76,fill:'#f5f1ea'},svg);
 for(let x=0;x<=L.w;x+=12)el('line',{x1:x,y1:0,x2:x,y2:L.h,stroke:x%120?'#e6dfd4':'#d3c9bb','stroke-width':x%120?.4:.8},svg);
 for(let y=0;y<=L.h;y+=12)el('line',{x1:0,y1:y,x2:L.w,y2:y,stroke:y%120?'#e6dfd4':'#d3c9bb','stroke-width':y%120?.4:.8},svg);
 const ZS={ent:['#1a1714',.04,'1 3'],aisle:['#8a8178',.12,'0'],focal:['#b5482a',.08,'4 3'],cw:['#1a1714',.07,'6 2']};
 const df=el('defs',{},svg),mk=el('marker',{id:'ar',viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:7,markerHeight:7,orient:'auto-start-reverse'},df);el('path',{d:'M0 0L10 5L0 10z',fill:'#2f6f8f'},mk);
 L.zones.forEach(z=>{const c=ZS[z[6]]||['#b5482a',.035,'4 3'];el('rect',{x:z[2],y:z[3],width:z[4],height:z[5],fill:c[0],'fill-opacity':c[1],stroke:c[0],'stroke-dasharray':c[2],'stroke-width':z[6]==='aisle'?0:.8},svg);
  const t=el('text',{x:z[2]+5,y:z[3]+11,'font-size':8,fill:'#b5482a','letter-spacing':'.8'},svg);t.setAttribute('fill',c[0]);t.textContent=(z[4]<90?z[0]:z[0]+' — '+z[1]).toUpperCase()});
 const[ex,ew]=L.entry;
 el('path',{d:`M0 0H${L.w}V${L.h}H${ex+ew}M${ex} ${L.h}H0Z`,fill:'none',stroke:'#1a1714','stroke-width':6,'stroke-linejoin':'miter'},svg);
 el('path',{d:`M${ex} ${L.h}A${ew/2} ${ew/2} 0 0 1 ${ex+ew/2} ${L.h-ew/2}V${L.h}`,fill:'none',stroke:'#8a8178','stroke-width':.6,'stroke-dasharray':'2 2'},svg);
 const et=el('text',{x:ex+ew/2,y:L.h+18,'text-anchor':'middle','font-size':9,fill:'#1a1714','letter-spacing':'2'},svg);et.textContent='ENTRY';
 // scale + north
 el('path',{d:`M0 ${L.h+30}H120M0 ${L.h+26}V${L.h+34}M120 ${L.h+26}V${L.h+34}`,stroke:'#1a1714','stroke-width':.8},svg);
 const st=el('text',{x:126,y:L.h+33,'font-size':8,fill:'#8a8178'},svg);st.textContent='10′  ·  1 square = 1′';
 const nt=el('text',{x:L.w+18,y:-12,'text-anchor':'middle','font-size':10,fill:'#1a1714'},svg);nt.textContent='N';
 el('path',{d:`M${L.w+18} -8l-4 14 4-3 4 3z`,fill:'#1a1714'},svg);
 L.fx.forEach((f,n)=>{const it=by[f[0]],d=DIM[f[0]],p=pos(n);
  const g=el('g',{class:'fp',transform:`translate(${p.x} ${p.y})`,tabindex:0,'data-n':n},svg);
  const rg=el('g',{transform:`rotate(${p.r})`},g);
  el('rect',{class:'b',x:-d[0]/2,y:-d[1]/2,width:d[0],height:d[1],rx:d[2]?d[0]/2:1.5,fill:`rgb(${it.rgb})`,'fill-opacity':.18,stroke:'#1a1714','stroke-width':.9},rg);
  el('line',{x1:-d[0]/2+3,y1:-d[1]/2+3,x2:d[0]/2-3,y2:-d[1]/2+3,stroke:'#1a1714','stroke-width':.4,opacity:d[2]?0:.5},rg);
  const t=el('text',{'text-anchor':'middle',y:3,'font-size':7.5,fill:'#b5482a','font-weight':500},g);t.textContent=fid(n);
  const ti=el('title',{},g);ti.textContent=`${fid(n)} ${it.name} — ${d[0]}″×${d[1]}″${f[4]?' — '+f[4]:''}`;
  drag(g,n)});
 const[ex2,ew2]=L.entry,f0=L.focal[0];
 el('line',{x1:ex2+ew2/2,y1:L.h,x2:f0[0],y2:f0[1],stroke:'#b5482a','stroke-width':.8,'stroke-dasharray':'1 4','stroke-linecap':'round','pointer-events':'none'},svg);
 (L.flows||[]).forEach(f=>el('polyline',{points:f.map(p=>p.join(',')).join(' '),fill:'none',stroke:'#2f6f8f','stroke-width':2.2,'stroke-dasharray':'7 4','stroke-linejoin':'round','marker-end':'url(#ar)',opacity:.85,'pointer-events':'none'},svg));
 L.focal.forEach(([x,y,l])=>{const g=el('g',{'pointer-events':'none'},svg);el('circle',{cx:x,cy:y,r:13,fill:'none',stroke:'#b5482a','stroke-width':1.2},g);el('circle',{cx:x,cy:y,r:3,fill:'#b5482a'},g);
  el('path',{d:`M${x-19} ${y}h8M${x+11} ${y}h8M${x} ${y-19}v8M${x} ${y+11}v8`,stroke:'#b5482a','stroke-width':1.2},g);
  const t=el('text',{x:x+22,y:y-14,'font-size':8,fill:'#b5482a','font-weight':500,'letter-spacing':'1'},g);t.textContent='◎ '+l});
 sec.querySelector('.p-title').textContent=L.name;
 sec.querySelector('.p-dim').textContent=`${ftIn(L.w)} × ${ftIn(L.h)} · ${L.fx.length} fixtures · illustrative`;
 table()}
function table(){
 tbody.innerHTML='';
 L.fx.forEach((f,n)=>{const it=by[f[0]],d=DIM[f[0]];const tr=document.createElement('tr');tr.dataset.n=n;
  tr.innerHTML=`<td>${fid(n)}</td><td class="nm"><img src="${it.img}" alt="">${it.name}</td><td>${zoneOf(n)}</td><td>${d[0]}″×${d[1]}″</td><td class="nt">${f[4]||''}</td>`;
  tr.onclick=()=>FM.open(it);tr.onmouseenter=()=>hl(n,1);tr.onmouseleave=()=>hl(n,0);tbody.appendChild(tr)})}
function hl(n,on){svg.querySelector(`.fp[data-n="${n}"]`)?.classList.toggle('hl',!!on);tbody.querySelector(`tr[data-n="${n}"]`)?.classList.toggle('hl',!!on)}
function pt(e){const p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(svg.getScreenCTM().inverse())}
function drag(g,n){let s=null;
 g.addEventListener('pointerdown',e=>{const p=pos(n),q=pt(e);s={dx:q.x-p.x,dy:q.y-p.y,cx:e.clientX,cy:e.clientY,moved:false};g.setPointerCapture(e.pointerId)});
 g.addEventListener('pointermove',e=>{if(!s)return;if(!s.moved&&Math.hypot(e.clientX-s.cx,e.clientY-s.cy)<5)return;s.moved=true;g.classList.add('drag');
  const q=pt(e),{w,h}=ft(n);let x=Math.round((q.x-s.dx)/SNAP)*SNAP,y=Math.round((q.y-s.dy)/SNAP)*SNAP;
  x=Math.max(w/2,Math.min(L.w-w/2,x));y=Math.max(h/2,Math.min(L.h-h/2,y));
  (store[L.key]=store[L.key]||{})[fid(n)]=[x,y,pos(n).r];g.setAttribute('transform',`translate(${x} ${y})`)});
 const end=e=>{if(!s)return;g.classList.remove('drag');if(s.moved){save();const td=tbody.querySelector(`tr[data-n="${n}"] td:nth-child(3)`);if(td)td.textContent=zoneOf(n)}else FM.open(by[L.fx[n][0]]);s=null};
 g.addEventListener('pointerup',end);g.addEventListener('pointercancel',()=>{s=null;g.classList.remove('drag')});
 g.addEventListener('keydown',e=>{if(e.key==='Enter')FM.open(by[L.fx[n][0]])});
 g.addEventListener('pointerenter',()=>hl(n,1));g.addEventListener('pointerleave',()=>hl(n,0))}
LAYOUTS.forEach(l=>{const b=document.createElement('button');b.textContent=l.name;b.onclick=()=>{L=l;tabs.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));draw()};tabs.appendChild(b)});
tabs.firstChild.classList.add('on');
// legend
const lg=sec.querySelector('.p-legend');
lg.innerHTML=`<span><i style="background:rgba(181,72,42,.08);border:1px dashed #b5482a"></i>Zone</span><span><i style="background:rgba(120,110,100,.2)"></i>Footprint (tinted by finish)</span><span><i style="border-radius:50%"></i>Round</span><span><i style="background:rgba(138,129,120,.25);border:0"></i>Power aisle</span><span><i style="border:1px dashed #1a1714"></i>Entry / cash wrap</span><span style="color:#2f6f8f">⇢ Traffic flow</span><span style="color:#b5482a">◎ Focal · ⋯ sightline from door</span><span style="color:#b5482a">F-## fixture ID</span>`;
sec.querySelector('[data-a=reset]').onclick=()=>{if(!confirm(`Reset ${L.name} to the default layout?`))return;delete store[L.key];save();draw()};
sec.querySelector('[data-a=print]').onclick=()=>print();
sec.querySelector('[data-a=png]').onclick=()=>{
 const vb=svg.viewBox.baseVal,sc=4,c=document.createElement('canvas');c.width=vb.width*sc;c.height=(vb.height+20)*sc;
 const clone=svg.cloneNode(true);clone.setAttribute('width',vb.width*sc);clone.setAttribute('height',vb.height*sc);clone.querySelectorAll('title').forEach(t=>t.remove());
 const img=new Image(),url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)],{type:'image/svg+xml'}));
 img.onload=()=>{const x=c.getContext('2d');x.fillStyle='#f5f1ea';x.fillRect(0,0,c.width,c.height);x.drawImage(img,0,0);
  x.fillStyle='#8a8178';x.font=`${8*sc}px monospace`;x.fillText(`${L.name.toUpperCase()} — FIXTURE PLAN (ILLUSTRATIVE)`,10*sc,(vb.height+12)*sc);URL.revokeObjectURL(url);
  c.toBlob(async b=>{const name=`floorplan-${L.key}.png`,file=new File([b],name,{type:'image/png'});
   if(navigator.canShare&&navigator.canShare({files:[file]})&&/iP(hone|ad)/.test(navigator.userAgent)){try{await navigator.share({files:[file]});return}catch(e){}}
   const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click()})};
 img.src=url};
// view switching
document.querySelectorAll('.views button').forEach(b=>b.onclick=()=>{const v=b.dataset.view;
 document.querySelectorAll('.views button').forEach(x=>x.classList.toggle('on',x===b));
 document.body.className=v==='map'?'':'v-'+v;sec.hidden=v!=='plans'&&v!=='fixtures';sec.classList.toggle('fx',v==='fixtures');
 if((v==='plans'||v==='fixtures')&&!svg)draw();history.replaceState(null,'',v==='map'?location.pathname:'#'+v)});
const h=location.hash.slice(1);if(h==='plans'||h==='fixtures')document.querySelector(`.views [data-view=${h}]`).click();
})();
