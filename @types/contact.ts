import { IconType } from "react-icons";

export interface Contact {
  id: string;
  link: string;
  icon: IconType;
  color: string;
  text: string;
  text2?: string;
  text3?: string;
}
