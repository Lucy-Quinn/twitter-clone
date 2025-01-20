'use client';
import { Header } from '@/components/Header';
import { Tweets } from '@/components/Tweets';
// import { currentUser } from '@clerk/nextjs/server';

export default function Home() {
  // const user = currentUser();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-full">
      <div className="col-span-4">
        <Header />
      </div>
      <div className="col-span-8">
        <Tweets />
      </div>

      {/* col 3 - misc */}
    </div>
  );
}
