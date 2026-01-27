import { CSSProperties } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lord-icon': {
                src?: string;
                trigger?: string;
                colors?: string;
                delay?: string | number;
                state?: string;
                style?: CSSProperties;
                class?: string;
                target?: string;
            };
        }
    }
}

export { };
