import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        
            <div class="hero bg-base-200 py-20">
  <div class="hero-content text-center">
    <div class="">
      <h1 class="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
      <p class="py-6 max-w-xl mx-auto text-[16px] text-[#4B5563]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>
      <button class="btn bg-[#244D3F] rounded-xl text-white"><FaPlus />
Add a Friend</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;