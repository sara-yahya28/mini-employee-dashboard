import Table from "../components/Table"
import Button from "../components/Button"
import TableSkeleton from "../components/TableSkeleton"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Test</h1>
            <TableSkeleton rows={3} columns={3} />

            <Table
                columns={['ID', 'الاسم', 'البريد']}
                data={[
                    { id: 1, name: 'سارة', email: 's@test.com' },
                    { id: 2, name: 'نورة', email: 'n@test.com' }
                ]}
            />
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                <Button variant="primary" onClick={() => alert('clicked')}>زر أساسي</Button>
                <Button variant="danger">زر حذف</Button>
            </div>
        </div>
    )
}