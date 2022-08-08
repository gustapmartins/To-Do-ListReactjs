import * as C from './styled'

export const Button = (props) => {
    return (
        <C.Button 
            type={props.type}
            backgroundColor={props.backgroundColor}
            backgroundHover={props.backgroundHover}
            color={props.color}
        >{props.children}</C.Button>
    )
}