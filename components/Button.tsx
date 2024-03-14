import Link from "next/link";

function Button({
  link,
  label,
  type,
}: {
  link: string;
  label: string;
  type?: string;
}) {
  const style =
    type === "primary"
      ? "bg-violet-500 border-violet-500 text-black hover:bg-violet-400 hover:border-violet-400"
      : "bg-black border-violet-500 hover:bg-violet-950 ";

  return (
    <Link
      className={`transition-colors border-2 rounded-full px-5 py-3 lg:px-10 lg:py-4 ${style}`}
      href={link}
    >
      {label}
    </Link>
  );
}

export default Button;
