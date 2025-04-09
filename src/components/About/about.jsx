import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import "./about.css";

// Change to default export to match your import in App.jsx
const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">
                About <span className="highlight">Me</span>
            </h2>
            <div className="grid-container">
                <div className="card">
                    <h3 className="card-title">01. Background</h3>
                    <p className="card-text">
                        I'm a passionate developer with strong foundation in software development and a love for 
                        creating innovative solutions. With a keen eye for design and a commitment to delivering
                        high-quality code, I have honed my skills in various programming languages and frameworks.
                        My journey in the world of software development has been filled with challenges and triumphs,
                        and I'm eager to continue learning and growing in this ever-evolving field.
                    </p>

                    <div className="code-block">
                        <code className="code">
                            const skills = [<br />
                            &nbsp;&nbsp;"Python",<br />
                            &nbsp;&nbsp;"React",<br />
                            &nbsp;&nbsp;"Bootstrap CSS",<br />
                            &nbsp;&nbsp;"Node.js",<br />
                            &nbsp;&nbsp;"Express",<br />
                            &nbsp;&nbsp;"PostgreSQL"<br />
                            ];
                        </code>
                    </div>
                </div>

                <div className="card">
                   <h3 className="card-title">02. Expertise</h3>
                   <p className="card-text">
                       I specialize in creating dynamic and user-friendly web applications that deliver exceptional user experiences.
                       My expertise spans both frontend and backend development, enabling me to build robust and scalable solutions.
                       Whether it's a complex web application or a simple landing page, I have the skills to bring your vision to life.
                   </p>
                   <div className="project-image-container">
                       <div className="placeholder-image">Project Image 1</div>
                       <img src={project1} alt="Project 1" className="project-image" />
                   </div>
                </div>

                <div className="card">
                    <h3 className="card-title">03. Skills</h3>
                    <p className="card-text">
                        I'm proficient in a wide range of technologies and
                        constantly expanding my skillset to stay up-to-date in software development.
                    </p>
                    <div className="skills-grid">
                        <div className="skill-card">
                           <h4 className="skill-category">Frontend</h4>
                           <ul className="skill-list">
                               <li>HTML</li>
                               <li>CSS</li>
                               <li>JavaScript</li>
                               <li>React</li>
                               <li>Bootstrap</li>
                           </ul>
                        </div>
                        <div className="skill-card">
                           <h4 className="skill-category">Backend</h4>
                           <ul className="skill-list">
                               <li>Node.js</li>
                               <li>Python</li>
                               <li>Express</li>
                               <li>MongoDB</li>
                               <li>MySQL</li>
                               <li>PostgreSQL</li>
                               <li>AWS, Azure, GCP</li>
                               <li>Git</li>
                               <li>Docker</li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-container-two">
                <div className="card">
                    <div className="progress-container">
                        <div className="progress-item">
                            <label className="progress-label">
                                Front-end
                            </label>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <label className="progress-label">
                                Back-end
                            </label>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <label className="progress-label">
                                DevOps
                            </label>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <label className="progress-label">
                                QA
                            </label>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                    <h3 className="card-title">04. Approach</h3>
                    <p className="card-text">
                        I take a collaborative approach to software development, 
                        working closely with clients to understand their needs and goals
                        and then delivering high-quality solutions that exceed their expectations.
                    </p>
                </div>

                <div className="card">
                    <div className="project-image-container">
                      <div className="placeholder-image">Project Image 2</div>
                      <img src={project2} alt="Project 2" className="project-image" />
                    </div>

                    <div>
                        <h3 className="card-title">05. Goals</h3>
                        <p className="card-text">
                            My goal is to create innovative software solutions that make a positive impact on people's lives.
                            I believe that software development is a powerful tool that can change the world for the better.
                            I strive to create software that is not only functional but also user-friendly and easy to use.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;