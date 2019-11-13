import {useState} from 'react'
import Head from 'next/head'
import content from '../content'

function Home() {
  const [hoverItem, setHoverItem] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  
  return (
    <div className='page'>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/fonts/stylesheet.css" />
      <title>{content.title}</title>
    </Head>
    <div>
      <img className='logo' src='/static/logo.png' />
      <div className='t1'>{content.header.text1}</div>
      <div className='t2'>{content.header.text2}</div>
      <div className='t3'>{content.header.text3}</div>
      <div className='t4'>{content.header.text4}</div>
      {hoverItem && <img className='thumb' src={hoverItem.thumb} />}
    </div>
    <table>
      <tbody>
        {content.list.map(item =>
          <tr
            key={item.index}
            className='scale-text'
            onMouseEnter={() => setHoverItem(item)}
            onMouseLeave={() => setHoverItem(null)}
            onClick={() => setSelectedItem(item)}
          >
            <td><span>{item.index}</span></td>
            <td><span>{item.length}</span></td>
            <td><span>{item.title}</span></td>
          </tr>
        )}
      </tbody>
    </table>
    {selectedItem && <div className='modal'>
      <video src={selectedItem.video} />
    </div>}
    <style jsx global>{`
      body {
        margin: 0;
      }
      table {
        width: calc(100% - 4em);
        border-collapse: collapse;
        margin: 2em;
      }
      .page {
        display: flex;
        background-color: black;
        height: 100vh;
        color: #8230FA;
        flex-direction: column;
        font-size: 16px;
        font-family: 'Spectral';
        font-weight: 300;
        white-space: pre-wrap;
      }
      .page > * {
        padding: 30px;
      }
      .page > div:first-child {
        border-bottom: 1px solid #8230FA;
        height: 140px;
        display: flex;
        justify-content: space-between;
      }
      
      .page > div:first-child {
        border-bottom: 1px solid #8230FA;
        height: 140px;
        display: flex;
        justify-content: space-between;
      }
      .page .logo {
        height: 140px;
      }
      .page > div:first-child > div {
        max-width: 340px;
        transform: scaleY(2) translateY(22%);
        line-height: 1.2em;
      }
      .page > div:first-child > div.t4 {
        transform: scaleY(2) translateY(26%);
        line-height: 1em;
        font-size: 20px;
      }
      .page > table td span {
        font-size: 30px;
        font-weight: 200;
        line-height: 1em;
        margin: .5em 0;
        transform: scaleY(2);
        cursor: pointer;
        display: block;
      }
      .page > table tr td {
        border-bottom: 2px solid transparent;
      }
      .page > table tr:hover td {
        border-bottom: 2px solid #8230FA;
      }
      .thumb {
        position: absolute;
        left: 0;
        top: 0;
        height: 200px;
        width: auto;
      }
      .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
      .modal video {
        width: 640px;
        height: 480px
      }
      `}</style>
      </div>
      )}
      
      export default Home