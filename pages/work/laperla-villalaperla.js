import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'
import CaseHeader from '../../components/Work/CaseHeader'
import CaseStudyParagraph from '../../components/Work/CaseStudyParagraph'
import CaseStudyFooter from '../../components/Work/CaseStudyFooter'
import ImageBox from '../../components/Common/ImageBox'
import VideoBox from '../../components/Common/VideoBox'
import Fade from 'react-reveal/Fade'
import styles from '../../styles/Work.module.scss'

const villalaperla = () => {
  const client_intro = "Working with La Perla is a fantastic instance of how TechTee continues to push the envelope of interface design alongside development, to curate an exemplary user experience. To celebrate La Perla’s 10th Anniversary of their Maison collection, TechTee designed and built a digital microsite using modern technologies."
  const paragraph_one = "This campaign aimed to showcase the history of the La Perla atelier by transporting the user through a digital villa filled with images, interactions, and videos, all highlighting the excellence behind the luxury brand. We wanted to transport users through what felt like a travelled experience, as users scrolled from room to room of the villa."
  const paragraph_two = "As campaigns are often paired with an element of commerce we first introduce items from the collection throughout the user journey. Positioning lingerie items from the new release strategically across the sections of the view, animated and available for users to interact with. Towards the end of the experience, we reintroduced the collection in full as an e-commerce store for users to purchase from."

  return (
    <>
      <Head>
        <title>TechTee | La Perla</title>
      </Head>

      <div className={styles.case_study}>
        <CaseHeader
          client="La Perla"
          project="Villa La Perla"
          categories="Strategy, Design, Software Development"
          date="August ― 2020"
          intro={client_intro}
        />
        <Fade>
          <VideoBox
            publicId="techtee-website/work/laperla_one"
          />
        </Fade>
        <CaseStudyParagraph
          paragraph={paragraph_one}
        />
        <Row>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_media_left}>
            <Fade>
              <ImageBox
                alt="TechTee"
                className={styles.case_border}
                publicId="techtee-website/work/laperla-two.png"
              />
            </Fade>
          </Col>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_media_right}>
            <VideoBox
              publicId="techtee-website/work/laperla-three"
            />
          </Col>
        </Row>
        <CaseStudyParagraph
          heading="Introducing E-commerce"
          paragraph={paragraph_two}
        />
        <Fade>
          <ImageBox
            alt="TechTee"
            className={styles.case_border}
            publicId="techtee-website/work/laperla-four.png"
          />
        </Fade>
        <CaseStudyFooter
          slug="apple"
          client="Apple"
          project="Apple.com"
          categories="Strategy, Design, Software Development, Analytical Development"
        />
      </div>
    </>
  )
}

export default villalaperla;
