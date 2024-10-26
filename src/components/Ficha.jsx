import '../App.css'
import React from 'react'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';

import { CustomButton } from 'milibreria';  

function Ficha() {
    const datos = {
        animal: 'narga',
        Image: './narga.jpg',
      }
    const [count, setCount] = useState(0);
    
    function handleClick() {
      setCount(count + 1);  
      alert('¡CHULETAAAA!');  
    }
    return (
      // Componente Stack que organiza los elementos en una columna, centrados y con espacio entre ellos
      <Stack direction="column" spacing={2} alignItems='center' justifyContent='space-evenly'>
        <Typography variant='h2'>Soy un {datos.animal} y vivo feliz</Typography>
        <Avatar className='imagen' src={datos.Image} alt='img' sx={{ width: 400, height: 350 }} />
          <CustomButton 
            text={`Me tiraste ${count} chuletas`} 
            txtcolor="white" 
            bgcolor="purple" 
            size="large" 
            onClick={handleClick} 
          />
      </Stack>
    );
}

export default Ficha;