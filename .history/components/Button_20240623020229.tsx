type ButtonProps ={
  type: "button"|"submit";
  title:string;
  icon?:string;
  variant:'btn_dark_green'
}

const Button = ({ty}) => {
  return (
    <button type='button'>
        log-in
    </button>
  )
}

export default Button
