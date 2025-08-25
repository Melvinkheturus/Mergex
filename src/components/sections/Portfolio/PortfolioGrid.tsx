'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
}
const projects: ProjectsTypes[] = [
  {
    id: '01',
    img: 'https://images.unsplash.com/photo-1615451210353-cbcf249f392a?q=80&w=1200&auto=format&fit=crop',
    title: 'Distrokings',
    des: 'We make your logo communicate with your customers more than words ever could',
  },
  {
    id: '02',
    img: 'https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=1200&auto=format&fit=crop',
    title: 'Profitables',
    des: 'We are dedicated to unlocking your business potential through precision development',
  },
  {
    id: '03',
    img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=800&auto=format&fit=crop',
    title: 'Topserve-copiers',
    des: 'We are dedicated to unlocking your business potential through precision development',
  },
  {
    id: '04',
    img: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=800&auto=format&fit=crop',
    title: 'Labramart.',
    des: 'We specialize in crafting marketing solutions that propel your brand to new heights',
  },
];
export default function index() {
  return (
    <>
      <div className='lg:columns-2 columns-1 overflow-hidden  px-5 pb-5 gap-5'>

        {projects.map((project, index) => {
          return (
            <>
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ ease: 'easeOut' }}
                viewport={{ once: false }}
                className="relative mb-5 rounded-xl overflow-hidden"
              >
                <div className='w-auto h-full'>
                  <Image
                    src={project?.img}
                    alt={'image'}
                    height={600}
                    width={1200}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end opacity-100'>
                   <div className='absolute top-4 right-4 text-sm font-semibold text-white'>Client Name</div>
                   <div className='flex justify-between items-start mb-2'>
                     <span className='text-xs font-medium uppercase text-purple-300'>Web App</span>
                   </div>
                   <div className="flex items-start justify-between gap-3">
                     <div className="flex-1 min-w-0">
                       <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                       <p className="text-sm text-gray-300 break-words">{project.des}</p>
                     </div>
                     <a href={`/Portfolio/${project.id}`} className="flex-shrink-0 w-12 h-12 text-white grid place-content-center rounded-full bg-black">
                       <MoveUpRight />
                     </a>
                   </div>
                 </div>
              </motion.article>
            </>
          );
        })}
      </div>
    </>
  );
}