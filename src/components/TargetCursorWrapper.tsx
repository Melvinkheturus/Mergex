'use client';

import dynamic from 'next/dynamic';
import type { TargetCursorProps } from '@/components/TargetCursor';

const TargetCursor = dynamic(() => import('@/components/TargetCursor'), {
    ssr: false,
});

export default function TargetCursorWrapper(props: TargetCursorProps) {
    return <TargetCursor {...props} />;
}
