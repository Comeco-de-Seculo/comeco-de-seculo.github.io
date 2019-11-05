import Head from 'next/head'
import content from '../content'

function Home() {
    return (
      <div className='page'>
        
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/fonts/stylesheet.css" />
          <title>{content.title}</title>
        </Head>
        <div>
          <img src='/static/logo.png' />
          <div className='t1'>{content.header.text1}</div>
          <div className='t2'>{content.header.text2}</div>
          <div className='t3'>{content.header.text3}</div>
          <div className='t4'>{content.header.text4}</div>
        </div>
        <table>
          <tbody>
            {content.list.map(item =>
              <tr key={item.index} className='scale-text'>
                <td>{item.index}</td>
                <td>{item.length}</td>
                <td>{item.title}</td>
              </tr>
            )}
          </tbody>
        </table>
        <style jsx global>{`
          body {
            margin: 0;
          }
          table {
            width: 100%;
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
          .page > div:first-child img {
            height: 140px;
          }
          
          .page > div:first-child {
            border-bottom: 1px solid #8230FA;
            height: 140px;
            display: flex;
            justify-content: space-between;
          }
          .page > div:first-child > img {
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
          .page > table {
          }
          .page > table tr {
            font-size: 30px;
            font-weight: 200;
            line-height: 2em;
            transform: scaleY(2);
          }
        `}</style>
      </div>
  )}
  
  export default Home