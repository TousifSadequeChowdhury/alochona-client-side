import React from 'react';
import BannerSection from '../components/BannerSection';
import TagSection from '../components/TagSections';

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
      const handleTagClick = (tag) => {
        console.log(`You clicked on the tag: ${tag}`);
        // Implement additional functionality, e.g., filter posts by this tag
      };
    return (
        <div>
        <BannerSection></BannerSection>
        <TagSection tags={tags} onTagClick={handleTagClick} />
        </div>
    );
};

export default HomePage;