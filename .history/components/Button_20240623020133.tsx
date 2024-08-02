type ButtonProps ={
  type: "button"|"submit";
  title:string;
  
}

const Button = () => {
  return (
    <button type='button'>
        log-in
    </button>
  )
}

export default Button
