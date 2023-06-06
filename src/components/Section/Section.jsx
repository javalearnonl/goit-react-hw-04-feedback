import React from 'react';
import ss from '../App/App.module.css'

const Section = ({ title, children }) => (
  <div className={ss.section }>
    <h2 className={ss.tittle }>{title}</h2>
    {children}
  </div>
);

export default Section;