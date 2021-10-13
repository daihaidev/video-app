import Head from 'next/head'
import Title from '../components/Common/Title'

const device = () => {
  const title = "TechTee Device Program"

  return (
    <>
      <Head>
        <title>TechTee</title>
      </Head>
      <Title>{title}</Title>
    </>
  )
}

export default device;