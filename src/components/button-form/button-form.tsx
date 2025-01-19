import classes from './button-form.module.scss';

type ButtonFormProps = {
  text: string,
  link: string,
}

function ButtonForm({ text, link }: ButtonFormProps) {
  return (
    <a className={classes.buttonform} href={link}>{text}</a>
  )
}

export default ButtonForm;
