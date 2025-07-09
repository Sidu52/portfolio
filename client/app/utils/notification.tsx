import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";
import { NotificationType } from "@/app/utils/enum/notification_enum";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface NotificationProps {
  navigationLink: string;
  title: string;
  description?: string;
  type: string;
  closeToast: () => void;
}

const NotificationPopUp: React.FC<NotificationProps> = ({
  navigationLink,
  title,
  description,
  type,
  closeToast,
}) => {
  const router = useRouter();

  return (
    <div
      className={`flex items-center w-auto mt-4 justify-between p-4 rounded-lg shadow-md cursor-pointer 
      ${
        type === NotificationType.NOTIFICATION_NORMAL
          ? "bg-[#0860C3]"
          : type === NotificationType.NOTIFICATION_SUCCESS
          ? "bg-[#031e38]"
          : "bg-[#d11a1a]"
      }`}
    >
      <div
        className="flex items-center"
        onClick={() => navigationLink && router.push(navigationLink)}
      >
        {type === NotificationType.NOTIFICATION_SUCCESS ? (
          <span className=" rounded-full bg-green-500 p-2 text-white mr-3">
            <MdDone />
          </span>
        ) : type === NotificationType.NOTIFICATION_FAILED ? (
          <span className=" rounded-full bg-red-500 p-2 text-white mr-3">
            <RxCross2 />
          </span>
        ) : (
          ""
        )}

        <div className="text-[13px] font-normal text-white">
          <h1 className="text-sm font-[600] leading-6 text-white">
            {title.replace(/_/g, " ")}
          </h1>
          {description && (
            <p className="text-xs font-[300] leading-5 text-[#fdfdfd]">
              {description.replace(/_/g, " ")}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={closeToast} // Use closeToast here
        className="text-white ml-2"
      >
        <IoMdCloseCircle className="text-2xl" />
      </button>
    </div>
  );
};

export default NotificationPopUp;
