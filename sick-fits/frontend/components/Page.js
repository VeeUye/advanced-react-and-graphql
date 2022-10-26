import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
    return (
        <div>
            <Header />
            <h2>I am the page function!</h2>
            {children}
            <h3>{cool}</h3>
        </div>
    );
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
