import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '../components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Rick and Morty API',
  description: 'API fetch pratice with Next 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${poppins.className} min-h-screen bg-zinc-400 flex items-center justify-center`}
      >
        <div className='h-[80vh] w-[90%] max-w-[1280px] border-[1px] border-zinc-500 rounded-lg bg-zinc-300 overflow-hidden'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
