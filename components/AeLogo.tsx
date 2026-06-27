export default function AeLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* A shape */}
      <path
        d="M4 40 L17 6 L30 40"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <line x1="10" y1="28" x2="24" y2="28" stroke="white" strokeWidth="5" strokeLinecap="square" />
      {/* Three horizontal lines (E) */}
      <line x1="36" y1="10" x2="54" y2="10" stroke="white" strokeWidth="5" strokeLinecap="square" />
      <line x1="36" y1="22" x2="54" y2="22" stroke="white" strokeWidth="5" strokeLinecap="square" />
      <line x1="36" y1="34" x2="54" y2="34" stroke="white" strokeWidth="5" strokeLinecap="square" />
    </svg>
  )
}
