import styled from '@emotion/styled'

const InputText = styled.input`
    border: 1px solid var(--grey3);
    padding:1rem;
    min-width:300px;
`

export const InputSubmit = styled.button`
    height:3rem;
    width:3rem;
    display:block;
    background-size:4rem;
    background-image: url('static/img/buscar.png');
    background-repeat: no-repeat;
    position:absolute;
    right:1rem;
    top:1px;
    background-color: white;
    border:none;
    text-indent: -9990px;
    &:hover {
        cursor: pointer;
    }
`

export default InputText;