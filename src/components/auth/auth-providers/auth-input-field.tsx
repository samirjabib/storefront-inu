import React, { InputHTMLAttributes } from 'react';

const InputField: React.FC<
  {
    icon: React.ReactNode;
    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ icon, type, name, placeholder, required, ...inputProps }) => (
  <div className="relative">
    {icon && <span className="absolute left-4 top-3.5">{icon}</span>}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="flex w-full items-center gap-3 rounded-lg border border-black/30 px-4 py-3 pl-12  text-alpha-900 shadow-sm shadow-black/10 bg-zinc-50 transition-all hover:border-black/40 hover:shadow-black/30 outline-primary/80"
      required={required}
      {...inputProps}
    />
  </div>
);

export default InputField;
