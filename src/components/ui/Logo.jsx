import React from "react";
import LogoLarge from "../../assets/images/logo-large.svg";
import LogoSmall from "../../assets/images/logo-small.svg";

export default function Logo() {
  return (
    <>
      <img src={LogoLarge} alt="Logo Large" className="hidden sm:block" />
      <img src={LogoSmall} alt="Logo Small" className="sm:hidden" />
    </>
  );
}
