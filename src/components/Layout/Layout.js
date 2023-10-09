import css from './Layout.module.css';
// import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <div className={css.Container}>{children}</div>
    </>
  );
};

// Container.propTypes = {
//   children: PropTypes.element.isRequired,
// };
export default Layout;
