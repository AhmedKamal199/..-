import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,number,onAdd,showAdd}) => {
  return (
    <>
        <h1>Hello {title} and {number}</h1> 
        <Button text ={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} 
        onClick={onAdd} />  
    </>
  )
}
Header.defaultProps = {
    title : 'task tracer',
    number : 1
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
}
export default Header;
