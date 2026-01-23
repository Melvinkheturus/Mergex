import type { WorkItem } from '../types';
import Image from 'next/image';

interface WorkCardProps {
    work: WorkItem;
}

export default function WorkCard({ work }: WorkCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg bg-gray-200 aspect-[4/3] mb-4 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10" />
                <Image
                    alt={work.imageAlt}
                    src={work.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {work.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{work.category}</p>
        </div>
    );
}
