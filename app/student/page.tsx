import { BookOpen, Compass, LogOut, Trophy } from 'lucide-react';
import { eq } from 'drizzle-orm';
import { chatGPTSignOutPath, requireChatGPTUser } from '../chatgpt-auth';
import { getAccess } from '../server-access';
import { getDb } from '../../db';
import { progress } from '../../db/schema';

export const dynamic = 'force-dynamic';

export default async function StudentPage() {
  await requireChatGPTUser('/student');
  const access = await getAccess();
  if (access.role === 'admin') return <main className="access-page"><div className="access-card"><span className="quest-brand-mark"><Compass/></span><h1>Xin chào quản trị viên</h1><p>Bạn đang đăng nhập bằng tài khoản admin.</p><a href="/manage">Mở trang quản lý</a><a className="quiet-link" href={chatGPTSignOutPath('/')}>Đăng xuất</a></div></main>;
  if (access.role !== 'student') return <main className="access-page"><div className="access-card"><span className="quest-brand-mark"><Compass/></span><h1>Chưa được cấp quyền học</h1><p>Hãy gửi email <b>{access.user?.email}</b> cho quản trị viên để được tạo tài khoản học viên.</p><a className="quiet-link" href={chatGPTSignOutPath('/')}>Đăng xuất</a></div></main>;
  const [saved] = await getDb().select().from(progress).where(eq(progress.studentEmail, access.user!.email)).limit(1);
  let answered=0,completed=0,contest=0;
  try { const snapshot=JSON.parse(saved?.snapshotJson||'{}') as Record<string,string>; for(const [key,value] of Object.entries(snapshot)){const item=JSON.parse(value||'{}');if(key.startsWith('math-quest-')){answered+=Object.keys(item.answers||{}).length;completed+=Object.keys(item.completed||{}).length;}if(key==='smc-progress-v2')contest+=Object.values(item||{}).filter((x:unknown)=>Boolean((x as {answer?:unknown})?.answer)).length;}} catch {}
  return <main className="student-page"><header><a className="quest-brand" href="/"><span className="quest-brand-mark"><Compass/></span><span><strong>Math Quest Lab</strong><small>Hồ sơ học viên</small></span></a><a href={chatGPTSignOutPath('/')}><LogOut/>Đăng xuất</a></header><section className="student-hero"><span>Xin chào</span><h1>{access.student?.displayName}</h1><p>{access.student?.grade||'Học viên Math Quest'} · dữ liệu đồng bộ trên Cloudflare</p><div><article><b>{answered}</b><small>Câu đã trả lời</small></article><article><b>{completed}</b><small>Mục hoàn tất</small></article><article><b>{contest}</b><small>Câu thi đã làm</small></article></div></section><section className="student-actions"><a href="/math/"><BookOpen/><span><b>Tiếp tục học</b><small>Lý thuyết, bài tập và ôn tập theo chương</small></span></a><a href="/contests/"><Trophy/><span><b>Luyện đề thi</b><small>SMC · TIMO · SASMO · Kangaroo</small></span></a></section><p className="sync-note">Tiến độ trên trang học và trang đề thi được tự động đồng bộ khi bạn đăng nhập.</p></main>;
}
