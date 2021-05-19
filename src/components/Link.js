import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // says if key is held down. Boolean functions
    if (event.metaKey || event.ctrlKey) {
      // return early if either of those are true
      return;
    }

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
