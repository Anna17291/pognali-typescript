declare module 'react-slider' {
    import React from 'react';

    export interface SliderProps {
        min?: number;
        max?: number;
        value?: number[];
        onChange?: (value: number[]) => void;
        renderThumb?: (props: any, state: any) => React.ReactNode;
        renderTrack?: (props: any, state: any) => React.ReactNode;
        className?: string;
    }

    export default function Slider(props: SliderProps): JSX.Element;
}
