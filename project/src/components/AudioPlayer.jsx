import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const playIcon = '/icons8-play-24.png';
const pauseIcon = '/icons8-pause-button-48.png';

const AudioPlayer = ({ audioSrc, autoPlay = false, showControls = true, externalRef }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const audio = externalRef?.current || audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Sync initial state with audio element
    setCurrentTime(audio.currentTime);
    if (audio.duration) {
      setDuration(audio.duration);
    }
    setIsPlaying(!audio.paused);
    setVolume(audio.volume);

    // Detect mobile devices
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };
    checkMobile();

    if (autoPlay) {
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [autoPlay, externalRef?.current]);

  const togglePlayPause = () => {
    const audio = externalRef?.current || audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const handleSeek = (e) => {
    const audio = externalRef?.current || audioRef.current;
    if (!audio) return;

    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const audio = externalRef?.current || audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!showControls) {
    return !externalRef ? <audio ref={audioRef} src={audioSrc} preload="metadata" /> : null;
  }

  return (
    <div className="audio-player">
      {!externalRef && <audio ref={audioRef} src={audioSrc} preload="metadata" />}
      <div className="audio-controls">
        <button className="play-pause-btn" onClick={togglePlayPause}>
          <img 
            src={isPlaying ? pauseIcon : playIcon} 
            alt={isPlaying ? 'Pause' : 'Play'} 
            style={{ width: '20px', height: '20px' }}
          />
        </button>

        <div className="timeline-container" onClick={handleSeek}>
          <div className="timeline">
            <div
              className="timeline-progress"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        </div>

        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {!isMobile && (
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;