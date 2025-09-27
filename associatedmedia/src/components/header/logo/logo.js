import Image from "next/image";
import Link from "next/link";
export default function Logo()
{
    return (
        <>
        <Link className="cs_site_branding logo-dark" href="index.html">
                            <Image src="/assets/img/logo.svg" alt="Logo" width={94} height={34}/>
                        </Link>
                        <Link className="cs_site_branding logo-white" href="index.html">
                            <Image src="/assets/img/Logo_white.png" alt="Logo"  width={94} height={34}/>
                        </Link>
                        </>
    )
}