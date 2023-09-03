"use client";

import "../globals.css";
import styles from "./styles.module.css";
import React, { useState } from "react";
import ProjectPreview from "../project-preview/project-preview.component";

export default function Page() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("turningPoint");

  return (
    <div>
      {/* Welcome Section */}
      <div className={styles.sectionNavy}>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-6xl pl-5">WELCOME TO MY TECH JOURNEY!</h1>
          </div>
          <div className="flex-1">
            <img
              className="aspect-video"
              src="hello-avatar.webp"
              alt="Hello Avatar"
            />
          </div>
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
      <div className={`${styles.sectionLightGray} ${styles.quickFacts}`}>
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
      </div>

      {/* Combined Section: Turning Point, Why Pick the Faculty, Any Regrets */}
      <div className={`${styles.sectionGray} ${styles.combinedSection}`}>
        <h2 className={styles.experienceTitle}>Educational background</h2>
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
            className={activeTab === "regrets" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("regrets")}
          >
            Any Regrets
          </button>
        </div>
        <div className={styles.tabContent}>
          {activeTab === "turningPoint" && (
            <p>
              In 2016, I had to make a big choice. I was good at a lot of
              subjects, but the idea of doing just any job for the rest of my
              life didn't sit well with me. I asked myself, "What's the one
              thing that can keep me hooked for hours?" The answer was easy:
              Informatics. It was the only subject that made my weekends
              interesting. Career tests also suggested I should pick something
              creative and visual. So, I decided to go for a degree and career
              in IT, enrolling at the Faculty of Organizational Sciences with a
              focus on Information Systems and Technologies.
            </p>
          )}
          {activeTab === "facultyChoice" && (
            <p>
              2016 was a year of change for me. I was pretty shy and wanted to
              get better at more than just Math and IT. The Faculty of
              Organizational Sciences gave me that chance. It had a mix of tech
              and business courses. Besides coding, I learned about Psychology,
              Project Management, Marketing, and Finance. The school also had
              lots of student groups and activities, which was a big plus for
              me.
            </p>
          )}
          {activeTab === "regrets" && (
            <p>
              Going to the Faculty of Organizational Sciences was one of the
              best decisions I've made. It gave me more than just tech skills. I
              got to join tech groups, plan events, and even travel to Sweden
              for a business week. I won a case study competition and got to
              work in Digital Marketing at BOSCH. In my third year, I went to
              Romania for a Frontend internship through AIESEC. That's how I got
              my first job in IT. The school gave me chances to do a lot more
              than just study.
            </p>
          )}
        </div>
      </div>

      {/* Combined Internship and First Job Section */}
      <div className={`${styles.sectionTurquoise} ${styles.experienceSection}`}>
        <h2 className={styles.experienceTitle}>Professional Experiences</h2>

        {/* Internship Card */}
        <div className={`${styles.experienceCard} ${styles.internshipCard}`}>
          <img
            src="internship-icon.png"
            alt="Internship Icon"
            className={styles.experienceIcon}
          />
          <h3>Internship in Romania During COVID-19</h3>
          <p>Your internship text here.</p>
        </div>

        {/* First Job Card */}
        <div className={`${styles.experienceCard} ${styles.firstJobCard}`}>
          <img
            src="first-job-icon.png"
            alt="First Job Icon"
            className={styles.experienceIcon}
          />
          <h3>My First Job as a Full-Stack Developer</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h4>Interview</h4>
              <p>Your interview experience here.</p>
            </div>
            <div className={styles.timelineItem}>
              <h4>First Day</h4>
              <p>Your first day experience here.</p>
            </div>
            {/* Add more timeline items */}
          </div>
        </div>

        {/* Add more experience cards here */}
      </div>

      {/* Highlighted Projects Section */}
      <div
        className={`${styles.sectionLightGray} ${styles.highlightedProjects}`}
      >
        <h2 className={`${styles.heading2} ${styles.highlightedProjectsTitle}`}>
          Highlighted Projects
        </h2>

        {/* Rat Bot Project */}
        <ProjectPreview
          title="Rat Bot"
          previewImage="rat-bot-preview.png"
          problemSolved="A Discord Chatbot that grew into a full brand with its own website, API, and community."
          techStack={["JavaScript", "Node.js", "API Integrations"]}
          // problemSolved="Automated esports scrims, reducing manual work."
          goals={["Expand to other platforms", "Integrate AI features"]}
          link="https://ratbot.link"
        />

        {/* Add more ProjectPreview components for other projects */}

        {/* Other Projects Link */}
        <div
          className={`${styles.otherProjects} ${styles.highlightedProjects}`}
        >
          <a
            href="https://github.com/yourusername?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View Other Projects
          </a>
        </div>
      </div>

      {/* Contact Me Section */}
      <div className={`${styles.sectionNavy} ${styles.contactMe}`}>
        <h2 className={`${styles.heading2} ${styles.contactMeTitle}`}>
          Contact Me
        </h2>
        <p className={styles.paragraph}>
          Interested in working with me? Here's how you can reach out.
        </p>
        <div className={styles.contactOptions}>
          <div className={styles.contactOption}>
            <img
              src="email-icon.png"
              alt="Email Icon"
              className={styles.contactIcon}
            />
            <p>
              Email me at:{" "}
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </p>
          </div>
          <div className={styles.contactOption}>
            <img
              src="cv-icon.png"
              alt="CV Icon"
              className={styles.contactIcon}
            />
            <p>
              Download my CV:{" "}
              <a
                href="your-cv-link.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// import "../globals.css";
// import styles from "./styles.module.css";

// export default function Page() {
//   return (
//     <div>
//       <div className={`${styles["section-navy"]}`}>
//         <div className="flex">
//           <div className="flex-1 flex items-center justify-center">
//             <h1 className="text-7xl">
//               Hello!<br></br> I am Negra!
//             </h1>
//           </div>
//           <div className="flex-1">
//             <img className="aspect-video" src="hello-avatar.webp" />
//           </div>
//         </div>
//       </div>
//       <div className={`${styles["section-light-gray"]} m-1`}>
//         <span className="text-2xl">Please choose how you want to meet me:</span>
//         <br></br>
//         <button className={`${styles["button-1"]} m-1`}>CLICK ME</button>
//         <button className={`${styles["button-2"]} m-1`}>CLICK ME</button>
//       </div>
//       <div className="columns-2 gap-0">
//         <div className={`${styles["section-soft-pink"]} m-1`}>Next section</div>

//         <div className={`${styles["section-turquoise"]} m-1`}>Next section</div>
//       </div>
//     </div>
//   );
// }
