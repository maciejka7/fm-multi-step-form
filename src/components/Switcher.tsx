import React, { useState } from 'react';
import s from './Switcher.module.scss';

export function Switcher() {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  function handleToggled() {
    setIsToggled((prevState) => !prevState);
  }

  return (
    <button type="button" className={s.container} onClick={handleToggled}>
      <div className={`${s.circle} ${isToggled ? s.checked : ''}`} />
    </button>
  );
}
