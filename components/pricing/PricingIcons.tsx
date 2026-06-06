/** Small inline icons for the pricing section (SVG only — never emojis). */

export function CheckIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.8 3.8L16 5.5" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      className="h-[15px] w-[15px]"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="7.25" />
      <path d="M10 6v4.2l2.8 2" />
    </svg>
  );
}
