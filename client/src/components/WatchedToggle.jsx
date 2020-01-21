import React from 'react';

function WatchedToggle({ watchedStatus, title, handleWatchedClick }) {
  return (
    <div className="switch">
      <label>
        Unwatched
        <input
          id={title}
          type="checkbox"
          defaultChecked={watchedStatus ? "checked" : false}
          onClick={(e) => handleWatchedClick(e)}
        />
        <span className="lever"></span>
        Watched
    </label>
    </div>
  )
}

export default WatchedToggle;