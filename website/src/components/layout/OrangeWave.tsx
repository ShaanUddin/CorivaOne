export function OrangeWave({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-wave-in overflow-hidden leading-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
          fill="#F37021"
        />
      </svg>
    </div>
  );
}