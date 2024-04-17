"use client"; 
import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // Initialize an array to store refs and inView states for each experience item
  const experiencesInView = experiencesData.map(() => {
    // Call useInView hook to track visibility for each experience item
    const { ref, inView } = useInView({ threshold: 0 });
    return { ref, inView };
  });

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* Iterate over experiencesData and render VerticalTimelineElement */}
        {experiencesData.map((item, index) => (
          <div key={index} ref={experiencesInView[index].ref} className="vertical-timeline-element">
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.15)",
              }}
              visible={experiencesInView[index].inView}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </section>
  );
}