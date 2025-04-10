

const HomeHeader = ({pTitle,header,}) => {
    return (
        <div className='flex flex-col gap-6 justify-center items-center py-10 '>
            <div>
                <p className='text-[#D99904] text-sm text-center'>---{pTitle}---</p>
            </div>
            <div className='border-t-2 border-b-2 border-gray-500'>
                <h2 className='text-black text-xl font-semibold text-center py-2 px-6'>{header}</h2>
            </div>
        </div>
    );
};

export default HomeHeader;