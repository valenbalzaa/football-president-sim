import type { Match } from "../types/match";
import type { TableTeam } from "./tableEngine";

import {
  simulateMatch
} from "./matchEngine";

import {
  clubs
} from "../data/clubs";

import {
  updateTableAfterMatch
} from "./tableEngine";

export function simulateOtherMatches(

  schedule: Match[],

  matchday: number,

  table: TableTeam[],

  userClub: string

) {

  let updatedTable = [...table];

  const updatedSchedule = schedule.map(match => {

    // Solo partidos de esta fecha que aún no se jugaron
    if (
      match.matchday !== matchday ||
      match.played
    ) {
      return match;
    }

    // El partido del usuario ya fue simulado en gameEngine
    if (
      match.home === userClub ||
      match.away === userClub
    ) {
      return match;
    }

    const homeClub = clubs.find(
      c => c.name === match.home
    );

    const awayClub = clubs.find(
      c => c.name === match.away
    );

    if (!homeClub || !awayClub) {
      return match;
    }

    const result = simulateMatch(
      homeClub,
      awayClub
    );

    updatedTable = updateTableAfterMatch(

      updatedTable,

      match.home,

      match.away,

      result.homeGoals,

      result.awayGoals

    );

    return {

      ...match,

      played: true

    };

  });

  return {

    table: updatedTable,

    schedule: updatedSchedule

  };

}