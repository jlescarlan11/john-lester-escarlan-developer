import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-lg lg:text-xl font-bold tracking-wider">
        LESTER
      </span>
    </Link>
  );
};

export default Logo;
