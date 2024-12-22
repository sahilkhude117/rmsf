import { AmountPreset } from "@/components/donation/AmountPreset";
import { DonationBar } from "@/components/donation/DonationBar";
import { ToggleButton } from "@/components/donation/ToggleButton";
import { DropdownItem } from "@/components/donation/DropdownItem";
import { Comment } from "@/components/donation/Comment";
import { DonationButton } from "@/components/donation/DonationButton";

export default function(){
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
                <option value="Education" >Education</option>
                <option value="Health">Health</option>
                <option value="Cooperation">Cooperation</option>
            </DropdownItem>
            <Comment/>
            <DonationButton hrefNext="/donate/user-information" title="Next" isLast={false}/>
        </DonationBar>
    </div>
}