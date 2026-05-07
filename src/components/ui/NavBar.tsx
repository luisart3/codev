
import CodevLogo from "../../assets/Codev.svg";
import { MenuIcon, ArrowRightIcon } from "../icons/icons";


const links = [
    {"name": "Features", "href": "#features"}, 
    {"name": "Showcase", "href": "#showcase"},
    {"name": "App", "href": "#app"},
    {"name": "Languages", "href": "#languages"},
    {"name": "Community", "href": "#community"}]

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.06]">
            <div className="w-full md:max-w-7xl mx-auto flex items-center px-8 py-4 justify-between">

            <a href="#hero" className="flex items-center gap-2">
                <img src={CodevLogo} alt="Codev" className="w-10 h-10" />
                <span className="text-[#2A53F3] font-medium text-lg tracking-tight">Co<span className="text-[#0a0a0a]">dev</span></span>
            </a>

             <div className="hidden md:flex items-center gap-1">
                {
                    links.map((link) => {
                        return (
                            <a key={link.name} href={link.href} className="text-[13px] text-[#666] hover:text-[#0a0a0a] px-4 py-2 rounded-lg hover:bg-black/[0.04] transition-all">
                                {link.name}
                            </a>
                        )
                    })
                }
            </div>

            <div className="flex items-center gap-3">
                <button className="hidden md:flex items-center gap-2 bg-[#2A53F3] hover:bg-[#1a43e3] text-white text-[13px] font-medium px-4 py-2 rounded-full transition-colors">
                    Join waitlist
                    <ArrowRightIcon size={18} />
                </button>
                <button className="flex md:hidden flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-[10px] border border-black/10 hover:border-black/20 transition-colors">
                    <MenuIcon size={24} />
                </button>
            </div>
            </div>
        </nav>
    );
}