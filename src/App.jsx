import './app.scss'
import { useState } from 'react'
import { Card } from './Card'


function App() {
  const [allColors, setAllColors] = useState([])
    const [colorCode, setColorCode] = useState('')
    const [colorName, setColorName] = useState('')
    const [verifyInput, setVerifyInput] = useState(false)

    function addNewColor(event) {
        event.preventDefault()
        const newColor = {
            colorCode: colorCode,
            nameColor: colorName
        }
        
        if( colorName.length < 3 || colorCode.length < 6 ) {
            setVerifyInput(true)
        } 
        else {
            setAllColors([...allColors, newColor])
            setColorCode('')
            setColorName('')
            setVerifyInput(false)
        }
        
        
    }

  return (
    <main className="checkpoint-component">
            <div className="tittle-wrapper">
                <h1>Adicionar Nova Cor</h1>
            </div>

            <form>
                <div>
                    <label htmlFor="">Nome da cor</label>
                    <input className={verifyInput ? "input-error": ""} placeholder={verifyInput ? "Coloque um nome válido" : ""} 
                    id="nomeCor" type="text" value={colorName.trim()} onChange={event => setColorName(event.target.value)}></input>
                    <label htmlFor="">Codigo Hexadecimal</label>
                    <input className={verifyInput ? "input-error": ""} placeholder={verifyInput ? "Coloque uma cor válida" : ""} 
                    id="codeCor" type="text" value={colorCode.trim()} onChange={event => setColorCode(event.target.value)}></input>
                </div>

                <button type="submit" onClick={event => addNewColor(event)}>Adicionar</button>
            </form>

            {verifyInput ? <span>Por favor Verifique os dados inseridos</span> : null}
            <h1>Cores Favoritas</h1>

            <section className="checkpoint">
                {allColors.map(
                    color => {
                        return (
                            <Card
                                colorData={color}
                            />
                        )
                    }
                )}
            </section>
        </main>
  )
}

export default App