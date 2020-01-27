import React from "react";

import World from "../components/world";
import PlayerInformation from "../components/player-info";
import GameOuput from '../components/game-output';

import { rooms } from '../maps/one';
import './game.scss';

function Game() {
  return (
    <div className="game">
      <div className='left-side'>
      <World room={{
          title: 'Dusty Dungeon Entry',
          description: 'You have entered the dusty dungeon!',
          n: 0,
          e: 2,
          s: 4,
          w: 0,
          tiles: []
      }} />
      <PlayerInformation
        geo={{
          position: [],
          spriteLocation: "",
          direction: "",
          walkIndex: 0,
          level: 0
        }}
        player={{
          name: "",
          hp: 5,
          str: 10,
          def: 10,
          stamina: 10
        }}
        inventory={{
          gems: 0,
          max_slots: 6
        }}
      />
      </div>

      <div className='game-ouput'>
        <GameOuput map={rooms[0]}/>
      </div>
    </div>
  );
}

export default Game;
