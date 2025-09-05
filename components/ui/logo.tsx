import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 lg:gap-4">
      <span className="text-sm lg:text-lg font-light tracking-wider">
        LESTER
      </span>
      <div className="w-px h-4 bg-foreground/40" />
      <span className="text-sm uppercase tracking-widest text-foreground/40 font-light">
        Portfolio
      </span>
    </Link>
  );
};

export default Logo;
