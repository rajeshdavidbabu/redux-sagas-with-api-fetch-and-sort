import React from 'react';

export default ({message, onRetry}) => {
  return (
    <div>
      {/* show the first occured error */}
      <p> Error occured during fetching {message.pop()}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}