export default function FooterLogo() {
  return (
    <div className="grid grid-cols-3">
      <div className="footerLinkContainer">
        <h3 className="font-semibold">Use cases</h3>
        <div className="footerLink">
          <a href="" target="_blank">
            UI design
          </a>
          <a href="" target="_blank">
            UX design
          </a>
        </div>
      </div>
      <div className="footerLinkContainer">
        <h3 className="font-semibold">Explore</h3>
        <div className="footerLink">
          <a href="" target="_blank">
            Design
          </a>
          <a href="" target="_blank">
            Prototyping
          </a>
        </div>
      </div>
      <div className="footerLinkContainer">
        <h3 className="font-semibold">Resources</h3>
        <div className="footerLink">
          <a href="" target="_blank">
            Blog
          </a>
          <a href="" target="_blank">
            Best practices
          </a>
        </div>
      </div>
    </div>
  );
}
