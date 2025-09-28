// components/common/Button.tsx

import { ButtonProps } from '../../interface';

const palette: Record<NonNullable<ButtonProps['buttonBackgroundColor']>, string> = {
  red: 'bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-lg shadow-rose-300/40 hover:from-rose-600 hover:to-red-600',
  blue: 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-300/40 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600',
  orange: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-300/40 hover:from-amber-600 hover:to-orange-600',
  green: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-300/40 hover:from-emerald-600 hover:to-teal-600',
  purple: 'bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-300/40 hover:from-violet-600 hover:via-purple-600 hover:to-fuchsia-600',
  slate: 'bg-slate-900 text-white shadow-lg shadow-slate-300/40 hover:bg-slate-800',
};

const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor = 'slate',
  action,
  fullWidth,
  className,
  icon,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/50 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0';
  const sizeClass = buttonSize ?? 'px-6 py-3 text-sm md:text-base';
  const widthClass = fullWidth ? 'w-full' : 'w-auto';
  const paletteClass = palette[buttonBackgroundColor] ?? palette.slate;
  const spacingClass = icon ? 'gap-2' : '';

  return (
    <button
      onClick={action}
      className={`${baseClasses} ${sizeClass} ${widthClass} ${paletteClass} ${spacingClass} ${className ?? ''}`.trim()}
    >
      {icon && (
        <span className="text-lg" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{buttonLabel}</span>
    </button>
  );
};

export default Button;
