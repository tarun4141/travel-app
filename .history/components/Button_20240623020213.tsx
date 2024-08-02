type ButtonProps ={
  type: "button"|"submit";
  title:string;
  icon?:string;
  variant:'btn_'
}

const Button = () => {
  return (
    <button type='button'>
        log-in
    </button>
  )
}

export default Button
