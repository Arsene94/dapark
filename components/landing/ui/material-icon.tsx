import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type MaterialIconProps = ComponentPropsWithoutRef<"span"> & {
  dataIcon?: string;
  name: string;
};

type SvgIconProps = {
  children: ReactNode;
  className?: string;
};

function SvgIcon({ children, className }: SvgIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("inline-block size-[1em] shrink-0 align-middle", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  arrow_forward: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  add: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  call: (
    <>
      <path d="M6.5 4.5h2l1.2 3.3-1.7 1.7a14 14 0 0 0 6.5 6.5l1.7-1.7 3.3 1.2v2a1.5 1.5 0 0 1-1.6 1.5A15.9 15.9 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 4.5Z" />
    </>
  ),
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.2 2.2 4.8-4.8" />
    </>
  ),
  bolt: (
    <>
      <path d="M13.5 2.5 6.8 12h4.5l-.8 9.5 6.7-9.5h-4.5l.8-9.5Z" />
    </>
  ),
  explore: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z" />
    </>
  ),
  expand_more: (
    <>
      <path d="m6 9 6 6 6-6" />
    </>
  ),
  videocam: (
    <>
      <rect height="9" rx="1.5" width="11" x="4" y="8" />
      <path d="m15 11 5-3v9l-5-3" />
    </>
  ),
  favorite: (
    <>
      <path d="M12 20s-6.5-4.2-8.4-8.3C2.1 8.4 4.1 5 7.6 5c1.8 0 3.2.9 4.4 2.5C13.2 5.9 14.6 5 16.4 5c3.5 0 5.5 3.4 4 6.7C18.5 15.8 12 20 12 20Z" />
    </>
  ),
  hub: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="5.5" cy="7" r="1.6" />
      <circle cx="18.5" cy="7" r="1.6" />
      <circle cx="5.5" cy="17" r="1.6" />
      <circle cx="18.5" cy="17" r="1.6" />
      <path d="M10.3 10.8 6.8 8.3" />
      <path d="m13.7 10.8 3.5-2.5" />
      <path d="m10.3 13.2-3.5 2.5" />
      <path d="m13.7 13.2 3.5 2.5" />
    </>
  ),
  security: (
    <>
      <path d="m12 3 7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.7" />
    </>
  ),
  verified_user: (
    <>
      <path d="m12 3 7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.7" />
    </>
  ),
  airport_shuttle: (
    <>
      <path d="M4 8a2 2 0 0 1 2-2h8.5a3 3 0 0 1 2.4 1.2l2.1 2.8a3 3 0 0 1 .6 1.8V16a1 1 0 0 1-1 1h-1.5" />
      <path d="M4 17h1.5" />
      <path d="M4 11h15.5" />
      <path d="M7 17h8" />
      <circle cx="6.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </>
  ),
  payments: (
    <>
      <rect height="12" rx="2" width="18" x="3" y="6" />
      <path d="M3 10h18" />
      <path d="M7 14h3" />
      <circle cx="16.5" cy="14" r="1.5" />
    </>
  ),
  policy: (
    <>
      <path d="M12 3 6 5.5V11c0 4.5 2.7 7.7 6 9 3.3-1.3 6-4.5 6-9V5.5L12 3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.7" />
      <path d="M9 8.5h6" />
    </>
  ),
  diversity_3: (
    <>
      <circle cx="12" cy="8" r="2.5" />
      <circle cx="6.5" cy="10" r="2" />
      <circle cx="17.5" cy="10" r="2" />
      <path d="M8.5 18a3.5 3.5 0 0 1 7 0" />
      <path d="M3.5 18a3 3 0 0 1 4.5-2.6" />
      <path d="M20.5 18A3 3 0 0 0 16 15.4" />
    </>
  ),
  directions_car: (
    <>
      <path d="M5 15h14l-1.2-5a2 2 0 0 0-1.9-1.5H8.1A2 2 0 0 0 6.2 10L5 15Z" />
      <path d="M4 15v2a1 1 0 0 0 1 1h1" />
      <path d="M20 15v2a1 1 0 0 1-1 1h-1" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
    </>
  ),
  minor_crash: (
    <>
      <path d="M5 15h11l-1-4.2a2 2 0 0 0-1.9-1.5H8a2 2 0 0 0-1.9 1.5L5 15Z" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="14.5" cy="16.5" r="1.5" />
      <path d="M17.5 6.5h3" />
      <path d="M19 5v3" />
      <path d="m16.8 4.8 1.4 1.4" />
      <path d="m16.8 8.2 1.4-1.4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7.5h.01" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 5c2-1.7 4-.8 6 .1 2 .9 4 1.8 6 .1v8c-2 1.7-4 .8-6-.1-2-.9-4-1.8-6-.1" />
    </>
  ),
  location_on: (
    <>
      <path d="M12 20s6-4.5 6-10a6 6 0 1 0-12 0c0 5.5 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  local_parking: (
    <>
      <path d="M8 20V5.5h5.8a4 4 0 1 1 0 8H8" />
      <path d="M8 13.5h5" />
    </>
  ),
  mail: (
    <>
      <rect height="12" rx="2" width="18" x="3" y="6" />
      <path d="m4.5 8.5 7.5 5 7.5-5" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5l3 2" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 4.5h2l1.2 3.3-1.7 1.7a14 14 0 0 0 6.5 6.5l1.7-1.7 3.3 1.2v2a1.5 1.5 0 0 1-1.6 1.5A15.9 15.9 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 4.5Z" />
    </>
  ),
  public: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18" />
      <path d="M12 3a13.5 13.5 0 0 0 0 18" />
    </>
  ),
  support_agent: (
    <>
      <path d="M6 13V11a6 6 0 1 1 12 0v2" />
      <rect height="4" rx="1" width="3" x="4" y="12" />
      <rect height="4" rx="1" width="3" x="17" y="12" />
      <path d="M8 18a4 4 0 0 0 8 0" />
    </>
  ),
  thumb_up: (
    <>
      <path d="M10 10V6.5A2.5 2.5 0 0 1 12.5 4l.5 3 3.3.5a2 2 0 0 1 1.7 2.3l-.9 5.2a2.5 2.5 0 0 1-2.5 2H10" />
      <path d="M6 10h4v8H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 13V9.5" />
      <path d="m12 13 2.5 1.5" />
      <path d="M9 3h6" />
      <path d="m16.5 5 1.5-1.5" />
    </>
  ),
  lock: (
    <>
      <rect height="9" rx="2" width="12" x="6" y="11" />
      <path d="M8.5 11V8.5a3.5 3.5 0 1 1 7 0V11" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6.5 10.5V19h11v-8.5" />
      <path d="M10 19v-4.5h4V19" />
    </>
  ),
  social_leaderboard: (
    <>
      <rect height="14" rx="3" width="14" x="5" y="5" />
      <path d="M9 10.5h6" />
      <path d="M9 13.5h4" />
      <path d="M8.5 8.5h.01" />
    </>
  ),
  do_not_disturb_on: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </>
  ),
  loyalty: (
    <>
      <path d="M12 21 9.5 18.5H6.8A2.8 2.8 0 0 1 4 15.7V13l-2-2 2-2V6.3A2.8 2.8 0 0 1 6.8 3.5h2.7L12 1l2.5 2.5h2.7A2.8 2.8 0 0 1 20 6.3V9l2 2-2 2v2.7a2.8 2.8 0 0 1-2.8 2.8h-2.7L12 21Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.3" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5.5" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="18.5" r="2" />
      <path d="m7.8 11 8.3-4.2" />
      <path d="m7.8 13 8.3 4.2" />
    </>
  ),
  share_reviews: (
    <>
      <path d="M6 6.5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H11l-4.5 3v-3H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
      <path d="m9.5 11 1 2 2.2.2-1.7 1.4.6 2.1-1.9-1.1-1.9 1.1.6-2.1-1.7-1.4 2.2-.2 1-2Z" />
    </>
  ),
  visibility: (
    <>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  no_transfer: (
    <>
      <path d="M4 12h12.5a2.5 2.5 0 0 0 2.1-1.1l2.4-3.4" />
      <path d="M7 12 5.6 9.2A2 2 0 0 0 3.8 8H2" />
      <path d="M6 16h9" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M4.5 4.5 19.5 19.5" />
    </>
  ),
  assignment_turned_in: (
    <>
      <path d="M9 4.5h6l1 2H20v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-12h4Z" />
      <path d="m9.5 13 1.8 1.8 3.7-3.7" />
    </>
  ),
  savings: (
    <>
      <path d="M12 21c4.5 0 8-2.3 8-5s-3.5-5-8-5-8-2.3-8-5 3.5-5 8-5 8 2.3 8 5" />
      <path d="M12 3v18" />
    </>
  ),
  calendar_month: (
    <>
      <rect height="15" rx="2" width="16" x="4" y="5" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 9h16" />
      <path d="M8 13h3" />
      <path d="M13 13h3" />
      <path d="M8 16h3" />
    </>
  ),
  block: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 8.5 15.5 15.5" />
    </>
  ),
  warning_amber: (
    <>
      <path d="M12 4 20 18H4L12 4Z" />
      <path d="M12 9v4.5" />
      <path d="M12 16h.01" />
    </>
  ),
  beach_access: (
    <>
      <path d="M12 12a5 5 0 0 0-5-5" />
      <path d="M12 12a5 5 0 0 1 5-5" />
      <path d="M12 12V5" />
      <path d="M12 12 6 18" />
      <path d="M7 20h10" />
    </>
  ),
  business_center: (
    <>
      <rect height="11" rx="2" width="16" x="4" y="8" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
      <path d="M4 12h16" />
    </>
  ),
  flight_takeoff: (
    <>
      <path d="M2.5 19.5h19" />
      <path d="m3.5 14.5 7.5-2 3.5-6.5 2 1.2-2 5 5.5-1.5 1.3 2-6.1 3.1-3.7 1.2-8.5-.6Z" />
    </>
  ),
  open_in_new: (
    <>
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V6.5A1.5 1.5 0 0 1 6 5h4.5" />
    </>
  ),
};

export function MaterialIcon({
  className,
  dataIcon,
  name,
  ...props
}: MaterialIconProps) {
  const icon = ICONS[name];

  if (icon) {
    return <SvgIcon className={className}>{icon}</SvgIcon>;
  }

  return (
    <span
      className={cn("material-symbols-outlined", className)}
      data-icon={dataIcon ?? name}
      {...props}
    >
      {name}
    </span>
  );
}
