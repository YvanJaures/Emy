import Verification from "@/components/organisms/VerificationForm";
import LoadCommunityRow from "@/Loading/LoadCommunityRow";
import LoadSponsorCard from "@/Loading/LoadSponsorCard";
import LoadTourRow from "@/Loading/LoadTourRow";

export default function Load(){
    return(
        <>
            <LoadSponsorCard/>
            <Verification/>
        </>
    )
}