import Link from "next/link";
import MenuItem from "./MenuItem";


export default function MenuItens(){
    return(
        <div className="flex items-center justify-between gap-5">
            <Link href="/Ciclos">
                <MenuItem>CICLOS</MenuItem>
            </Link>
            <Link href="/Roadmap">
                <MenuItem>ROAD MAP</MenuItem>
            </Link>
            <Link href="/about-us">
                <MenuItem>QUEM SOMOS</MenuItem>
            </Link>
            
        </div>
    )
}