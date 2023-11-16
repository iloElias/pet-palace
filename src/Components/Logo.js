import PetPalaceLogo from "../svgs/logo.svg";

function Logo(props) {
    return (
        <>
            <img className="logo" alt="Logo Pet Palace" src={props.img ? (props.img) : PetPalaceLogo} />
            {props.noName == null ? (<div>{props.nome ? (props.nome) : "Pet Palace"}</div>) : ""}
        </>
    )
}

export default Logo