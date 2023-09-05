"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Page() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("turningPoint");

  return (
    <div>
      {/* Welcome Section */}
      <div className={`${styles.sectionIntro} flex flex-col md:flex-row`}>
        <div className="flex-1 flex flex-col items-center justify-center text-center ps-5">
          <p className="text-3xl md:text-4xl">WELCOME TO</p>
          <p
            className={`text-5xl md:text-6xl text-slate-400 ${styles.glowingText}`}
          >
            MY TECH JOURNEY!
          </p>
          <p className="text-3xl md:text-3xl">NEGRA HODZIC</p>
        </div>
        <div className="flex justify-center md:justify-start items-center pe-12">
          <img
            className="w-auto h-[12rem] md:h-[16rem]"
            src="hello-avatar.webp"
            alt="Hello Avatar"
          />
        </div>
      </div>
      {/* Navigation Bar Section */}
      <div className={styles.navbar}>
        <button className={styles.navButton}>Home</button>
        <button className={styles.navButton}>Projects</button>
        <button className={styles.navButton}>Contact</button>
        <button className={styles.navButton}>CV</button>
      </div>
      {/* Quick Facts Section */}
      {/* <div className={`${styles.sectionQuickFacts} ${styles.quickFacts}`}>
        <h2 className={`${styles.heading2} ${styles.quickFactsTitle}`}>
          Quick Facts
        </h2>
        <div className={styles.quickFactsGrid}>
          <div className={styles.quickFactItem}>
            <span className={styles.quickFactLabel}>Degree:</span>
            <span className={styles.quickFactValue}>
              BCS in Information Systems and Technologies
            </span>
          </div>
          <div className={styles.quickFactItem}>
            <span className={styles.quickFactLabel}>Roles:</span>
            <span className={styles.quickFactValue}>
              Full-Stack Developer, Frontend Developer, Freelance Software
              Developer
            </span>
          </div>
          <div className={styles.quickFactItem}>
            <span className={styles.quickFactLabel}>Main Project:</span>
            <span className={styles.quickFactValue}>
              Rat Bot—a Discord Chatbot that grew into a full brand with its own
              website, API, and community
            </span>
          </div>
          <div className={styles.quickFactItem}>
            <span className={styles.quickFactLabel}>Other Experience:</span>
            <span className={styles.quickFactValue}>
              Digital Marketing (won 1st place in a case study competition)
            </span>
          </div>
        </div>
      </div> */}
      {/* Quick Facts Section */}
      <div
        className={`${styles.sectionQuickFacts} flex flex-col md:flex-row md:justify-start`}
      >
        <div className="flex-1 flex items-center justify-center md:justify-center text-center md:text-left p-4 mb-0 md:mb-4">
          <h2 className="text-5xl font-bold">QUICK FACTS</h2>
        </div>
        <div className="flex-1 flex flex-wrap justify-center md:justify-start p-4 mt-0 md:mt-4">
          {/* Fact Card */}
          {[
            "Full-Stack Dev with a knack for React and Node.js.",
            "TypeScript enthusiast who loves clean code.",
            "X years in the game, always up for a challenge.",
            "Certified in JS & Python, with a BCs in IST.",
            "UK-bound? Absolutely, for the right gig.",
          ].map((fact, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className={`${styles.quickFactLabel} text-white mr-4`}>
                {index + 1}.
              </div>
              <div>
                <span className={`${styles.quickFactValue} text-gray-300`}>
                  {fact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Bar Section */}
      <div className={styles.navbar}></div>

      {/* Education */}
      <div
        className={`${styles.sectionEducation} flex flex-col md:flex-row md:justify-start`}
      >
        <div className="flex-1 flex items-center justify-center md:justify-center text-center md:text-center p-4 mb-0 md:mb-4">
          <h2 className="text-5xl font-bold">EDUCATIONAL BACKGROUND</h2>
        </div>
        <div className="flex-1 flex flex-wrap justify-center md:justify-start p-4 mt-0 md:mt-4">
          <div className={styles.tabContainer}>
            <button
              className={
                activeTab === "turningPoint" ? styles.activeTab : styles.tab
              }
              onClick={() => setActiveTab("turningPoint")}
            >
              The Turning Point
            </button>
            <button
              className={
                activeTab === "facultyChoice" ? styles.activeTab : styles.tab
              }
              onClick={() => setActiveTab("facultyChoice")}
            >
              Why Pick the Faculty
            </button>
            <button
              className={
                activeTab === "regrets" ? styles.activeTab : styles.tab
              }
              onClick={() => setActiveTab("regrets")}
            >
              Any Regrets
            </button>
          </div>
          <div className={styles.tabContent}>
            {activeTab === "turningPoint" && (
              <p className={styles.tabText}>
                In 2016, I had to make a big choice. I was good at a lot of
                subjects, but the idea of doing just any job for the rest of my
                life didn't sit well with me. I asked myself, "What's the one
                thing that can keep me hooked for hours?" The answer was easy:
                Informatics. It was the only subject that made my weekends
                interesting. Career tests also suggested I should pick something
                creative and visual. So, I decided to go for a degree and career
                in IT, enrolling at the Faculty of Organizational Sciences with
                a focus on Information Systems and Technologies.
              </p>
            )}
            {activeTab === "facultyChoice" && (
              <p className={styles.tabText}>
                2016 was a year of change for me. I was pretty shy and wanted to
                get better at more than just Math and IT. The Faculty of
                Organizational Sciences gave me that chance. It had a mix of
                tech and business courses. Besides coding, I learned about
                Psychology, Project Management, Marketing, and Finance. The
                school also had lots of student groups and activities, which was
                a big plus for me.
              </p>
            )}
            {activeTab === "regrets" && (
              <p className={styles.tabText}>
                Going to the Faculty of Organizational Sciences was one of the
                best decisions I've made. It gave me more than just tech skills.
                I got to join tech groups, plan events, and even travel to
                Sweden for a business week. I won a case study competition and
                got to work in Digital Marketing at BOSCH. In my third year, I
                went to Romania for a Frontend internship through AIESEC. That's
                how I got my first job in IT. The school gave me chances to do a
                lot more than just study.
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className={`${styles.sectionExperiance} ${styles.quickFacts}`}>
        <h2 className={`${styles.heading2} ${styles.quickFactsTitle}`}>
          Experience
        </h2>
      </div>
      {/* Projects */}
      <div className={`${styles.sectionEducation} ${styles.quickFacts}`}>
        <h2 className={`${styles.heading2} ${styles.quickFactsTitle}`}>
          Projects
        </h2>
      </div>
      {/* Contact */}
      <div className={`${styles.sectionExperiance} ${styles.quickFacts}`}>
        <h2 className={`${styles.heading2} ${styles.quickFactsTitle}`}>
          Contact
        </h2>
      </div>
    </div>
  );
}
