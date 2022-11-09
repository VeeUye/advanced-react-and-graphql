import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

const Logo = styled.h1`
    position: relative;
    z-index: 2;
    margin-left: 2rem;
    font-size: 4rem;
    background: red;
    transform: skew(-7deg);

    a {
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom: 10px solid var(--black, black);
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid var(--black, black);
    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/">Sick Fits</Link>
                </Logo>
                <Nav />
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
        </HeaderStyles>
    );
}
