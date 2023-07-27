import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reserve = () => {
  let navigate = useNavigate();
  const initialState = {
    name: '',
    email: '',
    date: '',
    card: '',
  };

  const [data, setData] = useState({
    initialState,
  });

  const [message, setMessage] = useState('');

  const handleInputChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(
      'sending data...' +
        data.name +
        ' ' +
        data.email +
        ' ' +
        data.date +
        ' ' +
        data.card
    );

    localStorage.setItem('data', JSON.stringify(data));

    clearState();
    setMessage('Reserva realizada con éxito');
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const clearState = () => {
    setData(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          type="date"
          placeholder="date"
          value={data.date}
          onChange={handleInputChange}
          name="date"
        />
        <input
          type="text"
          placeholder="card"
          value={data.card}
          onChange={handleInputChange}
          name="card"
        />
        <button type="submit">Enviar</button>
        {message}
      </form>
    </div>
  );
};

export default Reserve;
