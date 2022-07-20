import React from 'react';

function TextMedium({ text, className}) {
  return (
    <div>
      <h1 className={`${className} font-normal text-2xl leading-[34px] font-ubuntu`}>{text}</h1>
    </div>
  );
}

export default TextMedium;