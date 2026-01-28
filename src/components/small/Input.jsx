import { twMerge } from 'tailwind-merge';

function Input({ icon, placeholder, className, position }) {
  return (
    <div className="bg-[#F5F5F5] px-5 py-2.5 rounded-sm flex gap-2">
      {position === 'left' && icon && <span>{icon}</span>}
      <input
        placeholder={placeholder}
        type="text"
        className={twMerge('text-xs rounded-sm', className)}
      />
      {position === 'right' && icon && <span>{icon}</span>}
    </div>
  );
}

export default Input;
