import type { Match } from "../types/match";

export function generateSchedule(
  teams: string[]
): Match[] {

  const schedule: Match[] = [];

  let clubList = [...teams];

  // Si la cantidad es impar agregamos un descanso
  if (clubList.length % 2 !== 0) {
    clubList.push("DESCANSA");
  }

  const totalTeams = clubList.length;
  const rounds = totalTeams - 1;
  const matchesPerRound = totalTeams / 2;

  let matchId = 1;

  const rotation = [...clubList];

  // ==========
  // PRIMERA RUEDA
  // ==========

  for (let round = 0; round < rounds; round++) {

    for (let i = 0; i < matchesPerRound; i++) {

      const home = rotation[i];
      const away = rotation[totalTeams - 1 - i];

      if (home !== "DESCANSA" && away !== "DESCANSA") {

        schedule.push({

          id: matchId++,

          matchday: round + 1,

          home,

          away,

          played: false

        });

      }

    }

    // Rotación (Round Robin)

    const fixed = rotation[0];

    const rest = rotation.slice(1);

    rest.unshift(rest.pop()!);

    rotation.splice(0, rotation.length, fixed, ...rest);

  }

  // ==========
  // SEGUNDA RUEDA
  // ==========

  const firstRound = [...schedule];

  firstRound.forEach(match => {

    schedule.push({

      id: matchId++,

      matchday: match.matchday + rounds,

      home: match.away,

      away: match.home,

      played: false

    });

  });

  return schedule;

}