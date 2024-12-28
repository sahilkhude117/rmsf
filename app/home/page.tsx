import { Carousel } from '@/components/Carousel';
import HorizontalScroll from '@/components/HorizontalScroll';
import { ImpactCard } from '@/components/ImpactCard';
import { Paragraph } from '@/components/Paragraph';
import { ProgramCard } from '@/components/ProgramCard';
import Link from 'next/link';
import Gallery from '@/components/Gallery';

export default function () {
  return (
    <div className="mt-20 space-y-10">
      {/* Carousel Image */}
      <Carousel />

      {/* Intro Content */}
      <div className="pt-20 pb-10 px-4 sm:px-8 lg;px-16">
        <Paragraph
          content={`The Ramanlal Maniyar Smruti Foundation (RMS Foundation), based in Gadhinglaj, continues the legacy of Late Shri Ramanlal Maniyar by supporting education, healthcare, and providing food to the needy. We offer scholarships to deserving students, help pay medical bills for those in need, and ensure food reaches those facing hunger.`}
        />
        <Paragraph
          content={`Founded to honor Ramanbhai’s vision of empowering the underprivileged, RMS Foundation works to create a positive impact in the community. Our efforts complement local government initiatives, making a real difference in the lives of many.`}
        />
        <Link
          href={'/readmore'}
          className="flex justify-center text-xl max-w-4xl text-orange-700 items-center text-center mx-auto"
        >
          {'read more >'}
        </Link>
      </div>

      {/* Impact Box */}
      <div className="bg-gray-100 p-10 sm:px-6 lg:px-16">
        <div className="flex justify-center items-center">
          <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-4xl w-full">
            OUR IMAPCT
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-clos-2 lg:grid-cols-3 gap-6">
          <ImpactCard
            Number="2000+"
            Unit="FAMILIES"
            Content="supported with groceries and food"
          />
          <ImpactCard
            Number="30+"
            Unit="LACS"
            Content="invested in student's education"
          />
          <ImpactCard
            Number="100+"
            Unit="INDIVIDUALS"
            Content="supported with critical-illness"
          />
        </div>
      </div>

      <div className="pt-10 pb-0 px-4 sm:px-8 lg:px-16">
        <div className="flex justify-center items-center">
          <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-4xl w-full">
            OUR PROGRAMS
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProgramCard
            href={'/programs/education'}
            src="https://th.bing.com/th/id/OIP.HpFOt6qVIIH8j3ku0Y-tIgHaEY?w=306&h=181&c=7&r=0&o="
            title="EDUCATION"
            content="Empowering the next generation through accessible quality education for lasting change."
          />
          <ProgramCard
            href={'/programs/health'}
            src="https://th.bing.com/th/id/OIP.bduRV7-fBeiCB4zaULJZ1AAAAA?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            title="HEALTH"
            content="Providing affordable healthcare support to ensure a healthier and equitable society."
          />
          <ProgramCard
            href={'/programs/cooperation'}
            src="https://th.bing.com/th/id/OIP.ev6uEy8MPoYrgPPxMzSExQHaFh?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            title="COOPERATION"
            content="Building bridges between resources and needs to foster collective growth and support."
          />
        </div>
      </div>

      <HorizontalScroll />
      <Gallery />
    </div>
  );
}
