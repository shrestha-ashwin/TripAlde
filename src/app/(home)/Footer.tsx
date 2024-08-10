import FooterLogo from "./FooterLogo";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="h-32">
      <div className="text-black w-100 border-[0.1px] "></div>
      <div className=" grid footerGrid gap-10 px-5 py-4 box-border items-start content-center h-full">
        <FooterLogo />
        <FooterLink />
      </div>
    </footer>
  );
}
