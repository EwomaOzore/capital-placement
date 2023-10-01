// Switch.tsx
import React, { useState } from 'react';

const Switch: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="flex items-center">
            <label className="relative inline-block w-10 h-6">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isOn}
                    onChange={handleToggle}
                />
                <div
                    className={`w-8 h-5 transition-colors duration-200 ease-in-out ${isOn ? 'bg-green-400' : 'bg-gray-300'
                        } rounded-full shadow-inner`}
                ></div>
                <div
                    className={`absolute left-1 top-1 w-3 h-3 transition-transform duration-200 ease-in-out ${isOn ? 'transform translate-x-full' : 'transform translate-x-0'
                        } bg-white rounded-full shadow-md`}
                ></div>
            </label>
            <span className="text-[12px]">{isOn ? 'Show' : 'Hide'}</span>
        </div>
    );
};

export default Switch;
