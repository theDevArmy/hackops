"use client"
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react'

const Fade = ({children, duration = 0, className}) => {

    const [visible, setVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setVisible(true);
                    }, duration);
                }
            });
        }, {
            threshold: 0.1
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        }

    }, [duration])

  return (
    <div ref={elementRef} className={clsx('transition-all duration-700 ease-out', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6', className)}>
        {children}
    </div>
  )
}

export default Fade