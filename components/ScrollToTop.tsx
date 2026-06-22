'use client';

import { useEffect } from 'react';
import { usePathname } from '@/i18n/navigation';

const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll nach oben bei Route-Wechsel
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
