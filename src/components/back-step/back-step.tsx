import classes from './back-step.module.scss'

type BackStepProps = {
  link: string,
};

function BackStep({ link }: BackStepProps) {
  return (
    <a className={classes.backstep} href={link}>На шаг назад</a>
  )
}

export default BackStep
