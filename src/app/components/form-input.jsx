'use client';

export default function FormInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs md:text-[13px] font-medium text-gray mb-2 uppercase">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-[#FFFFFF] transition-all"
        {...props}
      />
    </div>
  );
}
