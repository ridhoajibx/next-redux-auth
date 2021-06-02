import React from 'react'
import styled from '@emotion/styled';

export default function Button({ children, onSubmit }) {
    const Button = styled.button({
        padding: "8px 12px",
        backgroundColor: 'lightgreen',
        ':hover': {
            backgroundColor: "green",
            border: '1px solid green',
            color: "white",
        },
        color: "#333",
        border: "1px solid lightgreen",
        borderRadius: "5px",
        cursor: "pointer"
    })
    return <Button onClick={onSubmit}>{children}</Button>
}
