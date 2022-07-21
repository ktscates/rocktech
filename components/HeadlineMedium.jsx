import React from 'react';

function HeadlineMedium({ text, className}) {
  return (
    <div>
      <h1 className={`${className} font-light text-[93px] leading-[100px] font-ubuntu`}>{text}</h1>
    </div>
  );
}

export default HeadlineMedium;