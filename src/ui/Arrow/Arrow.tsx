type ArrowProps = {
    classes?: string;
}

function Arrow({ classes }: ArrowProps) {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.38394 0.322928C0.619811 0.120753 0.974917 0.148069 1.17709 0.38394L5.67709 5.63394C5.85765 5.84459 5.85765 6.15543 5.67709 6.36608L1.17709 11.6161C0.974917 11.852 0.619811 11.8793 0.38394 11.6771C0.148069 11.4749 0.120753 11.1198 0.322928 10.8839L4.50915 6.00001L0.322928 1.11608C0.120753 0.88021 0.148069 0.525103 0.38394 0.322928Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Arrow;
