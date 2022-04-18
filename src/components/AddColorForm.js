import React, { useState } from "react";
import { useColors } from "../ColorProvider";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
};

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="text"
                placeholder="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}