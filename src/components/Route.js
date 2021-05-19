import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  // sets path names
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    // define the callback as a separate function
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // add callback
    window.addEventListener('popstate', onLocationChange);

    // remove clalback
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
