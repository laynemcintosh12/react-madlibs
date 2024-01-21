import React from 'react';

const Story = ({ type, inputs}) => {
  const getStoryContent = () => {
    switch (type) {
      case 'Superhero':
        return (
          <div>
            <h2>The Adventures of Captain Courage</h2>
            <p>In the <b>{inputs.adjective || 'bustling'}</b> city of Metropolis, Captain Courage <b>{inputs.verb || 'flew'}</b> through the blue skies, ever vigilant for those in need. With superhuman strength and a heart of gold, Captain Courage <b>{inputs.verbTwo || 'fought'}</b> against injustice . On this particular day, a <b>{inputs.adjectiveTwo || 'notorious'}</b> gang of villains threatened the city, and our hero <b>{inputs.adjectiveThree || 'leaped' }</b> into action, determined to save the day and restore peace to Metropolis.</p>
          </div>
        );

      case 'Villain':
        return (
          <div>
            <h2>The Mysterious Shadow</h2>
            <p>Deep within the shadows of the city, a <b>{inputs.adjective || 'mysterious'}</b> villain known only as "The Shadow" plotted <b>{inputs.adjectiveTwo || 'nefarious'}</b> schemes. With a <b>{inputs.adjectiveThree || 'cunning'}</b> mind and a mastery of deception, The Shadow left a trail of chaos in his wake. As the city's finest heroes attempted to unveil the identity of this enigmatic foe, The Shadow reveled in the thrill of outsmarting every attempt to <b>{inputs.verb || 'thwart'}</b> their malevolent plans.
            </p>
          </div>
        );

      case 'Princess':
        return (
          <div>
            <h2>The Enchanted Kingdom</h2>
            <p>In the heart of the Enchanted Kingdom, Princess <b>{inputs.name || 'Seraphina'}</b> lived a life of <b>{inputs.adjective || 'grace'}</b> and elegance. Surrounded by magical creatures and lush gardens, she possessed a kindness that touched everyone she encountered. However, an unexpected challenge arose as an ancient curse <b>{inputs.verb || 'threatened'}</b> the kingdom. Undeterred, Princess <b>{inputs.name || 'Seraphina'}</b> embarked on a quest to break the cursed, armed with bravery and a determination to protect her realm.
            </p>
          </div>
        );

      default:
        return <p>Select a story type to begin your adventure!</p>;
    }
  };

  return (
    <div className="story-container">
      <div>
        {getStoryContent()}
      </div>
    </div>
  );
};

export default Story;
