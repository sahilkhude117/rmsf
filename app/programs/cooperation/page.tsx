import { ProgramBottom } from "@/components/ProgramBottom";
import { ProgramParagraph } from "@/components/ProgramParagraph";
import ProgramTitle from "@/components/ProgramTitle";
import ThreeIconScroll from "@/components/ThreeIconScroll";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function(){
    return <div className="mt-10 mb-10">
            <ProgramTitle src="/images/white-bg.png" alt="Cooperation" title="COOPERATION"/>
        <div className="grid grid-cols-2 gap-5 pt-20">
            <ThreeIconScroll
                    src1="/images/animated/cooperation/free.gif"
                    src2="/images/animated/cooperation/mentorship.gif"
                    src3="/images/animated/cooperation/poverty.gif"
                    alt1="free"
                    alt2="mentor"
                    alt3="poverty"
                    size={200}
                />
            <ProgramParagraph
                title="WHY"
                content="Hunger remains a harsh reality for countless individuals who struggle daily to access basic food. Despite numerous government and charitable initiatives, a significant portion of the population continues to face food insecurity, particularly in rural and tribal areas. Addressing this issue is not merely about providing meals but ensuring dignity and a sense of security to the less fortunate. The Ramanlal Maniyar Smruti Foundation recognizes that eliminating hunger is fundamental to uplifting lives and fostering a healthier, more equitable society. By focusing on immediate and sustainable solutions, RMSF aims to create a lasting impact on hunger eradication.."
            />
        </div>
        <div className="grid grid-cols-2 gap-5">
            <ProgramParagraph
                content="The issue of hunger is not confined to remote regions but exists even in urban areas where poverty and unemployment are rampant. Hunger robs individuals of the ability to work, study, and live with dignity. It perpetuates a cycle of poverty that affects entire communities. RMSF understands that supporting vulnerable groups with basic necessities like groceries is the first step toward breaking this cycle. By extending aid to organizations already working in rural and tribal regions, RMSF leverages their experience to maximize its impact and ensure that resources reach those who need them the most."
            />
            <ThreeIconScroll
                    src1="/images/animated/cooperation/free.gif"
                    src2="/images/animated/cooperation/mentorship.gif"
                    src3="/images/animated/cooperation/poverty.gif"
                    alt1="free"
                    alt2="mentor"
                    alt3="poverty"
                    size={200}
            />
        </div>
        <WhatWeDo
            title="OUR APPROACH"
            content={`RMSF supports very poor individuals with groceries and works toward establishing "Annachatra" in rural hospitals and religious centers to ensure that no one goes to bed hungry.`}
            IconTitle1="Direct Grocery Support:"
            IconTitle2="Collaborating with Organizations:"
            IconContent1="Providing groceries to the poorest families to meet their basic needs."
            IconContent2="Partnering with local groups to expand reach in rural and tribal areas."
            src1="/images/animated/cooperation/charity.gif"
            src2="/images/animated/cooperation/humanitarian.gif"
            alt1="charity"
            alt2="global"
            size1={200}
            size2={200}
            isButton={false}
        />
        
        <ProgramBottom text="Donate For Cooperation" href="/donate"/>
    </div>
}