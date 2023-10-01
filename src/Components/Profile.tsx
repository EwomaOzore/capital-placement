import React, { useEffect, useState } from 'react';
import { getApplicationForm } from '../api/api';
import { ApplicationForm } from '../api/types';
import ProfileSection from './formsection/ProfileSection';
import Form from './formsection/Form';

const Profile: React.FC = () => {
    const [, setFormData] = useState<ApplicationForm | null>(null);

    useEffect(() => {
        // Fetch application form data when the component mounts
        const version = '1'; // Replace with the actual version
        const programId = '12345'; // Replace with the actual program ID

        getApplicationForm(version, programId)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.error('Error fetching application form:', error);
            });
    }, []);

    return (
        <div className="w-[50%] bg-white shadow-md rounded-2xl">
            <div className="bg-[#D0F7FA] p-2 rounded-t-2xl mb-6">
                <p className="font-bold text-lg pl-3">Profile</p>
            </div>
            <div className="p-4">
                <ProfileSection title="Education" />
                <ProfileSection title="Experience" />
                <ProfileSection title="Resume" />
                <Form />
            </div>
        </div>
    );
};

export default Profile;
