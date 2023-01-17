import React from 'react';

function Toast() {
  return (
    <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-900 text-gray-100 divide-gray-700">
      <div className="flex flex-1 flex-col p-4 border-l-8 border-violet-400">
        <span className="text-2xl">Success</span>
        <span className="text-xs text-gray-400">
          Vitae nulla eligendi dignissimos culpa doloribus.
        </span>
      </div>
      <button className="px-4 flex items-center text-xs uppercase tracking-wide text-gray-400 border-gray-700">
        Dismiss
      </button>
    </div>
  );
}

export default Toast;
