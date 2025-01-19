import styles from './ProgressCircle.module.scss';

type ProgressCircleProps = {
    progress: number;
    size?: number;
    strokeWidth?: number;
    strokeColor?: string;
    trailColor?: string;
    className?: string;
};

function ProgressCircle({
                            progress,
                            size = 95,
                            strokeWidth = 3,
                            strokeColor = '#4D99D6',
                            trailColor = 'transparent',
                            className = ''
                        }: ProgressCircleProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={`${styles.progressWrapper} ${className}`}>
            <svg
                width={size}
                height={size}
                className={styles.progressCircle}
            >
                {/* Незаполненная часть (трейл) */}
                <circle
                    className={styles.circleBackground}
                    stroke={trailColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />

                <circle
                    className={styles.circleProgress}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            <span className={styles.progressText}>{progress}</span>
        </div>
    );
}

export default ProgressCircle;
