import { Button } from "react-bootstrap";

export default function Buttons({ text, variant, handleClick, ...props }) {
    function clickHandler() {
        handleClick();
    }
    return <Button size="sm" variant={variant} onClick={clickHandler}>{text}</Button>
}