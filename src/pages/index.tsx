import { Flex} from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner/Banner'
import { Content } from '../components/ContentHome/Content'
import Header from '../components/Header'
import { Options } from '../components/Options'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <Flex
      flexDirection='column'
      align='center'
      justify='center'
    >
      <Head>
        <title>Worldtrip | Home</title>
        <meta name="description" content="Desafio usando chakra.ui - Ignite" />
      </Head>
      <Header/>
      <Banner/>
      <Options/>
      <Content/>
      <Slider/>
    </Flex>
  )
}