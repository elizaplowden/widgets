import { useEffect } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => {
    // define the callback as a separate function
    const onLocationChange = () => {
      console.log('location Change');
    };

    // add callback
    window.addEventListener('popstate', onLocationChange);

    // remove clalback
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
