'use client';

export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-xs font-semibold text-gray mb-2 uppercase">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-gray-50 transition-all"
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
