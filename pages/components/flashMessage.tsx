import { Alert } from "react-bootstrap";

const SuccessFlash = (props) => {
    //Props: message, class, visible
    return (
        <div>
            { props.message && (
                <Alert className={props.class} show={props.visible} variant="success">
                    <p style={{marginBottom: 0}}>{props.message}</p>
                </Alert>
            )
            }
        </div>
    )
}

const DangerFlash = (props) => {
    return (
        <div>
            { props.message && (
                <Alert variant="danger">
                    <p style={{marginBottom: 0}}>{props.message}</p>
                </Alert>
            )
            }
        </div>
    )
}



export { SuccessFlash, DangerFlash};