
type ReviewPropsType ={
    user: string;
    content: string;
    designation?: string;
    userimg?: string;
}

const Review = ({user,content,designation,userimg}:ReviewPropsType) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-md border-[1px] px-5 sm:p-7">
    <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
      <img
        src={userimg}        
        alt="tania andrew"
        className="relative inline-block h-[50px] sm:h-[58px] sm:w-[58px] !rounded-full object-cover object-center"
      />
      <div className="flex w-full flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h5 className="block font-sans sm:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {user}
          </h5>
          
        </div>
        <p className="block font-sans text-sm sm:text-base font-light leading-relaxed text-blue-gray-900 antialiased">
          {designation}
        </p>
      </div>
    </div>
    <div className="mb-6 p-0">
      <p className="block font-sans text-sm sm:text-base font-light leading-relaxed text-inherit antialiased">
        {content}
      </p>
    </div>
    </div>
  )
}

export default Review