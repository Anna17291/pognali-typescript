type CrossProps = {
  classes?: string;
}

function Cross({ classes }: CrossProps) {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
    <rect width="23.8906" height="2.0318" rx="1.0159" transform="matrix(0.69604 0.718003 -0.69604 0.718003 1.97168 0.988155)" fill="#AAAAAA"/>
    <rect width="23.8906" height="2.0318" rx="1.0159" transform="matrix(0.69604 -0.718003 0.69604 0.718003 -0.399414 17.754)" fill="#AAAAAA"/>
    </svg>
  );
}

export default Cross;
