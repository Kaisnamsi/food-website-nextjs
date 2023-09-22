import Delivery from '@/components/Delivery/Delivery'
import Download from '@/components/Download/Download'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Why from '@/components/Why/Why'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Why />
      <Delivery />
      <Download />
    </>
  )
}
