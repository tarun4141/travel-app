type ButtonProps ={
  type: "button"|"submit";
  title:string;
  icon?:string;
  variant:'btn_dark_green'
}

const Button = ({type,title,icon,varia}) => {
  return (
    <button type='button'>
        log-in
    </button>
  )
}

export default Button