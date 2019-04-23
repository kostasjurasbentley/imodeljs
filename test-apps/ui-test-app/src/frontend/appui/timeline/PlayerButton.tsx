/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import classnames from "classnames";
import { CommonProps } from "@bentley/ui-core";
import "./PlayerButton.scss";

export interface PlayButtonProps extends CommonProps {
  onClick?: () => void;
  icon?: string;
}

export class PlayerButton extends React.PureComponent<any> {
  private _onClick = () => {
    if (this.props.onClick)
      this.props.onClick();
  }

  public render() {
    const { icon } = this.props;
    return (
      <button className={classnames("player-button", this.props.className)} onClick={this._onClick}>
        <span className={classnames("icon", icon && icon)}></span>
      </button>
    );
  }
}

export interface PlayButtonProps extends CommonProps {
  isPlaying: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

interface PlayButtonState {
  isPlaying: boolean;
}

export class PlayButton extends React.Component<PlayButtonProps, PlayButtonState> {

  constructor(props: PlayButtonProps, context?: any) {
    super(props, context);

    this.state = { isPlaying: this.props.isPlaying };
  }

  public componentWillReceiveProps(nextProps: Readonly<PlayButtonProps>): void {
    if (nextProps.isPlaying !== this.state.isPlaying) {
      this.setState({ isPlaying: nextProps.isPlaying });
    }
  }

  private _onClick = () => {
    const _isPlaying = !this.state.isPlaying;

    this.setState({ isPlaying: _isPlaying });

    if (_isPlaying) {
      if (this.props.onPlay)
        this.props.onPlay();
    } else {
      if (this.props.onPause)
        this.props.onPause();
    }
  }

  public render() {
    const iconClassName = this.state.isPlaying ? "icon icon-media-controls-pause" : "icon icon-media-controls-play";
    return (
      <button className={classnames("player-button", this.props.className)} onClick={this._onClick}>
        <span className={iconClassName}></span>
      </button>
    );
  }
}
