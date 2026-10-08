import './css/Table.css'
export default function Table({ data = [], columns = [] }) {

    return (
        <table className='table'>
            <thead>
                <tr>
                    {/* لكل عمود، اعرضي النص مباشرة */}
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* لكل موظف، أنشئي صفاً */}
                {data.map((emp, empIndex) => (
                    <tr key={emp.id || empIndex}>
                        {/* لكل قيمة داخل الموظف، أنشئي خلية */}
                        {Object.values(emp).map((value, colIndex) => (
                            <td key={colIndex}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}