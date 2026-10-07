import Image from "next/image";
import NavLinks from "./NavLinks";
const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",
        {
            dateStyle: "full",
        });
    return (
        <header className="border-b border-neutral-200 bg-white">
            <div className="relative mx-auto max-w-7xl px-4 py-4 flex flex-col items-center justify-center gap-1">
                <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                    <Image 
                        src ="/logo.webp"
                        alt="Bangla News 24"
                        height={40} width={40}
                        priority
                    />
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-2xl font-bold text-red-700">
                            Bangla News 24
                        </span>
                        <span className="text-xs test-neutral-500">{date}</span>
                    </div>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
                    <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">সাইন ইন</button>
                    <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">
                        সাইন আপ
                    </button>
                </div>
            </div>
            <NavLinks/>
        </header>
    );
};
export default Header;