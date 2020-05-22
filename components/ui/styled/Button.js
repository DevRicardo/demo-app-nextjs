import styled from '@emotion/styled'

const Button = styled.a`
    font-weight:700;
    text-transform:uppercase;
    border: 1px solid #e1e1e1;
    padding:.8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552f' : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000'};
    

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        cursor: pointer;
    }
`

export default Button;