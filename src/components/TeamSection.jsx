import { motion } from 'framer-motion';

const TeamSection = ({ title, data, bg = 'bg-white' }) => {
  return (
    <section className={`py-20 px-6 md:px-16 ${bg}`}>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            {title}
          </h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {data.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-3 transition duration-300'
            >
              <div className='overflow-hidden'>
                <img
                  src={person.image}
                  alt={person.name}
                  className='w-full h-80 object-cover group-hover:scale-105 transition duration-500'
                />
              </div>

              <div className='p-6 text-center'>
                <h3 className='text-xl font-bold text-gray-900'>
                  {person.name}
                </h3>

                <p className='text-gray-600 mt-2 text-sm leading-relaxed'>
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
