import Link from "next/link";

const StyledLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-2 border-b-2 self-end justify-end items-end sm:justify-start sm:self-auto"
    >
      {label}
    </Link>
  );
};

export default StyledLink;
