import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

//! TEMP
const categories = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'];

const Work = () => {
  const handleWorkFilter = () => { }
  
  return (
    <>
      <h2 className='head-text'>
        My creative <span>portfolio</span> section
      </h2>

      <div className='app__work-filter'>
        {categories.map((item, i) => (<div className='' key={i} onClick={() => handleWorkFilter(item)}></div>))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
