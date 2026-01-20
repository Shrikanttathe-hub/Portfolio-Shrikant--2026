import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          {isMobile ? (
            <img src={technology.icon} alt='icon' className="w-16 h-16 object-contain"/>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  )
}
export default SectionWrapper(Tech, "");