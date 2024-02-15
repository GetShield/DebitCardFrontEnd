import { LogoIcon } from '@/assets';
import { AvatarDropDown } from '.';

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <nav className='fixed flex h-[var(--nav-height)] w-full items-center'>
      <div className='m-auto flex w-full max-w-5xl items-center justify-between px-4'>
        <div className='flex items-center'>
          <LogoIcon className='scale-50' />
          <span className='font-semibold'>Shield</span>
        </div>
        <AvatarDropDown />
      </div>
    </nav>
  );
};

export default Nav;
