import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h15l-1.4 9.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7Z" />
      <path d="M8 7V6a4 4 0 0 1 8 0v1" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function ArmchairIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M4 12a2 2 0 0 1 4 0v2h8v-2a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3Z" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </svg>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="9" width="18" height="6" rx="1" />
      <path d="M7 9v3M11 9v3M15 9v3M19 9v3" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14" />
      <path d="M5 19c2-5 5-8 10-10" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 3h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LampIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6l1 6H8l1-6Z" />
      <path d="M12 9v4" />
      <path d="M8 17h8" />
      <path d="M10 21h4" />
    </svg>
  );
}

export function TableIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 9h18" />
      <path d="M4 9l1-4h14l1 4" />
      <path d="M5 9v10" />
      <path d="M19 9v10" />
    </svg>
  );
}

export function ShelfIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4h16" />
      <path d="M4 10h16" />
      <path d="M4 16h16" />
      <path d="M6 4v16" />
      <path d="M18 4v16" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 18.5 10 13" />
      <path d="M10 13c-1 0-2-1.5-2-3a4 4 0 0 1 8 0c0 1.5-1 3-2 3" />
      <path d="M12 13v5" />
    </svg>
  );
}
