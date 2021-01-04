import Link from "next/link";

interface Props {
  children: React.ReactNode;
}
export default function Header({ children }: Props) {
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
