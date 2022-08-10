import React from 'react';
import PropTypes from 'prop-types';
import VideoSection from './VideoSection/VideoSection';
import VideoPopUp from './VideoPopUp/VideoPopUp';

const Video = ({ cover, url }) => {
  const [open, setOpen] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  function openPopUp() {
    setOpen(!open);
    setPlay(true);
  }

  function closePopUp(e) {
    e.preventDefault();
    setOpen(false);
    setPlay(false);
  }

  return (
    <>
      <VideoSection openPopUp={openPopUp} cover={cover} />
      <VideoPopUp closePopUp={closePopUp} open={open} play={play} url={url} />
    </>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  cover: PropTypes.object,
};

export default Video;
