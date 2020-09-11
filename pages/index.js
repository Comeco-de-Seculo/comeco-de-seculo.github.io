import {useState} from 'react'
import Head from 'next/head'
import content from '../content'
import Close from '../components/Close'
import Modal from '../components/Modal'

function Home() {
  const [hoverItem, setHoverItem] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  
  return (
    <div className='page'>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/fonts/stylesheet.css" />
      <title>{content.title}</title>
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <meta property="og:image" content="/static/share.png" />
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
      <meta property="og:locale" content="pt_BR" />
    </Head>
    <header onClick={() => setSelectedItem(null)}>
      <img className='logo' src='/static/logo.png' />
      <div className='t1'>{content.header.text1}</div>
      <div className='t2' dangerouslySetInnerHTML={{__html: content.header.text2}} />
      <div className='t3' dangerouslySetInnerHTML={{__html: content.header.text3}} />
      <div className='t4'>{content.header.text4}</div>
      {hoverItem && <img className='thumb' src={hoverItem.thumb} />}
    </header>
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
      <iframe width="1200" height="640" src={selectedItem.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <a href="#" onClick={() => setSelectedItem(null)}><Close /></a>
    </div>}
    <Modal />
    <style jsx global>{`
      body {
        margin: 0;
        background-color: black;
        min-height: 100vh;
      }
      @media (min-width: 580px) {
        body {
          min-width: 1130px
        }
      }
      table {
        width: calc(100% - 4em);
        border-collapse: collapse;
        margin: 2em;
        box-sizing: border-box;
      }
      a {
        color: #8230FA
      }
      .page {
        display: flex;
        color: #8230FA;
        flex-direction: column;
        font-size: 16px;
        font-family: 'Spectral';
        font-weight: 300;
        white-space: pre-wrap;
      }
      @media (min-width: 580px) {
        .page {
          font-size: 13px;
        }
      }
      @media (min-width: 1280px) {
        .page {
          font-size: 14px;
        }
      }
      @media (min-width: 1480px) {
        .page {
          font-size: 16px;
        }
      }
      header {
        border-bottom: 3px solid #8230FA;
        justify-content: space-between;
        padding: 30px;
      }
      @media (min-width: 580px) {
        header {
          display: flex;
          height: 140px;
          min-height: 140px;
        }
      }
      .page .logo {
        height: 140px;
        margin-right: 30px;
        max-width: 100%;
      }
      header > div {
        transform: scaleY(2) translateY(22%);
        padding-bottom: 140px
      }
      @media (min-width: 376px) {
        header > div {
          padding-bottom: 120px
        }
      }
    }
      @media (min-width: 580px) {
          header > div {
          line-height: 1.2em;
          max-width: 340px;
          margin-right: 15px;
          padding-bottom: 0;
        }
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
      .thumb {
        position: absolute;
        left: 0;
        top: 0;
        height: 200px;
        width: auto;
      }
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        background-color: black;
      }
      .modal video {
        width: 640px;
        height: 480px
      }
      .modal a {
        position: absolute;
        top: 27px;
        right: 35px;
        font-size: 30px;
        color: #8230FA;
        text-decoration: none;
      }
      @media (max-width: 580px) {
        table {
          display: block;
        }
        tr {
          margin-bottom: 60px;
          display: block;
        }
        td {
          display: block
        }
        td:last-child {
          margin-top: 30px
        }
        .modal video {
          width: 100vw;
          height: 75vw;
        }
        iframe {
          width: 100vw !important;
          height: 60vw;
        }
      }`}</style>
      </div>
      )}
      
      export default Home
