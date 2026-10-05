// Programmes and their editions. Drives the navbar "Programs" menu and the
// /programs pages. Copy is taken from the existing Past Events, About and
// Podcast content; leave a field out when there is nothing on record for it.
import GroupPhoto from '../assets/accelerate3-group.jpg';
import Accelerate1Event from '../assets/accelerate1-event.jpg';
import Accelerate2Event from '../assets/accelerate2-event.jpg';
import Mb from '../assets/mb.jpg';
import UnwindEvent from '../assets/unwind-event.jpg';
import Csr19 from '../assets/csr19.jpg';
import BookDrive from '../assets/csr-book-drive.jpg';
import BookDriveFlyer from '../assets/csr-book-drive-flyer.jpg';
import PodcastThumb from '../assets/podthumb1.jpeg';
import { getPastEvent } from './pastEvents';
import {
  accelerate1,
  accelerate2,
  accelerate3,
  accelerate3Videos,
  breakfastMentorship,
  csr,
  unwind,
} from './galleries';
import {
  accelerate2Speakers,
  accelerate3Facilitator,
  accelerate3Fireside,
  accelerate3Panelists,
  accelerate3Speakers,
} from './speakers';
import podcasts from './podcasts';

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
    .replace(/-$/, '');

export const programs = [
  {
    slug: 'accelerate-bootcamp',
    name: 'Accelerate Bootcamp',
    image: GroupPhoto,
    short:
      'Our annual leadership and career bootcamp for students, graduates and young professionals.',
    about: [
      'Accelerate is the annual boot camp hosted by the Ignite Pro Community, designed for young professionals, graduates, and undergraduates.',
      'The bootcamp was designed to train, develop, refine and inspire transformation of youths in the areas of leadership, career and self-development.',
    ],
    audience:
      'Undergraduate students, graduates and young professionals aged 18 and above.',
    gains: [
      'Essential skills and resources needed to succeed in your chosen career, through curated sessions on leadership, personal development, corporate career and entrepreneurship.',
      'Mentorship from well-grounded industry mentors across corporate careers, business, and the creative industry.',
      'A platform to connect and foster beneficial relationships that can positively influence your career path.',
      'Improved employability skills through sessions such as career fair, CV clinic, LinkedIn profile optimization and preparing for job interviews.',
    ],
    editions: [
      {
        slug: 'accelerate-1-0',
        name: 'Accelerate 1.0',
        theme: 'Ten Times Better',
        year: getPastEvent('accelerate-1-0').year,
        image: Accelerate1Event,
        summary: getPastEvent('accelerate-1-0').description,
        stats: [
          { value: '13', label: 'Speakers' },
          { value: '200+', label: 'Attendees' },
          { value: '2', label: 'Panel sessions and leadership addresses' },
          { value: '3', label: 'Business grants' },
          { value: '4', label: 'Educational support grants' },
        ],
        gallery: accelerate1,
      },
      {
        slug: 'accelerate-2-0',
        name: 'Accelerate 2.0',
        theme: 'Future Forward: Transforming Visions to Reality',
        year: getPastEvent('accelerate-2-0').year,
        date: 'July 26, 2025',
        image: Accelerate2Event,
        summary: getPastEvent('accelerate-2-0').description,
        speakerCards: { title: 'Speakers', data: accelerate2Speakers },
        gallery: accelerate2,
        testimonialRoles: ['Green Paragon Limited'],
        links: [{ to: '/pitch', label: 'Future Forward Pitch Competition' }],
      },
      {
        slug: 'accelerate-3-0',
        name: 'Accelerate 3.0',
        theme: 'Future Proof: Sustaining Relevance',
        year: getPastEvent('accelerate-3-0').year,
        date: 'July 25, 2026',
        time: '9:00AM – 4:00PM',
        venue: {
          name: 'Celebr8 Event Centre',
          address: '35 Olu Obasanjo Road, Port Harcourt',
        },
        image: getPastEvent('accelerate-3-0').image,
        summary: getPastEvent('accelerate-3-0').description,
        team: [
          { title: 'Keynote Speakers', data: accelerate3Speakers },
          { title: 'Fireside Chat', data: accelerate3Fireside },
          { title: 'Panelists', data: accelerate3Panelists },
          { title: 'Facilitator', data: accelerate3Facilitator },
        ],
        videos: accelerate3Videos,
        gallery: accelerate3,
        testimonialRoles: [
          'Student, Accelerate 3.0',
          'Graduate, Accelerate 3.0',
        ],
        links: [
          { to: '/accelerate3.0', label: 'Accelerate 3.0 event page' },
          { href: '/Accelerate 3.0 Brochure.pdf', label: 'Download the brochure' },
        ],
      },
    ],
  },
  {
    slug: 'mentorship-breakfast',
    name: 'Mentorship Breakfast',
    image: Mb,
    short:
      'A focused mentorship experience designed to provide clarity, direction, and practical guidance for growth.',
    about: [
      'A focused mentorship experience designed to provide clarity, direction, and practical guidance for growth. This is a space for learning, connection, and intentional development.',
    ],
    audience: 'Young professionals, graduates, and entrepreneurs.',
    gains: [
      'Insightful conversations with industry leaders, with valuable career guidance and clarity.',
      'Direct professional feedback through mentor–mentee roundtable discussions.',
      'Practical tools to build intentional futures.',
      'Networking opportunities that foster meaningful connections and expand professional circles.',
    ],
    editions: [
      {
        slug: 'unwind',
        name: 'Unwind',
        theme: 'Revisiting The Vision Board',
        year: getPastEvent('unwind').year,
        image: UnwindEvent,
        summary: getPastEvent('unwind').description,
        stats: [
          { value: '7', label: 'Industry recognized speakers/mentors' },
          { value: '40', label: 'Selected participants' },
        ],
        gallery: unwind,
      },
      {
        slug: 'blueprint',
        name: 'Blueprint',
        theme: 'Building the Future',
        year: getPastEvent('blueprint').year,
        image: Mb,
        summary: getPastEvent('blueprint').description,
        gallery: breakfastMentorship,
      },
    ],
  },
  {
    slug: 'csr-project',
    name: 'CSR Project',
    image: Csr19,
    short:
      'Our Corporate Social Responsibility initiatives, empowering young minds and driving meaningful community impact.',
    about: [
      'Ignite Pro Community launched its first Corporate Social Responsibility initiative at Elekahia Government Secondary School, Port Harcourt.',
      'This initiative reflects Ignite Pro’s commitment to empowering young minds and driving meaningful community impact.',
    ],
    audience:
      'Secondary school students — starting with 244 JSS3 students at Elekahia Government Secondary School in our first project.',
    gains: [
      'School bags',
      'Exercise books',
      'Mathematical sets to promote academic excellence',
      'Secondary school textbooks through our Give a Book book drive',
    ],
    editions: [
      {
        slug: 'back-to-school',
        name: 'Back To School Initiative',
        theme: 'Elekahia Government Secondary School',
        year: getPastEvent('back-to-school').year,
        venue: {
          name: 'Elekahia Government Secondary School',
          address: 'Port Harcourt',
        },
        image: Csr19,
        summary: getPastEvent('back-to-school').description,
        stats: [{ value: '244', label: 'JSS3 students supported' }],
        gallery: csr,
      },
      {
        slug: 'give-a-book',
        name: 'Give a Book Drive',
        theme: 'Give a Book. Open a World.',
        year: '2026',
        image: BookDrive,
        summary: `A book in a child’s hand can open a world of possibilities.

Our Give a Book drive collects secondary school textbooks for students who need them. Donate a book you no longer use, buy one for a student, or send a donation and we will get the books into their hands.`,
        appeal: {
          title: 'We’re accepting secondary school books',
          items: [
            'Chemistry',
            'Physics',
            'Biology',
            'English',
            'Geography',
            'History',
            'Mathematics',
            'Literature',
          ],
          flyer: BookDriveFlyer,
          account: {
            bank: 'First Bank',
            name: 'Pro-Ignite Youth Development Network',
            number: '2048570923',
          },
          phone: '+234 904 302 1709',
        },
        links: [{ to: '/donate', label: 'More ways to donate' }],
      },
    ],
  },
  {
    slug: 'ignite-podcast',
    name: 'Ignite Podcast',
    fullName: 'The Ignite Room Leadership Podcast',
    image: PodcastThumb,
    isPodcast: true,
    short:
      'Honest conversations on purpose-driven leadership, careers and creating impact beyond profit.',
    about: [
      'Real conversations. Real growth. Real leadership. Dive into insightful discussions designed to help you stay relevant, lead with purpose, and thrive in today’s evolving world.',
    ],
    gains: [
      'Stay relevant in a fast-changing world.',
      'Lead with purpose.',
      'Thrive in today’s evolving world.',
    ],
    links: [
      {
        href: 'https://www.youtube.com/@IgniteProCommunity',
        label: 'Subscribe on YouTube',
      },
    ],
    editions: podcasts.map((episode) => ({
      slug: slugify(episode.title),
      name: episode.title,
      date: episode.date,
      image: episode.thumbnail,
      youtube: episode.youtube,
      guest: episode.guest,
      guestRole: episode.guestRole,
      summary: episode.description,
    })),
  },
];

export const getProgram = (slug) => programs.find((p) => p.slug === slug);

export const getEdition = (program, slug) =>
  program?.editions.find((e) => e.slug === slug);

export const programPath = (program) => `/programs/${program.slug}`;

export const editionPath = (program, edition) =>
  `/programs/${program.slug}/${edition.slug}`;

// "https://youtu.be/ID?si=…" or "https://www.youtube.com/watch?v=ID" → embed URL
export const youtubeEmbedUrl = (url) => {
  const match = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
