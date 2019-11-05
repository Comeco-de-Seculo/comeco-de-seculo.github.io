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
          <div><img src='/static/logo.png' /></div>
          <div>{content.header.text1}</div>
          <div>{content.header.text2}</div>
          <div>{content.header.text3}</div>
          <div>{content.header.text4}</div>
        </div>
        <table>
          <tbody>
            {content.list.map(item =>
              <tr key={item.index}>
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
            font-size: 20px;
            font-family: 'Spectral';
            font-weight: 300;
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
          
        `}</style>
      </div>
  )}
  
  export default Home