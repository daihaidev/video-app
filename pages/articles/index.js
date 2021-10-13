import Head from 'next/head'
// import Title from '../../components/Common/Title'
// import Article from '../../components/Articles/Article'
import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Articles.module.scss'

const articles = () => {
    const title = "A collection of what we've got on our minds";
    const more = "We truly hoped you enjoyed reading through our articles so far. We'll continue to add a couple of articles every month to keep you up to date with us.";

    return (
        <>
            <Head>
                <title>TechTee | Articles</title>
            </Head>
            {/* <Title>{title}</Title> */}
            <Row className={styles.articles_row}>
                <Col sm={{ span: 12 }} md={{ span: 6 }} className={styles.left_article}>
                    <Article
                        // image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/f_auto,q_auto/c_scale,dpr_auto,w_auto/v1/techtee-website/articles/devilwears`}
                        title="One in same: Luxury & fashion, Banking & Finance"
                        excerpt="“What is your specialisation?”"
                        date="7th June 2021"
                        slug="one-in-the-same"
                    />
                </Col>
                <Col sm={{ span: 12 }} md={{ span: 6 }} className={styles.right_article}>
                    <Article
                        // image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/f_auto,q_auto/c_scale,dpr_auto,w_auto/v1/techtee-website/articles/are-we-the-first`}
                        title="Are we the UK's first black-owned, female-founded and woman-led digital agency?"
                        excerpt="I’m Tobi Ajala, the founder of TechTee, a digital agency specialising in software development and design for clients like Nike, Gucci, Apple, and La Perla.  I was recently asked if we were the UK’s first black-owned, female-founded and women-led digital agency, and I didn’t know the answer!"
                        date="22nd May 2021"
                        slug="are-we-the-first"
                    />
                </Col>
            </Row>
            <div className={styles.small}></div>
            <p className={styles.more_articles}>{more}</p>
            <div className={styles.small}></div>
        </>
    )
}

export default articles;
