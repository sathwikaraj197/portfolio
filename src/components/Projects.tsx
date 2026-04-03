import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Medical NLP Intelligence System",
      description: "AI-powered clinical text analysis with medical entity extraction, achieving an F1-score of 0.92 in NER for medical entities and automated clinical document summarization.",
      image: "/Images/project-1.png",
      tech: ["Python", "NLP", "FastAPI", "Transformers", "SpaCy", "Streamlit"],
      liveUrl: "",
      githubUrl: "https://github.com/sathwikaraj197/medical-nlp-intelligence"
    },
    {
      id: 2,
      title: "Medical Image Diagnosis System",
      description: "Deep learning system for detecting pneumonia, tumors, and melanoma with 96.4% test accuracy using ResNet-50. Includes Grad-CAM heatmaps for clinically explainable AI diagnostics.",
      image: "/Images/project-2.png",
      tech: ["Python", "PyTorch", "CNN", "ResNet-50", "Grad-CAM", "OpenCV"],
      liveUrl: "",
      githubUrl: "https://github.com/sathwikaraj197/medai-diagnosis"
    },
    {
      id: 3,
      title: "Disease Risk Prediction System",
      description: "Multi-disease risk prediction model built on NHANES clinical data, reaching an AUC-ROC of 0.89. Provides calibrated probabilities and interpretability via SHAP global and local explanations.",
      image: "/Images/project-3.png",
      tech: ["Python", "Machine Learning", "SHAP", "Scikit-learn", "XGBoost", "Streamlit"],
      liveUrl: "",
      githubUrl: "https://github.com/sathwikaraj197/disease-risk-prediction-system"
    },
    {
      id: 4,
      title: "Real-time Bike Demand Forecasting",
      description: "Real-time forecasting system for bike sharing demand, reducing forecasting error by 15% (MAE) through temporal feature engineering and automated MLOps pipelines.",
      image: "/Images/project-4.png",
      tech: ["Python", "XGBoost", "Airflow", "Docker", "Scikit-learn"],
      liveUrl: "",
      githubUrl: "https://github.com/Arun949/Real-Time-Bike-Demand-Forecasting"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });

      gsap.from(containerRef.current?.children || [], {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });

      const cards = containerRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const element = card as HTMLElement;

          element.addEventListener('mouseenter', () => {
            gsap.to(element, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            <span className="text-primary-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of AI/ML projects spanning medical diagnostics, NLP, forecasting, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass cursor-pointer rounded-xl overflow-hidden hover:shadow-glow-primary transition-all duration-500 group">
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-200">
                    <GithubLogo size={18} className="text-secondary-foreground" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary-glow text-xs rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-glow hover:text-primary transition-colors duration-300 group/link">
                  View on GitHub
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-secondary text-secondary-foreground rounded-lg hover:shadow-glow-secondary transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div> */}
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Projects;