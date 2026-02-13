'use client';

export default function CheckboxField({
  id,
  label,
  checked,
  onChange,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-gray-300 accent-primary transition-all"
      />
      <label htmlFor={id} className="text-sm text-gray cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}
