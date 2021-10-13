import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'
import CaseHeader from '../../components/Work/CaseHeader'
import CaseStudyParagraph from '../../components/Work/CaseStudyParagraph'
import CaseStudyFooter from '../../components/Work/CaseStudyFooter'
import ImageBox from '../../components/Common/ImageBox'
import Fade from 'react-reveal/Fade'
import styles from '../../styles/Work.module.scss'

const koyamail = () => {
  const client_intro = "Koya is a Micheline star noodle bar and one of London's top restaurants. In order to give customers the full Koya experience during the pandemic, Koya asked us to help them launch an e-commerce store that provides next day delivery of their famous, award winning noodles and soups."
  const paragraph_one = "During the initial design processes for Koya Mail, we established that we would maintain some elements of Koya's original branding. Making use of blue, cream, and shades of red, whilst introducing new design features such as grid layouts and text arrangements that initiate a sense of familiarity for exisiting customers who were encoutering the new platform for the first time."
  const paragraph_two = "Employing a great deal of user experience research, the ideal user journeys educated us throughout the development process. UX reasearch and design empowered us to think outside of the average use of a Shopify store and build upon new features such as recipe cards and 'how to cook' guides."

  return (
    <>
      <Head>
        <title>TechTee | Koya</title>
      </Head>
      <div className={styles.case_study}>
        <CaseHeader
          client="Koya"
          project="At Home Kit E-commerce Website"
          categories="Strategy, UX Design, UI Design, Software Development."
          date="December ― 2020"
          intro={client_intro}
        />
        <Fade>
          <ImageBox
            alt="TechTee"
            publicId="techtee-website/work/koya-one.png"
          />
        </Fade>
        <CaseStudyParagraph
          heading="Coherent Branding"
          paragraph={paragraph_one}
        />
        <Row>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_study_square_left}>
            <Fade>
              <ImageBox
                alt="TechTee"
                publicId="techtee-website/work/koya-two"
              />
            </Fade>
          </Col>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_study_square_right}>
            <Fade><ImageBox
              alt="TechTee"
              publicId="techtee-website/work/koya-three"
            />
            </Fade>
          </Col>
        </Row>
        <CaseStudyParagraph
          heading="Iterating Through Features"
          paragraph={paragraph_two}
        />
        <Fade>
          <ImageBox
            alt="TechTee"
            publicId="techtee-website/work/koya-four"
            className={styles.case_border}
          />
        </Fade>
        <CaseStudyFooter
          slug="gucci-guccigarden"
          client="Gucci"
          project="Gucci Garden Virtual Campaign"
          categories="Strategy, Software Development"
        />
      </div>
    </>
  )
}

export default koyamail;
