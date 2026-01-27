import { motion } from 'framer-motion';

interface MegaMenuContainerProps {
    children: React.ReactNode;
    columns?: 2 | 3;
}

export function MegaMenuContainer({ children, columns = 3 }: MegaMenuContainerProps) {
    return (
        <div
            className={`grid gap-12 ${columns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}
        >
            {children}
        </div>
    );
}
