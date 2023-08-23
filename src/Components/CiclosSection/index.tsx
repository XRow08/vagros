import Card1 from "../Card1/Card1";

export default function CiclosSection(){
    return(
        <div className="flex flex-col items-center gap-5 bg-white">
            <div className="flex gap-5">
                <Card1/>
                <Card1/>
                <Card1/>
                <Card1/>
            </div>
            <div className="flex gap-5">
                <Card1/>
                <Card1/>
                <Card1/>
                <Card1/>
            </div>
        </div>
    )
}