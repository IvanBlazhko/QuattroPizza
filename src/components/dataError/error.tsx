import React from 'react';

const Error: React.FC = () => {
  return (
    <div className="error">
      <div className="error__content">
        <div className="error__title">Error... 😕</div>
        <div className="error__subtitle">
          Sorry, we were unable to get a list of products. Reload the page or
          try again later.
        </div>
      </div>
    </div>
  );
};

export default Error;
