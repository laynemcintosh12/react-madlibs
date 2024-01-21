import React, { useState } from 'react';
import StoryForm from './StoryForm';

// Create a story selector component
// add hooks in if needed

const Madlibs = () => {
  const [story, setStory] = useState(null);

  function genStory(event) {
    event.preventDefault();
    const selectedType = event.target.select.value;
    setStory(selectedType);
  }

  return (
    <div>
      <div className='madlibs-storySelect'>
        <h1>Madlibs</h1>
        {!story && (
          <form onSubmit={genStory}>
            <label htmlFor="madlib-select">Select a Story:</label>
            <select name="select" id="madlib-select">
              <option value="Superhero">Superhero</option>
              <option value="Villain">Villain</option>
              <option value="Princess">Princess</option>
            </select>
            <button type="submit">Go to story</button>
          </form>
        )}
      </div>
      <div className='madlibs-story'>
        {story && <StoryForm type={story} />}
      </div>
      <button onClick={() => setStory(null)}>Reset</button>
    </div>
  );
};

export default Madlibs;
