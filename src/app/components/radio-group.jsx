'use client';

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  layout = 'horizontal',
  className = '',
}) {
  const isHorizontal = layout === 'horizontal';

  return (
    <div className={className}>
      {label && (
        <label className="block text-xs md:text-[13px] font-medium text-gray mb-2 uppercase">
          {label}
        </label>
      )}
      <div className={`flex items-center ${isHorizontal ? 'gap-6' : 'flex-col gap-3'}`}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className={`w-4 h-4 accent-gray ${
                name === 'attending' ? 'bg-[#D9D9D9]' : ''
              }`}
            />
            <span className={`${name === 'attending' ? 'text-sm md:text-lg' : 'text-sm font-medium'} text-gray`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
