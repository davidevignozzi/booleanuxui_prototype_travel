interface IButtonOutline {
  label: string;
}

const ButtonOutline = ({ label }: IButtonOutline) => {
  return (
    <button className=' w-full rounded-lg border border-black p-4'>
      {label}
    </button>
  );
};
export default ButtonOutline;
