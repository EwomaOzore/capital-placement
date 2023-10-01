import React from 'react';
import Switch from '../Switch';
import Mandatory from '../checkbox/Mandatory';

interface ProfileSectionProps {
    title: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title }) => {
    return (
        <div className="flex justify-between border-b border-gray-300 mb-8">
            <p className="block mb-1 font-semibold">
                {title}
            </p>
            <div className='flex'>
                <Mandatory />
                <Switch />
            </div>
        </div>
    );
};

export default ProfileSection;