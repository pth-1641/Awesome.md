import { useState } from 'preact/hooks';

export const CustomSelect = ({
  options,
  label,
  value,
  onChange,
  className,
}: {
  options: string[];
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <section class={className}>
      <h4 class="font-semibold mb-2">{label}</h4>
      <div class="relative amd-border cursor-pointer">
        <input
          class="bg-transparent outline-none w-full py-1.5 px-2 capitalize cursor-pointer"
          type="text"
          value={value || options[0]}
          readOnly
          onFocus={() => setShowOptions(true)}
          onBlur={() => setShowOptions(false)}
        />
        <ul
          class={`absolute z-10 capitalize bg-[#0d1117] border border-white/15 rounded-md inset-x-0 duration-150 max-h-52 overflow-auto ${
            showOptions
              ? 'opacity-100 top-11 pointer-events-auto'
              : ' opacity-0 top-14 pointer-events-none'
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              class="py-1.5 px-2 duration-150 hover:bg-white/5"
              onMouseDown={() => onChange?.(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};