import './css/TableSkeleton.css'
export default function TableSkeleton({ rows = 5, columns = 3 }) {
    return (
        <table className='skeleton'>
            <thead>
                <tr>
                    {Array(columns).fill(0).map((_, columnIndex) => {
                        return <th key={columnIndex}>
                            <div className='skeleton__cell'></div>
                        </th>
                    })}
                </tr>
            </thead>
            <tbody>
                {Array(rows).fill(0).map((_, rowInd) => {
                    return <tr key={rowInd}>
                        {Array(columns).fill(0).map((_, colIndex) => {
                            return (
                                <td key={colIndex}>
                                    <div className='skeleton__cell'></div>
                                </td>
                            )

                        })}
                    </tr>
                })}

            </tbody>
        </table>
    )
}