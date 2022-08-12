import * as C from './styled'

export const List = (props) => {
    return (
            <C.ListLi key={props.nome} background={props.background} color={props.color}>
                <C.Box>
                    <h2>{props.nome}</h2>
                    <h3>{props.number}</h3>
                </C.Box>
                <C.BoxButton>
                    <C.Btn onClick={() => props.Click({nome: props.nome, number: props.number})} color={props.colorBtn}>{props.iconPrimary}</C.Btn>
                    <C.Btn color={props.colorBtn}> {props.iconSecond} </C.Btn>
                </C.BoxButton>
            </C.ListLi>
    )
}