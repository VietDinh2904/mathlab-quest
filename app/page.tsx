'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, BrainCircuit, Calculator, ChartNoAxesColumnIncreasing, CheckCircle2, ChevronRight, Compass, Eraser, Gamepad2, GraduationCap, Home, LibraryBig, Medal, PenLine, RotateCcw, Sparkles, Trophy, X } from 'lucide-react';

type DashboardStats = { answered: number; completed: number; contests: number };
const BOOKS = [
  { id: 'junior1', title: 'Junior 1', level: 'Lớp 1–2', color: 'blue' }, { id: 'junior2', title: 'Junior 2', level: 'Lớp 2–3', color: 'coral' },
  { id: 'beginner', title: 'Beginner', level: 'Lớp 3–4', color: 'gold' }, { id: 'methods1', title: 'Phương pháp 1', level: 'Tư duy nền tảng', color: 'mint' },
  { id: 'methods2', title: 'Phương pháp 2', level: 'Tư duy nâng cao', color: 'violet' }, { id: 'advanced', title: 'Olympiad Advanced', level: 'Chuyên đề', color: 'navy' },
];
const CONTESTS = [
  { id: 'SMC', label: 'SMC', note: '2021–2024', icon: '✦' }, { id: 'TIMO', label: 'TIMO', note: 'Lớp 3–4', icon: '◆' },
  { id: 'SASMO', label: 'SASMO', note: 'Đề tương tác', icon: '●' }, { id: 'KANGAROO', label: 'Kangaroo', note: '2020–2025', icon: '▲' },
];

function readStats(): DashboardStats {
  let answered = 0, completed = 0, contests = 0;
  try {
    for (const book of BOOKS) { const raw = localStorage.getItem(`math-quest-${book.id}-v2`); if (!raw) continue; const state = JSON.parse(raw); answered += Object.keys(state.answers || {}).length; completed += Object.keys(state.completed || {}).length; }
    const records = Object.values(JSON.parse(localStorage.getItem('smc-progress-v2') || '{}')) as Array<{ answer?: string; checked?: boolean }>;
    contests = records.filter((item) => item.answer || item.checked).length; answered += contests;
  } catch {}
  return { answered, completed, contests };
}

function Brand() { return <a className="quest-brand" href="/" aria-label="Math Quest Lab"><span className="quest-brand-mark"><Compass /></span><span><strong>Math Quest Lab</strong><small>Học toán như một chuyến phiêu lưu</small></span></a>; }
function Header() { return <header className="quest-header"><Brand /><nav aria-label="Điều hướng chính"><a className="active" href="/"><Home />Trang chủ</a><a href="/math/"><BookOpen />Sách học</a><a href="/contests/"><Trophy />Đề thi</a><a href="/manage"><ChartNoAxesColumnIncreasing />Quản lý</a></nav><a className="quest-profile" href="/manage" aria-label="Mở trang quản lý"><span>HD</span><b>Quản lý</b></a></header>; }

function LearningLoop() {
  const nodes: Array<[string,number,number]> = [['Khám phá',325,42],['Hiểu bài',532,148],['Luyện tập',450,350],['Thi thử',200,350],['Ôn lại',118,148]];
  return <svg className="learning-loop" viewBox="0 0 650 440" role="img" aria-label="Vòng lặp học tập gồm Khám phá, Hiểu bài, Luyện tập, Thi thử và Ôn lại">
    <defs><marker id="loopArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" /></marker></defs>
    <path className="loop-ring" d="M325 67 C430 67 545 116 555 208 C565 308 477 386 371 392 C247 399 119 347 95 240 C72 135 183 67 300 67" markerEnd="url(#loopArrow)" />
    {nodes.map(([label,x,y], index) => <g className={index === 2 ? 'loop-node focal' : 'loop-node'} key={label} transform={`translate(${x - 62} ${y - 24})`}><rect width="124" height="48" rx="14" /><text x="62" y="30" textAnchor="middle">{label}</text></g>)}
    <g className="loop-hub" transform="translate(225 174)"><path d="M14 0h172l14 14v78l-14 14H14L0 92V14Z" /><text x="100" y="44" textAnchor="middle">Năng lực toán</text><text className="loop-sub" x="100" y="69" textAnchor="middle">mỗi vòng tiến bộ một chút</text></g>
    {nodes.map(([,x,y], index) => { const dx=325-x,dy=227-y,len=Math.hypot(dx,dy),sx=x+dx/len*50,sy=y+dy/len*28,ex=325-dx/len*112,ey=227-dy/len*57; return <line className="loop-spoke" key={index} x1={sx} y1={sy} x2={ex} y2={ey} />; })}
  </svg>;
}

function CalculatorPanel({ close }: { close: () => void }) {
  const [value,setValue]=useState('');
  const press=(key:string)=>{ if(key==='C')return setValue(''); if(key==='⌫')return setValue(v=>v.slice(0,-1)); if(key==='='){try{const safe=value.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-');if(!/^[0-9+\-*/().\s]+$/.test(safe))throw new Error();setValue(String(Function(`"use strict";return (${safe})`)()));}catch{setValue('Sai phép tính');}return;} setValue(v=>v==='Sai phép tính'?key:v+key); };
  return <aside className="floating-panel calculator-panel" aria-label="Máy tính"><div className="floating-title"><strong><Calculator />Máy tính</strong><button onClick={close} aria-label="Đóng"><X /></button></div><output>{value||'0'}</output><div className="calculator-grid">{['C','⌫','(',')','7','8','9','÷','4','5','6','×','1','2','3','−','0','.','=','+'].map(key=><button className={key==='='?'equals':''} key={key} onClick={()=>press(key)}>{key}</button>)}</div></aside>;
}

function ScreenDrawing({ close }: { close: () => void }) {
  const canvasRef=useRef<HTMLCanvasElement>(null),drawing=useRef(false),last=useRef({x:0,y:0}); const [mode,setMode]=useState<'pen'|'eraser'>('pen');
  useEffect(()=>{const canvas=canvasRef.current!;const resize=()=>{const ratio=window.devicePixelRatio||1;canvas.width=innerWidth*ratio;canvas.height=innerHeight*ratio;canvas.style.width=`${innerWidth}px`;canvas.style.height=`${innerHeight}px`;canvas.getContext('2d')!.scale(ratio,ratio);};resize();window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize);},[]);
  const start=(e:React.PointerEvent)=>{drawing.current=true;last.current={x:e.clientX,y:e.clientY};e.currentTarget.setPointerCapture(e.pointerId);};
  const move=(e:React.PointerEvent)=>{if(!drawing.current)return;const next={x:e.clientX,y:e.clientY},ctx=canvasRef.current!.getContext('2d')!;ctx.globalCompositeOperation=mode==='eraser'?'destination-out':'source-over';ctx.strokeStyle='#163a59';ctx.lineWidth=mode==='eraser'?28:5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(last.current.x,last.current.y);ctx.lineTo(next.x,next.y);ctx.stroke();last.current=next;};
  const clear=()=>{const canvas=canvasRef.current!;canvas.getContext('2d')!.clearRect(0,0,canvas.width,canvas.height);};
  return <div className="screen-ink"><canvas ref={canvasRef} onPointerDown={start} onPointerMove={move} onPointerUp={()=>drawing.current=false} onPointerCancel={()=>drawing.current=false}/><div className="ink-toolbar" role="toolbar" aria-label="Công cụ vẽ trên màn hình"><button className={mode==='pen'?'active':''} onClick={()=>setMode('pen')}><PenLine />Bút</button><button className={mode==='eraser'?'active':''} onClick={()=>setMode('eraser')}><Eraser />Tẩy</button><button onClick={clear}><RotateCcw />Xóa nét</button><button className="ink-done" onClick={close}><CheckCircle2 />Xong</button></div></div>;
}

export default function HomePage() {
  const [stats,setStats]=useState<DashboardStats>({answered:0,completed:0,contests:0}); const [tool,setTool]=useState<'calc'|'draw'|null>(null); useEffect(()=>setStats(readStats()),[]);
  return <main className="quest-page"><Header />
    <section className="quest-hero"><div className="hero-copy"><span className="quest-kicker"><Gamepad2 />Phòng lab toán học</span><h1>Chọn một nhiệm vụ.<br/>Bắt đầu học ngay.</h1><p>Lý thuyết ngắn gọn, bài tập có hình minh họa, đề thi giữ nguyên cấu trúc và ôn tập theo từng chương.</p><div className="hero-actions"><a className="quest-button primary" href="/math/"><BookOpen />Học theo chương</a><a className="quest-button secondary" href="/contests/"><Medal />Làm đề thi</a></div><div className="hero-status"><span><b>{stats.answered}</b> câu đã làm</span><span><b>{stats.contests}</b> câu thi</span><span><b>{stats.completed}</b> mục hoàn tất</span></div></div><div className="hero-map"><LearningLoop/><p><Sparkles/>Mỗi lần ôn lại, em mở thêm một vòng kiến thức.</p></div></section>
    <section className="quest-section" aria-labelledby="mission-title"><div className="section-copy"><span>Đi đường nào cũng được</span><h2 id="mission-title">Bốn lối vào, một hành trình</h2><p>Không cần tìm trong nhiều menu. Chọn đúng việc em muốn làm ngay bây giờ.</p></div><div className="mission-board"><a className="mission mission-learn" href="/math/"><span className="mission-icon"><BrainCircuit/></span><div><small>Học</small><h3>Lý thuyết theo chương</h3><p>Hiểu ý chính trước khi làm bài.</p></div><ChevronRight/></a><a className="mission mission-practice" href="/math/?book=junior2&chapter=1"><span className="mission-icon"><PenLine/></span><div><small>Luyện</small><h3>Bài tập có hình</h3><p>Làm trực tiếp, xem lời giải từng bước.</p></div><ChevronRight/></a><a className="mission mission-test" href="/contests/"><span className="mission-icon"><Trophy/></span><div><small>Thi</small><h3>SMC · TIMO · SASMO · Kangaroo</h3><p>Giữ nguyên thứ tự và cấu trúc đề gốc.</p></div><ChevronRight/></a><a className="mission mission-review" href="/math/?book=junior2&chapter=1"><span className="mission-icon"><RotateCcw/></span><div><small>Ôn</small><h3>Ôn tập theo chương</h3><p>Quay lại đúng kỹ năng còn yếu.</p></div><ChevronRight/></a></div></section>
    <section className="quest-section library-section" aria-labelledby="books-title"><div className="section-copy"><span>Thư viện học tập</span><h2 id="books-title">Chọn đúng trình độ</h2><p>Sáu bộ sách dùng chung một cách học để học viên không phải làm quen lại giao diện.</p></div><div className="book-shelf">{BOOKS.map(book=><a className={`book-spine ${book.color}`} href={`/math/?book=${book.id}`} key={book.id}><span>{book.title}</span><small>{book.level}</small><LibraryBig/></a>)}</div></section>
    <section className="quest-section contest-section" aria-labelledby="contest-title"><div className="section-copy"><span>Đấu trường quốc tế</span><h2 id="contest-title">Luyện đúng cấu trúc đề</h2><p>Không biến đề thi thành bài học rời. Thứ tự câu, cách chọn đáp án và chế độ làm bài vẫn được giữ nguyên.</p></div><div className="contest-strip">{CONTESTS.map(contest=><a href={`/contests/?contest=${contest.id}`} key={contest.id}><i>{contest.icon}</i><b>{contest.label}</b><span>{contest.note}</span></a>)}</div></section>
    <section className="control-callout"><div><GraduationCap/><span><strong>Một nơi để kiểm soát toàn bộ.</strong><small>Xem tiến độ sách, đề thi và câu cần ôn từ cùng nguồn dữ liệu.</small></span></div><a href="/manage">Mở trang quản lý<ChevronRight/></a></section>
    <footer className="quest-footer"><Brand/><p>Học rõ ràng. Luyện có mục tiêu. Ôn đúng chỗ.</p><nav><a href="/math/">Sách học</a><a href="/contests/">Đề thi</a><a href="/manage">Quản lý</a></nav></footer>
    <div className="quick-tools" aria-label="Công cụ học tập"><button onClick={()=>setTool(tool==='calc'?null:'calc')}><Calculator/>Máy tính</button><button onClick={()=>setTool('draw')}><PenLine/>Viết lên màn hình</button></div>{tool==='calc'&&<CalculatorPanel close={()=>setTool(null)}/>} {tool==='draw'&&<ScreenDrawing close={()=>setTool(null)}/>} </main>;
}
