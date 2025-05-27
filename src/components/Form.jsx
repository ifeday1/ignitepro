import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({});
  const [fileProgress, setFileProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFileProgress(0);

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, val]) =>
      formPayload.append(key, val)
    );

    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://formspree.io/f/YOUR_FORM_ID');

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          setFileProgress(percent);
        }
      });

      xhr.onload = () => {
        setLoading(false);
        if (xhr.status === 200 || xhr.status === 302) {
          toast.success('Form submitted successfully!');
          setFormData({});
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      };

      xhr.onerror = () => {
        setLoading(false);
        toast.error('Upload failed.');
      };

      xhr.send(formPayload);
    } catch (err) {
      setLoading(false);
      toast.error('Unexpected error occurred.');
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-32'>
      <ToastContainer />
      <h2 className='text-xl font-bold mb-4 text-primary'>
        Pitch Competition Form
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        />
        <input
          type='number'
          name='age'
          placeholder='Age'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        />

        <select
          name='gender'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Select Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>

        <input
          type='email'
          name='email'
          placeholder='Email Address'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        />
        <input
          type='tel'
          name='phone'
          placeholder='Phone Number'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        />

        <select
          name='role'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Role in the Company</option>
          <option value='Founder'>Founder</option>
          <option value='Co-founder'>Co-founder</option>
          <option value='Team Member'>Team Member</option>
          <option value='Other'>Other</option>
        </select>

        <select
          name='cacStatus'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>CAC Registration Status</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
          <option value='In Progress'>In Progress</option>
        </select>

        <input
          type='text'
          name='companyName'
          placeholder='Name of Company'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        />

        <select
          name='sector'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Sector/Industry</option>
          <option value='Agriculture'>Agriculture</option>
          <option value='Education'>Education</option>
          <option value='Health & Wellness'>Health & Wellness</option>
          <option value='Technology'>Technology</option>
          <option value='Energy'>Energy</option>
          <option value='Finance / Fintech'>Finance / Fintech</option>
          <option value='Fashion'>Fashion</option>
          <option value='Food & Beverage'>Food & Beverage</option>
          <option value='Manufacturing'>Manufacturing</option>
          <option value='Media & Entertainment'>Media & Entertainment</option>
          <option value='Transportation & Logistics'>
            Transportation & Logistics
          </option>
          <option value='Waste & Environment'>Waste & Environment</option>
          <option value='Other'>Other</option>
        </select>

        <select
          name='operationDuration'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Duration of Operation</option>
          <option value='Less than 6 months'>Less than 6 months</option>
          <option value='6 months – 1 year'>6 months – 1 year</option>
          <option value='1–2 years'>1–2 years</option>
          <option value='3–5 years'>3–5 years</option>
          <option value='Over 5 years'>Over 5 years</option>
        </select>

        <select
          name='businessStage'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Business Stage</option>
          <option value='Idea Stage'>Idea Stage</option>
          <option value='Minimum Viable Product (MVP)'>
            Minimum Viable Product (MVP)
          </option>
          <option value='Revenue Generating'>Revenue Generating</option>
          <option value='Scaling'>Scaling</option>
        </select>

        <div>
          <label className='block mb-1 font-medium'>
            Upload Pitch Deck (PDF)
          </label>
          <input
            type='file'
            name='pitchDeck'
            accept='application/pdf'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className='block mb-1 font-medium'>
            Upload 3-Min Video Pitch (MP4/MOV or link(preferably link))
          </label>
          <input
            type='file'
            name='videoPitch'
            accept='video/mp4,video/mov'
            onChange={handleChange}
          />
          <input
            type='url'
            name='videoLink'
            placeholder='YouTube/Google Drive Link'
            onChange={handleChange}
            className='w-full border px-3 py-2 mt-2 rounded'
          />
        </div>

        <select
          name='availability'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Availability for July 26, 2025</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
          <option value='Not sure yet'>Not sure yet</option>
        </select>

        <select
          name='accountStatus'
          onChange={handleChange}
          required
          className='w-full border px-3 py-2 rounded'
        >
          <option value=''>Account to receive funds</option>
          <option value='Yes : Personal Account'>Yes : Personal Account</option>
          <option value='Yes : Business Account'>Yes : Business Account</option>
          <option value='No'>No</option>
        </select>

        {loading && (
          <div className='w-full bg-gray-200 h-2 rounded'>
            <div
              className='bg-green-500 h-2 rounded'
              style={{ width: `${fileProgress}%` }}
            ></div>
          </div>
        )}

        <button
          type='submit'
          disabled={loading}
          className='bg-primary text-white px-4 py-2 rounded hover:bg-primary/90'
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
