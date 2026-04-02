import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, CalendarBlank } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "Master's – Artificial Intelligence Systems",
    period: "2025 – Present",
    institution: "EPITA – École Pour l'Informatique et les Techniques Avancées",
    location: "Paris, France",
    highlight: true,
  },
  {
    degree: "Bachelor's of Technology – AIML",
    period: "2021 – 2025",
    institution: "Kalasalingam University of Technology",
    location: "Madurai, India",
    highlight: false,
  },
  {
    degree: "Semester Exchange – AIML",
    period: "Feb 2024",
    institution: "Politechnika Krakowska",
    location: "Krakow, Poland",
    highlight: false,
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(timelineRef.current?.children || [], {
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            <span className="text-primary-glow">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic milestones across three countries, combining AI theory with international exposure.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-6">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${edu.highlight ? 'bg-primary border-primary shadow-glow-primary' : 'bg-background border-primary/50 group-hover:border-primary'}`} />
                </div>

                {/* Card */}
                <div className={`flex-1 glass rounded-2xl p-6 hover:shadow-glow-primary transition-all duration-500 border ${edu.highlight ? 'border-primary/30' : 'border-white/5 hover:border-primary/20'}`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <GraduationCap size={20} className="text-primary-glow flex-shrink-0" />
                        <h3 className={`text-lg font-semibold leading-tight ${edu.highlight ? 'text-primary-glow' : 'text-foreground group-hover:text-primary-glow transition-colors duration-300'}`}>
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm ml-8">{edu.institution}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1 ml-8 md:ml-0 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-primary-glow text-sm font-medium">
                        <CalendarBlank size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/3" />
    </section>
  );
};

export default Education;
