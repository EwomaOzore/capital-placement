import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Program Details');

    const tabs = ['Program Details', 'Application Form', 'Workflow', 'Preview'];

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-300">
            <div className="flex justify-center">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer pl-16 py-8 ${activeTab === tab ? 'text-white' : 'text-gray-600 hover:bg-gray-200'
                            }`}
                        onClick={() => handleTabClick(tab)}
                        style={{ backgroundColor: activeTab === tab ? '#00635B' : '' }}
                    >
                        {tab}
                        {index < tabs.length - 1 && (
                            <span className={`border-l h-10 ml-16`} />
                        )}
                        {index === tabs.length - 1 && (
                            <div className=" pl-28" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;