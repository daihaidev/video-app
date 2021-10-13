import { Row, Col } from 'react-bootstrap'
import ClientLogo from '../Home/ClientLogo'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/Home.module.scss'

const Clients = () => {
  const size = "Whether big or small, we create solutions for companies of all sizes"

  return (
    <>
      <SectionTitle title="Some Clients" />
      <Row className={styles.grid_title}>
        <Col sm={{ span: 6 }} md={{ span: 6 }}>
          <p className={styles.heading_font}>{size}</p>
        </Col>
      </Row>
      <div className={styles.grid}>
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/farfetch.png" alt="Faretch" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/apple.png" alt="Apple.png" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/laperla.png" alt="La Perla" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/ms.png" alt="Marks & Spencer" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/nike.png" alt="Nike" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/penhaligons" alt="Penhaligons" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/koya.png" alt="Koya" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/gucci.png" alt="Gucci" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/tr.png" alt="Thomson Reuters" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/blackballad.png" alt="BlackBalld" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/lapp.png" alt="LAPP" />
        <ClientLogo src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624830273/techtee-website/logos/deutsche.png" alt="Deutsche Bank" />
      </div>
    </>
  )
}

export default Clients