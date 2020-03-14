import React, {Component} from 'react';
import { Player, ControlBar, ReplayControl, CurrentTimeDisplay, ForwardControl, PlaybackRateMenuButton, VolumeMenuButton, FullscreenToggle, Shortcut } from 'video-react';
import "video-react/dist/video-react.css";

class Video_player extends Component {
    constructor(props, context) {
        super(props, context);
        this.newShortcuts = [
            // Press number 1 to jump to the position of 10%
            {
                keyCode: 49, // Number 1
                // handle is the function to control the player
                // player: the player's state
                // actions: the player's actions
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration * 0.1);
                }
            },
            {
                keyCode: 50,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.2);
                }
            },
            {
                keyCode: 51,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.3);
                }
            },
            {
                keyCode: 52,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.4);
                }
            },
            {
                keyCode: 53,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.5);
                }
            },
            {
                keyCode: 54,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.6);
                }
            },
            {
                keyCode: 55,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.7);
                }
            },
            {
                keyCode: 56,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.8);
                }
            },
            {
                keyCode: 57,
                handle: (player, actions) => {
                    const duration = player.duration;
                    actions.seek(duration *0.9);
                }
            },

            {
                keyCode: 38, // Up arrow
                handle: () => {} // override it's default handle
            },
            // Ctrl/Cmd + Right arrow to go forward 30 seconds
            {
                keyCode: 39, // Right arrow
                ctrl: true, // Ctrl/Cmd
                handle: (player, actions) => {
                    if (!player.hasStarted) {
                        return;
                    }

                    // this operation param is option
                    // helps to display a bezel
                    const operation = {
                        action: 'forward-10',
                        source: 'shortcut'
                    };
                    actions.forward(30, operation); // Go forward 30 seconds
                }
            }
        ];
    }

    render() {
        return (

            <div className={"entirePlayerClass"}>
                <Player className={"playerClass"}
                    src={"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"}
                >
                <ControlBar autoHide={false}>
                    <Shortcut clickable={false} shortcuts={this.newShortcuts}/>
                    <CurrentTimeDisplay/>
                    <VolumeMenuButton vertical/>
                    <ReplayControl seconds ={5}/>
                    <ForwardControl seconds ={5}/>
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                </ControlBar>
                </Player>
            </div>
        );
    }
}

export default Video_player;
