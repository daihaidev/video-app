import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'
import CaseHeader from '../../components/Work/CaseHeader'
import CaseStudyParagraph from '../../components/Work/CaseStudyParagraph'
import CaseStudyFooter from '../../components/Work/CaseStudyFooter'
import ImageBox from '../../components/Common/ImageBox'
import VideoBox from '../../components/Common/VideoBox'
import Fade from 'react-reveal/Fade'
import styles from '../../styles/Work.module.scss'

const guccigarden = () => {
  const client_intro = "The famous Gucci Garden exhibition took a digital apporach to drawing in customers in 2020. We worked with Gucci to bring the Gucci Garden alive through a virtual tour that allows for visitors to explore the rooms, objects and exhibitions of the spaces in Florence's Piazza Della Signoria."
  const paragraph_one = "The Gucci Garden digital experience is the result of the power of teamwork. We worked with members of the marketing and design teams at Gucci and other partners to create a 3D AR experience that immersed users into what felt just like the physical space. Taking advantage of the best in software and hardware technology, we utilised camera and drone footage supported by powerful back-end software architecture to create a mansion that people can explore through their devices."
  const paragraph_two = "Breaking out all of the stops on this project, we engaged users through the inclusion of maps to provide visibility of the vast capacity of the Gucci Garden and to advocate for further exploration. Further incorporating a plethora of call-to-action instances across the entire 3D experience, visitors can view details of each item on display and proceed through to the e-commerce journey."

  return (
    <>
      <Head>
        <title>TechTee | Gucci</title>
      </Head>
      <div className={styles.case_study}>
        <CaseHeader
          client="Gucci"
          project="At Home Kit E-commerce Website"
          categories="Strategy, Software Development."
          date="September ― 2020"
          intro={client_intro}
        />
        <Fade>
          <VideoBox publicId="techtee-website/work/gucci_one" />
        </Fade>
        <CaseStudyParagraph
          heading="Experiencing the physical via digital"
          paragraph={paragraph_one}
        />
        <Fade>
          <VideoBox publicId="techtee-website/work/gucci-four" />
        </Fade>
        <CaseStudyParagraph
          heading="Additional Experiences"
          paragraph={paragraph_two}
        />
        <Row>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_media_left}>
            <Fade>
              <ImageBox
                alt="TechTee"
                publicId="techtee-website/work/gucci-two.png"
              />
            </Fade>
          </Col>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_media_right}>
            <Fade>
              <ImageBox
                alt="TechTee"
                publicId="techtee-website/work/gucci-three.png"
              />
            </Fade>
          </Col>
        </Row>
        <CaseStudyFooter
          slug="penhaligons-campaigns"
          client="Penhaligon's"
          project="Campaigns"
          categories="Strategy, Software Development"
        />
      </div>
    </>
  )
}

export default guccigarden;
