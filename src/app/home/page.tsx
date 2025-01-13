import { Header } from '@/components/Header';
import { Tweets } from '@/components/Tweets';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      <Header />
      <Tweets />
      {/* col 3 - misc */}
    </div>
  );
}
