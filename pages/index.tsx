import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { atomWindowSize, atomNavbarItems } from '../recoilAtom/AtomContext';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import { useRecoilState } from 'recoil';

const Home: NextPage = () => {
  const [navbarItem, setNavbarItem] = useRecoilState(atomNavbarItems);

  const [windowWidth, setWndowWidth]: any = useRecoilState(atomWindowSize);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWndowWidth(window?.innerWidth);
    }
  }, [windowWidth]);

  useEffect(() => {
    const getMainSection = document
      .getElementById('main-section')
      ?.querySelectorAll('section')!;
    if (getMainSection) {
      getMainSection.forEach((item: any) => {
        item.classList.add('translate-y-[3rem]');
      });
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTimeout(() => {
            entry.target.classList.toggle('active', entry.isIntersecting);
          }, 100);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (getMainSection) {
      getMainSection.forEach((c) => {
        observer.observe(c);
      });
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>eH</title>
      </Head>
      <Navbar />
      <main
        id="main-section"
        className=" block justify-center items-center relative">
        <div className="bg-gradient-to-b from-slate-400 to-transparent mb-12 ">
          <Hero />
          <Skills />
        </div>

        <Projects />
        <div className="bg-gradient-to-b from-slate-400 to-white mt-12">
          <About />
          <Contact />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
