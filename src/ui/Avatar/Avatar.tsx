import classNames from 'classnames';
import styles from './Avatar.module.scss';

type AvatarProps = {
    imageUrl?: string;
    altText: string;
    size?: 'large' | 'xl';
    className?: string;
};

function Avatar({ imageUrl, altText, size = 'large', className = '' }: AvatarProps) {
    return (
        <div
            className={classNames(
                styles.avatar,
                styles[`avatar--${size}`],
                { [styles['avatar--no-image']]: !imageUrl },
                className
            )}
        >
            {imageUrl ? (
                <img className={styles.avatar__image} src={imageUrl} alt={altText} />
            ) : (
                <span>{altText[0].toUpperCase()}</span>
                )}
        </div>
    );
}

export default Avatar;
