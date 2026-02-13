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
      className={className}
    >
      <div ref={setContentRef}>
        {children}
      </div>
    </div>
  );
}
