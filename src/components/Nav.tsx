import { LogoIcon } from '@/assets';
import { Session } from 'next-auth';
import { AvatarDropDown } from '.';

interface Props {
  session: Session | null;
}

const Nav: React.FC<Props> = ({ session }) => {
  return (
    <nav className='fixed z-50 flex h-[var(--nav-height)] w-full items-center bg-background/70 backdrop-blur-sm'>
      <div className='m-auto flex w-full max-w-6xl items-center justify-between px-4'>
        <div className='flex items-center'>
          <LogoIcon className='scale-50' />
          <span className='font-semibold'>Shield</span>
        </div>
        <AvatarDropDown session={session} />
      </div>
    </nav>
  );
};

export default Nav;
