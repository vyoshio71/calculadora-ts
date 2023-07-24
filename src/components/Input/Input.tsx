const Input = ({ value }: { value: string }) => {
  return (
    <input
      value={value}
      type="text"
      className="w-full h-[55px] rounded-lg text-5xl bg-black text-white pr-10 outline-none mt-44 text-end "
    />
  );
};

export default Input;
