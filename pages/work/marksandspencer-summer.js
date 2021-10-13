import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'
import CaseHeader from '../../components/Work/CaseHeader'
import SectionTitle from '../../components/Common/SectionTitle'
import CaseIntro from '../../components/Work/CaseIntro'
import Grid from '../../components/Common/Grid'
import CaseVideoParagraph from '../../components/Work/CaseVideoParagraph'
import CaseStudyFooter from '../../components/Work/CaseStudyFooter'
import styles from '../../styles/Work.module.scss'

const summer = () => {
  const intro = "For the staple British retailer, March was a time in which Marks & Spencer was gearing up for the release of their Summer clothing collection and they wanted to create a celebratory preview campaign where we were asked to help a complete digital experience."
  // const client_intro = "For the staple British retailer, March was a time in which Marks & Spencer was gearing up for the release of their Summer clothing collection and they wanted to create a celebratory preview campaign where we were asked to help a complete digital experience.";
  // const paragraph_two = "The intention for the 'Bring On Brighter Days' campaign was to celebrate a fun, light-hearted feel of better days following the pandemic. We chose to relay that same look and feel though design, animation, and development. We made use of a lightweight front-end library, Next.js, and supporting back-end technologies to expose bright imagery and animate individual components on-scroll.";
  // const paragraph_three = "The 'Bring On Brighter Days' campaign focused mainly around the digital campaign and a physical mobile wardrobe space, but social media was heavily utilised to increase engagement. Utilisng the same styleguide as the digital experience, the @marksandspencerfashionpr Instagram page generated many content pieces that placed a spotlight on the interactiveness of the digital experience.";
  // const paragraph_four = "For a platform of this kind, that processes many animations and transitions, as well as hundreds of images and elements, method of strategic software development and supporting technologies was required. We made use of content management systems, cloud-based asset management platforms, and image compression and loading software structures to create seamless a user experience.";

  return (
    <>
      <Head>
        <title>TechTee | Marks & Spencer</title>
      </Head>

      <div className={styles.page}>

        <CaseHeader
          client="Marks & Spencer"
          imageUrl="https://res.cloudinary.com/du9qcctlw/image/upload/v1625477032/techtee-website/work/ms-collage.png"
          project="Summer '21 Collection Experience Campaign"
          categories={["Strategy", "Design", "Software Development"]}
          slug="https://summer21marksandspencer.com/"
          live="summer21marksandspencer.com"
        />

        <SectionTitle title="About" />

        <CaseIntro text={intro} />

        <img src="https://res.cloudinary.com/du9qcctlw/image/upload/v1625477032/techtee-website/work/ms-collage.png" />
        <div className={styles.small_spacer} />

        <CaseVideoParagraph
          heading="Animating The Experience"
          paragraph="The intention for the 'Bring On Brighter Days' campaign was to celebrate a fun, light-hearted feel of better days following the pandemic. We chose to relay that same look and feel though design, animation, and development. We made use of a lightweight front-end library, Next.js, and supporting back-end technologies to expose bright imagery and animate individual components on-scroll."
          video="https://res.cloudinary.com/du9qcctlw/video/upload/v1625476969/techtee-website/work/ms-one.mov"
        />
        

        {/* <Fade>
          <ImageBox
            alt="TechTee"
            publicId="techtee-website/work/ms-one"
          />
        </Fade>
        <CaseStudyParagraph
          heading="Animating An Experience"
          paragraph={paragraph_two}
        />
        <Fade>
          <VideoBox publicId="techtee-website/work/ms-two" />
        </Fade>
        <CaseStudyParagraph
          heading="Working With Social Media"
          paragraph={paragraph_three}
        />
        <Row>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_study_device_left}>
            <Fade>
              <ImageBox
                alt="TechTee"
                publicId="techtee-website/work/ms-three"
              />
            </Fade>
          </Col>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_study_device_right}>
            <ImageBox
              alt="TechTee"
              publicId="techtee-website/work/ms-four"
            />
          </Col>
        </Row>
        <CaseStudyParagraph
          heading="Assets Management"
          paragraph={paragraph_four}
        />
        <Row>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_media_left}>
            <Fade>
              <VideoBox publicId="techtee-website/work/ms-five" />
            </Fade>
          </Col>
          <Col sm={{ span: 6 }} md={{ span: 6 }} className={styles.case_media_right}>
            <Fade>
              <ImageBox
                alt="TechTee"
                publicId="techtee-website/work/ms-six"
              />
            </Fade>
          </Col>
        </Row> */}
        {/* <CaseStudyFooter
          slug="koya-koyamail"
          client="Koya"
          project="At Home Kit E-commerce Website"
          categories="Strategy, UX Design, UI Design, Software Development"
        /> */}
      </div>
    </>
  )
}

export default summer;
