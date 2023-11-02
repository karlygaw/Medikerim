import React from 'react';

const DoctorCard = ({doctor}) => {

const {name, avgRating, totalRating, photo, specialization, totalPatient, hospital } = doctor

  return <div className='p-3 lg:p-5'>
    <div>
        <img src={photo} className='w-full' alt="" />
    </div>

    <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5  '>
        {name}
    </h2>

    <div className='mt-2 lg:mt-4 flex items-center justify-'>

    </div>
  </div>;
};

export default DoctorCard;