import { GodotLink } from "../assets/components/link"

const Threat = () => {
    return (
        <div className="flex flex-wrap gap-5 text-gray-700">
            <div className="w-96 border shadow-sm hover:shadow-md border-gray-200 p-5 rounded-md">
                <GodotLink link="" title="Watchlist"/>
            </div>
            <div className="w-96 border shadow-sm hover:shadow-md border-gray-200 p-5 rounded-md">
                <GodotLink link="" title="Threat Profile"/>
            </div>
        </div>
    )
}

export default Threat
