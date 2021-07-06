import React, {useState} from 'react'

const Dropdown = ({data}) => {
    const [button, setButton] = useState('');
    console.log(data);

    const comboBox = (e) => {
        const selectedId = e.target.value;
         setButton(selectedId);
         console.log(selectedId);
    }
    return (
        <div>
            <select className="custom-select"
            onChange={(e) => {
                comboBox(e);
            }}>
                <option value="component">component</option>
                <option value="componentNewStyle">componentNewStyle</option>
            </select>
            {data[button]}
        </div>
    )
}

export default Dropdown
