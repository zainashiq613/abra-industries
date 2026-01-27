import { twMerge } from 'tailwind-merge';

function Button({ className, text = 'button', icon, position, onClick }) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'text-lg font-medium py-4.5 px-9.5 bg-primary text-white flex items-center justify-center rounded-sm cursor-pointer',
        className
      )}
    >
      {text}
      {icon && position === 'right' && <span>{icon}</span>}
      {icon && position === 'left' && <span>{icon}</span>}
    </div>
  );
}

export default Button;
