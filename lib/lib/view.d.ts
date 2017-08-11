/// <reference types="node" />
import cplayer from './';
import { EventEmitter } from 'events';
export interface ICplayerViewOption {
    element?: Element;
    generateBeforeElement?: boolean;
    deleteElementAfterGenerate?: boolean;
    zoomOutKana?: boolean;
}
export default class cplayerView extends EventEmitter {
    private elementLinks;
    private rootElement;
    private player;
    private dropDownMenuShowInfo;
    private options;
    constructor(player: cplayer, options: ICplayerViewOption);
    getRootElement(): Element;
    private getPlayListLinks(rootElement?);
    private getElementLinks(rootElement?);
    private setPlayIcon(paused);
    private setProgress(point);
    private setPoster(src);
    private __OldVolume;
    private setVolume(volume);
    private setMode(mode);
    closeDropDownMenu(): void;
    openDropDownMenu(): void;
    toggleDropDownMenu(): void;
    private setVolumeControllerKeepShow();
    private toggleVolumeControllerKeepShow();
    private removeVolumeControllerKeepShow();
    private __OldLyric;
    private __OldTotalTime;
    private setLyric(lyric, time?, totalTime?);
    private updatePlaylist();
    private injectPlayListEventListener();
    private injectEventListener();
    private handlePlaylistchange;
    private updateLyric(playedTime?);
    private handleClickListButton;
    private handleClickModeButton;
    private handleClickPlayList;
    private handleClickPlayButton;
    private handleClickVolumeButton;
    private handleOpenAudio;
    private handleModeChange;
    private handleVolumeChange;
    private handleTimeUpdate;
    private handleClickPrevButton;
    private handleClickNextButton;
    private handlePlayStateChange;
    private handleMouseVolumeController;
    private handleTouchVolumeController;
    destroy(): void;
}
