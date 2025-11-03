import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-7xl container mx-auto px-3'>
            {children}
        </div>
    );
};

export default Container;