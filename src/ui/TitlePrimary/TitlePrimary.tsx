import styles from './TitlePrimary.module.scss';

type TitlePrimaryProps = {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
};

function TitlePrimary({ text, level, className = '' }: TitlePrimaryProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`${styles['title-primary']} ${className ? className : ''}`}>
            {text}
        </Tag>
    );
}

export default TitlePrimary;
