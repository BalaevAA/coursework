import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
  
export const Category = () => {
  
  // Our sample dropdown options
  const options = ['Еда и продукты', 'Образование', 'Транспорт', 'Отдых', 'Различные товары'];
  
  return (
    <div>
      <Autocomplete
        options={options}
        style={{ width: 250 }}
        renderInput={(params) =>
          <TextField {...params} variant='outlined' />}
      />
    </div>
  );
}