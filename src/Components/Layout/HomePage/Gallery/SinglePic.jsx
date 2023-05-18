import React from 'react';

const SinglePic = ({pic}) => {
    const {photoUrl} = pic
    return (
        <div className='bg-slate-100 mx-auto'>
            <img className='w-36 h-40' src={photoUrl} alt="" />
        </div>
    );
};

export default SinglePic;