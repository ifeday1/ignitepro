import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = ({ backTo = '/programs', backLabel = 'Back to all programs' }) => (
  <section className='mt-20 min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24'>
    <p className='text-primary font-semibold uppercase tracking-widest text-sm mb-3'>
      Page not found
    </p>
    <h1 className='text-3xl md:text-5xl font-black text-gray-900'>
      We couldn’t find that page
    </h1>
    <NavLink
      to={backTo}
      className='inline-flex items-center gap-2 bg-primary hover:bg-purple-700 text-white px-7 py-4 rounded-full font-semibold shadow-lg transition mt-10'
    >
      <ArrowLeft className='w-5 h-5' /> {backLabel}
    </NavLink>
  </section>
);

export default NotFound;
