import React from 'react';
import { HiHome, HiViewList, HiOutlineClipboardList, HiUser } from 'react-icons/hi';

const Sidebar: React.FC = () => {
    return (
        <div className="fixed h-screen w-20 bg-white border-r border-gray-300 shadow-md flex flex-col justify-between items-center">
            <div className="mb-4 pt-4 cursor-pointer">
                <HiViewList className="text-3xl" />
            </div>
            <div>
                <div className="mb-4">
                    <a href="#home">
                        <HiHome className="text-3xl" />
                    </a>
                </div>
                <div className="mb-4">
                    <a href="#clipboard">
                        <HiOutlineClipboardList className="text-3xl" />
                    </a>
                </div>
            </div>
            <div className="mb-4">
                <a href="#user">
                    <HiUser className="text-3xl" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;