const SelectRegion = ({ setRegion, region }) => {
  return (
    <>
      <h1>Please select region:</h1>
      <select
        value={region}
        onChange={(e) => {
          var selectedRegion = e.target.value
          setRegion(selectedRegion)
        }}
      >
        <option value='se_asia'>SEA</option>
        <option value='europe'>EU</option>
        <option value='americas'>Americas</option>
        <option value='china'>China</option>
      </select>
      <h1> You have selected {region}</h1>
    </>
  )
}

export default SelectRegion
