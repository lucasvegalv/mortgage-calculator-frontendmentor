interface CheckboxProps {
  title: string;
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox = ({ title, isChecked, onChange }: CheckboxProps) => {
  return (
    <div
      className={`hover:border-clr-primary-lime hover:border-opacity-60 py-3 rounded-md border-2 border-gray-300 flex flex-1 items-center p-2 ${
        isChecked
          ? "bg-clr-primary-lime bg-opacity-15 border-clr-primary-lime border-opacity-80"
          : "bg-none"
      } transition-all cursor-pointer`}
      onClick={onChange}
    >
      <input type="checkbox" checked={isChecked} className="hidden" readOnly />
      <span
        className={`h-3 w-3 rounded-full inline-block mr-2 border border-gray-300 ${
          isChecked
            ? "bg-clr-primary-lime ring-2 ring-offset-2 ring-clr-primary-lime"
            : "bg-white"
        } transition-colors cursor-pointer ml-2`}
      />
      <p className="text-clr-neutral-700 font-bold px-3 text-sm">{title}</p>
    </div>
  );
};

export default Checkbox;
