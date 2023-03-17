import { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  Select,
  InputLabel,
  TextareaAutosize,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: 'white',
    borderRadius: '5px',
  },
});

const StyledSelect = styled(Select)({
  '& .MuiInputBase-root': {
    backgroundColor: 'white',
    borderRadius: '5px',
  },
});

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    select: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <StyledTextField
          id='name'
          name='name'
          label='Imię'
          variant='outlined'
          value={formData.name}
          onChange={handleChange}
        />
        <StyledTextField
          id='email'
          name='email'
          label='Email'
          variant='outlined'
          value={formData.email}
          onChange={handleChange}
        />
        <StyledTextField
          id='phone'
          name='phone'
          label='Numer telefonu'
          variant='outlined'
          value={formData.phone}
          onChange={handleChange}
        />
        <FormControl variant='outlined'>
          <InputLabel htmlFor='select'>Wybierz</InputLabel>
          <StyledSelect
            id='select'
            name='select'
            value={formData.select}
            onChange={handleChange}
            label='Wybierz'
          >
            <option value=''>Rezerwacja</option>
            <option value='option1'>Brak</option>
            <option value='option2'>Urodziny</option>
            <option value='option3'>Wesele</option>
            <option value='option4'>Impreza</option>
          </StyledSelect>
        </FormControl>
        <TextareaAutosize
          id='message'
          name='message'
          placeholder='Wiadomość'
          rows={4}
          value={formData.message}
          onChange={handleChange}
          style={{
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '0.5rem',
            resize: 'none',
          }}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{ alignSelf: 'flex-end' }}
        >
          Wyślij
        </Button>
      </FormWrapper>
    </form>
  );
}

export default ContactForm;
