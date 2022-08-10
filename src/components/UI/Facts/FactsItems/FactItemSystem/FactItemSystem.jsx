import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';

import Wood from '../../../../../images/wood.png';

export const FactItemColumn = ({ children }) => {
  return <div className="fact-item__column">{children}</div>;
};

// export const FactItemSmall = ({ description, count }) => {
//   return (
//     <div className="fact-item fact-item__sm">
//       <div className="fact-item__info">
//         <div className="fact-item__count--wrapper">
//           <span className="fact-item__count">{count}</span>
//         </div>
//         <div className="fact-item__descr--wrapper">
//           <p className="fact-item__descr">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export const FactItemSmall = React.forwardRef((props, ref) => (
  <div className="fact-item fact-item__sm" ref={ref}>
    <div className="fact-item__info">
      <div className="fact-item__count--wrapper">
        <span className="fact-item__count">{props.count}</span>
      </div>
      <div className="fact-item__descr--wrapper">
        <p className="fact-item__descr">{props.description}</p>
      </div>
    </div>
  </div>
));

// export const FactItemMiddle = ({ description, count }) => {
//   return (
//     <div
//       className="fact-item fact-item__md"
//       style={{ backgroundImage: `url(${Wood})` }}
//     >
//       <div className="fact-item__info">
//         <div className="fact-item__count--wrapper">
//           <span className="fact-item__count">{count}</span>
//         </div>
//         <div className="fact-item__descr--wrapper">
//           <p className="fact-item__descr">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export const FactItemMiddle = React.forwardRef((props, ref) => (
  <div
    className="fact-item fact-item__md"
    style={{ backgroundImage: `url(${Wood})` }}
    ref={ref}
  >
    <div className="fact-item__info">
      <div className="fact-item__count--wrapper">
        <span className="fact-item__count">{props.count}</span>
      </div>
      <div className="fact-item__descr--wrapper">
        <p className="fact-item__descr">{props.description}</p>
      </div>
    </div>
  </div>
));

// export const FactItemBig = ({ description, count, cover }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       factCover: file(relativePath: { eq: "fact_cover.jpeg" }) {
//         childImageSharp {
//           gatsbyImageData(
//             breakpoints: [576, 768, 992, 1200, 1920]
//             placeholder: BLURRED
//             formats: [AUTO, WEBP, AVIF]
//             layout: FULL_WIDTH
//           )
//         }
//       }
//     }
//   `);
//   const image = getImage(data.factCover.childImageSharp);
//   return (
//     <div className="fact-item fact-item__xl">
//       <div className="fact-item__cover--wrapper">
//         <GatsbyImage
//           className="fact-item__cover"
//           image={image}
//           alt={'Cover'}
//           loading="eager"
//         />
//       </div>

//       <div className="fact-item__info">
//         <div className="fact-item__count--wrapper">
//           <span className="fact-item__count">{count}</span>
//         </div>
//         <div className="fact-item__descr--wrapper">
//           <p className="fact-item__descr">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export const FactItemBig = React.forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      factCover: file(relativePath: { eq: "fact_cover.jpeg" }) {
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
  const image = getImage(data.factCover.childImageSharp);
  return (
    <div className="fact-item fact-item__xl" ref={ref}>
      <div className="fact-item__cover--wrapper">
        <GatsbyImage
          className="fact-item__cover"
          image={image}
          alt={'Cover'}
          loading="eager"
        />
      </div>

      <div className="fact-item__info">
        <div className="fact-item__count--wrapper">
          <span className="fact-item__count">{props.count}</span>
        </div>
        <div className="fact-item__descr--wrapper">
          <p className="fact-item__descr">{props.description}</p>
        </div>
      </div>
    </div>
  );
});

// FactItemSystem.propTypes = {};

// export default FactItemSystem;
