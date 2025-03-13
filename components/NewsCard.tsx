import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  href: string;
}

export default function NewsCard({ title, description, imageUrl, date, category, href }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#14587f] text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-[#14587f] transition-colors">
          <Link href={href}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 line-clamp-3">
          {description}
        </p>
        <div className="mt-4">
          <Link 
            href={href}
            className="inline-flex items-center text-[#14587f] hover:text-[#14587f]/80 font-medium"
          >
            Leer más
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 