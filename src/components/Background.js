import React from 'react';

const Background = () => (
  <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div className="w-[108rem] flex-none flex justify-end">
      <picture>
        <source srcset="/_next/static/media/docs@30.8b9a76a2.avif" type="image/avif">
          <img src="/_next/static/media/docs@tinypng.d9e4dcdc.png" alt="" className="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async">
      </picture>
      <picture>
        <source srcset="/_next/static/media/docs-dark@30.1a9f8cbf.avif" type="image/avif">
          <img src="/_next/static/media/docs-dark@tinypng.1bbe175e.png" alt="" className="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async">
        </picture>
      </div>
  </div>;
);

export default Background;
