import React, { useEffect, useState } from 'react';
import { getApplicationForm } from '../api/api';
import { ApplicationForm } from '../api/types';

const AdditionalQuestion: React.FC = () => {
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
        <div className="w-[50%] bg-white shadow-md rounded-2xl">
            <div className="bg-[#D0F7FA] p-2 rounded-t-2xl mb-6">
                <p className="font-bold text-lg pl-3">Additional questions</p>
            </div>
            <div className="p-4">
                {/* Display or edit the form data here */}
            </div>
        </div>
    );
};

export default AdditionalQuestion;
