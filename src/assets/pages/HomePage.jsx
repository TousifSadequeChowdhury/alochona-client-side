import React from 'react';
import BannerSection from '../components/BannerSection';
import TagSection from '../components/TagSections';
import AnnouncementSection from '../components/AnnouncementSection';
import PostSection from '../components/PostSection';

const HomePage = () => {
  const tags = [
    "Technology",
    "Science",
    "Education",
    "Programming",
    "Health",
    "Lifestyle",
    "Entertainment",
    "Sports",
    "Travel",
    "Food",
    "Finance",
    "Startups",
    "Environment",
    "Politics",
    "Business",
    "Art",
    "Literature",
    "Gaming",
    "Photography",
    "History",
    "Culture",
    "Movies",
    "Fashion",
    "Music",
    "Books",
    "Space",
    "AI",
    "Machine Learning",
    "Web Development",
    "Productivity",
];

      const demoPosts = [
        {
          id: 1,
          title: "Understanding React Hooks",
          description:
            "Learn about React hooks and how they can simplify your functional components.",
          image: "https://via.placeholder.com/300x200",
          date: "Jan 20, 2025",
          author: "John Doe",
        },
        {
          id: 2,
          title: "Tailwind CSS Tips and Tricks",
          description: "Discover useful tips for building responsive UIs with Tailwind CSS.",
          image: "https://via.placeholder.com/300x200",
          date: "Jan 18, 2025",
          author: "Jane Smith",
        },
        {
          id: 3,
          title: "Top 10 JavaScript Frameworks",
          description: "Explore the most popular JavaScript frameworks in 2025.",
          image: "https://via.placeholder.com/300x200",
          date: "Jan 15, 2025",
          author: "Alice Johnson",
        },
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
        <PostSection posts={demoPosts}></PostSection>
        </div>
    );
};

export default HomePage;