import React, { useEffect, useState } from 'react';
import { getApplicationForm } from '../api/api';
import { ApplicationForm } from '../api/types';
import FormSection from './formsection/FormSection';
import Form from './formsection/Form';

const PersonalInfo: React.FC = () => {
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
                <p className="font-bold text-lg pl-3">Personal Information</p>
            </div>
            <div className="p-4">
                <FormSection title="First Name" />
                <FormSection title="Last Name" />
                <FormSection title="Email" />
                <FormSection title="Phone" note="without dial code" />
                <FormSection title="Nationality" />
                <FormSection title="Current Residence" />
                <FormSection title="ID Number" />
                <FormSection title="Date of Birth" />
                <FormSection title="Gender" />
                <Form />
            </div>
        </div>
    );
};

export default PersonalInfo;
