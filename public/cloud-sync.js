(function(){
  const allowed=key=>key.startsWith('math-quest-')||key==='smc-progress-v2'||key==='international-math-review-flags-v1';
  const snapshot=()=>{const data={};for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(key&&allowed(key))data[key]=localStorage.getItem(key)||'';}return data;};
  let enabled=false,timer=0;
  async function push(){if(!enabled)return;clearTimeout(timer);try{await fetch('/api/progress',{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify({snapshot:snapshot()}),keepalive:true});}catch{}}
  function schedule(){if(!enabled)return;clearTimeout(timer);timer=setTimeout(push,1200);}
  async function start(){try{const session=await fetch('/api/session',{cache:'no-store'});if(!session.ok)return;const info=await session.json();if(info.role!=='student')return;enabled=true;const cloud=await fetch('/api/progress',{cache:'no-store'});if(cloud.ok){const data=await cloud.json();for(const[key,value]of Object.entries(data.snapshot||{})){if(allowed(key)&&typeof value==='string'&&!localStorage.getItem(key))localStorage.setItem(key,value);}}window.addEventListener('storage',schedule);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')push();});setInterval(schedule,30000);schedule();}catch{}}
  start();
})();
