export default function Home() {
  return (
    <main style={{ width: '80vw', margin: 'auto', border: '1px solid black' }}>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>Listagem de usuários</p>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <button>Novo cliente</button>
      </section>

      <section>
        <div
          style={{
            border: '1px solid red',
            marginBottom: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100px',
          }}
        >
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
        <div style={{ border: '1px solid red', marginBottom: '25px' }}>
          test test test test
        </div>
        <div style={{ border: '1px solid red', marginBottom: '25px' }}>
          test test test test
        </div>
      </section>
    </main>
  )
}
