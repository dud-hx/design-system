import React from "react";
import { SizeType } from "../../../types/types";

interface AvatarProps {
  /**
   * The content of the avatar
   */
  content: string;
  /**
   * The type of the content can be initials for i.e "DH" or an image for an url i.e "../assets/avatar.png"
   * if not specified by default will be "initial"
   */
  type?: "initial" | "image";
  /**
   * The size of the avatar we have three options "sm" | "md" | "lg". The default value is "sm"
   */
  size?: SizeType;

  /**
   * The mode of the avatar. There are two round and square. Default is round.
   */
  mode?: "round" | "square";
}
const Avatar = ({
  content,
  type = "initial",
  size = "sm",
  mode = "round",
}: AvatarProps) => {
  const sizeVariants = {
    sm: `w-8 h-8 ${mode === "square" ? "rounded" : "rounded-2xl"}`,
    md: `w-10 h-10 ${mode === "square" ? "rounded" : "rounded-3xl"}`,
    lg: `w-12 h-12 ${mode === "square" ? "rounded" : "rounded-3xl"}`,
  };

  const textVariants = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
  };
  return type === "initial" ? (
    <div
      className={`${sizeVariants[size]} justify-center items-center inline-flex bg-indigo-100`}
    >
      <div
        className={`text-center text-indigo-700 ${textVariants[size]} font-bold`}
      >
        {content}
      </div>
    </div>
  ) : (
    <div className={`${sizeVariants[size]} relative`}>
      <img
        alt="avatar"
        className={`${sizeVariants[size]} left-0 top-0 absolute rounded-full`}
        src={content}
      />
    </div>
  );
};

export default Avatar;
