import { FC } from 'react';

import styled from '@emotion/styled';
import {
  faTwitter,
  faGithub,
  faGoodreads,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Divider } from 'Base/components/Divider';

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Link = styled.a`
  display: inline-block;
  height: 19.98px;
  width: 19.98px;
`;

const Socials = () => (
  <Wrapper>
    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/thecatblake"
      title="github"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/blairablake"
      title="twitter"
    >
      <FontAwesomeIcon icon={faTwitter} size="lg" />
    </Link>

    <Link
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.goodreads.com/user/show/170889355-blake"
      title="goodreads"
    >
      <FontAwesomeIcon icon={faGoodreads} size="lg" />
    </Link>
  </Wrapper>
);

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Topics = styled.p`
  color: #c1c1c1;
`;

export const About: FC = () => (
  <AboutSection id="about">
    <div>
      <p className="no-margin-top">
        🇯🇵 . software engineer . writer . researcher
      </p>
      <Topics className="no-margin">
        algorithms . blockchain . computational science . cryptography
        <br />
        data science . database . distributed system . game programming . computer vision . compiler .computer graphics . machine learning . mathematics . physics
      </Topics>
    </div>
    <Socials />
    <Divider />
  </AboutSection>
);
