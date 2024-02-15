interface Props extends React.SVGProps<SVGSVGElement> {}

const UsdtIcon: React.FC<Props> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={12}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path fill='#26A17B' d='M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Z' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M6.72 6.519v-.001c-.04.003-.253.016-.728.016-.378 0-.645-.012-.739-.016v.001c-1.458-.064-2.546-.318-2.546-.622 0-.303 1.088-.557 2.546-.622v.991c.095.007.368.023.746.023.452 0 .68-.019.722-.022v-.992c1.455.065 2.54.32 2.54.622 0 .304-1.085.557-2.54.622Zm0-1.347v-.887h2.03V2.932H3.224v1.353h2.03v.887c-1.65.076-2.89.403-2.89.794 0 .392 1.24.718 2.89.795v2.843h1.468V6.76c1.647-.076 2.885-.403 2.885-.794 0-.39-1.238-.718-2.885-.794Z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h12v12H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default UsdtIcon;
