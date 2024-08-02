type ButtonProps ={
  type: "button"|"submit";
  title:string;
  icon?:string;
  variant:'btn_dark_green'
}

const Button = ({type,title,icon,variant}:ButtonProps) => {
  return (
    <button type={type}>
        log-in
        {}
    </button>
  )
}

export default Button
