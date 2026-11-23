import { BookOpen, Compass, Home, LogOut, Trophy } from 'lucide-react';
import { chatGPTSignOutPath, requireChatGPTUser } from '../chatgpt-auth';
import { getAccess } from '../server-access';
import ManagerClient from './manager-client';

export const dynamic = 'force-dynamic';

export default async function ManagePage() {
  await requireChatGPTUser('/manage');
  const access = await getAccess();
  if (access.role !== 'admin') return <main className="access-page"><div className="access-card"><span className="quest-brand-mark"><Compass/></span><h1>Trang dành cho quản trị viên</h1><p>Tài khoản <b>{access.user?.email}</b> không có quyền quản lý học viên.</p><a href="/student">Mở trang học viên</a><a className="quiet-link" href={chatGPTSignOutPath('/')}>Đăng xuất</a></div></main>;
  return <main className="manager-page">
    <header className="manager-header"><a className="quest-brand" href="/"><span className="quest-brand-mark"><Compass/></span><span><strong>Math Quest Lab</strong><small>Admin Control Room</small></span></a><nav><a href="/"><Home/>Trang chủ</a><a href="/math/"><BookOpen/>Sách học</a><a href="/contests/"><Trophy/>Đề thi</a></nav><a className="manager-signout" href={chatGPTSignOutPath('/')}><LogOut/>Đăng xuất</a></header>
    <ManagerClient adminEmail={access.user?.email || ''}/>
  </main>;
}
