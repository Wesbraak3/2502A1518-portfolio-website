

interface ButtonProps {
    label: string;
    href?: string;
    className?: string;
}

export function Button({ label, href, className }: ButtonProps) {
    return href ? (
        <a
            href={href}
            className={`inline-flex justify-center items-center px-4 py-2 text-text hover:bg-primary hover:text-background break-words whitespace-normal ${className}`}
        >
            {label}
        </a>
    ) : (
        <button className="inline-flex justify-center items-center px-4 py-2 text-text hover:bg-primary hover:text-background break-words whitespace-normal">
            {label}
        </button>
    );
}

export function StyledButton({ label, href }: ButtonProps) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {label}
        </button>
    );
}