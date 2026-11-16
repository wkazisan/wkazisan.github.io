import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // CV অনুযায়ী স্কিল আপডেট করা হয়েছে
  const skills = [
    'Siemens S7-1200 PLC',
    'VFD & HMI Integration',
    'RLC & MCC Logic Design',
    'TIA Portal & Factory IO',
    'Industrial Troubleshooting',
    'Motor Control (DOL/F-R)',
    'Delta PLC & WPLSoft',
    'Solar PV Off-Grid Design'
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Overview</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Zisan, and I enjoy working with electrical systems and industrial control technologies. My interest in electrical engineering started during my diploma studies, where I began exploring motor control circuits and industrial wiring practices. Building and wiring control panels helped me understand the practical side of electrical systems beyond textbooks.
            </p>

            <p>
              Fast-forward to today, I have completed comprehensive industrial training at{' '}
              <span className="inline-link">Ulterior Engineering Ltd</span>, gained practical experience at{' '}
              <span className="inline-link">Dynamic Engineering Solutions (DES)</span>, and developed leadership skills at{' '}
              <span className="inline-link">Manarah Publication</span>.
            </p>

            <p>
              I now work as an Electrical Engineer at Ulterior Engineering Ltd and as an Entry Level Solar Designer (Remote) at Global Renewable Energy Ltd.
            </p>

            <p>
              My main focus these days is building a career as a Maintenance or Automation Engineer in progressive industrial sectors like Garments, Textile, FMCG, or Power Plants. I am eager to leverage my practical expertise in PLC, VFD, HMI, and RLC & MCC Control Panel Design to minimize factory downtime and ensure efficient operations.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
