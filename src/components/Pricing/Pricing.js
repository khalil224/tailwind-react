import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99,
            benefits: [
                'everything on free',
                'unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            benefits: [
                'everything on  regular',
                'unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        }

    ]

    return (
        <div className='bg-indigo-300 p-4 mt-8 font-mono '>
            <h1 className='text-4xl text-white'>Best Deals of the Town</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum rem dolorum ad! Expedita, accusamus consequuntur praesentium ducimus ipsum quisquam?</p>
            <div className='grid md: grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOptions key={option.id} option={option}></PricingOptions>)
                }
            </div>
        </div>

    );
};

export default Pricing;