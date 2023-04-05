import React from "react";

// import icons
import PhoneIcon from "../assets/img/phone.svg";

const Program = () => {
  return (
    <div>
      {/* phone icon and phone number */}
      <div className="flex lg:gap-x-[10px] items-baseline justify-end">
        <img
          className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]"
          src={PhoneIcon}
          alt="Phone Icon"
        />
        <div className="lg:text-[23px] text-blue font-extrabold">
          + 55 21 99999-9999
        </div>
      </div>
      {/* open hours */}
      <div className="text-sm">
        {/* show only in desktop mode */}
        <div className="hidden lg:flex">
          Funcionamento: Seg - Sab: 10am - 6pm
        </div>
        {/* show only in mobile mode */}
        <div className="lg:hidden text-right">Seg - Sab: 10am - 6pm</div>
      </div>
    </div>
  );
};

export default Program;
