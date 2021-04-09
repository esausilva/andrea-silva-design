// import React, { useRef } from 'react';
// import { GatsbyImage as Img } from 'gatsby-plugin-image';
// import styled from 'styled-components';
// import { useStaticQuery, graphql } from 'gatsby';
// import { lighten } from 'polished';

// import { Image } from '~helpers/Image';
// import { transformationsFormat } from '~utils/index';
// import { ArrowLeft, ArrowRight } from '~svgs/Chevron';
// import { ButtonSvgWrapper } from '~src/components/styles/ButtonSvgWrapper';

// //#region Styles
// const imageDimensions = '20rem !important';
// const imageDimensionsMedium = '30rem !important';
// const imageDimensionsLarge = '35rem !important';

// const Instagram = styled.section`
//   margin-top: 2rem;
//   position: relative;
//   h3 {
//     text-align: center;
//   }
//   @media (min-width: ${({ theme }) => theme.media.medium}) {
//     h3 {
//       margin-left: 2rem;
//     }
//   }
// `;

// const SwipeInfo = styled.span`
//   position: absolute;
//   right: 0.8rem;
//   z-index: 1;
//   color: #fff;
//   text-shadow: ${({ theme }) => theme.fonts.textShadow};
//   font-weight: bolder;
//   @media (min-width: ${({ theme }) => theme.media.medium}) {
//     display: none;
//   }
// `;

// const SliderWrapper = styled.div`
//   height: ${imageDimensions};
//   overflow: hidden;
//   position: relative;
//   @media (min-width: ${({ theme }) => theme.media.medium}) {
//     height: ${imageDimensionsMedium};
//   }
//   @media (min-width: ${({ theme }) => theme.media.large}) {
//     height: ${imageDimensionsLarge};
//   }
// `;

// const Slider = styled.div`
//   display: flex;
//   overflow-x: auto;
//   overflow-y: hidden;
//   scroll-behavior: smooth;
//   padding-bottom: 20px;
//   a {
//     position: relative;
//   }
// `;

// const LastSlide = styled.a`
//   min-width: ${imageDimensions};
//   min-height: ${imageDimensions};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: ${lighten(0.2, '#000')};
//   color: #fff;
//   @media (min-width: ${({ theme }) => theme.media.medium}) {
//     min-width: ${imageDimensionsMedium};
//     min-height: ${imageDimensionsMedium};
//   }
//   @media (min-width: ${({ theme }) => theme.media.large}) {
//     min-width: ${imageDimensionsLarge};
//     min-height: ${imageDimensionsLarge};
//   }
// `;

// const GatsbyImage = styled(Img)`
//   width: ${imageDimensions};
//   height: ${imageDimensions};
//   img {
//     margin-bottom: 0;
//     width: 100%;
//     height: 100%;
//   }
//   @media (min-width: ${({ theme }) => theme.media.medium}) {
//     width: ${imageDimensionsMedium};
//     height: ${imageDimensionsMedium};
//   }
//   @media (min-width: ${({ theme }) => theme.media.large}) {
//     width: ${imageDimensionsLarge};
//     height: ${imageDimensionsLarge};
//   }
// `;

// const Overlay = styled.span`
//   opacity: 0;
//   transition: opacity 600ms;
//   position: absolute;
//   top: 0;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 1.5rem;
//   justify-content: center;
//   font-size: 1.3rem;
//   span {
//     color: ${({ theme }) => theme.colors.pink};
//     font-weight: bolder;
//   }
//   &:hover {
//     opacity: 1;
//   }
//   @media (min-width: ${({ theme }) => theme.media.medium}) {
//     font-size: 1.5rem;
//   }
//   @media (min-width: ${({ theme }) => theme.media.large}) {
//     font-size: 1.7rem;
//   }
// `;
// //#endregion

// const LEFT = 'left';
// const RIGHT = 'right';

// const InstagramFeed = () => {
//   //#region Queries
//   const data = useStaticQuery(graphql`
//     query InstagramFeed {
//       grams: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 15) {
//         edges {
//           node {
//             id
//             caption
//             timestamp
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(width: 350, height: 350, layout: FIXED)
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   //#endregion

//   const sliderRef = useRef(null);

//   const moveSlider = direction => {
//     switch (direction) {
//       case LEFT:
//         sliderRef.current.scrollLeft -= 600;
//         break;
//       case RIGHT:
//         sliderRef.current.scrollLeft += 600;
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Instagram>
//       <h3>Follow Me On Instagram</h3>
//       <SwipeInfo aria-hidden="true">← Swipe →</SwipeInfo>
//       <SliderWrapper>
//         <Slider ref={sliderRef}>
//           {data.grams.edges.map(
//             ({ node: { id, localFile, timestamp, caption } }) => (
//               <a
//                 href={`https://www.instagram.com/p/${id}/`}
//                 target="_blank"
//                 rel="noreferrer"
//                 key={timestamp}
//               >
//                 <GatsbyImage
//                   image={localFile.childImageSharp.gatsbyImageData}
//                   loading="lazy"
//                   alt={`Instagram photo by Andrea Silva Design on ${LongDateFromUnix(
//                     timestamp,
//                   )}`}
//                 />
//                 <Overlay>
//                   {caption.substring(0, 150)}... <span>View on Instagram</span>
//                 </Overlay>
//               </a>
//             ),
//           )}
//           <LastSlide
//             href="https://www.instagram.com/andreasilva.design"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <Image
//               relativePath="social-media-instagram-icon-white.png"
//               alt="Andrea Silva Design Instagram"
//               transformations={transformationsFormat('w_40,h_40')}
//             />
//             See More
//           </LastSlide>
//         </Slider>
//         <ButtonSvgWrapper onClick={() => moveSlider(LEFT)}>
//           <ArrowLeft />
//         </ButtonSvgWrapper>
//         <ButtonSvgWrapper onClick={() => moveSlider(RIGHT)}>
//           <ArrowRight />
//         </ButtonSvgWrapper>
//       </SliderWrapper>
//     </Instagram>
//   );
// };

// const LongDateFromUnix = timestamp => {
//   let date = new Date(timestamp * 1000);

//   date = date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });

//   return date;
// };

// export { InstagramFeed };
