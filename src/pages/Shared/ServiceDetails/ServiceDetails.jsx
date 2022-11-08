import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData().data
    const {picture, title, description} = service;
    return (
        <div className='container mx-auto'>
            <div className=''>
                <img src={picture} className="w-full lg:h-[600px] lg-[300px]" alt="" />
            </div>
            <div className='px-4 md:px-0 py-2'>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;