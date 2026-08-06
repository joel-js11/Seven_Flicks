import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function CountUp({ end, duration = 1800, suffix = '' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = countRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        // Accessibility: animation reduced setting
        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (reduceMotion) {
          setCount(end);
          observer.disconnect();
          return;
        }

        const startTime = performance.now();

        const animateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          // Smooth ease-out animation
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.floor(easedProgress * end);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animateCount);
        observer.disconnect();
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h3 ref={countRef} className="count-number">
      {count}
      {suffix}
    </h3>
  );
}

function About() {
  return (
    <section id="about" className="reveal">
      <div className="eyebrow">About us</div>

      <div className="about-wrap">
        <div className="about-visual">
          <img
            src="/images/about.jpeg"
            alt="Seven Flicks team at work"
          />
        </div>

        <div className="about-text">
          <h2
            className="section-title"
            style={{ marginBottom: '22px' }}
          >
            Seven flicks. One story, every time.
          </h2>

          <p>
            Seven Flicks Photography started with a simple belief:
            any story, no matter how big, can be told in seven defining
            frames. Our team of photographers and editors chase those
            frames at weddings, in studios, on set, and on the street.
          </p>

          <p>
            We combine documentary instinct with a directed eye,
            delivering images that feel true to the moment and
            considered in the edit.
          </p>

          <div className="stat-row">
            <div className="stat">
              <h3>2024</h3>
              <span>Studio founded</span>
            </div>

            <div className="stat">
              <CountUp end={200} duration={2000} suffix="+" />
              <span>Happy clients</span>
            </div>

            <div className="stat">
              <CountUp end={100} duration={1800} suffix="+" />
              <span>Testimonials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;