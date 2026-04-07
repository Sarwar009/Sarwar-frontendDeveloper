import React from 'react';
import SubTitle from './SubTitle';
import {benefitsData} from '@/lib/Data/Data';

export default function BenefitsSection () {
  return (
    <div className="flex flex-col container mx-auto text-center">
      <div className="pb-8.75 md:pb-30">
        <SubTitle subTitle="The Deep Work Blueprint" />
        <h1 className="text-2xl md:text-4xl font-semi-bold max-w-150 text-[#E0E3E5] mx-auto mt-12">
          A self-paced, results-driven course designed to help you
        </h1>
      </div>
      <div>
        {benefitsData.map (b => {
          return (
            <div key={b.id} className=" max-w-95 h-48 mx-auto relative">
              <div className="rounded-full w-4 h-4 bg-blue-800" />

              <div className="my-3 px-15 relative">
              <div className="absolute left-2 top-5  h-full w-0.5 bg-linear-to-b from-black via-blue-500 to-black"></div>
                <div className="text-left ml-5 bg-[##171B21] p-5 rounded-full block max-w-15 h-15 mb-3">
                  <div className="w-6 h-6">{b.icon}</div>
                </div>
                <p className='text-[#D0D5D9]'>{b.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
