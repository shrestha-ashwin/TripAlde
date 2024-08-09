import FooterLogo from "./FooterLogo";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="h-10 grid footerGrid gap-10 px-5 box-border items-start">
      <FooterLogo />
      <FooterLink />
    </footer>
  );
}
