import React from 'react';
import Select from "react-select";





function RoleSelect({onChange, options, value, classNameRef}) {
    
    const defaultValue = (options, value)=>{
        return options ? options.find(option=> option === value) : "";
    }


  return (
    <div className={classNameRef}>

        <Select 
        value={defaultValue(options, value)}
        onChange={value=>onChange(value)}    
        options={options}
        />  

    </div>    
  )
}

export default RoleSelect