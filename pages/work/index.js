import Head from 'next/head'
import Case from '../../components/Work/Case'
import Grid from '../../components/Common/Grid'
import styles from '../../styles/Work.module.scss'

const work = () => {

  return (
    <>
      <Head>
        <title>TechTee | Work</title>
      </Head>
      <div className={styles.page}>
        <Grid>
          <Case
            caseImage={`https://res.cloudinary.com/du9qcctlw/image/upload/v1625509482/techtee-website/work/ms-home.png`}
            client="Marks & Spencer"
            project="Summer '21 Collection Experience Campaign"
            categories="Strategy · Animation Design · Software Development"
            slug="marksandspencer-summer"
          />
          <Case
            caseImage={`https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/work/koya-home.png`}
            client="Koya"
            project="At Home Kit E-commerce Website"
            categories="Strategy · UX Design · UI Design · Software Development"
            slug="koya-koyamail"
          />
          <Case
            caseImage={`https://res.cloudinary.com/du9qcctlw/image/upload/v1625511693/techtee-website/work/gucci-home.png`}
            client="Gucci"
            project="Gucci Garden Virtual Campaign"
            categories="Strategy · Software Development"
            slug="gucci-guccigarden"
          />
          <Case
            caseImage={`https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/work/laperla-home.png`}
            client="Penhaligon's"
            project="E-commerce Digital Campaigns"
            categories="Software Development"
            slug="penhaligons-campaigns"
          />
          <Case
            caseImage={`https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/work/penhaligons-home.png`}
            client="La Perla"
            project="Villa La Perla Campaign Microsite"
            categories="Strategy · Software Development"
            slug="laperla-villalaperla"
          />
          <Case
            caseImage={`https://res.cloudinary.com/du9qcctlw/image/upload/v1626075319/techtee-website/work/apple-home.jpg`}
            client="Apple"
            project="Apple.com"
            categories="Strategy · Design · Software Development · Analytical Development"
            slug="apple"
          />
        </Grid>
      </div>
    </>
  )
}

export default work;
