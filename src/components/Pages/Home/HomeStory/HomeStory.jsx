import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import useLanguage from '../../../../hooks/useLanguage';

import ButtonLink from '../../../UI/ButtonLink/ButtonLink';
import SectionHeader from '../../../UI/SectionHeader/SectionHeader';

const HomeStory = React.forwardRef((props, ref) => {
  const { dataStory, storyImage } = props;
  const { fadeY, fadeOver } = ref;
  const data = useStaticQuery(graphql`
    query {
      portraitCover: file(relativePath: { eq: "about_portrait.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [576, 768, 992, 1200, 1920]
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      landscapeCover: file(relativePath: { eq: "about_landscape.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [576, 768, 992, 1200, 1920]
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);

  const breakpoints = useBreakpoint();

  const image = getImage(
    breakpoints.md
      ? data.landscapeCover.childImageSharp
      : data.portraitCover.childImageSharp
  );

  const langToggle = useLanguage;

  return (
    <section className="home-story">
      <div className="story-item story-item--1">
        <div className="story-item--content">
          <SectionHeader
            markerCount={'01'}
            markerTitle={langToggle('Історія', 'История', 'Story')}
            sectionTitle={langToggle(
              dataStory.title_ua,
              dataStory.title_ru,
              dataStory.title_en
            )}
            ref={fadeY}
          />

          <p className="story-item--text" ref={fadeY}>
            {langToggle(
              dataStory.text_ua,
              dataStory.text_ru,
              dataStory.text_en
            )}
          </p>
          <div className="btn-wrapper" ref={fadeY}>
            <ButtonLink
              to={'/about/'}
              title={langToggle(
                'дізнатись більше',
                'Узнать больше',
                'Read more'
              )}
            />
          </div>
        </div>
      </div>

      <div className="story-item story-item--2">
        <div className="animate-overlay" ref={fadeOver}></div>
        {image && (
          <GatsbyImage
            image={image}
            className="story-item--image story-item--image__md"
            alt={dataStory.title_ru}
          />
        )}
      </div>
    </section>
  );
});

export default HomeStory;
