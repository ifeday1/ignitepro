import { NavLink } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { youtubeEmbedUrl } from '../data/programs';

// One podcast episode with an embedded YouTube player. Pass `to` to show a
// link to the episode's own page.
const PodcastEpisode = ({ episode, to }) => {
  const embed = youtubeEmbedUrl(episode.youtube);

  return (
    <article className='bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-100 flex flex-col'>
      <div className='aspect-video bg-black'>
        {embed ? (
          <iframe
            src={embed}
            title={episode.name}
            loading='lazy'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full'
          />
        ) : (
          <a href={episode.youtube} target='_blank' rel='noopener noreferrer'>
            <img
              src={episode.image}
              alt={episode.name}
              className='w-full h-full object-cover'
            />
          </a>
        )}
      </div>

      <div className='p-6 flex flex-col flex-1'>
        {episode.date && (
          <p className='flex items-center gap-2 text-sm text-gray-500'>
            <CalendarDays className='w-4 h-4 text-primary' /> {episode.date}
          </p>
        )}
        <h3 className='text-lg md:text-xl font-bold text-gray-900 mt-2 leading-snug'>
          {episode.name}
        </h3>
        {episode.guest && (
          <p className='text-sm text-primary font-medium mt-2'>
            With {episode.guest}
            {episode.guestRole && ` · ${episode.guestRole}`}
          </p>
        )}
        {episode.summary && (
          <p className='text-gray-600 text-sm leading-relaxed mt-3'>
            {episode.summary}
          </p>
        )}
        <div className='flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-5'>
          {to && (
            <NavLink
              to={to}
              className='inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all'
            >
              Episode page <ArrowRight className='w-4 h-4' />
            </NavLink>
          )}
          <a
            href={episode.youtube}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-gray-700 font-semibold text-sm hover:text-primary transition'
          >
            Watch on YouTube <ArrowRight className='w-4 h-4' />
          </a>
        </div>
      </div>
    </article>
  );
};

export default PodcastEpisode;
