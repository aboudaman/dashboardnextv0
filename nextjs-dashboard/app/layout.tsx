import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
import '@/app/ui/global.css';     //Import here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
