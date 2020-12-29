import Link from "next/link";

export default function Header({ children }) {
  return (
    <>
      <header className="header">
        <Link href="/">
          <a>Go to Home</a>
        </Link>
        <Link href="/NewTask">
          <a>Create New Task</a>
        </Link>
      </header>
      {children}
    </>
  );
}
