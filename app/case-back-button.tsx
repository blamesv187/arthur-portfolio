"use client";

export default function CaseBackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="case-detail__back-link"
      onClick={onClick}
      aria-label="Back to cases"
    >
      <svg
        className="case-detail__back-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
