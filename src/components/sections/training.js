import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledTrainingSection = styled.section`
  max-width: 900px;

  .training-group {
    margin-bottom: 50px;

    h3 {
      margin-bottom: 20px;
      color: var(--lightest-slate);
      font-size: var(--fz-xxl);
    }
  }
`;

const StyledTrainingList = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
`;

const StyledTrainingItem = styled.li`
  position: relative;
  margin-bottom: 30px;
  padding-left: 20px;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
  }

  h4 {
    margin-bottom: 2px;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;

    .issuer {
      color: var(--green);
    }
  }

  .date {
    margin-bottom: 10px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  p {
    margin: 0;
    color: var(--light-slate);
    font-size: var(--fz-md);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;

const Training = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledTrainingSection id="training" ref={revealContainer}>
      <h2 className="numbered-heading">Training &amp; Certifications</h2>

      <div className="training-group">
        <h3>Certifications</h3>
        <StyledTrainingList>
          <StyledTrainingItem>
            <h4>
              <span>Professional Industrial Automation Design Training</span>
              <span className="issuer">&nbsp;@&nbsp;Ulterior Engineering Ltd</span>
            </h4>
            <p className="date">Issued Jun 2026 &middot; Credential ID: UE-APT-GZPR-B027-002</p>
            <p>
              Motor Control Center (MCC), Variable-Frequency Drives (VFD), PLC Programming, Human
              Machine Interface, Relay Logic Control (RLC).
            </p>
          </StyledTrainingItem>

          <StyledTrainingItem>
            <h4>
              <span>EF SET English Certificate 59/100 (B2 Upper Intermediate)</span>
              <span className="issuer">&nbsp;@&nbsp;EF SET</span>
            </h4>
            <p className="date">Issued Mar 2026</p>
            <p>
              <a
                href="https://cert.efset.org/en/PmSnr3"
                target="_blank"
                rel="noreferrer">
                Show credential
              </a>
            </p>
          </StyledTrainingItem>
        </StyledTrainingList>
      </div>

      <div className="training-group">
        <h3>Courses</h3>
        <StyledTrainingList>
          <StyledTrainingItem>
            <h4>
              <span>Power System Design With ETAP</span>
              <span className="issuer">&nbsp;@&nbsp;Ulterior Engineering Ltd</span>
            </h4>
          </StyledTrainingItem>

          <StyledTrainingItem>
            <h4>
              <span>Solar PV Off-Grid</span>
              <span className="issuer">&nbsp;@&nbsp;Ulterior Engineering Ltd</span>
            </h4>
          </StyledTrainingItem>
        </StyledTrainingList>
      </div>
    </StyledTrainingSection>
  );
};

export default Training;
