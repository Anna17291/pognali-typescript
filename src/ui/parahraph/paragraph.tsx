import './paragraph.module.scss';

type ParagraphProps = {
  text: string
}

function Paragraph({ text }: ParagraphProps) {
  return (
    <p>{text}</p>
  );
}

export default Paragraph;
