import type { TableRow } from "../types/table";

export function createLeagueTable(
  teams: string[]
): TableRow[] {

  return teams.map(team => ({

    club: team,

    played: 0,

    wins: 0,

    draws: 0,

    losses: 0,

    goalsFor: 0,

    goalsAgainst: 0,

    goalDifference: 0,

    points: 0

  }));

}