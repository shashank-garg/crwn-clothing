import React from 'react'
import './formInput.scss';

function FormInput({handleChange,label, ...otherprop}) {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherprop} />
            {
                label?(
<label className={`${otherprop.value.length ? 'shrink' : ""} form-input-label`}>
{label}
</label>
                ):null
            }
        </div>
    )
}

export default FormInput
