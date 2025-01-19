import React, { useRef, useState, useEffect } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
    text: string;
    visible: boolean;
    position: { x: number; y: number };
}

const Tooltip: React.FC<TooltipProps> = ({ text, visible, position }) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipWidth, setTooltipWidth] = useState(0);

    useEffect(() => {
        if (tooltipRef.current) {
            setTooltipWidth(tooltipRef.current.offsetWidth);
        }
    }, [text, visible]);

    return (
        <div
            ref={tooltipRef}
            className={`${styles.tooltip} ${visible ? styles.visible : ''}`}
            style={{
                top: `${position.y}px`,
                left: `${position.x - tooltipWidth / 2}px`,
            }}
        >
            {text}
        </div>
    );
};

export default Tooltip;
