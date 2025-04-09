import React, { useEffect } from 'react';
import { SiPostgresql, SiPython, SiDjango, SiNodedotjs, SiFlask } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './stack.css'; 

const StackItems = [
    {
        id: 1,
        name: "Python",
        icon: <SiPython size={100} />,
    },
    {
        id: 2,
        name: "PostgreSQL",
        icon: <SiPostgresql size={100} />,
    },
    {
        id: 3,
        name: "Django",
        icon: <SiDjango size={100} />,
    },
    {
        id: 4,
        name: "Flask",
        icon: <SiFlask size={100} />,
    },
    {
        id: 5,
        name: "Node.js",
        icon: <SiNodedotjs size={100} />,
    },
   
];

const Stack = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <section id="stack" className="stack-section">
            <div className="section-header">
                <h2>My Stack</h2>
                <div className="header-underline"></div>
            </div>
            
            <div className="stack-grid" ref={ref}>
                {StackItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        custom={index}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: (index) => ({
                                opacity: 0,
                                y: index % 2 === 0 ? -100 : 100,
                            }),
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.5,
                                },
                            },
                        }}
                        className="stack-item"
                    >
                        <div className="stack-icon">
                            {item.icon}
                        </div>
                        <p className="stack-name">{item.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stack;