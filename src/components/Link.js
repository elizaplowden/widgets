import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // prevents page reloading
    event.preventDefault();
    window.history.pushState({}, '', href);

    // will communicate that url has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
  <a onClick={onClick}
    className={className}
    href={href}>
    {children}
  </a>
  );
};

export default Link;
