import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Code, Lightning, Database, GitBranch, Cube, Terminal, Cloud, X, FolderOpen } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

interface SkillDetail {
  icon: React.ElementType;
  name: string;
  description: string;
  usedIn: { project: string; detail: string }[];
}

const skills: SkillDetail[] = [
  {
    icon: Code,
    name: 'Python',
    description: 'Primary language for all AI/ML development, scripting, and backend APIs.',
    usedIn: [
      { project: 'Medical NLP Intelligence System', detail: 'Core ML pipeline, NER models and FastAPI backend.' },
      { project: 'Medical Image Diagnosis System', detail: 'PyTorch model training, Grad-CAM visualisation.' },
      { project: 'Disease Risk Prediction System', detail: 'Feature engineering, XGBoost training and SHAP explainability.' },
      { project: 'Real-time Bike Demand Forecasting', detail: 'MLOps pipeline and Airflow DAGs.' },
    ],
  },
  {
    icon: Code,
    name: 'Java',
    description: 'Used for object-oriented software engineering assignments and backend utilities.',
    usedIn: [],
  },
  {
    icon: Code,
    name: 'TypeScript',
    description: 'Strongly-typed JavaScript for building robust frontend applications.',
    usedIn: [
      { project: 'AI-Powered Modern Portfolio', detail: 'Full codebase written in TypeScript with React and Vite.' },
    ],
  },
  {
    icon: Database,
    name: 'SQL / MySQL',
    description: 'Relational databases for structured data storage and complex query analysis.',
    usedIn: [
      { project: 'Disease Risk Prediction System', detail: 'Stored and queried NHANES clinical datasets.' },
      { project: 'Real-time Bike Demand Forecasting', detail: 'Historical ride data storage and retrieval.' },
    ],
  },
  {
    icon: Globe,
    name: 'HTML',
    description: 'Semantic markup for accessible and SEO-friendly web pages.',
    usedIn: [
      { project: 'AI-Powered Modern Portfolio', detail: 'index.html entry point and semantic structure.' },
    ],
  },
  {
    icon: Lightning,
    name: 'Machine Learning',
    description: 'Classical ML algorithms including ensemble methods, regression, and classification.',
    usedIn: [
      { project: 'Disease Risk Prediction System', detail: 'Multi-disease risk prediction with Scikit-learn and XGBoost (AUC-ROC 0.89).' },
      { project: 'Real-time Bike Demand Forecasting', detail: 'Temporal feature engineering and demand forecasting models.' },
    ],
  },
  {
    icon: Lightning,
    name: 'Deep Learning',
    description: 'Neural network architectures for image, text, and sequential data tasks.',
    usedIn: [
      { project: 'Medical Image Diagnosis System', detail: 'ResNet-50 CNN for pneumonia/tumour/melanoma detection (96.4% accuracy).' },
      { project: 'Medical NLP Intelligence System', detail: 'Transformer-based NER model with F1-score 0.92.' },
    ],
  },
  {
    icon: Cloud,
    name: 'NLP & Transformers',
    description: 'Processing and understanding natural language using modern transformer architectures.',
    usedIn: [
      { project: 'Medical NLP Intelligence System', detail: 'Medical entity extraction, clinical text summarisation via HuggingFace Transformers.' },
    ],
  },
  {
    icon: Lightning,
    name: 'Neural Networks (CNN/LSTM)',
    description: 'Convolutional and recurrent networks for vision and sequential tasks.',
    usedIn: [
      { project: 'Medical Image Diagnosis System', detail: 'ResNet-50 (CNN) backbone with Grad-CAM explainability heatmaps.' },
    ],
  },
  {
    icon: Lightning,
    name: 'XGBoost',
    description: 'Gradient boosting framework for high-performance tabular data modelling.',
    usedIn: [
      { project: 'Disease Risk Prediction System', detail: 'Primary classifier for multi-disease risk prediction.' },
      { project: 'Real-time Bike Demand Forecasting', detail: 'Demand forecasting model reducing MAE by 15%.' },
    ],
  },
  {
    icon: Lightning,
    name: 'FastAPI',
    description: 'High-performance Python web framework for building REST APIs.',
    usedIn: [
      { project: 'Medical NLP Intelligence System', detail: 'REST API for clinical text analysis endpoints.' },
    ],
  },
  {
    icon: Cloud,
    name: 'PyTorch',
    description: 'Deep learning framework for building and training neural networks.',
    usedIn: [
      { project: 'Medical Image Diagnosis System', detail: 'Model training loop, data augmentation and inference pipeline.' },
    ],
  },
  {
    icon: Cloud,
    name: 'HuggingFace',
    description: 'Pre-trained transformer models and tokenisers for fast NLP development.',
    usedIn: [
      { project: 'Medical NLP Intelligence System', detail: 'Fine-tuned BioBERT for medical NER tasks.' },
    ],
  },
  {
    icon: GitBranch,
    name: 'Git',
    description: 'Version control for collaborative and solo development workflows.',
    usedIn: [
      { project: 'All Projects', detail: 'Source control, branching, and GitHub collaboration across every project.' },
    ],
  },
  {
    icon: Terminal,
    name: 'Jupyter',
    description: 'Interactive notebooks for exploratory data analysis and model prototyping.',
    usedIn: [
      { project: 'Disease Risk Prediction System', detail: 'EDA, feature selection and SHAP analysis notebooks.' },
      { project: 'Medical Image Diagnosis System', detail: 'Training experiments and result visualisation.' },
    ],
  },
  {
    icon: Database,
    name: 'Power BI',
    description: 'Business intelligence tool for interactive dashboards and data visualisation.',
    usedIn: [],
  },
  {
    icon: Cube,
    name: 'Docker',
    description: 'Containerisation for reproducible and portable application deployment.',
    usedIn: [
      { project: 'Real-time Bike Demand Forecasting', detail: 'Containerised Airflow workers and MLOps pipeline services.' },
    ],
  },
  {
    icon: Cube,
    name: 'Data Structures & Algorithms',
    description: 'Foundational CS concepts applied in optimising ML pipelines and system design.',
    usedIn: [],
  },
  {
    icon: Cube,
    name: 'Software Engineering',
    description: 'Applying design patterns, SOLID principles and clean architecture in projects.',
    usedIn: [
      { project: 'All Projects', detail: 'Modular code design, separation of concerns, and CI/CD best practices.' },
    ],
  },
  {
    icon: Globe,
    name: 'React',
    description: 'Component-based UI library for building interactive single-page applications.',
    usedIn: [
      { project: 'AI-Powered Modern Portfolio', detail: 'Entire portfolio SPA built with React 18 and Vite.' },
    ],
  },
  {
    icon: Lightning,
    name: 'GSAP',
    description: 'Professional-grade animation library for smooth scroll-driven UI effects.',
    usedIn: [
      { project: 'AI-Powered Modern Portfolio', detail: 'All scroll animations, entrance effects, and micro-interactions.' },
    ],
  },
  {
    icon: Lightning,
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid, consistent UI styling.',
    usedIn: [
      { project: 'AI-Powered Modern Portfolio', detail: 'Design system, glassmorphism effects, and responsive layout.' },
    ],
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });

      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(skillsRef.current?.children || [], {
        y: 20,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 95%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedSkill ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedSkill]);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full glass rounded-full p-2 hover:shadow-glow-primary transition-all duration-500 group">
                <div className="w-full h-full cursor-pointer rounded-full overflow-hidden bg-gradient-secondary">
                  <img src="Images/profileLogo.jpg" alt="Sathwika Raj Bandaru - AI Engineer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                About <span className="text-primary-glow">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an AI &amp; ML Engineer focused on building intelligent systems using Python, machine learning, and data-driven models. I specialize in developing scalable AI solutions, deep learning models for medical diagnosis, and NLP systems for healthcare applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans Neural Networks, Generative AI, and Transformers, with a strong foundation in Data Structures and Software Engineering. I am passionate about applying AI to solve real-world problems and creating impactful technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4" />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-light text-center text-foreground mb-4">
            My <span className="text-primary-glow">Skills</span>
          </h3>
          <p className="text-center text-muted-foreground text-sm mb-12">Click any skill to see where it was used</p>

          <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className="glass p-6 cursor-pointer rounded-xl hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group text-left"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-bounce">
                    <skill.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground leading-tight">{skill.name}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <div
            className="relative glass border border-primary/20 rounded-2xl p-8 max-w-lg w-full shadow-glow-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-primary/20 transition-colors duration-200"
            >
              <X size={16} className="text-muted-foreground hover:text-foreground" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <selectedSkill.icon size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary-glow">{selectedSkill.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{selectedSkill.description}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-5" />

            {/* Projects used in */}
            {selectedSkill.usedIn.length > 0 ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FolderOpen size={18} className="text-primary-glow" />
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Used In</h4>
                </div>
                <ul className="space-y-3">
                  {selectedSkill.usedIn.map((usage, i) => (
                    <li key={i} className="glass rounded-lg p-4 border border-white/5">
                      <p className="text-sm font-semibold text-primary-glow mb-1">{usage.project}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{usage.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm italic">Used in coursework and general software engineering practice.</p>
            )}
          </div>
        </div>
      )}

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default About;