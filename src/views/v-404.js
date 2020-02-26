import React from 'react';

export default function V404(props) {

  function toHomePage() {
    props.history.push("/");
  }

  return (
    <div>
      The page is not found!!!!
      <div onClick={toHomePage}>to Home page</div>
    </div>
  )
}
