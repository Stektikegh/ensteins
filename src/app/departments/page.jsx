import React from "react";
import DepartmentCard from "@/src/components/DepartmentCard";

const departments = [
  {
    name: "IT Department",
    shortName: "IT",
    logo: "it.jpg",
    leaderName: "Touzi GHILES",
    leaderRole: "IT Department Leader",
    leaderPhoto: "/it-leader.jpg",
    mission:
      "Design, build, and maintain the club’s technical ecosystem, including websites, applications, and AI-powered tools.",
    description:
      "The IT department is the technical backbone of the club. Members work on projects such as web platforms, 3D Modeling, automation tools, and AI integrations. The department encourages collaboration, and continuous learning.",
    mainActivities: [
      "Graphic design, with all its fields",
      "Video Editing",
      "Web development",
      "Mobile app development",
      "UI/UX design",
      "AI tools & automation",
      "Internal technical tooling",
      "Technical workshops",
    ],
    goodFitIf: [
      "You enjoy solving problems",
      "You are curious about computers",
      "You like learning by building projects",
      "You have patience"
    ],
    levelExpectation:
      "Beginner, Intermidiate or even Advanced in some field in IT, there is a place here for everyone",
  },

  {
    name: "FLER Department",
    shortName: "FLER",
    logo: "/fler.png",
    leaderName: "MAKHTOUR Yousra",
    leaderRole: "FLER Department Leader",
    leaderPhoto: "fler-leader.jpg",
    mission:
      "Ensure the club’s financial stability, manage logistics, and build strong external relationships.",
    description:
      "FLER (Finance, Logistics & External Relations) manages budgeting, event planning, sponsorships, and partnerships. This department ensures that every event is financially and logistically successful.",
    mainActivities: [
      "Budget planning and tracking",
      "Event logistics management",
      "Sponsorship outreach",
      "Partnership negotiations",
      "External relations management",
    ],
    goodFitIf: [
      "You are organized and detail-oriented",
      "You enjoy planning and coordination",
      "You like working with external partners",
      "You are comfortable with responsibility",
    ],
    levelExpectation:
      "Requires professionalism, responsibility, and strong communication skills.",
  },

  {
    name: "Human Resources Department",
    shortName: "HR",
    logo: "/hr.png",
    leaderName: "Wiam LAKEHAL",
    leaderRole: "HR Department Leader",
    leaderPhoto: "/hr-leader.jpg",
    mission: "Build a strong, motivated, and collaborative club community.",
    description:
      "The HR department focuses on recruitment, onboarding, member follow-up, and internal organization. It ensures a healthy team culture and smooth collaboration between departments.",
    mainActivities: [
      "Member recruitment and interviews",
      "Onboarding new members",
      "Team performance monitoring",
      "Conflict resolution",
      "Internal events and team building",
    ],
    goodFitIf: [
      "You enjoy working with people",
      "You are empathetic and a good listener",
      "You like organizing teams",
      "You care about community and culture",
    ],
    levelExpectation:
      "Requires emotional intelligence, fairness, and strong communication.",
  },

  {
    name: "Communication Department",
    shortName: "COMM",
    logo: "/comm.png",
    leaderName: "Celine AIT BELKACEM",
    leaderRole: "Communication Department Leader",
    leaderPhoto: "/comm-leader.jpg",
    mission:
      "Promote the club’s identity and communicate its vision to the public.",
    description:
      "The Communication department handles branding, social media, content creation, and public outreach. It ensures the club is visible, professional, and engaging.",
    mainActivities: [
      "Social media management",
      "Graphic design and branding",
      "Content writing",
      "Photo and video editing",
      "Event promotion",
    ],
    goodFitIf: [
      "You enjoy creativity and storytelling",
      "You are active on social media",
      "You like design, writing, or video editing",
      "You enjoy promoting ideas visually",
    ],
    levelExpectation:
      "Beginner-friendly with strong opportunities for creative growth.",
  },
];

const DepartmentsPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-16 py-20 px-4">
      <div className="text-center max-w-[700px] mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">Our Departments</h1>
        <p className="text-white/70 text-sm sm:text-base">
          Discover our departments and find where your skills and passion fit
          best.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {departments.map((dep, index) => (
          <DepartmentCard
            key={dep.name}
            {...dep}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </main>
  );
};

export default DepartmentsPage;
