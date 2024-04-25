const ButtonTag = ({button_name, selectTag,selected}) => {

    const tagStyle = {
        Java: {backgroundColor: "#fda821"}, 
        NodeJs: {backgroundColor: "#15d4c8"},
        React: {backgroundColor: "#ffd12c"},
        MongoDB: {backgroundColor: "#4cdafc"},
        default: {backgroundColor: "#f9f9f9"},
      };

    return (
        <button type="button" className='tag' onClick={() => selectTag(button_name)}  style={selected? tagStyle[button_name]: tagStyle.default} >{button_name}</button>
    );
  };
  export default ButtonTag