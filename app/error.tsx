'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('🔥 App Error:', error.message);
  }, [error]);

  return (
    <html>
      <body className="p-10 text-red-600">
        <h2>⚠️ Application Error</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Try Again</button>
      </body>
    </html>
  );
}
