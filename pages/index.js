import { useState, useEffect } from 'react'
import SelectCountry from '../components/SelectCountry'
import SelectRegion from '../components/SelectRegion'
import LeaderboardTable from '../components/LeaderboardTable'

export default function Home() {
  const [region, setRegion] = useState('se_asia')
  const [players, setPlayers] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    fetch(
      `https://www.dota2.com/webapi/ILeaderboard/GetDivisionLeaderboard/v0001?division=${region}&leaderboard=0`
    )
      .then((res) => res.json())
      .then((json) => setPlayers(json.leaderboard))
  }, [region])

  return (
    <>
      <SelectRegion
        setPlayers={setPlayers}
        setRegion={setRegion}
        region={region}
      />
      <SelectCountry country={country} setCountry={setCountry} />
      <LeaderboardTable players={players} country={country} />
    </>
  )
}
