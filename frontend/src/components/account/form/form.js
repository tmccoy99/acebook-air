import React, { useState } from 'react';

const Form = ({ form_type, token }) => {
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState(null);

  let stringMessage = '';
  const handleSubmit = async (e) => {
    form_type === 'display'
      ? (stringMessage = JSON.stringify({ newDisplayName: inputValue }))
      : form_type === 'email'
      ? (stringMessage = JSON.stringify({ newEmail: inputValue }))
      : form_type === 'bio'
      ? (stringMessage = JSON.stringify({ newBio: inputValue }))
      : form_type === 'password'
      ? (stringMessage = JSON.stringify({ newPassword: inputValue }))
      : (stringMessage = 'image');

    if (form_type === 'image') {
      const formData = new FormData();
      formData.append('image', image, image.name);
      e.preventDefault();
      let response = await fetch('/account', {
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.status != 204) {
        console.log(response.status);
      } else {
        console.log('done');
      }
    } else {
      e.preventDefault();
      let response = await fetch('/account', {
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: stringMessage,
      });

      if (response.status != 204) {
        console.log(response.status);
      } else {
        console.log('done');
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={
            form_type === 'password'
              ? 'password'
              : form_type === 'image'
              ? 'file'
              : 'text'
          }
          placeholder={
            form_type === 'display'
              ? 'New display name'
              : form_type === 'email'
              ? 'New email address'
              : form_type === 'bio'
              ? 'New bio'
              : form_type === 'image'
              ? null
              : form_type === 'password'
              ? 'New password'
              : null
          }
          // value={form_type === 'image' ? '' : inputValue}
          onChange={
            form_type === 'image' ? handleImageChange : handleInputChange
          }
        ></input>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Form;
