import useSWR from 'swr'
import fetcher from '../api/fetcher'
import MyContext from '../context'
import { useContext } from 'react'

function Gold(){
    const ctx = useContext(MyContext)
    const { data = [], isLoading } = useSWR('http://api.nbp.pl/api/cenyzlota/last/30/', fetcher)
    if (isLoading) return <div>loading...</div>
    return (
        <>
        <h2>Seria ostatnich 30 notowań cen złota</h2>
        <table style={{ color: ctx.color, width: ctx.width }}>
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Cena</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => {
                        return (
                            <tr key={`${item}-${index}`}>
                                <td>{item?.data}</td>
                                <td>{item?.cena}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        </>
    )
}

export default Gold