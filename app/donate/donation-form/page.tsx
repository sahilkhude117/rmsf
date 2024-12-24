'use client'
import { AmountPreset } from "@/components/donation/AmountPreset";
import { DonationBar } from "@/components/donation/DonationBar";
import { ToggleButton } from "@/components/donation/ToggleButton";
import { DropdownItem } from "@/components/donation/DropdownItem";
import { Comment } from "@/components/donation/Comment";
import { DonationButton } from "@/components/donation/DonationButton";
import { useRouter } from "next/navigation";

export default function(){
    const router = useRouter();
    return <div>
        <DonationBar 
            title="Choose Amount"
            currentPage={1}
            hrefNext="/donate/user-information"
            hrefPrev="/donate/donation-form"
        >
            <ToggleButton />
            <AmountPreset/>
            <DropdownItem title="Campaign" type="campaign" >
                <option value="education" >Education</option>
                <option value="health">Health</option>
                <option value="cooperation">Cooperation</option>
            </DropdownItem>
            <Comment/>
            <DonationButton onClick={() => {
                router.push("/donate/user-information");
            }} title="Next" isLast={false}/>
        </DonationBar>
    </div>
}