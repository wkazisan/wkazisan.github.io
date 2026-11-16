import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { Icon } from '@components/icons';

const StyledProjectContainer = styled.main`
  max-width: 1000px;
`;
const StyledProjectHeader = styled.header`
  margin-bottom: 50px;
`;
const StyledProjectContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  strong {
    color: var(--white);
    font-weight: normal;
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    margin: 0 20px 5px 0;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }
`;
const StyledProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: var(--lightest-slate);

  a {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 10px;

    &.external {
      svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .cta {
    ${({ theme }) => theme.mixins.smallButton};
    margin: 10px;
  }
`;
const StyledCover = styled.div`
  margin-bottom: 50px;

  .img {
    border-radius: var(--border-radius);
  }
`;

const ProjectTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tech, github, external, cover } = frontmatter;
  const image = cover ? getImage(cover) : null;

  return (
    <Layout location={location}>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: title },
          { property: 'og:title', content: title },
          { property: 'og:description', content: title },
          { property: 'og:type', content: 'article' },
          { property: 'og:image', content: `https://wkazisan.pro.bd/og.png` },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: title },
          { name: 'twitter:image', content: `https://wkazisan.pro.bd/og.png` },
          { name: 'twitter:site', content: '@wkazisan' },
        ]}
      />

      <StyledProjectContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/#projects">All projects</Link>
          <span>&nbsp;/&nbsp;</span>
          <Link to="/archive">Archive</Link>
        </span>

        <StyledProjectHeader>
          <p className="overline">Project</p>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </p>
          {tech && tech.length > 0 && (
            <StyledTechList>
              {tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </StyledTechList>
          )}
          <StyledProjectLinks>
            {github && (
              <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                <Icon name="GitHub" />
              </a>
            )}
            {external && (
              <a
                href={external}
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noreferrer">
                <Icon name="External" />
              </a>
            )}
            {!github && !external && (
              <a
                href="https://www.linkedin.com/in/wkazisan"
                aria-label="LinkedIn Profile"
                className="cta"
                target="_blank"
                rel="noreferrer">
                View on LinkedIn
              </a>
            )}
          </StyledProjectLinks>
        </StyledProjectHeader>

        {image && (
          <StyledCover>
            <GatsbyImage image={image} alt={title} className="img" />
          </StyledCover>
        )}

        <StyledProjectContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledProjectContainer>
    </Layout>
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        tech
        github
        external
        cover {
          childImageSharp {
            gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
