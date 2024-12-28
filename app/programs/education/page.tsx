import { ProgramBottom } from '@/components/ProgramBottom';
import { ProgramParagraph } from '@/components/ProgramParagraph';
import ProgramTitle from '@/components/ProgramTitle';
import ThreeIconScroll from '@/components/ThreeIconScroll';
import { WhatWeDo } from '@/components/WhatWeDo';

export default function () {
  return (
    <div className="mt-10 mb-10">
      <ProgramTitle
        src="/images/white-bg.png"
        alt="Education"
        title="EDUCATION"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 sm:pt-10 md:pt-20">
        <ThreeIconScroll
          src1="/images/animated/education/learning.gif"
          src2="/images/animated/education/math.gif"
          src3="/images/animated/education/education.gif"
          alt1="learning"
          alt2="math"
          alt3="education"
          size={200}
        />
        <ProgramParagraph
          title="WHY"
          content="We firmly believe that the key to transforming lives lies in empowering the next generation with quality education. Education not only opens doors to opportunities but also uplifts individuals, families, and communities.
                  Despite various programs by the State and Central Government supporting education up to the 8th standard, there is a concerning dropout rate among students after 8th grade. Many students are unable to continue their education due to financial challenges, limiting their potential and future opportunities.
                  Additionally, numerous capable students in Government and Government-aided institutes settle for graduate courses instead of pursuing professional courses that could significantly improve their economic condition and quality of life."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ProgramParagraph content="In rural areas, countless talented students from government-aided schools face significant challenges in pursuing higher education. Often, they settle for basic graduate courses, despite having the capability to excel in professional studies, simply because of financial constraints. This limits their opportunities for economic and social mobility. RMSF recognizes these challenges and actively works to support students in overcoming them. Our initiatives include providing scholarships, school supplies, and professional guidance, starting in Gadhinglaj Taluka. By removing barriers to education, we aim to enable students to unlock their true potential and build a brighter future for themselves and their families." />
        <ThreeIconScroll
          src1="/images/animated/education/learning.gif"
          src2="/images/animated/education/math.gif"
          src3="/images/animated/education/education.gif"
          alt1="learning"
          alt2="math"
          alt3="education"
          size={200}
        />
      </div>
      <WhatWeDo
        title="OUR APPROACH"
        content="RMSF supports needy students with resources for secondary and professional education, aiming to create schools and hostels to provide quality education for rural and urban poor as a long-term solution."
        IconTitle1="School Students(9th to 12th):"
        IconTitle2="Engineering Students:"
        IconContent1="Scholarship for School Students(9th to 12th) "
        IconContent2="Scholarship for Engineering Students"
        src1="/images/animated/education/teacher.gif"
        src2="/images/animated/education/graduate.gif"
        alt1="Teacher"
        alt2="Graduate"
        size1={200}
        size2={200}
        isButton={true}
        href1="https://docs.google.com/forms/d/e/1FAIpQLSeRHmmoLXcjz-Wj759JYTl9cfw07gD14XAKlZK8jOlqSMB9sg/viewform"
        href2="https://docs.google.com/forms/d/e/1FAIpQLSd6Yb4nCl6icC1Iv6D0ggGlJxMUTBAlKMcY-_6l5B2m3_NFdw/viewform"
      />

      {/* Bottom Section */}
      <div className="relative w-full text-black p-4 sm:p-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 animate-[fade-in_1s_ease-out]">
          For the academic year of 2023-24, RMSF shall offer following
          Scholarships :
        </h1>

        {/* Subheading container */}
        <div className="w-full max-w-4xl space-y-4 sm:space-y-5 mx-4 sm:ml-20">
          {/* Item A */}
          <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-4 shadow-md backdrop-blur-md">
            <h2 className="text-base sm:text-lg">
              A. Scholarship for needy students for Engineering
            </h2>
            <p className="text-base sm:text-xl font-semibold ml-auto">15 Nos</p>
          </div>

          {/* Item B */}
          <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-4 shadow-md backdrop-blur-md ">
            <h2 className="text-base sm:text-lg">
              B. Scholarship for needy students from 9th to 12 th
            </h2>
            <p className="text-base sm:text-xl font-semibold ml-auto">
              100 Nos
            </p>
          </div>

          {/* Item C */}
          <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-lg p-4 shadow-md backdrop-blur-md">
            <h2 className="text-base sm:text-lg">
              C. School material Distribution
            </h2>
            <p className="text-base sm:text-xl font-semibold ml-auto">
              500 Nos
            </p>
          </div>
        </div>
      </div>

      <ProgramBottom text="Donate For Education" href="/donate" />
    </div>
  );
}
