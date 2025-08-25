import React, { ReactNode } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/ui/Carousel';
import SectionHeader from '@/components/ui/SectionHeader';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { imgPreview } from '@/components/website/constant';

function FeauturedProject() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Featured Projects"
          className="pb-8"
        />
        <Carousel options={OPTIONS} isAutoPlay={true} className='w-4/5 mx-auto'>
          <SliderContainer className='gap-2'>
            {imgPreview.map((img, index) => (
              <Slider key={index} className='w-full'>
                <div className='rounded-xl h-[400px] w-full relative overflow-hidden group'>
                  <Image 
                    src={img} 
                    alt={`Portfolio project ${index + 1}`} 
                    fill 
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end ${isDesktop ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-300' : 'opacity-100'}`}>
                    <div className='absolute top-4 right-4 text-sm font-semibold text-white'>Client Name</div>
                    <div className='flex justify-between items-start mb-2'>
                      <span className='text-xs font-medium uppercase text-purple-300'>Web App</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-white leading-tight">Project Title</h3>
                        <p className="text-sm text-gray-300 break-words">Boosting conversions with modern UX</p>
                      </div>
                      <button className={`flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 ease-out ${isDesktop ? 'opacity-0 group-hover:opacity-100 group-hover:scale-105' : 'opacity-100'}`}>
                        <MoveUpRight className='w-5 h-5 text-black' />
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            ))}
          </SliderContainer>
          <div className='flex justify-center py-4'>
            <SliderDotButton />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default FeauturedProject;