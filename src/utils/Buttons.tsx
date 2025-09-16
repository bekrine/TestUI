export const MainButton = ({ title }: { title: string }) => {
    return (
        <button className="flex items-center gap-[13px] bg-[#77CFBF] p-2 rounded-lg hover:bg-[#0b4e56] transition">
            <div>
                <img src="/images/allIsuesIconButton.svg" alt="" />
            </div>
            <div className="text-[#03373D] text-base font-medium ">

                <span>{title}</span>

            </div>
        </button>
    )
}
export const MainButtonNonBg = ({ title }: { title: string }) => {
    return (
        <button className="flex items-center gap-[13px]  p-2 rounded-lg border-2 border-[#8B9192]">
            <div>
                <img src="/images/allDetailsIcon.svg" alt="" />
            </div>
            <div className="text-[#03373D] text-base font-medium ">

                <span>{title}</span>

            </div>
        </button>
    )
}
export const AddButton = ({ title }: { title: string }) => {
    return (
        <button className="flex items-center gap-[13px]  p-2 rounded-lg  bg-[#03373D]">
            <div>
                <img src="/images/plusIocn.svg" alt="" />
            </div>
            <div className="text-white text-base font-medium ">

                <span>{title}</span>

            </div>
        </button>
    )
}
export const ExportButton = ({ title }: { title: string }) => {
    return (
        <button className="flex items-center gap-[13px]  p-2 rounded-lg border-2 border-[#8B9192]">
            <div className="text-[#03373D] text-base font-medium ">

                <span>{title}</span>

            </div>
            <div>
                <img src="/images/arrowDown.svg" alt="" />
            </div>
        </button>
    )

}


interface Button {
    iconUrl: string;
    title: string;
}
export const ButtonWithIconEndUnderlineText = ({ iconUrl, title }: Button) => {
    return (

        <div className="flex items-center gap-2">
            <div>
                <img src={iconUrl} alt="" />
            </div>
            <div>
                <span className="underline text-[#093B42] font-normal text-base capitalize ">{title}</span>
            </div>
        </div>
    )
}