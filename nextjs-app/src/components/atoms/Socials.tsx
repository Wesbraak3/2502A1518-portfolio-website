type SocialProps = {
  href: string;
  className?: string;
};

export const LinkedIn = ({ href, className }: SocialProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className={className}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM0 24h5V7.98H0V24ZM7.98 7.98H13v2.2h.07c.7-1.33 2.42-2.73 4.98-2.73C22.4 7.45 24 10.02 24 15.32V24h-5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-5V7.98Z" />
    </svg>
  </a>
);

export const Github = ({ href, className }: SocialProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className={className}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56v-2.2c-3.2.7-3.87-1.38-3.87-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.53-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.65.23 2.87.11 3.17.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.39-5.28 5.68.41.36.77 1.07.77 2.15v3.18c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  </a>
);