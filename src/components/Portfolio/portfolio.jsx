import React, { useState } from "react";
// Remove the image imports that are causing errors
// import proj1 from "../assets/images/proj9.png";
// import proj2 from "../../assets/proj11.png";
// import proj3 from "../assets/images/proj12.png";
// Remove icon imports until you install the packages
// import { FaGithub } from "react-icons/fa";
// import { HiOutlineExternalLink } from "react-icons/hi";
// import { FiChevronDown } from "react-icons/fi";
import "./portfolio.css"; 

const projects = [
    {
        title: "DiasporaEat Ecommerce Website",
        desc: "A React Ecommerce Website for a african foods, sauce and condiments delivery company",
        devstacks: "Django, Bootstrap, Postgres, Python",
        link: "https://diasporaeat.com",
        github: "https://github.com/vicmaryville/ECommerce-Django",
        // src: proj1,
        type: "Ecommerce",
    },
    {
        title: "Real-time End-to-end DevOps project",
        desc: " Deploying an EKS Cluster with Terraform and Jenkins",
        devstacks: "AWS, Terraform, Jenkins, Kubernetes",
        github: "https://github.com/VicProjects12/terraform-jenkins-EKS",
        //src: proj2,
        type: "DevOps",
    },
    {
        title: "Blog Website",
        desc: "A React Blog Website",
        devstacks: "React, Bootstrap, Postgres, Javascript",
        github: "https://github.com/VicProjects12/TechXtra-blog",
        // src: proj1,
        type: "Blog",
    },
    {
        title: "Portfolio Website",
        desc: "My Portfolio website",
        devstacks: "React, Javascript, HTML, CSS",
        github: "https://vicprojects12.github.io/techVictor-portfolio/",
        // src: proj1,
        type: "Website",
    }

];

const Portfolio = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    
    return (
        <div className="portfolio-section" id="portfolio">
            <div className="container">
                <h2 className="section-title">
                    Selected <span className="highlight">Projects</span>
                </h2>

                <div className="project-list">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            style={{
                                opacity: 1,
                                transform: 'translateY(0)',
                                transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`
                            }}
                        >
                            <div
                                className="project-header"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-index">
                                    <span className="project-number">
                                        0{index + 1}
                                    </span>
                                   
                                    <span className={`chevron-icon ${
                                        expandedIndex === index ? "rotate" : ""
                                    }`}>
                                        ▼
                                    </span>
                                </div>
                            </div>
                            
                            {expandedIndex === index && (
                                <div className="project-details">
                                    <div className="project-content">
                                        
                                        <div className="project-image-placeholder">
                                            Project Image
                                        </div>
                                        <div className="project-info">
                                            <p className="project-description">{project.desc}</p>
                                            <p className="project-stack">
                                                Stack: {project.devstacks}
                                            </p>
                                            <p className="project-type">
                                                Type: {project.type}
                                            </p>
                                            <div className="project-links">
                                                <a 
                                                    href={project.link}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {/* Replace with text until you install react-icons */}
                                                    Visit Site
                                                </a>
                                                <a 
                                                    href={project.github}
                                                    className="project-link github-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {/* Replace with text until you install react-icons */}
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;