import React, { Component } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { atomWindowSize } from '../recoilAtom/AtomContext';
import Section from '../components/Section';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  const [windowWidth, setWndowWidth]: any = useRecoilState(atomWindowSize);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWndowWidth(window?.innerWidth);
    }
  }, [windowWidth]);

  useEffect(() => {
    const getMainSection = document.getElementById('main-section')?.querySelectorAll('section')!;
    if (getMainSection) {
      getMainSection.forEach((item:any) => {
        item.classList.add("translate-y-[3rem]")
      })
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
        threshold: 0.5,
      }
    );

    if (getMainSection) {
      getMainSection.forEach((c) => {
        observer.observe(c);
      });
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>eH</title>
      </Head>
      <Navbar />
      <main
        id="main-section"
        className=" block  justify-center items-center relative ">
        <Hero />
        <Section />
        <Projects />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
