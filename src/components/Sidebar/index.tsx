import React, { useCallback, useState } from 'react';

import { HorizontalMode } from './Horizontal';
import { SidebarMode, SidebarProps } from './model';
import { SidebarModeWrapper } from './styles';
import { VerticalMode } from './VerticalMode';

export const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>(
    SidebarMode.Horizontal,
  );

  const handleClickModeChange = useCallback(() => {
    if (sidebarMode === SidebarMode.Vertical) {
      setSidebarMode(SidebarMode.Horizontal);
    }

    if (sidebarMode === SidebarMode.Horizontal) {
      setSidebarMode(SidebarMode.Vertical);
    }
  }, [sidebarMode]);

  const SidebarComponent =
    sidebarMode === SidebarMode.Vertical ? VerticalMode : HorizontalMode;

  return (
    <React.Fragment>
      <SidebarComponent data={data} />
      <SidebarModeWrapper>
        <button onClick={handleClickModeChange}>보기전환</button>
        <span>현재 모드 : {sidebarMode}</span>
      </SidebarModeWrapper>
    </React.Fragment>
  );
};
