import './title-srcondary.module.scss';

type TitleSecondaryProps = {
  text: string,
  level: string,
}

function TitleSecondary({ text, level }: TitleSecondaryProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;;
  return (
    <Tag>
      {`${text} `}
    </Tag>
  );
}

export default TitleSecondary;
