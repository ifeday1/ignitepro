// Past event write-ups, shown on the Past Events page and the programme edition pages.

import Img15 from '../assets/15.jpg';
import Img30 from '../assets/30.jpg';
import A11 from '../assets/a11.jpeg';
import Csr19 from '../assets/csr19.jpg';
import mb from '../assets/mb.jpg';
import Accelerate3 from '../assets/accelerate3.jpeg';

export const pastEvents = [
  {
    id: 'accelerate-3-0',
    title: 'Accelerate 3.0 – Future Proof: Sustaining Relevance',
    year: '2026',
    description: `Accelerate 3.0 is the third edition of the annual boot camp hosted by the Ignite Pro Community, designed for young professionals, graduates, and undergraduates.

The theme "Future Proof: Sustaining Relevance" equipped beneficiaries with the skills, mindset, and systems needed to remain resilient, adaptable, and relevant in the face of continuous change, strengthening future-ready capacities such as digital literacy, critical thinking, and innovative ideas through mentorship training.

The bootcamp featured a Keynote Address by Mr. Gbite Falade (Group MD/CEO, Aradel Holdings Plc), a Fireside Chat with Mr. Nixon Iwedi (MD/CEO, Signature Bank Limited), a Panel Session with industry leaders, practical workshops on Adaptive Leadership and Tech as an Ally, and a Spotlight Session on personal branding.

Accelerate 3.0 built adaptive, confident, and future-ready individuals capable of sustaining impact, responding to uncertainty, and remaining relevant in the face of ongoing global transformation.`,
    image: Accelerate3,
  },
  {
    id: 'blueprint',
    title: 'Mentorship Breakfast: BLUEPRINT – BUILDING THE FUTURE',
    year: '2026',
    description: `The second edition of the Ignite Pro Mentorship Breakfast focused on empowering young professionals, graduates, and entrepreneurs.

Through workshops, networking opportunities, and powerful mentoring sessions, attendees gained practical tools to build intentional futures.

A major highlight was the productivity session and mentor–mentee roundtable discussion, where participants received direct professional feedback.

The program encouraged visionary leadership and purposeful action to create lasting impact.`,
    image: mb,
  },
  {
    id: 'back-to-school',
    title: 'Back To School Initiative',
    year: '2025',
    description: `Ignite Pro Community launched its first Corporate Social Responsibility initiative at Elekahia Government Secondary School, Port Harcourt.

The project supported 244 JSS3 students with school bags, exercise books, and mathematical sets to promote academic excellence.

This initiative reflects Ignite Pro’s commitment to empowering young minds and driving meaningful community impact.`,
    image: Csr19,
  },
  {
    id: 'accelerate-2-0',
    title: 'Accelerate 2.0 – Future Forward',
    year: '2025',
    description: `Accelerate 2.0 is the second edition of the annual boot camp hosted by the Ignite Pro Community, designed for young professionals, graduates, and undergraduates. 

The event aimed to empower participants by providing them with valuable skills, mentorship, and networking opportunities to accelerate their personal and professional growth.

The theme "Future Forward: Transforming Visions to Reality" was crafted to engage and inspire young minds, providing them with the tools, insights, and faith-based principles essential for turning their visions into reality. 

It highlighted the importance of looking ahead, adopting a proactive mindset, and taking intentional steps toward shaping a desired future. The focus was on fostering forward-thinking, innovation, and an openness to new possibilities.

Transforming visions into reality demands thoughtful and systematic approach, encompassing the clarification of your vision, the establishment of goals and objectives, the development of a strategic plan, and the execution of decisive actions.

Accelerate 2.0 delivered an empowering and inspiring message, motivating young professionals to take control of their goals and aspirations, while emphasizing their ability to shape their own future.

Objectives:
To Inspire;
To Equip; and
To Connect

Event Highlights:

Keynote Addresses: This focused on the importance of aligning one's personal and professional goals with a sense of purpose guided by faith and vision.

Panel Discussions: Interactive sessions with experts and thought leaders who delved into key topics across transforming vision into action, overcoming challenges and building resilience, aligning purpose with vision, and other crucial areas.

Networking Opportunities:

Dedicated spaces and activities facilitated meaningful connections among attendees, speakers, and sponsors.`,
    image: A11,
  },
  {
    id: 'unwind',
    title: 'Unwind: Revisiting The Vision Board',
    year: '2024',
    description: `Unwind was an exclusive breakfast and mentorship experience that brought professionals together to learn, connect, and grow. Participants engaged in insightful conversations with industry leaders, gaining valuable career guidance and clarity. The event also featured an Expert Vision Board Workshop, where attendees crafted a clear roadmap for a more fulfilling and productive year. Beyond learning, Unwind offered rich networking opportunities that fostered meaningful connections and expanded professional circles.`,
    image: Img30,
  },
  {
    id: 'accelerate-1-0',
    title: 'Accelerate 1.0 – Ten Times Better',
    year: '2024',
    description: `The maiden Ignite Pro leadership bootcamp equipping young leaders with practical development tools and growth strategies.
      
      The program is an intense one-day program for undergraduate students, graduates and young professionals aged 18 and above. 

With the use of resource persons and keynote speakers ranging from the corporate world, creative industry and entrepreneurial sphere, the program will achieve its goals and objectives.

GOAL
The bootcamp was designed to train, develop, refine and inspire transformation of youths in the areas of leadership, career and self-development.

OBJECTIVES
Equip youths with essential skills and resources needed to succeed in their chosen career through curated sessions on leadership, personal development, corporate career and entrepreneurship.
Provide opportunity for mentorship through meeting, engaging and learning from experiences of well-grounded industry mentors across corporate careers, business, and creative industry.
Provide a platform for which young professionals can connect and foster beneficial relationships that can positively influence their career path. 
Train youths and improve employability skills through sessions such as career fair, cv clinic, LinkedIn profile optimization and preparing for job interviews.`,
    image: Img15,
  },
];

export const getPastEvent = (id) => pastEvents.find((e) => e.id === id);
