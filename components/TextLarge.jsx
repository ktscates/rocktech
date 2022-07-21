import React from 'react';

function TextLarge({ text, className}) {
  return (
    <div>
      <h1 className={`${className} font-light text-[44px] leading-[57px] font-ubuntu`}>{text}</h1>
    </div>
  );
}

export default TextLarge;