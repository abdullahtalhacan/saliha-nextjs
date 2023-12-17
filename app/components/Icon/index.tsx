import React from "react";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Tiktok } from "./icons/Tiktok";
import { Youtube } from "./icons/Youtube";
import { ArabicFlag } from "./icons/ArabicFlag";
import { USAFlag } from "./icons/USAFlag";
import { GeorgianFlag } from "./icons/GeorgianFlag";
import { TurkishFlag } from "./icons/TurkishFlag";
import { ChevronDown } from "./icons/ChevronDown";
import { Star } from "./icons/Star";
import { TripAdvice } from "./icons/TripAdvice";
import { Google } from "./icons/Google";
import { Phone } from "./icons/Phone";
import { Whatsapp } from "./icons/Whatsapp";
import { Bolt } from "./icons/Bolt";
import { Glovo } from "./icons/Glovo";
import { Wolt } from "./icons/Wolt";
import { ArrowSmallRight } from "./icons/ArrowSmallRight";
import { Info } from "./icons/Info"
import { Warning } from "./icons/Warning";
import { Error } from "./icons/Error";
import { Success } from "./icons/Success";

type IconName =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "google"
  | "whatsapp"
  | "bolt"
  | "glovo"
  | "wolt"
  | "arabicFlag"
  | "usaFlag"
  | "georgianFlag"
  | "turkishFlag"
  | "chevronDown"
  | "star"
  | "tripAdvice"
  | "phone"
  | "info"
  | "warning"
  | "error"
  | "success"
  | "arrowSmallRight" | string;

type IconProps = {
  name: IconName | string;
} & React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const icons: Record<IconName, JSX.Element> = {
    facebook: <Facebook {...rest} />,
    instagram: <Instagram {...rest} />,
    tiktok: <Tiktok {...rest} />,
    youtube: <Youtube {...rest} />,
    google: <Google {...rest} />,
    whatsapp: <Whatsapp {...rest} />,
    bolt: <Bolt {...rest} />,
    glovo: <Glovo {...rest} />,
    wolt: <Wolt {...rest} />,
    arabicFlag: <ArabicFlag {...rest} />,
    usaFlag: <USAFlag {...rest} />,
    georgianFlag: <GeorgianFlag {...rest} />,
    turkishFlag: <TurkishFlag {...rest} />,
    chevronDown: <ChevronDown {...rest} />,
    star: <Star {...rest} />,
    tripAdvice: <TripAdvice {...rest} />,
    phone: <Phone {...rest} />,
    arrowSmallRight: <ArrowSmallRight {...rest} />,
    info : <Info {...rest} />,
    warning: <Warning {...rest} />,
    error: <Error {...rest} />,
    success: <Success {...rest} />
  };

  return icons[name];
};

export default Icon;
