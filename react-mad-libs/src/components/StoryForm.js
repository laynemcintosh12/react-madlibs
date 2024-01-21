import React, { useState } from 'react';
import Story from './Story'

const StoryForm = ({ type }) => {
  const [inputs, setInputs] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [showStory, setShowStory] = useState(false);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowForm(false);
      setShowStory(true);
    } else {
      alert('Please fill in all the blanks before generating the story.');
    }
  };

  const validateForm = () => {
    // Check if all input fields are filled
    const inputFields = getInputFields();
    return inputFields.every((inputType) => inputs[inputType]);
  };

  const getInputFields = () => {
    switch (type) {
      case 'Superhero':
        return ['adjective', 'verb', 'adjectiveTwo', 'verbTwo', 'adjectiveThree'];

      case 'Villain':
        return ['adjective', 'adjectiveTwo', 'adjectiveThree', 'verb'];

      case 'Princess':
        return ['name', 'adjective', 'verb'];

      default:
        return [];
    }
  };

  const inputFields = getInputFields();

  return (
    <div className="story-container">
        <div className='StoryForm-Form'>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <h2>Fill in the Blanks</h2>
                    {inputFields.map((inputType) => (
                        <div key={inputType}>
                            <label htmlFor={inputType}>{inputType.charAt(0).toUpperCase() + inputType.slice(1)}: </label>
                            <input type="text" name={inputType} onChange={handleInputChange} required />
                        </div>
                    ))}
                    <button type="submit">Generate Story</button>
                </form>
            ) : null}
        </div>
        <div className='StoryForm-StoryContainer'>
            {showStory ? (
                <Story type={type} inputs={inputs} />
            ) : null }
        </div>
    </div>
  );
};

export default StoryForm;
