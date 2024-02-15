interface Props extends React.SVGProps<SVGSVGElement> {}

const EthIcon: React.FC<Props> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={12}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path fill='#627EEA' d='M5.998 12a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z' />
      <path
        fill='#fff'
        fillOpacity={0.602}
        d='M6.185 1.5v3.326l2.811 1.256L6.185 1.5Z'
      />
      <path fill='#fff' d='M6.185 1.5 3.373 6.083l2.812-1.257V1.5Z' />
      <path
        fill='#fff'
        fillOpacity={0.602}
        d='M6.185 8.238v2.26l2.813-3.892-2.813 1.632Z'
      />
      <path fill='#fff' d='M6.185 10.498v-2.26L3.373 6.605l2.812 3.892Z' />
      <path
        fill='#fff'
        fillOpacity={0.2}
        d='m6.185 7.715 2.811-1.633-2.811-1.255v2.888Z'
      />
      <path
        fill='#fff'
        fillOpacity={0.602}
        d='m3.373 6.082 2.812 1.633V4.827L3.373 6.082Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h12v12H0z' />
      </clipPath>
    </defs>
  </svg>
);
export default EthIcon;
