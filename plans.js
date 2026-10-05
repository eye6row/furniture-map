(()=>{
const I=window.ITEMS,FM=window.FM,by={};I.forEach(i=>by[i.id]=i);
// illustrative footprints, inches W x D
const DIM={Sofa_01:[84,38],sofa_02:[90,38],sofa_03:[88,36],chinese_sofa:[72,26],vintage_day_bed:[80,32],ArmChair_01:[32,34],GreenChair_01:[33,34],Rockingchair_01:[26,36],WoodenChair_01:[18,20],dining_chair_02:[19,21],mid_century_lounge_chair:[32,32],modern_arm_chair_01:[30,32],chinese_armchair:[24,20],plastic_monobloc_chair_01:[21,21],bar_chair_round_01:[16,16,1],metal_stool_01:[15,15,1],Ottoman_01:[30,30],painted_wooden_bench:[48,16],CoffeeTable_01:[48,24],modern_coffee_table_01:[44,24],industrial_coffee_table:[50,26],round_wooden_table_01:[42,42,1],dining_table:[84,40],side_table_01:[20,20],gothic_coffee_table:[46,26],ClassicConsole_01:[54,16],GothicCabinet_01:[40,20],modern_wooden_cabinet:[36,18],vintage_cabinet_01:[38,18],wooden_display_shelves_01:[48,16]};
const LAYOUTS=[
 {key:'showroom',name:'Showroom',w:480,h:360,entry:[200,80],
  zones:[['A','Living vignette',20,20,220,170],['B','Dining vignette',260,20,200,170],['C','Focal / entry',150,220,180,120],['D','Storage wall',20,210,110,130],['E','Counter seating',350,210,110,130]],
  fx:[['sofa_03',130,50,0],['modern_coffee_table_01',130,105,0],['ArmChair_01',55,110,90],['modern_arm_chair_01',205,110,-90],['side_table_01',210,48,0],['Ottoman_01',130,160,0],
   ['dining_table',360,105,0],['dining_chair_02',330,72,180],['dining_chair_02',390,72,180],['dining_chair_02',330,138,0],['dining_chair_02',390,138,0],['ClassicConsole_01',360,46,0],
   ['round_wooden_table_01',240,270,0],['chinese_armchair',195,300,90],['plastic_monobloc_chair_01',285,300,-90],
   ['wooden_display_shelves_01',32,250,90],['modern_wooden_cabinet',32,310,90],['vintage_cabinet_01',95,326,0],
   ['bar_chair_round_01',378,236,0],['bar_chair_round_01',408,236,0],['bar_chair_round_01',438,236,0],['metal_stool_01',405,285,0],['painted_wooden_bench',405,326,0]]},
 {key:'gallery',name:'Gallery room',w:360,h:300,entry:[150,60],
  zones:[['A','Lounge',20,20,200,150],['B','Reading nook',240,20,100,150],['C','Display wall',20,190,320,90]],
  fx:[['Sofa_01',120,45,0],['CoffeeTable_01',120,100,0],['GreenChair_01',45,105,90],['Rockingchair_01',195,108,-90],
   ['vintage_day_bed',318,80,90],['mid_century_lounge_chair',266,128,0],['side_table_01',266,40,0],
   ['GothicCabinet_01',75,268,0],['ClassicConsole_01',180,272,0],['vintage_cabinet_01',285,270,0],['gothic_coffee_table',180,222,0],['WoodenChair_01',110,222,0]]}
];
const KEY='fm_plans_v1',NS='http://www.w3.org/2000/svg',SNAP=6;
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
 L.zones.forEach(z=>{el('rect',{x:z[2],y:z[3],width:z[4],height:z[5],fill:'#b5482a','fill-opacity':.035,stroke:'#b5482a','stroke-dasharray':'4 3','stroke-width':.8},svg);
  const t=el('text',{x:z[2]+5,y:z[3]+11,'font-size':8,fill:'#b5482a','letter-spacing':'.8'},svg);t.textContent=(z[0]+' — '+z[1]).toUpperCase()});
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
  const ti=el('title',{},g);ti.textContent=`${fid(n)} ${it.name} — ${d[0]}″×${d[1]}″`;
  drag(g,n)});
 sec.querySelector('.p-title').textContent=L.name;
 sec.querySelector('.p-dim').textContent=`${ftIn(L.w)} × ${ftIn(L.h)} · ${L.fx.length} fixtures · illustrative`;
 table()}
function table(){
 tbody.innerHTML='';
 L.fx.forEach((f,n)=>{const it=by[f[0]],d=DIM[f[0]];const tr=document.createElement('tr');tr.dataset.n=n;
  tr.innerHTML=`<td>${fid(n)}</td><td class="nm"><img src="${it.img}" alt="">${it.name}</td><td>${zoneOf(n)}</td><td>${d[0]}″×${d[1]}″</td>`;
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
lg.innerHTML=`<span><i style="background:rgba(181,72,42,.08);border:1px dashed #b5482a"></i>Zone</span><span><i style="background:rgba(120,110,100,.2)"></i>Footprint (tinted by finish)</span><span><i style="border-radius:50%"></i>Round</span><span style="color:#b5482a">F-## fixture ID</span>`;
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
 document.body.className=v==='map'?'':'v-'+v;sec.hidden=v==='map';sec.classList.toggle('fx',v==='fixtures');
 if(v!=='map'&&!svg)draw();history.replaceState(null,'',v==='map'?location.pathname:'#'+v)});
const h=location.hash.slice(1);if(h==='plans'||h==='fixtures')document.querySelector(`.views [data-view=${h}]`).click();
})();
