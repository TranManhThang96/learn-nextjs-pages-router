import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import {getFeaturedEvents} from '@/dummy-data'
import EventList from '@/components/Events/EventList';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
}
