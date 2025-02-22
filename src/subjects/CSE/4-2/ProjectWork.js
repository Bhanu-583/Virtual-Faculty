import React, { useState } from 'react';
import './ProjectWork.css'; // Custom styles for the project work section

const ProjectWork = () => {
  const projectLinks = [
    {
      title: 'IEEE 2023-2024 Projects',
      description: 'Explore a range of IEEE project ideas and implementations.',
      link: 'PLYxteewnPK4bCDk9Y-FxpFVGvXY0YOced',
    },
    {
      title: 'Example Projects with Source Codes',
      description: 'Access example projects along with their source code for reference.',
      link: 'PLeOtHc_su2eXaXNuUn-f27ft1hCt_Upzw',
    },
    {
      title: 'Java Projects',
      description: 'Find various Java project implementations from beginner to advanced.',
      link: 'PLYxteewnPK4baPNcQu00ybdZqsMfRTYkR',
    },
    {
      title: 'Python Projects',
      description: 'Explore Python projects that cover various applications and frameworks.',
      link: 'PLYxteewnPK4aV1K3Vnc_lV6DZWv-gQsV0',
    },
    {
      title: 'Blockchain Projects',
      description: 'Learn about blockchain technology through practical projects.',
      link: 'PL5g-9zkOohaHP72df1JO6Jqn1K5mM3rM9',
    },
    {
      title: 'Machine Learning Projects',
      description: 'Dive into machine learning concepts with practical implementations.',
      link: 'PLKnIA16_RmvY5eP91BGPa0vXUYmIdtfPQ',
    },
    {
      title: 'MERN Stack Projects',
      description: 'Explore full-stack development using the MERN stack.',
      link: 'PLgPr_sLjPU2BTSKQPNaFWnoeRLSEmrTj_',
    },
    {
      title: 'Web Development Projects',
      description: 'Discover various web development projects to enhance your skills.',
      link: 'PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3',
    },
    {
      title: 'Project Video Lectures',
      description: 'Watch the project video lectures covering various topics.',
      link: 'PLYxteewnPK4bCDk9Y-FxpFVGvXY0YOced',
    },
  ];

  // State to manage which playlist is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of the playlist
  const togglePlaylist = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h3>Project Work and Video Lectures</h3>
      <div className="project-links-container">
        {projectLinks.map((project, index) => (
          <div className="project-box" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="download-button-container">
              <button className="project-button" onClick={() => togglePlaylist(index)}>
                {openIndex === index ? 'Hide Playlist' : 'View Playlist'}
              </button>
            </div>
            {openIndex === index && (
              <div className="playlist-container">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/videoseries?list=${project.link}`}
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectWork;
