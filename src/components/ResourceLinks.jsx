import { NavLink } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const linkClass =
  'inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all';

// Row of related links: `{ to }` for site pages, `{ href }` for PDFs and
// external sites.
const ResourceLinks = ({ links }) => {
  if (!links?.length) return null;

  return (
    <div className='flex flex-wrap gap-x-8 gap-y-3 mt-8'>
      {links.map((link) =>
        link.to ? (
          <NavLink key={link.label} to={link.to} className={linkClass}>
            {link.label} <ArrowRight className='w-5 h-5' />
          </NavLink>
        ) : link.href.endsWith('.pdf') ? (
          <a key={link.label} href={link.href} download className={linkClass}>
            <Download className='w-5 h-5' /> {link.label}
          </a>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className={linkClass}
          >
            {link.label} <ArrowRight className='w-5 h-5' />
          </a>
        ),
      )}
    </div>
  );
};

export default ResourceLinks;
