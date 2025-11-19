import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const DownloadPdf = () => {
  const handleDownload = () => {
    const fileUrl = '/Ignite Pro Impact Note 2025.pdf'; // place your PDF in public/ folder
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ignitepro-report.pdf';
    link.click();

    toast.success('Your PDF is downloading 📄');
  };

  return (
    <div className='flex flex-col items-center justify-center py-10 bg-indigo-100 min-h-[40vh] text-center mt-20'>
      <Toaster position='top-right' />

      <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-2'>
        Download Ignite Pro's Impact Note 2025
      </h2>
      <p className='text-gray-600 mb-6 max-w-md'>
        Get a detailed overview of Ignite Pro’s recent projects and growth
        insights.
      </p>

      <button
        onClick={handleDownload}
        className='flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300'
      >
        <ArrowDownToLine size={20} />
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPdf;
