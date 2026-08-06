import type { Club } from "../data/clubs";
import type { TableRow } from "../types/table";
import { simulateMatch } from "./matchEngine";

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

export function updateTable(
  table: TableRow[],
  home: Club,
  away: Club
): TableRow[] {

  const result = simulateMatch(home, away);

  const newTable = [...table];

  const homeRow = newTable.find(t => t.club === home.name);
  const awayRow = newTable.find(t => t.club === away.name);

  if (!homeRow || !awayRow) return table;

  homeRow.played++;
  awayRow.played++;

  homeRow.goalsFor += result.homeGoals;
  homeRow.goalsAgainst += result.awayGoals;

  awayRow.goalsFor += result.awayGoals;
  awayRow.goalsAgainst += result.homeGoals;

  homeRow.goalDifference =
    homeRow.goalsFor - homeRow.goalsAgainst;

  awayRow.goalDifference =
    awayRow.goalsFor - awayRow.goalsAgainst;

  if (result.homeGoals > result.awayGoals) {

    homeRow.wins++;
    awayRow.losses++;

    homeRow.points += 3;

  }

  else if (result.homeGoals < result.awayGoals) {

    awayRow.wins++;
    homeRow.losses++;

    awayRow.points += 3;

  }

  else {

    homeRow.draws++;
    awayRow.draws++;

    homeRow.points++;
    awayRow.points++;

  }

  newTable.sort((a,b)=>{

    if(a.points !== b.points)
      return b.points-a.points;

    return b.goalDifference-a.goalDifference;

  });

  return newTable;

}