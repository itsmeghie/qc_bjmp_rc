import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiHome, HiOutlineUsers, HiWrenchScrewdriver } from "react-icons/hi2";
import LinkContainer from "./LinkContainer";
import { FaRegFileAlt } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";
import { FaWrench } from "react-icons/fa6";
import { IoMapOutline } from "react-icons/io5";
import { GoGitMerge } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { CiFileOn } from "react-icons/ci";
import { LuFolderCog } from "react-icons/lu";
import { MdOutlinePersonSearch } from "react-icons/md";
import { PiWarningOctagon, PiWarningLight, PiUserCircleLight } from "react-icons/pi";

interface NavbarProps {
    isSidebarCollapsed: boolean;
}

const Navbar = ({ isSidebarCollapsed }: NavbarProps) => {
    const links = [
        { to: "home", icon: HiHome, name: "Home" },
        { to: "dashboard", icon: RxDashboard, name: "Dashboard" },
        { to: "map", icon: IoMapOutline, name: "Map" },
        { to: "personnels", icon: HiOutlineUsers, name: "Personnels" },
        { to: "visitors", icon: GrGroup, name: "Visitors" },
        { to: "pdls", icon: CiFileOn, name: "PDLs" },
        { to: "assets", icon: LuFolderCog, name: "Assets" },
        { to: "screening", icon: MdOutlinePersonSearch, name: "Screening" },
        { to: "", icon: PiWarningLight, name: "Threats" },//threats
        { to: "incidents", icon: PiWarningOctagon, name: "Incidents" },
        { to: "", icon: FaRegFileAlt, name: "Reports" },//reports
        { to: "", icon: FaWrench, name: "Supports" },//supports
        { to: "", icon: VscSettings, name: "Settings" },//settings
        { to: "maintenance", icon: HiWrenchScrewdriver, name: "Maintenance" },
        { to: "", icon: GoGitMerge, name: "Integrations" },//integrations
        { to: "", icon: LiaToolsSolid, name: "Tools" },//tools
        { to: "users", icon: PiUserCircleLight, name: "Users" },
    ];

    return (
        <>
            <ul className="flex flex-col">
                <p className="text-black ml-5 text-base font-bold">MODULES</p>
                {links.slice(0, 12).map(({ to, icon, name }) => (
                    <li key={to}>
                        {to ? (
                            <NavLink to={to}>
                                <LinkContainer icon={icon} isSidebarCollapsed={isSidebarCollapsed} linkName={name} />
                            </NavLink>
                        ) : (
                            <span className="opacity-50 cursor-not-allowed">
                                <LinkContainer icon={icon} isSidebarCollapsed={isSidebarCollapsed} linkName={name} />
                            </span>
                        )}
                    </li>
                ))}
                <hr className="w-[85%] border-gray-400 mx-auto my-5" />
                <p className="text-black ml-5 text-base font-bold">ADMINISTRATION</p>
                {links.slice(12).map(({ to, icon, name }) => (
                    <li key={to}>
                        {to ? (
                            <NavLink to={to}>
                                <LinkContainer icon={icon} isSidebarCollapsed={isSidebarCollapsed} linkName={name} />
                            </NavLink>
                        ) : (
                            <span className="opacity-50 cursor-not-allowed">
                                <LinkContainer icon={icon} isSidebarCollapsed={isSidebarCollapsed} linkName={name} />
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Navbar;