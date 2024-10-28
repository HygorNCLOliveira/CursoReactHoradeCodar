// 4 - template expression
const templateExpression = () => {
    const name = "Lunna"
    const especie = {
        raca: "Tomba lá té",
        idade: 1
    }
  return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>Bem-vindo(a) {name}</h3>
        <p>Vi aqui que você tem {especie.idade} anos e é da raça {especie.raca}</p>
    </div>
  )
}

export default templateExpression