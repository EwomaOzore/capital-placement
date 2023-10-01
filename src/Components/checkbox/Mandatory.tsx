import React from 'react';

const Mandatory: React.FC = () => {
    return (
        <div>
            <input type="checkbox" id="hide" className='mr-1' />
            <span className="text-[12px] mr-3">Mandatory</span>
        </div>
    );
};

export default Mandatory;