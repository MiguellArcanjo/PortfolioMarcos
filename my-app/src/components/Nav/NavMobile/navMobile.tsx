import Image from "next/image";
import "./navMobile.css"

export function NavMobile() {
    return (
        <nav className="nav">
            <Image src="/logoNova.svg" alt="logo" width={80} height={80} className="logo" />
            <div className="navLinks">
                <a href="/" className="link">
                    <Image src="/iconeHome.svg" alt="Icone de home" width={28} height={28}/> 
                </a>
                <a href="/myProjects" className="link">
                    <Image src="/iconeProjeto.svg" alt="Icone de home" width={28} height={28}/>
                </a>
                <a href="/about" className="link">
                    <Image src="/iconeSobre.svg" alt="Icone de home" width={28} height={28}/>
                </a>
                <a href="/contact" className="link">
                    <Image src="/iconeContato.svg" alt="Icone de home" width={28} height={28}/>
                </a>
            </div>
        </nav>
    );
}
