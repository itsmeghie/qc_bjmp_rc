import { FiFileText } from "react-icons/fi"
import { IconType } from "react-icons"
import { GoDotFill } from "react-icons/go"
import { NavLink } from "react-router-dom"

interface IconProps {
    icon: IconType;
    title: string;
}

export const Header = ({ title }: { title: string, }) => {
    return (
        <div>
            <div className="flex items-center">
                <FiFileText className="text-gray-600" />
                <h1 className="font-bold text-lg ml-4">{title}</h1>
            </div>
        </div>
    )
}

export const Title = ({ title, icon: Icon }: IconProps) => {
    return (
        <div>
            <div className="flex items-center">
                <Icon className="text-gray-600" />
                <h1 className="font-bold text-lg ml-4">{title}</h1>
            </div>
        </div>
    )
}

export const GodotLink = ({ link, title, openModalClick }: { link: string, title: string, openModalClick?: () => void }) => {
    const isDisabled = !link;

    return (
        <div onClick={openModalClick}>
            <div className={`flex gap-2 p-1.5 ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}>
                <div className="text-[#52688D] bg-[#BFC8D7] text-xs rounded-sm p-1.5 h-fit">
                    <GoDotFill />
                </div>
                {isDisabled ? (
                    <p className="text-base font-medium cursor-not-allowed">{title}</p>
                ) : (
                    <NavLink to={link}>
                        <p className="text-base font-medium">{title}</p>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export const GoDotModal = ({title, openModalClick}: {title: string, openModalClick?: () => void }) => {
    return (
        <div onClick={openModalClick}>
            <div className="flex gap-2 p-1.5 hover:bg-gray-50">
                <div className="text-[#52688D] bg-[#BFC8D7] text-xs rounded-sm p-1.5 h-fit">
                    <GoDotFill />
                </div>
                <p className="text-base font-medium">{title}</p>
            </div>
            
        </div>
    )
}
