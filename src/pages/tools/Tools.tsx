// import { Header } from "../assets/components/link"

// const Tools = () => {
//     return (
//         <div>
//             <div className="border text-gray-700 border-gray-200 p-5 w-96 shadow-sm hover:shadow-md rounded-md">
//                 <Header title="Tools"/>
//             </div>
//         </div>
//     )
// }

// export default Tools

import { Header } from "../assets/components/link";

const Tools = () => {
    const isDisabled = true;

    return (
        <div>
            <div className={`border text-gray-700 border-gray-200 p-5 w-96 shadow-sm ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'} rounded-md`}>
                <Header title="Tools" />
                {isDisabled && (
                    <p className="mt-2 text-sm text-gray-500">This section is disabled.</p>
                )}
            </div>
        </div>
    );
}

export default Tools;