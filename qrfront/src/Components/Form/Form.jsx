
const Form = ({ children, ...props }) => {
  const formHandler = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());
    e.target.reset();
    props.submitHandler(formData);
  };

  return <form onSubmit={formHandler}>{children}</form>;
};

export default Form;
