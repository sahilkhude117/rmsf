import ProgramTitle from '@/components/ProgramTitle';

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 mb-10">
      <ProgramTitle src="/images/white-bg.png" alt="Donate" title="DONATE" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>{children}</div>
        <div className="max-w-4xl w-full mt-40">
          <div className="font-extrabold text-4xl sm:text-5xl m-5">
            <div>HOW CAN YOU</div>
            <div>HELP</div>
          </div>
          <div className="font-semibold text-base sm:text-lg m-5">
            <div className="mb-6 sm:mb-10">
              In times of need, even the smallest act of kindness can create
              ripples of hope. Every rupee you donate helps us empower lives,
              support education, and provide healthcare to those in dire
              situations. Your generosity fuels our mission to build a brighter
              and more equitable future.
            </div>
            <div className="mb-6 sm:mb-10">
              RMSF is committed to ensuring every contribution goes directly
              towards our charitable initiatives. From funding critical
              healthcare to supporting underprivileged students with education
              and basic necessities, your donations make a tangible impact.
              Together, we can uplift lives and bring about lasting change.
            </div>
            <div className="mb-6 sm:mb-10">
              Our vision is a world where no one is left behind. Join us in
              spreading compassion and making a difference!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
