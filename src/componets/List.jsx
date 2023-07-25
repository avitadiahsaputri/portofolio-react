export default function List({...props}){
    return (
      <>
        {/* <button
          className={`button ${variant && `button-${variant}`} ${className}`}
          {...props}
        /> */}

        <div className={"flex text-white bg-gray-500 items-center border rounded-xl px-20 h-20"}{...props}></div>
      </>
    );
}