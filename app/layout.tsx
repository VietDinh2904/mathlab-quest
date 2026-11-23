import type { Metadata } from 'next';
import { Baloo_2, Nunito } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Math Quest Lab · Học toán như một chuyến phiêu lưu',
  description:
    'Trang học Toán Olympic song ngữ với lý thuyết, bài tập, gợi ý trực quan, máy tính và bảng vẽ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${baloo.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
