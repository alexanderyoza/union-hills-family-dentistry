import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/RouteChange.css'

const RouteChange = ({ children }) => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 150);

      prevLocationRef.current = location.pathname;

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className={animate ? 'in' : 'out'}>
      {children}
    </div>
  );
};

export default RouteChange;