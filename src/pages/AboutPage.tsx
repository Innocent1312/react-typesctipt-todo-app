import React from "react";
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Information Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        ea facere fugit illum molestiae numquam odio quaerat reiciendis tempora
        ut.
      </p>
      <button
        type="button"
        className="btn indigo lighten-2"
        onClick={() => history.push('/')}
      >
        Back to Todo App
      </button>
    </>
  )
};

export default AboutPage;
