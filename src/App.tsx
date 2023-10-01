import React, { useEffect, useState } from 'react';
import { getApplicationForm } from './api/api';
import { ApplicationForm } from './api/types';
import './App.css';
import AdditionalQuestion from './Components/AdditionalQuestion';
import NavBar from './Components/NavBar';
import PersonalInfo from './Components/PersonalInfo';
import Profile from './Components/Profile';
import Sidebar from './Components/Sidebar';
import UploadBox from './Components/Upload';

function App() {

  const [, setFormData] = useState<ApplicationForm | null>(null);

  useEffect(() => {
    // Fetch application form data when the component mounts
    const version = '1';
    const programId = '12345';

    getApplicationForm(version, programId)
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching application form:', error);
      });
  }, []);

  return (
    <div className="flex h-screen">
      <div className='flex z-50'>
        <NavBar />
        <Sidebar />
      </div>

      <div className="flex-1 p-40">
        <div className='mb-10'>
          <UploadBox />
        </div>
        <div className='mb-10'>
          <PersonalInfo />
        </div>
        <div className='mb-10'>
          <Profile />
        </div>
        <div className='mb-10'>
          <AdditionalQuestion />
        </div>
      </div>
    </div>
  );
}

export default App;