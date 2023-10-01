import React from 'react';

const Internal: React.FC = () => {
    return (
        <div className='flex'>
            <input type="checkbox" id="hide" className='mr-1' />
            <p className="text-[12px] mt-1 mr-3">Internal</p>
        </div>
    );
};

export default Internal;