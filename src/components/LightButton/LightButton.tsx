import styles from './LightButton.module.scss';

type LightButtonProps = {
    text: string;
    link: string;
    className?: string;
};

function LightButton({ text, link, className }: LightButtonProps) {
    return (
        <a href={link} className={`${styles.lightButton} ${className || ''}`}>
            {text}
        </a>
    );
}

export default LightButton;
