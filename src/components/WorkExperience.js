import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

// Sample data for work experiences
const experiences = [
  {
    title: "Internship",
    company_name: "CodSoft",
    date: "Oct 2024",
    points: [
      "Virtual internship on Android App Development",
      "Built and enhanced Android applications using Android Studio and Java/Kotlin",
      "Debugged issues and optimized app performance for improved user experience.",
    ],
  },
  {
    title: "Research",
    company_name: "IEEE",
    date: "July 2023",
    points: [
      "Research paper accepted by IEEE Organization",
      "Worked on AI-Powered Digital Automation Solutions",
      "Learned research methodologies and innovative approaches",
    ],
  },
  {
    title: "Internship",
    company_name: "AICET",
    date: "May - May 2022",
    points: [
      "Virtual internship on RPA",
      "Completed courses provided by AICET",
      "Gained experience with RPA tools like UiPath and Automation Anywhere to automate processes and improve efficiency",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "4px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#1d1836" }}
    >
      <div>
        <h3 className="text-white text-lg md:text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-sm md:text-base font-semibold">{experience.company_name}</p>
      </div>
      <ul className="mt-3 md:mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-sm md:text-base pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <div className="py-10 md:py-20">
      <motion.div initial="hidden" animate="visible">
        <center><h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10">Achievements and Internships</h2></center>
      </motion.div>
      <div className="mt-8 md:mt-12 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
