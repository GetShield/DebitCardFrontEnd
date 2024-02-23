interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center'>
      <div
        className='fixed inset-0 z-50 bg-white/80 backdrop-blur-sm'
        onClick={onClose}
      ></div>
      <div className='relative inset-0 z-[60] flex items-center justify-center'>
        {/* <button
          className='absolute cursor-pointer -top-2 z-[70] -right-2 h-[30px] w-[30px] bg-white/80 hover:bg-black hover:text-link-color duration-300'
          onClick={onHide}
        >
          <FontAwesomeIcon icon={faXmark} className='pointer-events-none' />
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
