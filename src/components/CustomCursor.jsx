// components/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Check for touch device on component mount
  useEffect(() => {
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      );
    };
    
    setIsTouchDevice(checkTouchDevice());
  }, []);
  
  // Cursor effect logic
  useEffect(() => {
    // Don't set up cursor effects on touch devices
    if (isTouchDevice || !cursorRef.current) return;
    
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId;
    
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.4;
      cursorY += (mouseY - cursorY) * 0.4;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      animationFrameId = requestAnimationFrame(updateCursor);
    };
    
    animationFrameId = requestAnimationFrame(updateCursor);
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const onMouseDown = () => {
      cursor.classList.add('clicked');
    };
    
    const onMouseUp = () => {
      cursor.classList.remove('clicked');
    };
    
    const onMouseEnter = () => {
      cursor.classList.remove('hidden');
    };
    
    const onMouseLeave = () => {
      cursor.classList.add('hidden');
    };
    
    const onLinkEnter = () => {
      cursor.classList.add('link-hover');
    };
    
    const onLinkLeave = () => {
      cursor.classList.remove('link-hover');
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Add hover listeners to interactive elements
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onLinkEnter);
      el.addEventListener('mouseleave', onLinkLeave);
    });
    
    return () => {
      // Cleanup
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', onLinkEnter);
        el.removeEventListener('mouseleave', onLinkLeave);
      });
    };
  }, [isTouchDevice]); // Add isTouchDevice to dependency array
  
  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null;
  }
  
  return <div className="cursor" ref={cursorRef} />;
};

export default CustomCursor;