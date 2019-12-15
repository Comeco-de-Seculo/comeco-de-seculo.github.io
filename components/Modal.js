import {useState} from 'react'
import Close from './Close'

const Modal = () => {
  const [closed, setClosed] = useState(false)
  
  const viewStyle = {
    display: closed ? 'none' : 'block',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
  if (closed) return null
  return (
    <div style={viewStyle} className='root'>

      <a href="#" onClick={() => setClosed(true)}><Close /></a>
      <div className={'content'}>
      <h1>COMEÇO DE SÉCULO     BEGINNING OF A CENTURY</h1>
      <p>Começo de século, virada enigmática, quem teria coragem de se inclinar na beirada do abismo, para encarar no centro da escuridão, com o corpo posto, todas as feras, queimando a vista diante da fenda, que abre apartando duas eras?! Como um joelho que dispara de encontro às costas, corre todo dia com o colosso das imagens, claudicante enquanto aumentam as escalas das infraestruturas de troca em microssegundos, cada vez mais abstratas. Com os desabamentos e lamaçais, fogaréus sobre selvas e trens, céus rachados e águas turvas, a metáfora não dá mais conta é de nada; e o ranger dos apetites tomando a superfície, e o cardápio infinito de drogas com aqueles emojis, e corpas novos-ciborgues, próteses, hormônios e vocabulários, cravam as unhas e caninos na jugular da linguagem conhecida. Começo de século, se manifestam como sempre, esotéricas, as criaturas terrestres. Na percepção das coisas todas não existe natureza, ou tudo é natureza, alguém vai dizer. Debaixo do roxo crepúsculo, a onça respira, o lobo copula e a cobra morde o próprio rabo. Jogo, chumbo, algoritmo, fluido ou maciço, enigmático. As horas, uma depois da outra, que trazem em seu interior pedras e conchas, ferros e tijolos, e por entre tudo o estalo, que a qualquer instante faz sentir o fio do que fica em pé, do que já vai ruir. Começo de século, sem nunca chegar em lugar algum, <i>agora</i>, estar em caminho, deslocar os passeios, benzer o olho, enxergar na neblina, encarar o trágico, habitar a luz, invadir os vazios, diluir falsas dualidades, manusear a forma, ver de dentro, e de fora, nós e os monumentos. Longe da letargia dos corpos, acordar com os ícones na boca, mastigando o que é decisivo, afastando o agouro. O impulso químico do verbo. <i>Potência em todos os aspectos!</i></p>
      <h2>ÉPICO     APOTEÓTICO    AO VIVO</h2>
      <p className='center'>
        Adriano Amaral • Ana Matheus Abbade • Ana Mazzei • ÃO<br/>
        Bruno Baptistelli • Castiel Vitorino Brasileiro • CRISE • Daniel de Paula<br/>
        Deyson Gilbert • Eduardo Araújo • Helô Duran • Janaina Wagner • Jonas Van<br/>
        Juliana Frontin • Lucas Brandão • Felipe Rodrigues e Lucas Kanguru<br/>
        Leandra Espírito Santo • Marcelo Mudou • Maria Noujaim • MEXA<br/>
        Naves Cilíndricas • Nina Botkay • Paulo Monteiro • Ricardo Carioba<br/>
        Santarosa Barreto • thingamajicks • Vitória Cribb<br/>
        <br/>
        Curadoria / Curated by: Germano Dushá<br/>
        Ass. de curadoria / Curatorial ass.: Guilherme Teixeira<br/>
      </p>
      <p className={'center'}>
        ATO ÚNICO / ONE-ACT<br/>
        Madrugada do dia / Morning of November 5>6<br/>
        Início / Starting at: 00h00<br/>
        Duração / Length: 180’<br/>
      </p>
      <h2>LIVE     APOTHEOTIC     EPIC</h2>
      <p>Beginning of a century, enigmatic turn, who would dare to lean on the edge of the abyss, with the body placed, to face the center of darkness and all the beasts, burning the sight before the crack, which opens apart the age in two pieces?! As a knee that shoots against the back, it runs every day with the colossus of images, limping as the scale of microsecond exchange infrastructures increase, ever more abstract. With all the landslides and all the mud, the blaze over jungles and trains, fallen skies and murky waters, metaphors won't do a thing; and the creaking of appetites taking over the surface, the endless drugs menu with those emojis, and new-cyborg corps, prostheses, hormones, and vocabularies, digging their nails and canines into the jugular of known language. Beginning of a century, the esoteric creatures of the earth manifest themselves as always. In the perception of everything there is no nature, or everything is nature, one will say. Under the purple twilight, the jaguar breathes, the wolf copulates, and the snake bites its own tail. Game, lead, algorithm, solid or fluid, enigmatic. The hours, one after the other, carrying inside stones and shells, irons and bricks, and among all the crackle, which at any moment makes one feel the thread of what is still standing and what will soon collapse. Beginning of a century, never getting anywhere, <i>now</i>, to be on the way, blessing the eye, discerning in the fog, facing the tragic, inhabiting the light, invading the voids, diluting false dualities, manipulating form, seeing from within, and from without, us and the monuments. Far from the lethargy of the bodies, waking up with the icons in the mouth, chewing what is decisive, pushing away a bad omen. The chemical impulse of the verb. <i>Potency in every term!</i></p>
      <h2>COMEÇO DE SÉCULO     BEGINNING OF A CENTURY</h2>
      </div>
      <h2><img src="/static/symbol.png" /></h2>
      <style jsx>{`
        .root {
          color: white;
          overflow: scroll;
          font-family: arial;
        }
        .content {
          transform: scaleY(2) translateY(25%);
          padding: 1em 8em 0 ;
          padding-bottom: 300px;
        }
        h1, h2 {
          text-align: center;
          font-weight: normal;
          font-size: 29px;
        }
        p {
          text-align: justify;
          font-size: 23px
        }
        p.center {
          text-align: center;
        }
        a {
          font-size: 30px;
          margin: 30px;
          display: block;
          position: fixed;
          z-index: 1000;
        }
        img {
          width: 30vw;
          height: auto;
          margin-top: 1400px
        }
        @media (max-width: 580px) {
          .content {
            padding: 1em 2em 0 ;
            padding-bottom: 300px;
          }
          h1, h2 {
            font-size: 26px;
          }
          p {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
    )
  }
  
  export default Modal
  