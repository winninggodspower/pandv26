'use client';

import { useState, useEffect } from 'react';

export default function CollapsibleSection({ isOpen, children, className = '' }) {
  const [height, setHeight] = useState(0);
  const [contentRef, setContentRef] = useState(null);

  useEffect(() => {
    if (contentRef) {
      setHeight(isOpen ? contentRef.scrollHeight : 0);
    }
  }, [isOpen, contentRef, children]);

  return (
    <div
      style={{
        maxHeight: `${height}px`,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out',
      }}
      className='m-0'
    >
      <div ref={setContentRef} className='space-y-6 ps-3 pl-4 border-l-4 border-primary'>
        {children}
      </div>
    </div>
  );
}
