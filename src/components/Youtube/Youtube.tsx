import styles from './Youtube.module.scss';

type YoutubeProps = {
  classes?: string;
}

function Youtube({ classes }: YoutubeProps) {
  return (
    <svg className={styles.youtube} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className={styles.youcircle} cx="31" cy="31" r="31" fill="#A8D2F4" />
      <path className={styles.youpath} d="M35.275 30.5873L29.275 26.5873C29.1998 26.5372 29.1124 26.5085 29.0222 26.5041C28.932 26.4997 28.8422 26.5198 28.7625 26.5623C28.6826 26.6039 28.6158 26.6668 28.5694 26.744C28.5231 26.8212 28.4991 26.9098 28.5 26.9998V34.9998C28.4991 35.0899 28.5231 35.1784 28.5694 35.2557C28.6158 35.3329 28.6826 35.3958 28.7625 35.4373C28.8361 35.4754 28.9172 35.4967 29 35.4998C29.0988 35.5016 29.1954 35.4709 29.275 35.4123L35.275 31.4123C35.3447 31.3684 35.4022 31.3075 35.442 31.2354C35.4818 31.1633 35.5027 31.0822 35.5027 30.9998C35.5027 30.9174 35.4818 30.8364 35.442 30.7642C35.4022 30.6921 35.3447 30.6312 35.275 30.5873V30.5873ZM29.5 34.0623V27.9373L34.1 30.9998L29.5 34.0623ZM43.8125 23.8498C43.7092 23.4687 43.5189 23.1168 43.2564 22.8218C42.9939 22.5268 42.6665 22.2967 42.3 22.1498C38.075 20.5248 31.2875 20.5498 31 20.5498C30.7125 20.5498 23.925 20.5248 19.7 22.1498C19.3335 22.2967 19.0061 22.5268 18.7436 22.8218C18.4811 23.1168 18.2908 23.4687 18.1875 23.8498C17.875 25.0623 17.5 27.2873 17.5 30.9998C17.5 34.7123 17.875 36.9373 18.1875 38.1498C18.2908 38.5309 18.4811 38.8829 18.7436 39.1779C19.0061 39.4729 19.3335 39.7029 19.7 39.8498C23.925 41.4748 30.7125 41.4498 31 41.4498H31.0875C31.95 41.4498 38.2875 41.3998 42.3 39.8498C42.6665 39.7029 42.9939 39.4729 43.2564 39.1779C43.5189 38.8829 43.7092 38.5309 43.8125 38.1498C44.125 36.9373 44.5 34.7123 44.5 30.9998C44.5 27.2873 44.125 25.0623 43.8125 23.8498V23.8498ZM42.8375 37.8998C42.7774 38.1274 42.6647 38.3376 42.5083 38.5135C42.352 38.6894 42.1564 38.826 41.9375 38.9123C37.8875 40.4748 31.075 40.4498 31 40.4498C30.925 40.4498 24.1125 40.4748 20.0625 38.9123C19.8436 38.826 19.648 38.6894 19.4917 38.5135C19.3353 38.3376 19.2226 38.1274 19.1625 37.8998C18.8625 36.7373 18.5 34.5998 18.5 30.9998C18.5 27.3998 18.8625 25.2623 19.1625 24.0998C19.2226 23.8723 19.3353 23.6621 19.4917 23.4862C19.648 23.3103 19.8436 23.1737 20.0625 23.0873C24.1125 21.5248 30.925 21.5498 31 21.5498C31.075 21.5498 37.8875 21.5248 41.9375 23.0873C42.1564 23.1737 42.352 23.3103 42.5083 23.4862C42.6647 23.6621 42.7774 23.8723 42.8375 24.0998C43.1375 25.2623 43.5 27.3998 43.5 30.9998C43.5 34.5998 43.1375 36.7373 42.8375 37.8998Z" fill="black" />
    </svg>
  );
}

export default Youtube;
