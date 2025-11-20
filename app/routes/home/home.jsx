import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/iessi3.png';
import nomac from '~/assets/nomac.jpg';
import outnax from '~/assets/outnax.png';
import MLA from '~/assets/MLA.png';
import BERD from '~/assets/berd.png';
import drixal from '~/assets/drixal.jpg'
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/quantushrm1.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import ButtonGrid from '~/components/ButtonGrid/ButtonGrid'
// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

const items = [
  { title: 'MediCubes', url: 'http://medicubes.net/' },
  { title: 'IntegCubes', url: 'http://integcubes-landing.vercel.app/' },
  { title: 'Al-Darh', url: 'https://darh-website-landing-page.vercel.app/en' },
  { title: 'Zaratica', url: 'https://www.zaratica.com/en' },
  { title: 'Saya-e-Umeed', url: 'https://saya-e-umeed-client.vercel.app/auth/sign-in' },
  { title: 'Zorkif', url: 'https://zorkif.com/' },
];

export const meta = () => {
  return baseMeta({
    title: 'Sheharyar Abid',
    description: `Design portfolio of ${config.name} — a software engineer.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive,projectSix,projectSeven, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
       <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
        {/* Project 1 */}
    <ProjectSummary
      id="project-1"
      sectionRef={projectOne}
      visible={visibleSections.includes(projectOne.current)}
      index={1}
      title="The QuantusHRM"
      description="Comprehensive human-resource management platform designed to automate core HR workflows and enhance operational efficiency."
      buttonText="View project"
      buttonLink="/projects/quantushrm"
      model={{
        type: 'laptop',
        alt: 'Smart Sparrow lesson builder',
        textures: [
          {
            srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
            placeholder: sprTexturePlaceholder,
          },
        ],
      }}
    />

    {/* Project 2 removed */}
       <ProjectSummary
      id="project-2"
      sectionRef={projectTwo}
      visible={visibleSections.includes(projectTwo.current)}
      index={2} // optionally adjust the index since project 2 is removed
      title="Operational Excellency Platform - OEP"
      description="Played a key role in developing and maintaining the Operational Excellence Platform (OEP), a critical internal tool for NOMAC, a subsidiary of ACWA Power, driving efficiency and operational insights."
      buttonText="Visit"
      buttonLink="https://www.nomac.com/"
      model={{
        type: 'laptop',
        alt: 'social security app',
        textures: [
          {
            srcSet: `${nomac} 800w, ${nomac} 1920w`,
            placeholder: nomac,
          },
        ],
      }}
    />
    {/* Project 3 */}
    <ProjectSummary
      id="project-3"
      sectionRef={projectThree}
      visible={visibleSections.includes(projectThree.current)}
      index={3} // optionally adjust the index since project 2 is removed
      title="Employee Social Security Management"
      description="Delivered a comprehensive solution to government institution to manage worker data, health services, and payments. The system also handles card issuance and expiry, fully synchronized with healthcare networks for seamless operations."
      buttonText="View project"
      buttonLink="/projects/iessi"
      model={{
        type: 'laptop',
        alt: 'social security app',
        textures: [
          {
            srcSet: `${sliceTextureLarge} 800w, ${sliceTextureLarge} 1920w`,
            placeholder: sliceTextureLarge,
          },
        ],
      }}
    />

    <ProjectSummary
      id="project-4"
      sectionRef={projectSix}
      visible={visibleSections.includes(projectSix.current)}
      index={4} // optionally adjust the index since project 2 is removed
      title="BERD"
      description="Collaborated with cross-functional teams to develop a dynamic planning tool with real-time API data sync, advanced data visualizations, and scalable, maintainable workflow management features."
      buttonText="Visit"
      buttonLink="https://www.berd.eu/"
      model={{
        type: 'laptop',
        alt: 'outnax app',
        textures: [
          {
            srcSet: `${BERD} 800w, ${BERD} 1920w`,
            placeholder: BERD,
          },
        ],
      }}
    />

     <ProjectSummary
      id="project-5"
      sectionRef={projectSeven}
      visible={visibleSections.includes(projectSeven.current)}
      index={5} // optionally adjust the index since project 2 is removed
      title="Drixal"
      description="Developed a modern, multilingual ERP featuring dynamic, reusable components with a strong focus on
performance and responsive design. "
      buttonText="Visit"
      buttonLink="https://drixal.com/en"
      model={{
        type: 'laptop',
        alt: 'drixal app',
        textures: [
          {
            srcSet: `${drixal} 800w, ${drixal} 1920w`,
            placeholder: drixal,
          },
        ],
      }}
    />

     <ProjectSummary
      id="project-4"
      sectionRef={projectFour}
      visible={visibleSections.includes(projectFour.current)}
      index={6} // optionally adjust the index since project 2 is removed
      title="Outnax"
      description="Streamline sales, HR, operations, finance, inventory, procurement, POS, and document management in a single, scalable ERP solution designed for growing enterprises."
      buttonText="Visit"
      buttonLink="https://outnax.com/en"
      model={{
        type: 'laptop',
        alt: 'outnax app',
        textures: [
          {
            srcSet: `${outnax} 800w, ${outnax} 1920w`,
            placeholder: outnax,
          },
        ],
      }}
    />

      <ProjectSummary
      id="project-5"
      sectionRef={projectFive}
      visible={visibleSections.includes(projectFive.current)}
      index={7} // optionally adjust the index since project 2 is removed
      title="Mini Lessons Academy"
      description="Collaborated to integrate OpenAI APIs for auto-generating courses and books from a single title, featuring personalized learning paths, progress tracking, and Single-Click Course Creation."
      buttonText="Visit"
      buttonLink="https://app.minilessonsacademy.com/login"
      model={{
        type: 'laptop',
        alt: 'MLA app',
        textures: [
          {
            srcSet: `${MLA} 800w, ${MLA} 1920w`,
            placeholder: MLA,
          },
        ],
      }}
    />

    
  <ButtonGrid items={items} />
     
      <Footer />
    </div>
  );
};
