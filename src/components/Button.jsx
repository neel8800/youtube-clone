import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div>
      <button className="px-5 py-2 m-5 bg-gray-200 rounded-lg cursor-pointer">
        {props.name}
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
