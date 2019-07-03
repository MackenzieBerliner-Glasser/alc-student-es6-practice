//abstraction that allows us to combine and delegate iterators/generators.

const additionsTeam = {
  spiderMan: 'Peter Parker',
  blackPanther: 'TChalla',
  blackWidow: 'Natasha Romanoff',
  hawkeye: 'Clinton Barton'
};

const theAvengers = {
  additionsTeam,
  teamSize: 10,
  teamName: 'The Avengers',
  bruceBanner: 'The Hulk',
  ironMan: 'Tony Stark',
  thor: 'Thor',
  captainAmerica: 'Steve Rodgers'
};

function* AvengersIterator(team) {
  yield team.bruceBanner;
  yield team.ironMan;
  yield team.thor;
  yield team.captainAmerica;
  const additionTeamGenerator = AdditionsIterator(team.additionsTeam);
  yield* additionTeamGenerator;
}

function* AdditionsIterator(team) {
  yield team.spiderMan,
  yield team.blackPanther,
  yield team.blackWidow,
  yield team.hawkeye;
}
const heroNames = [];
for(let names of AvengersIterator(theAvengers)) {
  heroNames.push(names);
}

console.log(heroNames);


