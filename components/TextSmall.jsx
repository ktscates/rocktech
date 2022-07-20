import React from 'react';

function TextSmall({ text, className}) {
  return (
    <div>
      <h1 className={`${className} font-semibold text-base leading-[22px] font-ubuntu`}>{text}</h1>
    </div>
  );
}

export default TextSmall;
