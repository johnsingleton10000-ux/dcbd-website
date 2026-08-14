'use client';

import { useState } from 'react';

export default function DropImage({ src, alt, className = '', children }) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) return children || null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
