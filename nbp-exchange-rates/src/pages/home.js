import useSWR from 'swr'
import fetcher from '../api/fetcher'
import MyContext from '../context'
import { useContext } from 'react'


function Home() {
    const ctx = useContext(MyContext)
  
    const { data: [data] = [], isLoading } = useSWR('http://api.nbp.pl/api/exchangerates/tables/a/', fetcher)
    if (isLoading) return <div>loading...</div>
    return (
        <>
        <h2>Aktualnie obowiązująca tabela kursów średnich walut obcych</h2>
        <h2>{ data?.no } - { data.effectiveDate}</h2>
        <table style={{ color: ctx.color, width: ctx.width }}>
            <thead>
                <tr>
                    <th scope="col"> Nazwa </th>
                    <th scope="col"> Kod </th>
                    <th scope="col"> Kurs </th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.rates.map((item, index) => {
                        return (
                            <tr key={`${item?.code}-${index}`}>
                                <td>{item?.currency}</td>
                                <td>{item?.code}</td>
                                <td>{item?.mid}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default Home