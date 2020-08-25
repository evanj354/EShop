import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

const SuccessFlash = ({message, className, visible}) => {
    //Props: message, class, visible, timeout
    return (
        <div>
            { message && (
                <Alert className={className} show={visible} variant="success">
                    <p style={{marginBottom: 0}}>{message}</p>
                </Alert>
            )
            }
        </div>
    )
}

const DangerFlash = ({message}) => {
    return (
        <div>
            { message && (
                <Alert variant="danger">
                    <p style={{marginBottom: 0}}>{message}</p>
                </Alert>
            )
            }
        </div>
    )
}



export { SuccessFlash, DangerFlash};