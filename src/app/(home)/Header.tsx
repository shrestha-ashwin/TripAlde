function Header() {
  return (
    <header className="grid grid-cols-2 pt-6 pb-2 pr-4 mb-2">
      <div>TA</div>
      <div className="flex gap-2 justify-end">
        <button className="btn">Sign in</button>
        <button className="btn ">Create Account</button>
      </div>
    </header>
  );
}

export default Header;
