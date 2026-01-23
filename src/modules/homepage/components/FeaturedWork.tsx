import { FEATURED_WORK } from '../constants';
import WorkCard from './WorkCard';

export default function FeaturedWork() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURED_WORK.map((work) => (
                        <WorkCard key={work.id} work={work} />
                    ))}
                </div>
            </div>
        </section>
    );
}
