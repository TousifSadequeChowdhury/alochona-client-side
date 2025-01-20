import React from 'react';
import BannerSection from '../components/BannerSection';
import TagSection from '../components/TagSections';
import AnnouncementSection from '../components/AnnouncementSection';

const HomePage = () => {
    const tags = [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express",
        "CSS",
        "HTML",
        "TypeScript",
        "TailwindCSS",
        "Next.js",
        "GraphQL",
        "Firebase",
        "API Development",
        "Authentication",
        "Performance Optimization",
        "UI/UX Design",
        "Web Security",
        "Real-Time Apps",
        "Debugging",
        "Testing",
        "Redux",
        "MERN Stack",
        "Responsive Design",
      ];
      const announcements = [
        {
          authorImage: "https://via.placeholder.com/150",
          authorName: "Admin",
          date: "January 20, 2025",
          title: "New Features Added!",
          description: "We’ve added new features to enhance your experience. Check them out now!",
        },
        {
          authorImage: "https://via.placeholder.com/150",
          authorName: "Moderator",
          date: "January 19, 2025",
          title: "Maintenance Update",
          description: "Scheduled maintenance will occur on January 22, 2025. Expect some downtime.",
        },
        {
          authorImage: "https://via.placeholder.com/150",
          authorName: "Team",
          date: "January 18, 2025",
          title: "Welcome New Members!",
          description: "A warm welcome to all the new members who have joined our community!",
        },
      ];
    
      const handleTagClick = (tag) => {
        console.log(`You clicked on the tag: ${tag}`);
        // Implement additional functionality, e.g., filter posts by this tag
      };
    return (
        <div>
        <BannerSection></BannerSection>
        <TagSection tags={tags} onTagClick={handleTagClick} />
        <AnnouncementSection announcements={announcements}></AnnouncementSection>
        </div>
    );
};

export default HomePage;