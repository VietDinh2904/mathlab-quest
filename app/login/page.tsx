'use client';
import { FormEvent, useState } from 'react';
import { Compass } from 'lucide-react';

export default function LoginPage() {
  const [message,setMessage]=useState('');
  const [loading,setLoading]=useState(false);
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setLoading(true); setMessage('');
    const data=Object.fromEntries(new FormData(event.currentTarget));
    const next=new URLSearchParams(location.search).get('next')||'/student';
    const response=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,next})});
    const body=await response.json(); setLoading(false);
    if(!response.ok){setMessage('Email hoặc mật khẩu không đúng.');return;} location.href=body.next;
  }
  return <main className="access-page"><form className="access-card login-card" onSubmit={submit}><span className="quest-brand-mark"><Compass/></span><h1>Đăng nhập học tập</h1><p>Dùng tài khoản do quản trị viên tạo trong Learning Project Admin.</p><label>Email<input name="email" type="email" required autoComplete="username"/></label><label>Mật khẩu<input name="password" type="password" required autoComplete="current-password"/></label>{message&&<p className="form-message">{message}</p>}<button type="submit" disabled={loading}>{loading?'Đang đăng nhập…':'Đăng nhập'}</button><a className="quiet-link" href="/">Về trang chủ</a></form></main>;
}
