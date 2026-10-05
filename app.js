(()=>{
const I=window.ITEMS,map=document.getElementById('map'),tip=document.getElementById('tip'),dlg=document.getElementById('detail');
const T=['$','$$','$$$','$$$$'],TN=['Entry','Mid','Premium','Luxury'];
function hsl([r,g,b]){r/=255;g/=255;b/=255;const M=Math.max(r,g,b),m=Math.min(r,g,b),l=(M+m)/2,d=M-m;let h=0,s=d?d/(1-Math.abs(2*l-1)):0;
 if(d){h=M==r?((g-b)/d)%6:M==g?(b-r)/d+2:(r-g)/d+4;h*=60;if(h<0)h+=360}return{h,s,l}}
function tone(it){const{h,s,l}=hsl(it.rgb);if(h>60&&s>.04)return'Verdant';if(l<.19)return'Ebony';if(s<.12)return l>.45?'Bone':'Stone';if(l>.33)return'Honey';return'Walnut'}
const ORD={cat:['Seating','Sofas','Tables','Storage'],color:['Bone','Stone','Honey','Walnut','Ebony','Verdant'],tier:[1,2,3,4]};
const key={cat:i=>i.cat,color:tone,tier:i=>i.tier};
const swatch={Bone:'#d9d2c4',Stone:'#8d8780',Honey:'#b88a4f',Walnut:'#6b4428',Ebony:'#231d18',Verdant:'#55704a'};
const els={};I.forEach((it,n)=>{const b=document.createElement('button');b.className='it';b.innerHTML=`<img src="${it.img}" alt="${it.name}" loading="lazy"><span class="t">${T[it.tier-1]}</span>`;
 b.onmouseenter=e=>{tip.innerHTML=`<b>${it.name}</b>${it.cat} · ${tone(it)} · ${T[it.tier-1]} ${TN[it.tier-1]}`;tip.classList.add('show')};
 b.onmousemove=e=>{tip.style.left=Math.min(e.clientX+14,innerWidth-210)+'px';tip.style.top=e.clientY+14+'px'};
 b.onmouseleave=()=>tip.classList.remove('show');b.onclick=()=>open(it);els[it.id]=b});
function render(mode,animate){
 const first={};if(animate)for(const id in els)first[id]=els[id].getBoundingClientRect();
 map.innerHTML='';
 ORD[mode].forEach(g=>{const list=I.filter(i=>key[mode](i)===g).sort((a,b)=>a.tier-b.tier||hsl(a.rgb).l-hsl(b.rgb).l);if(!list.length)return;
  const c=document.createElement('section');c.className='col';
  const title=mode==='tier'?`${T[g-1]} <span style="font-style:italic">${TN[g-1]}</span>`:mode==='color'?`<span class="sw" style="background:${swatch[g]}"></span>${g}`:g;
  c.innerHTML=`<h3><span>${title}</span><small>${String(list.length).padStart(2,'0')}</small></h3><div class="items"></div>`;
  list.forEach(i=>c.lastChild.appendChild(els[i.id]));map.appendChild(c)});
 if(!animate||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 for(const id in els){const a=first[id],b=els[id].getBoundingClientRect(),dx=a.left-b.left,dy=a.top-b.top;
  els[id].animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'none'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',delay:Math.random()*120})}
}
function open(it){dlg.querySelector('img').src=it.img;dlg.querySelector('img').alt=it.name;dlg.querySelector('h2').textContent=it.name;dlg.querySelector('.d-cat').textContent=it.cat;
 dlg.querySelector('.d-tier').textContent=`${T[it.tier-1]} · ${TN[it.tier-1]} (illustrative)`;dlg.querySelector('.d-tone').innerHTML=`<span class="sw" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:rgb(${it.rgb})"></span> ${tone(it)}`;
 dlg.querySelector('.d-src').href=it.src;tip.classList.remove('show');dlg.showModal()}
dlg.querySelector('.x').onclick=()=>dlg.close();dlg.onclick=e=>{if(e.target===dlg)dlg.close()};
document.querySelectorAll('.controls button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.controls button').forEach(x=>x.classList.toggle('on',x===b));render(b.dataset.mode,true)});
render('cat',false);window.FM={open,tone,T,TN};
})();
