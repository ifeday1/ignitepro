import {React } from 'react';
import Contacthead from '../assets/contacthead.png';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Contact = () => {

  const contacts = [
    {
      icon: <FaMapMarkerAlt className='text-purple-600 text-lg' />,
      title: 'Our Address',
      text: 'New Covenant Baptist Church, Behind Liberation Stadium, Rumuomasi, off Faith Avenue, off Elekahia Road, P.M.B. 127, Port Harcourt, Rivers State, Nigeria.',
    },
    {
      icon: <FaPhoneAlt className='text-purple-600 text-lg' />,
      title: 'Call Us',
      text: '08132227108, 09069505198',
    },
    {
      icon: <FaEnvelope className='text-purple-600 text-lg' />,
      title: 'Email',
      text: 'igniteprocommunity@gmail.com',
    },
  ];

  
  // const [form, setForm] = useState({ name: '', email: '', message: '' });
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!form.name || !form.email || !form.message) {
  //     alert('Please fill all fields.');
  //     return;
  //   }
  //   // Simulate submission
  //   console.log('Form Submitted:', form);
  //   setSubmitted(true);
  //   setForm({ name: '', email: '', message: '' });
  // };

  return (
    <>
      <section
        className='relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl mx-4 md:mx-20 mt-20 md:mt-32'
        style={{ backgroundImage: `url(${Contacthead})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          className=' p-8 rounded-xl text-white text-center max-w-2xl mx-4'
        >
          <h2 className='text-3xl md:text-7xl font-bold mb-4'>CONTACT</h2>
        </motion.div>
      </section>
    
      <section className='bg-pink-50 px-6 py-16 md:px-20 text-center mt-10'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-extrabold text-purple-700 mb-4'
        >
          We’d love to hear from you!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-gray-700 max-w-3xl mx-auto mb-6'
        >
          Whether you have a question, need more information about our programs,
          want to partner with us, or simply want to say hello — we’re here for
          you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md mb-12'
        >
          Feel free to reach out through any of the channels below. We’ll get
          back to you as soon as we can
        </motion.div>

        {/* Contact Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left'>
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className='border border-purple-500 rounded-lg p-6 bg-white hover:shadow-lg transition duration-300'
            >
              <div className='flex items-center gap-2 mb-2'>
                {item.icon}
                <h3 className='text-purple-600 font-semibold'>{item.title}</h3>
              </div>
              <p className='text-sm text-gray-800'>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        {/* <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 text-left'
        >
          <h3 className='text-xl font-semibold text-purple-700 mb-4'>
            Send us a message
          </h3>

          {submitted && (
            <div className='text-green-600 font-medium mb-4'>
              Thank you! Your message has been submitted.
            </div>
          )}

          <div className='mb-4'>
            <label className='block text-sm text-gray-700'>Name</label>
            <input
              name='name'
              type='text'
              value={form.name}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded p-2 mt-1 focus:outline-purple-500'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm text-gray-700'>Email</label>
            <input
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded p-2 mt-1 focus:outline-purple-500'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-sm text-gray-700'>Message</label>
            <textarea
              name='message'
              rows={4}
              value={form.message}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded p-2 mt-1 focus:outline-purple-500'
            />
          </div>

          <button
            type='submit'
            className='bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition'
          >
            Submit
          </button>
        </motion.form> */}
      </section>
    </>
  );
};

export default Contact;
