import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import data from '/data/data.json'
import { useRouter } from 'next/router'
import BgUpside from 'public/background-images/backgroundMountain.jpg'
import upArrow from 'public/icons/upwardArrow.png'
import downArrow from 'public/icons/downwardArrow.png'
import leftArrow from 'public/icons/leftArrow.png'
import rightArrow from 'public/icons/rightArrow.png'
import carouselOne from 'public/carousel-images/0.jpg'
import carouselTwo from 'public/carousel-images/1.jpg'
import carouselThree from 'public/carousel-images/2.jpg'
import carouselFour from 'public/carousel-images/3.jpg'
import carouselFive from 'public/carousel-images/4.jpg'
import carouselSix from 'public/carousel-images/5.jpg'


const inter = Inter({ subsets: ['latin'] })


export default function About() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src={BgUpside} fill
        style={{
          zIndex: -1
        }}
      />

      <main className={styles.main}>

        <div className={styles.aboutUs}>
          <div></div>
          <h1>About Us</h1>
          <div></div>
        </div>

        <div className={styles.infoPara}>

          <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
          <p>Our students gain the technical skils, real-world experience, and problem-solving ability <br /> needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
          <p>Through close collaboration with industry, our network of alumni and partners continue to <br /> achieve global success.</p>
        </div>

        <div className={styles.infoPara}>

          <div className={styles.subHeader}>
            <h2>Information Sessions</h2>
          </div>

          <p>Information sessions are a simple way to figure out the next step along your career path.</p>
          <p>Learn more about the programs that interest you.</p>

          <div className={styles.subHeader3}>
            <h3>Big Info</h3>
          </div>

          <div className={styles.infoPara}>
            <p>Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing, and health to engineering, trades, and applied sciences.</p>
            <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
          </div>

          <div className={styles.subHeader}>
            <h2>Campus Tours</h2>
          </div>

          <div className={styles.infoPara}>
            <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life. </p>
          </div>
        </div>

        <Image src={leftArrow} width={40} height={60} />
        <Image src={rightArrow} width={40} height={60} />

        <div id="carouselImages">
          <Image src={carouselOne} width={40} height={60} />
          <Image src={carouselTwo} width={40} height={60} />
          <Image src={carouselThree} width={40} height={60} />
          <Image src={carouselFour} width={40} height={60} />
          <Image src={carouselFive} width={40} height={60} />
          <Image src={carouselSix} width={40} height={60} />
        </div>

        <a className={styles.upDownArrows}>
          <span>
            <Image src={upArrow} width={40} height={60} />
            <Image src={downArrow} width={40} height={60} />
          </span>
        </a>

        <div className={styles.departments}>
          <div></div>
          <h1>DEPARTMENTS</h1>
          <div></div>
        </div>

        <ul>
          <li>Applied & Natural Sciences</li>
          <li>Business & Media</li>
          <li>Computing & IT</li>
          <li>Engineering</li>
          <li>Health Sciences</li>
          <li>Trades & Apprenticeships</li>
        </ul>

      </main>
    </>
  )
}
