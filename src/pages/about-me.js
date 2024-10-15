import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { MainLayout } from '~components/layouts/MainLayout';
import { KitSignupForm } from '~components/SignupForm/KitSignupForm';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Seo } from '~components/helpers/SEO';
import { transformationsFormat } from '~utils/index';
import { Image } from '~helpers/Image';
import { Title } from '~styles/Title';
import { gray } from '~styles/theme';

//#region Styles
const gridGap = '2rem';

const Content = styled(SecondaryLayout)`
  img {
    margin: 2rem auto;
    display: block;
  }
  form {
    width: 100%;
    margin: 2rem auto 0 auto;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    @media (min-width: ${({ theme }) => theme.media.medium}) {
      width: 85%;
    }
  }
`;

const ContentTop = styled.div`
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${gridGap};
  }
`;

const Quote = styled.p`
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.6rem);
  align-self: center;
  border-left: 0.8rem solid ${({ theme }) => theme.colors.gray};
  padding: 0.9rem 0.9rem 0.9rem 2rem;
  font-style: italic;
  background: ${lighten(0.13, gray)};
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.6rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.6rem);
  }
`;

const ContentBottom = styled.div`
  margin-bottom: 2em;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${gridGap};
  }
`;
//#endregion

const AboutMe = () => {
  return (
    <MainLayout>
      <Content>
        <Title>About Me</Title>
        <ContentTop>
          <p>
            Hi! My name is Andrea Silva. I am a graphic designer, artist, and
            illustrator pursuing a love for art that I've had since childhood.
            As a native Kansan, I now currently reside in Nashville, Tennessee.
            I graduated in 2010 with a BA in Graphic Design and minors in
            Painting and Music from Tabor College in Hillsboro, KS.
          </p>
          <Quote>
            "As a graphic designer, illustrator and artist I believe in the
            power of beautiful images to tell a story."
          </Quote>
        </ContentTop>
        <Image
          alt="Andrea Silva"
          title="Andrea Silva"
          relativePath="andrea-silva-painting-watercolor.jpg"
          transformations={transformationsFormat('w_1000')}
        />
        <ContentBottom>
          <div>
            <p>
              While in college I worked part-time at Great Plains Christian
              Radio, KJIL, a Christian radio station covering most of Kansas and
              parts of Oklahoma, Texas and Colorado. I soon discovered a love
              for radio, which led to my accepting a full-time position there
              after graduating. I was able to work as their graphic designer in
              house for 8 years and I continue on in that role remotely.
            </p>
            <p>
              In 2016, my travels took me to McAllen, Texas where I spent three
              and a half years as a graphic designer and radio host at 96.9
              KVMV, a Christian radio station covering the Rio Grande Valley and
              parts of Mexico.
            </p>

            <p>
              Though radio continues to be a big part of who I am, in 2019 I
              left my full-time position in the radio world to focus on my
              career as a graphic artist. Much of what I learned in sound design
              over the past decade has also carried over to the graphic design
              world, particularly as I continue growing my skills in motion
              design.
            </p>
          </div>
          <div>
            <p>
              When I'm not behind my computer or at my easel creating you might
              find me outdoors exploring with my dear husband of 5 years (and
              counting) and my toddler. Life with them is full and rewarding. As
              a foodie and health nut, in addition you might find me whipping up
              something tasty and healthy in the kitchen. I also will take any
              opportunity to travel and have enjoyed trips to Europe, the
              Bahamas, and across the U.S.
            </p>
            <p>
              Though I love being an artist, illustrator, and graphic designer,
              my true identity lies in my relationship with Jesus Christ and
              learning to follow Him. Any skills I possess I realize come from
              Him alone.
            </p>
            <p>
              Thanks for taking the time to stop by my website! It would be an
              honor to work with you on your next project whether you need a
              design for print, motion graphics for a website or logo animation,
              or personalized artwork to give as a gift or keepsake. Let me know
              how I can serve you!
            </p>
          </div>
        </ContentBottom>
        <KitSignupForm />
      </Content>
    </MainLayout>
  );
};

const structuredDataTemplate = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "{{url}}",
  "url": "{{url}}",
  "name": "Andrea Silva",
  "email": "{{email}}",
  "image": "{{andrea-photo}}",
  "telephone": "{{phone}}}",
  "jobTitle": "Fine Art Artist, Graphic Designer and Illustrator"
}`;

export default AboutMe;

export const Head = ({ location }) => (
  <Seo
    pageTitle="About Me"
    pathName={location.pathname}
    structuredDataTemplate={structuredDataTemplate}
  />
);
