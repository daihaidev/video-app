import Head from 'next/head'
import CaseHeader from '../../components/Work/CaseHeader'
import CaseStudyParagraph from '../../components/Work/CaseStudyParagraph'
import CaseStudyFooter from '../../components/Work/CaseStudyFooter'
import ImageBox from '../../components/Common/ImageBox';
import VideoBox from '../../components/Common/VideoBox';
import Fade from 'react-reveal/Fade'
import styles from '../../styles/Work.module.scss'

const penhaligons = () => {
  const client_intro = "Working with a luxury British perfume house was an extraordinary experience for TechTee as it allowed us to implement our best kind of user experience, design, and development within a familiar space. We joined the brand in 2020 to help with updating their software architecture and implement a several digital marketing campaigns throughout the year."
  const paragraph_one = "Penhaligon’s is widely recognised for its historic origins and how well the brand has managed to maintain its prestige over centuries. When supporting the brand with their digital campaigns, in everything we did, we wanted to convey the same traditions throughout the digital design and development implementations. In many instances, we tapped into the theme of the Penhaligon’s British heritage within user interface design and animation."

  return (
    <>
      <Head>
        <title>TechTee | Gucci</title>
      </Head>
      <div className={styles.case_study}>
        <CaseHeader
          client="Penhaligon's"
          project="Digotal Marketing Campaigns"
          categories="Strategy, Software Development."
          date="2020"
          intro={client_intro}
        />
        <Fade>
          <VideoBox
            publicId="techtee-website/work/penhaligons_one"
          />
        </Fade>
        <CaseStudyParagraph
          paragraph={paragraph_one}
        />
        <Fade>
          <ImageBox
            alt="TechTee"
            publicId="techtee-website/work/penhaligons-two.png"
          />
        </Fade>
        <CaseStudyFooter
          slug="laperla-villalaperla"
          client="La Perla"
          project="Villa La Perla"
          categories="Strategy, Design, Software Development"
        />
      </div>
    </>
  )
}

export default penhaligons;
