import { useState } from "react";

import OutsideClickHandler from "react-outside-click-handler";

import Link from "next/link";
// import { logOutAction } from "@/actions/logOutAction";

import defaultProfilePicture from "@/public/profile-pictures/profile.png";

import { AdminIcon } from "./icons/AdminIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { LogoutIcon } from "./icons/LogoutIcon";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import Image from "next/image";

const Avatar = ({
  userRole,
  onClick,
  profilePath,
}: {
  userRole: string | boolean;
  onClick: () => void;
  profilePath: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={handleClickOutside}>
        <div className="relative hidden md:inline-block">
          <button
            type="button"
            className="flex gap-2 items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              className="object-cover w-10 h-10 rounded-full ring-1 ring-gray-200 hover:ring-primary transition-all duration-300"
              src={profilePath || defaultProfilePicture}
              alt="avatar"
              width={40}
              height={40}
              priority
            />
            <span
              className={`duration-100 transform ${
                isOpen ? "-scale-y-100" : ""
              }`}
            >
              <ChevronDownIcon />
            </span>
          </button>
          {isOpen && (
            <div
              className="absolute right-0 top-12 z-10 w-48 bg-white shadow-md rounded-md py-2"
              onClick={handleClickOutside}
            >
              {userRole && userRole != "USER" && (
                <Link
                  href="/admin"
                  className="block px-4 py-2 hover:bg-primary2 hover:text-primary"
                  onClick={handleClickOutside}
                >
                  <span className="flex items-center gap-2">
                    <AdminIcon />
                    Admin
                  </span>
                </Link>
              )}
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-primary"
                onClick={handleClickOutside}
              >
                <span className="flex items-center gap-2">
                  <ProfileIcon />
                  View profile
                </span>
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-primary"
                onClick={handleClickOutside}
              >
                <span className="flex items-center gap-2">
                  <SettingsIcon />
                  Settings
                </span>
              </Link>
              <div
                className="block px-4 py-2 hover:bg-red-400 hover:text-primary cursor-pointer"
                onClick={() => {
                  // logOutAction();
                }}
              >
                <span className="flex items-center gap-2">
                  <LogoutIcon />
                  Log out
                </span>
              </div>
            </div>
          )}
        </div>
      </OutsideClickHandler>

      <div className="inline-block md:hidden">
        {userRole && userRole != "USER" && (
          <Link
            href="/admin"
            className="text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-teal-700 md:p-0"
            onClick={onClick}
          >
            <span className="flex items-center gap-2">
              <AdminIcon />
              Admin
            </span>
          </Link>
        )}
        <Link
          href="/profile"
          className={`${
            userRole != "USER" ? "py-2 px-3" : ""
          } text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-teal-700 md:p-0`}
          onClick={onClick}
        >
          <span className="flex items-center gap-2">
            <ProfileIcon />
            View profile
          </span>
        </Link>
        <Link
          href="/#settings"
          className="py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-teal-700 md:p-0"
          onClick={onClick}
        >
          <span className="flex items-center gap-2">
            <SettingsIcon />
            Settings
          </span>
        </Link>
        <div
          className="text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-red-500 cursor-pointer"
          onClick={() => {
            onClick();
            // logOutAction();
          }}
        >
          <span className="flex items-center gap-2">
            <LogoutIcon />
            Log out
          </span>
        </div>
      </div>
    </>
  );
};

export default Avatar;
