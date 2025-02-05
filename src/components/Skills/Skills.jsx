import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
 
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
	{skills.map((skv) => { const { id,skill,value } = skv;
		return (
        <Row key={id}>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="skills-wrapper__info">
				{skill && <h1>{skill|| ''}</h1>}
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__info">
			  <ProgressBar className="PBar" now={value||''} label={`${value}%`} />
              </div>
            </Fade>
          </Col>
        </Row>
		);
		})}
      </Container>
    </section>
  );
};

export default Skills;
