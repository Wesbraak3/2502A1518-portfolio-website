

interface ButtonProps {
    label: string;
    href?: string; // optional if you may want to render a button without a link
}

export function Button({ label, href }: ButtonProps) {
    return href ? (
        <a
            href={href}
            className="inline-block justify-center px-4 py-2 bg-primary text-text hover:bg-accent hover:text-primary break-words whitespace-normal"
        >
            {label}
        </a>
    ) : (
        <button className="justify-center px-4 py-2 bg-primary text-text hover:bg-accent hover:text-primary break-words whitespace-normal">
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