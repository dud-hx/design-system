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
declare const Avatar: ({ content, type, size, mode, }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
