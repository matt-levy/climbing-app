import Image from "next/image";

type AvatarProps = {
  name: string;
  src?: string;
  initials?: string;
  size?: number;
  className?: string;
  fallbackClassName?: string;
};

function getInitials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

export default function Avatar({
  name,
  src,
  initials,
  size = 40,
  className = "",
  fallbackClassName = "bg-orange-100 text-orange-800",
}: AvatarProps) {
  return (
    <span
      role="img"
      aria-label={`${name}'s avatar`}
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-bold ${fallbackClassName} ${className}`}
      style={{ width: size, height: size }}
    >
      <span aria-hidden="true">{initials ?? getInitials(name)}</span>
      {src ? <Image src={src} alt="" fill sizes={`${size}px`} unoptimized className="object-cover" /> : null}
    </span>
  );
}
