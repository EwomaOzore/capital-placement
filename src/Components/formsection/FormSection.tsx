// FormSection.tsx
import React from 'react';
import Internal from '../checkbox/Internal';
import Switch from '../Switch';

interface FormSectionProps {
    title: string;
    note?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, note }) => {
    return (
        <div className="flex justify-between border-b border-gray-300 mb-8">
            <p className="block mb-1 font-semibold">
                {title} {note && <span className='text-[10px]'>({note})</span>}
            </p>
            <div className='flex'>
                <Internal />
                <Switch />
            </div>
        </div>
    );
};

export default FormSection;
