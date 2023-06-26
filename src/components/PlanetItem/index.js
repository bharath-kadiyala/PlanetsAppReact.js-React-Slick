import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails

  return (
    <div className="item-con">
      <img className="img-sty" src={imageUrl} alt={`planet ${name}`} />
      <h2 className="title-sty">{name}</h2>
      <p className="desc-sty">{description}</p>
    </div>
  )
}

export default PlanetItem
