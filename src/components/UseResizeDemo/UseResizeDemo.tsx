import { useResize } from '../../use-resize';
import styles from './UseResizeDemo.module.scss';

function UseResize() {
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();
  return (
    <div className={styles.UseResizeHook}>
      <p>UseResizeHook DEMO : change View Port width, watch for changes in variables.</p>
      <b>width: {width}px</b>
      <p>isScreenSm 320px: {String(isScreenSm)}</p>
      <p>isScreenMd 480px: {String(isScreenMd)}</p>
      <p>isScreenLg 768px: {String(isScreenLg)}</p>
      <p>isScreenXl 1024px: {String(isScreenXl)}</p>
      <p>isScreenXll 1440px: {String(isScreenXxl)}</p>
    </div>
  );
}

export default UseResize;
