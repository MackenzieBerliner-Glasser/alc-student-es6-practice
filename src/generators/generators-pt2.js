//abstraction that allows us to combine and delegate iterators/generators.

const additionsTeam = {
  spiderMan: 'Peter Parker',
  blackPanther: 'TChalla',
  blackWidow: 'Natasha Romanoff',
  hawkeye: 'Clinton Barton'
};

const theAvengers = {
  additionsTeam, // can add object to our initial avengers object.
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
  const additionTeamGenerator = AdditionsIterator(team.additionsTeam); // we can set this iterator to a constant.
  yield* additionTeamGenerator; // yield * will trick our initial iterator to return the statements from our additions iterator.
}

function* AdditionsIterator(team) { // separate iterator for our additions object.
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


