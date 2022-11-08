import './card.scss'

export function Card (props) {
  return (
    <div className="checkpoint-card-component" style={{
      backgroundColor: props.colorData.colorCode
  }}>
      <div className="card-body">
          <h1>{props.colorData.nameColor}</h1>
          <h2>{props.colorData.colorCode}</h2>
      </div>
  </div>
  )
}