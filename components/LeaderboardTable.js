import Loader from '../components/Loader'

const LeaderboardTable = ({ players, country }) => {
  var countryRank = 1

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Country Standings:</th>
            <th>Global Rank:</th>
            <th>Name:</th>
            <th>Country:</th>
            <th>Team:</th>
          </tr>
        </thead>
        <tbody>
          {players ? (
            players.map((player, index) =>
              player.country === country ? (
                <tr key={index}>
                  <td>{countryRank++}</td>
                  <td>{player.rank}</td>
                  <td>{player.name}</td>
                  <td>{player.country}</td>
                  <td>{player.team_tag}</td>
                </tr>
              ) : null
            )
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
      {/* {players && (
        <table>
          <thead>
            <tr>
              <th>Country Standings:</th>
              <th>Global Rank:</th>
              <th>Name:</th>
              <th>Country:</th>
              <th>Team:</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) =>
              player.country === country ? (
                <tr key={index}>
                  <td>{countryRank++}</td>
                  <td>{player.rank}</td>
                  <td>{player.name}</td>
                  <td>{player.country}</td>
                  <td>{player.team_tag}</td>
                </tr>
              ) : (
                <Loader />
              )
            )}
          </tbody>
        </table>
      )} */}
    </>
  )
}

export default LeaderboardTable
