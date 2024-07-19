const InputBox = ({ label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default InputBox;
