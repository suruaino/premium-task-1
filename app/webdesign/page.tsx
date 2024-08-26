import WebDesign from "@/components/web-design/WebDesign";
import LetsTalk from "@/components/Lets-talk/LetsTalk";

interface Product {
    title: string;
    // Add other properties as needed
}

const WebDesignPage = () => {
    let pr
    return(
        <>
            <WebDesign/>
            <LetsTalk />
        </>
    )
}
export default WebDesignPage;