import { Button } from '@/components/Button';
import { ProgramBottom } from '@/components/ProgramBottom';
import { ProgramParagraph } from '@/components/ProgramParagraph';
import ProgramTitle from '@/components/ProgramTitle';
import ThreeIconScroll from '@/components/ThreeIconScroll';
import { WhatWeDo } from '@/components/WhatWeDo';

export default function () {
  return (
    <div className="mt-10 mb-10">
      <ProgramTitle src="/images/white-bg.png" alt="Health" title="HEALTH" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20">
        <ThreeIconScroll
          src1="/images/animated/health/hypoallergenic.gif"
          src2="/images/animated/health/medicine.gif"
          src3="/images/animated/health/healthcare.gif"
          alt1="hypoallergic"
          alt2="medicine"
          alt3="healthcare"
          size={200}
        />
        <ProgramParagraph
          title="WHY"
          content="The COVID-19 pandemic brought the healthcare sector into sharp focus, emphasizing its importance in ensuring well-being. Despite various government schemes aimed at supporting healthcare needs, critical and life-threatening illnesses often require additional resources that many families cannot afford. This financial strain can make the difference between life and death, leaving loved ones in despair. The rising costs of healthcare have disproportionately affected rural areas, where access to quality medical care is already limited. Addressing this gap is essential to ensure that everyone, regardless of economic status, can access timely and adequate medical treatment during their most vulnerable moments.."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ProgramParagraph content="In rural communities, healthcare remains a luxury rather than a right. Many families are forced to forego essential treatments due to prohibitive costs, leading to preventable loss of life. Critical illnesses often push families into financial ruin, creating a cycle of poverty that is difficult to escape. By providing support, we can address this inequality and offer hope to those in need. Addressing healthcare challenges involves not just immediate financial aid but also creating sustainable systems that make quality healthcare accessible to all, bridging the gap between the privileged and the underprivileged in their hour of need." />
        <ThreeIconScroll
          src1="/images/animated/health/hypoallergenic.gif"
          src2="/images/animated/health/medicine.gif"
          src3="/images/animated/health/healthcare.gif"
          alt1="hypoallergic"
          alt2="medicine"
          alt3="healthcare"
          size={200}
        />
      </div>

      <WhatWeDo
        title="OUR APPROACH"
        content="RMSF supports organizations aiding patients with life-threatening conditions, connects donors with genuine causes, and envisions providing diagnostic and quality healthcare services at subsidized rates for the underprivileged"
        IconTitle1="Nutrition to Children suffering from AIDS:"
        IconTitle2="Support to those who are fighting with critical ill-nesses:"
        IconContent1="Already donated Rs 300000/- to Hope foundation, Gadhinglaj which works for medicines and nutrition needs of Children suffering from AIDS"
        IconContent2="RMSF has humble intent to support at least 5 lifeâ€™s, fighting with critical ill-nesses"
        src1="/images/animated/health/health-report.gif"
        src2="/images/animated/health/heartbeat.gif"
        alt1="health-report"
        alt2="heartbeat"
        size1={200}
        size2={200}
        isButton={false}
      />

      <ProgramBottom text="Donate For Health" href="/donate" />
    </div>
  );
}
